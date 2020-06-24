import { Router } from 'express';

import { MatchController, FinalMatchController } from '@controllers';
import { celebrate, Segments, Joi } from 'celebrate';

// Init shared
const router = Router();

/******************************************************************************
 *                      Get Matches - "GET /match"
 ******************************************************************************/

router.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      category: Joi.string().required(),
      round: Joi.number().required(),
    }),
  }),
  MatchController.index
);

/******************************************************************************
 *                      Get Specific Match - "GET /match/:id"
 ******************************************************************************/

router.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  MatchController.show
);

/******************************************************************************
 *               Get a Leg Final Match - "GET /match/leg/:leg/:id"
 ******************************************************************************/

router.get(
  '/leg/:leg/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      leg: Joi.number().required(),
      id: Joi.string().required(),
    }),
  }),
  FinalMatchController.leg
);

/******************************************************************************
 *                      Post Match - "POST /match"
 ******************************************************************************/

router.post('/', MatchController.update);

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
