import { Match, Rank } from '../../app/models';
import log from '../../services/logger';
import { seedA } from './matches/A_matches';
import { seedAFinals } from './matches/A_Finals_matches';
import { seedB } from './matches/B_matches';

async function seed() {
  try {
    log.info('Seeding Matches ...');
    await Match.deleteMany({});
    await Rank.deleteMany({});

    await seedA();
    await seedAFinals();
    // await seedB();
  } catch (err) {
    log.error(err);
  }
}

export { seed as seedMatch };
