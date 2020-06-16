import { Request, Response } from 'express';
import moment from 'moment';
import { Match } from '../models';
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
        select: 'shortName longName thumbnail thumbnail_url',
      })
      .populate({
        path: 'teamAway',
        select: 'shortName longName thumbnail thumbnail_url',
      });

    res.header(
      'X-Total-Count',
      String((await Match.countDocuments({ champ, category })) / Number(limit))
    );
    res.header('X-round', String(round));

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { scoreFields, dateFields } = req.body;

    scoreFields.map(async (score: ParamsDictionary) => {
      const { _id, scoreHome, scoreAway } = score;
      if (_id && scoreHome !== null && scoreAway !== null) {
        const match = await Match.findById(_id);
        match!.scoreHome = Number(scoreHome);
        match!.scoreAway = Number(scoreAway);
        await match!.save();
      }
    });

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

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};
