import { connect, disconnect } from '@database';
import { config } from 'dotenv';
import log from '@services/logger';
import { seedChamp } from './01_Create_Champs';
import { seedTeam } from './02_Create_Teams';
import { seedMatch } from './03_Create_Matches';
import { seedRank } from './04_Create_Rank';

config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

async function seed() {
  try {
    log.info('Connecting ...');
    connect();

    await seedChamp();
    await seedTeam();
    await seedMatch();
    await seedRank();

    log.info('Disconnecting ...');
    disconnect();
    log.info('Done.');
  } catch (err) {
    log.error(err);
  }
}

seed();
