import { Router } from 'express';
import { CategoryController } from '@controllers'

const router = Router();

/******************************************************************************
 *          Get Distincted Categories - "GET /category/distinct"
 ******************************************************************************/

router.get('/distinct', CategoryController.distinct);


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
