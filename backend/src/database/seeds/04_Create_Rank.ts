import log from '@services/logger';
import { seedRankIfNeeded } from './rank/Initial_Rank';

async function seed() {
  try {
    log.info('Seeding Rank if needed ...');
    await seedRankIfNeeded();
  } catch (err) {
    log.error(err);
  }
}

export { seed as seedRank };
