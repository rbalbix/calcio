import { Request, Response } from 'express';
import { Rank, IRank } from '../models';
import { getCurrentChamp } from './utils/getCurrentChamp';
import { ParamsDictionary } from './utils/Interfaces';
import { OK, BAD_REQUEST } from 'http-status-codes';
import log from '../../services/logger';

function rank(a: IRank, b: IRank) {
  if (a.points > b.points) return -1;
  if (a.points < b.points) return 1;
  if (a.points === b.points) {
    if (a.wons > b.wons) return -1;
    if (a.wons < b.wons) return 1;
    if (a.wons === b.wons) {
      if (a.goalDifference > b.goalDifference) return -1;
      if (a.goalDifference < b.goalDifference) return 1;
      if (a.goalDifference === b.goalDifference) {
        if (a.goalsFor > b.goalsFor) return -1;
        if (a.goalsFor < b.goalsFor) return 1;
        if (a.goalsFor === b.goalsFor) {
          if (a.goalsAgainst > b.goalsAgainst) return -1;
          if (a.goalsAgainst < b.goalsAgainst) return 1;
        }
      }
    }
  }
  return 0;
}

export const top = async (req: Request, res: Response) => {
  try {
    const top = 4;

    const champ = await getCurrentChamp();
    if (!champ) throw new Error('Championship does not exists.');

    const ranks = await Rank.find({ champ })
      .select(
        'category thumbnail team points wons drawn lost goalsFor goalsAgainst goalDifference'
      )
      .populate({
        path: 'team',
        select: 'shortName longName thumbnail thumbnail_url',
      });

    const response = {
      A: ranks
        .filter((rank) => rank.category === 'A')
        .sort((a, b) => rank(a, b))
        .slice(0, top),

      B: ranks
        .filter((rank) => rank.category === 'B')
        .sort((a, b) => rank(a, b))
        .slice(0, top),
    };

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
      .sort('-points -wons -goalDifference ')
      .populate('team');

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};
