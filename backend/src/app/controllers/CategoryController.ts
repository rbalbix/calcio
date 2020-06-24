import { Request, Response } from 'express';
import { Match } from "@models";
import { OK, BAD_REQUEST } from "http-status-codes";
import log from '@services/logger';

export const distinct = async (req: Request, res: Response) => {
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
