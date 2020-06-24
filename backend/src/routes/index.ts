import { Router } from 'express';
import ChampRouter from './ChampRouter';
import RankRouter from './RankRouter';
import MatchRouter from './MatchRouter';
import CategoryRouter from './CategoryRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/champ', ChampRouter);
router.use('/rank', RankRouter);
router.use('/match', MatchRouter);
router.use('/category', CategoryRouter);

// Export the base-router
export default router;
