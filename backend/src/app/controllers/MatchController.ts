import { Request, Response } from 'express';
import moment from 'moment';
import { Match } from '@models';
import { FinalMatchController } from '@controllers';
import { getCurrentChamp } from './utils/getCurrentChamp';
import { ParamsDictionary } from './utils/Interfaces';
import { OK, BAD_REQUEST } from 'http-status-codes';
import log from '@services/logger';

type Round = { round: ParamsDictionary | number };

export const index = async (req: Request, res: Response) => {
  try {
    const champ = await getCurrentChamp();
    if (!champ) throw new Error('Championship does not exists.');

    const { category } = req.query as ParamsDictionary;

    const calculatedLimit =
      (
        await Match.find({ champ, category, roundName: 'REGULAR' })
          .distinct('teamHome')
          .lean()
      ).length / 2;

    const { limit = calculatedLimit } = req.query as ParamsDictionary;
    let { round } = req.query as Round;

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

    const maxRegular = await Match.aggregate([
      { $match: { roundName: 'REGULAR' } },
      { $group: { _id: null, maxRound: { $max: '$round' } } },
      { $project: { _id: 0, maxRound: 1 } },
    ]);

    const max = await Match.aggregate([
      { $group: { _id: null, maxRound: { $max: '$round' } } },
      { $project: { _id: 0, maxRound: 1 } },
    ]);

    res.header('X-Total-Regular-Count', String(maxRegular[0].maxRound));
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

export const update = async (req: Request, res: Response) => {
  try {
    const {
      scoreFields,
      dateFields,
      penaltyFields,
      round,
      category,
    } = req.body;

    const maxRegular = await Match.aggregate([
      { $match: { roundName: 'REGULAR' } },
      { $group: { _id: null, maxRound: { $max: '$round' } } },
      { $project: { _id: 0, maxRound: 1 } },
    ]);

    const max = await Match.aggregate([
      { $group: { _id: null, maxRound: { $max: '$round' } } },
      { $project: { _id: 0, maxRound: 1 } },
    ]);

    updateScore(scoreFields).then(() => {
      updateDate(dateFields).then(() => {
        updatePenalty(penaltyFields).then(async () => {
          if (round >= maxRegular[0].maxRound && round < max[0].maxRound) {
            await FinalMatchController.createFinalMatches(round, category);
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
