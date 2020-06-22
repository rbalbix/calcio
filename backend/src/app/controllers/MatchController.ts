import { Request, Response } from 'express';
import moment from 'moment';
import { Match, IChamp, Rank, IMatch, ITeam } from '../models';
import { getCurrentChamp } from './utils/getCurrentChamp';
import { ParamsDictionary } from './utils/Interfaces';
import { OK, BAD_REQUEST } from 'http-status-codes';
import log from '../../services/logger';

type Round = { round: ParamsDictionary | number };

export const index = async (req: Request, res: Response) => {
  try {
    const { category, limit = 5 } = req.query as ParamsDictionary;
    let { round } = req.query as Round;

    const champ = await getCurrentChamp();
    if (!champ) throw new Error('Championship does not exists.');

    if (round === 0) {
      moment.locale('pt-BR');
      let result = await Match.find({
        champ,
        category,
        day: moment(moment(Date.now()).format('YYYY-MM-DD')).utc().format(),
      });
      if (!result.length) {
        result = await Match.find({
          champ,
          category,
          week: Number(moment(Date.now()).format('ww')),
        });
      }
      round = result.length > 0 ? result[result.length - 1].round : 1;
    }

    const response = await Match.find({ champ, category, round })
      .sort('day')
      .limit(Number(limit))
      .populate({
        path: 'teamHome',
        select: 'isFake shortName longName thumbnail thumbnail_url',
      })
      .populate({
        path: 'teamAway',
        select: 'isFake shortName longName thumbnail thumbnail_url',
      });

    const max = await Match.aggregate([
      { $group: { _id: null, maxRound: { $max: '$round' } } },
      { $project: { _id: 0, maxRound: 1 } },
    ]);

    res.header('X-Total-Count', String(max[0].maxRound));

    res.header('X-round', String(round));

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Match.findById(id);

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};

export const leg = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const match = await Match.findById(id);

    const response = await Match.findOne({
      champ: match?.champ,
      category: match?.category,
      roundName: match?.roundName,
      game: match?.game,
      leg: 1,
    });

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const {
      scoreFields,
      dateFields,
      penaltyFields,
      round,
      category,
    } = req.body;

    updateScore(scoreFields).then(() => {
      updateDate(dateFields).then(() => {
        updatePenalty(penaltyFields).then(async () => {
          if (round >= 27 && round < 31) {
            await createFinalMatches(round, category);
          }
        });
      });
    });

    return res.status(OK).json({ response: 'ok' });
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};

export const categoriesDistinct = async (req: Request, res: Response) => {
  try {
    const response = await Match.find().distinct('category');
    if (response.length === 0) throw new Error('Categories do not exists.');

    console.log(response);

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};

async function updatePenalty(penaltyFields: any) {
  penaltyFields.map(async (item: ParamsDictionary) => {
    const { _id, penaltyHome, penaltyAway } = item;

    if (_id && penaltyHome !== null && penaltyAway !== null) {
      await Match.findByIdAndUpdate(_id, {
        penaltyHome: Number(penaltyHome),
        penaltyAway: Number(penaltyAway),
      });
    }
  });
  return;
}

async function updateDate(dateFields: any) {
  dateFields.map(async (item: ParamsDictionary) => {
    const { _id, day } = item;

    if (_id && day) {
      moment.locale('pt-BR');
      const formatedDay = moment(day).utc().format('YYYY-MM-DD');
      const week = Number(moment(day).utc().format('ww'));
      const weekDay = moment(day).utc().format('ddd');

      await Match.findByIdAndUpdate(_id, {
        day: formatedDay,
        week,
        weekDay,
      });
    }
  });
  return;
}

async function updateScore(scoreFields: any) {
  scoreFields.map(async (score: ParamsDictionary) => {
    const { _id, scoreHome, scoreAway } = score;
    if (_id && scoreHome !== null && scoreAway !== null) {
      const match = await Match.findById(_id);
      match!.scoreHome = Number(scoreHome);
      match!.scoreAway = Number(scoreAway);
      await match!.save();
    }
  });
  return;
}

async function createFinalMatches(round: number, category: string) {
  const champ = await getCurrentChamp();
  if (!champ) throw new Error('Championship does not exists.');

  switch (round) {
    case 30:
      await createFinal(champ, category);
      break;
    case 29:
      await createSemifinal(champ, category);
      break;
    case 27:
      await createQuarter(champ, category);
      break;
    default:
      return;
  }
}

async function createFinal(champ: IChamp, category: string) {
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

    const semiWinnerGame1: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 1)
    );

    const semiWinnerGame2: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 2)
    );

    const finals = await Match.find({
      champ,
      category,
      roundName: 'FINAL',
    });

    finals.map(async (final: IMatch) => {
      final.teamHome = semiWinnerGame1;
      final.teamAway = semiWinnerGame2;

      await final.save();
    });

    return;
  } catch (err) {
    log.error(err);
    throw new Error('Algo deu errado. Tente novamente.');
  }
}

async function createSemifinal(champ: IChamp, category: string) {
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

    const quarterWinnerGame1: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 1)
    );

    const quarterWinnerGame2: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 2)
    );

    const quarterWinnerGame3: ITeam | null = getClassifiedTeam(
      matches.filter((match) => match.game === 3)
    );

    const quarterWinnerGame4: ITeam | null = getClassifiedTeam(
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
          semifinal.teamHome = quarterWinnerGame1;
          semifinal.teamAway = quarterWinnerGame4;
          break;
        case 2:
          semifinal.teamHome = quarterWinnerGame2;
          semifinal.teamAway = quarterWinnerGame3;
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
}

async function createQuarter(champ: IChamp, category: string) {
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
}

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
