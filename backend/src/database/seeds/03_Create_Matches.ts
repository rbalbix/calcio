import { Match, Rank } from '@models';
import log from '@services/logger';

import { seedInitialA } from './matches/A_initial_matches';
import { seedA } from './matches/A_matches';
import { seedAFinals } from './matches/A_Finals_matches';

import { seedInitialB } from './matches/B_initial_matches';
import { seedB } from './matches/B_matches';
import { seedBFinals } from './matches/B_Finals_Matches';

import { seedATestFinals } from './matches/A_matches_test_finals';

async function seed() {
  try {
    log.info('Seeding Matches ...');
    await Match.deleteMany({});
    await Rank.deleteMany({});

    /** SEED A */
    await seedInitialA();
    // await seedA();
    // await seedATestFinals();
    await seedAFinals();

    /** SEED B */
    await seedInitialB();
    // await seedB();
    await seedBFinals();
  } catch (err) {
    log.error(err);
  }
}

export { seed as seedMatch };
