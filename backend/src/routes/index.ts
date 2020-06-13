import { Router } from 'express';
import ChampRouter from './ChampRouter';
import RankRouter from './RankRouter';
import MatchRouter from './MatchRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/champ', ChampRouter);
router.use('/rank', RankRouter);
router.use('/match', MatchRouter);

// Export the base-router
export default router;
