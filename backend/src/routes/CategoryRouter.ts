import { Router } from 'express';
import { CategoryController } from '@controllers'

const router = Router();

/******************************************************************************
 *          Get Distincted Categories - "GET /match/categories"
 ******************************************************************************/

router.get('/distinct', CategoryController.distinct);


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
