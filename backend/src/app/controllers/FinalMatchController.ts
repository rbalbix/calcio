import { Request, Response } from 'express';
import { Match, IChamp, Rank, IMatch, ITeam } from '@models';
import { getCurrentChamp } from './utils/getCurrentChamp';
import { OK, BAD_REQUEST } from 'http-status-codes';
import log from '@services/logger';

export const leg = async (req: Request, res: Response) => {
  try {
    const { leg, id } = req.params;

    const match = await Match.findById(id);

    const response = await Match.findOne({
      champ: match?.champ,
      category: match?.category,
      roundName: match?.roundName,
      game: match?.game,
      leg: Number(leg),
    });

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};

export const createFinalMatches = async (
  round: number,
  maxRegular: number,
  category: string
) => {
  const champ = await getCurrentChamp();
  if (!champ) throw new Error('Championship does not exists.');

  switch (round) {
    case maxRegular + 3:
      await createFinal(champ, category);
      break;
    case maxRegular + 2:
      await createSemifinal(champ, category);
      break;
    default:
      await createQuarter(champ, category);
      return;
  }
  return;
};

export const createQuarter = async (champ: IChamp, category: string) => {
  try {
    const matches = await Match.find({
      champ,
      category,
      roundName: 'REGULAR',
    });

    if (
      matches.some((item) => item.scoreHome == null || item.scoreAway == null)
    ) {
      return;
    }

    const rank = await Rank.find({ champ, category })
      .sort('-points -wons -goalDifference -goalsFor -goalsAgainst')
      .populate('team')
      .limit(8);

    const quarters = await Match.find({
      champ,
      category,
      roundName: 'QUARTAS',
    });
    quarters.map(async (quarter: IMatch) => {
      switch (quarter.game) {
        case 1:
          quarter.teamHome = rank[3].team;
          quarter.teamAway = rank[4].team;
          break;
        case 2:
          quarter.teamHome = rank[2].team;
          quarter.teamAway = rank[5].team;
          break;
        case 3:
          quarter.teamHome = rank[1].team;
          quarter.teamAway = rank[6].team;
          break;
        case 4:
          quarter.teamHome = rank[0].team;
          quarter.teamAway = rank[7].team;
          break;

        default:
          break;
      }
      await quarter.save();
    });

    return;
  } catch (err) {
    log.error(err);
    throw new Error('Algo deu errado. Tente novamente.');
  }
};

export const createSemifinal = async (champ: IChamp, category: string) => {
  try {
    const matches = await Match.find({
      champ,
      category,
      roundName: 'QUARTAS',
    });

    if (
      matches.some((item) => item.scoreHome == null || item.scoreAway == null)
    ) {
      return;
    }

    const winnerGame1: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 1)
    );

    const winnerGame2: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 2)
    );

    const winnerGame3: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 3)
    );

    const winnerGame4: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 4)
    );

    const semifinals = await Match.find({
      champ,
      category,
      roundName: 'SEMIFINAL',
    });

    semifinals.map(async (semifinal: IMatch) => {
      switch (semifinal.game) {
        case 1:
          semifinal.teamHome = winnerGame1;
          semifinal.teamAway = winnerGame4;
          break;
        case 2:
          semifinal.teamHome = winnerGame2;
          semifinal.teamAway = winnerGame3;
          break;

        default:
          break;
      }
      await semifinal.save();
    });

    return;
  } catch (err) {
    log.error(err);
    throw new Error('Algo deu errado. Tente novamente.');
  }
};

export const createFinal = async (champ: IChamp, category: string) => {
  try {
    const matches = await Match.find({
      champ,
      category,
      roundName: 'SEMIFINAL',
    });

    if (
      matches.some((item) => item.scoreHome == null || item.scoreAway == null)
    ) {
      return;
    }

    const winnerGame1: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 1)
    );

    const winnerGame2: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 2)
    );

    const finals = await Match.find({
      champ,
      category,
      roundName: 'FINAL',
    });

    finals.map(async (final: IMatch) => {
      final.teamHome = winnerGame1;
      final.teamAway = winnerGame2;

      await final.save();
    });

    return;
  } catch (err) {
    log.error(err);
    throw new Error('Algo deu errado. Tente novamente.');
  }
};

function getClassifiedTeam(game: IMatch[]): ITeam | null {
  let firstLeg, secondLeg;
  let classifiedTeam: ITeam | null = null;

  if (game[0].round === game[1].round) {
    if (game[0].week < game[1].week) {
      firstLeg = game[0];
      secondLeg = game[1];
    } else {
      firstLeg = game[1];
      secondLeg = game[0];
    }
  } else if (game[0].round < game[1].round) {
    firstLeg = game[0];
    secondLeg = game[1];
  } else {
    firstLeg = game[1];
    secondLeg = game[0];
  }

  if (
    firstLeg.scoreHome !== null &&
    secondLeg.scoreHome !== null &&
    firstLeg.scoreAway !== null &&
    secondLeg.scoreAway !== null
  ) {
    const accScoreHome = firstLeg.scoreHome + secondLeg.scoreHome;
    const accScoreAway = firstLeg.scoreAway + secondLeg.scoreAway;

    if (accScoreHome === accScoreAway) {
      if (secondLeg.penaltyHome && secondLeg.penaltyAway) {
        secondLeg.penaltyHome > secondLeg.penaltyAway
          ? (classifiedTeam = secondLeg.teamHome)
          : (classifiedTeam = secondLeg.teamAway);
      }
    } else {
      if (accScoreHome > accScoreAway) {
        classifiedTeam = firstLeg.teamHome;
      } else {
        classifiedTeam = firstLeg.teamAway;
      }
    }
  } else {
    throw new Error('Erro ao classificar um time. Tente outra vez.');
  }
  return classifiedTeam;
}
