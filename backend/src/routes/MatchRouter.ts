import { Router } from 'express';

import { MatchController } from '../app/controllers';
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
 *                      Get Match - "GET /match/categories"
 ******************************************************************************/

router.get('/categories', MatchController.categoriesDistinct);

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
 *                      Get 1ST Leg Match - "GET /match/leg/:id"
 ******************************************************************************/

router.get(
  '/leg/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  MatchController.leg
);

/******************************************************************************
 *                      Post Match - "POST /match"
 ******************************************************************************/

router.post('/', MatchController.update);

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
