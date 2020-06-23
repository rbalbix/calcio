import { connect, disconnect } from '@database';
import { config } from 'dotenv';
import log from '@services/logger';
import { seedChamp } from './01_Create_Champs';
import { seedTeam } from './02_Create_Teams';
import { seedMatch } from './03_Create_Matches';

config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

async function seed() {
  log.info('Connecting ...');
  connect();

  await seedChamp();
  await seedTeam();
  await seedMatch();

  log.info('Disconnecting ...');
  disconnect();
  log.info('Done.');
}

seed();
