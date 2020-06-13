import { Router } from 'express';

import { RankController } from '../app/controllers';
import { celebrate, Segments, Joi } from 'celebrate';

// Init shared
const router = Router();

/******************************************************************************
 *                      Get Rank - "GET /rank"
 ******************************************************************************/

router.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      category: Joi.string().required(),
    }),
  }),
  RankController.index
);

/******************************************************************************
 *                      Get TOP4 Teams of Rank - "GET /rank/top"
 ******************************************************************************/

router.get('/top', RankController.top);

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
