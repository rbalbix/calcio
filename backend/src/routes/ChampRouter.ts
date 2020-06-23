import { Router } from 'express';

import { ChampController } from '@controllers';

// Init shared
const router = Router();

/******************************************************************************
 *                      Get Current Championship - "GET /champ/current"
 ******************************************************************************/

router.get('/current', ChampController.currentChamp);

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
