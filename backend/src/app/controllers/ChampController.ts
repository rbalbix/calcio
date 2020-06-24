import { Request, Response } from 'express';
import { getCurrentChamp } from './utils/getCurrentChamp';
import { OK, BAD_REQUEST } from 'http-status-codes';
import log from '@services/logger';

export const currentChamp = async (req: Request, res: Response) => {
  try {
    const response = await getCurrentChamp();
    if (!response) throw new Error('Championship does not exists.');

    return res.status(OK).json(response);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};
