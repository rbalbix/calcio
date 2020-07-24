import { Request, Response } from 'express';
import { Rank } from '@models';
import { getCurrentChamp } from './utils/getCurrentChamp';
import { ParamsDictionary } from './utils/Interfaces';
import { OK, BAD_REQUEST } from 'http-status-codes';
import log from '@services/logger';

export const top = async (req: Request, res: Response) => {
  try {
    const { category, limit = 4 } = req.query as ParamsDictionary;
    const champ = await getCurrentChamp();
    if (!champ) throw new Error('Championship does not exists.');

    const response = await Rank.find({ champ, category })
      .select(
        'category thumbnail team points played wons drawn lost goalsFor goalsAgainst goalDifference'
      )
      .sort('-points -wons -goalDifference -goalsFor -goalsAgainst')
      .populate('team')
      .limit(Number(limit));

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const { category } = req.query as ParamsDictionary;
    const champ = await getCurrentChamp();
    if (!champ) throw new Error('Championship does not exists.');

    const response = await Rank.find({ champ, category })
      .select(
        'category thumbnail team points played wons drawn lost goalsFor goalsAgainst goalDifference'
      )
      .sort('-points -wons -goalDifference -goalsFor -goalsAgainst')
      .populate('team');

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};
