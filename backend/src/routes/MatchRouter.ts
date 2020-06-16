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
 *                      Post Match - "POST /match"
 ******************************************************************************/

router.post('/', MatchController.update);

/******************************************************************************
 *                      Get Match - "GET /match/categories"
 ******************************************************************************/

router.get('/categories', MatchController.categoriesDistinct);

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
