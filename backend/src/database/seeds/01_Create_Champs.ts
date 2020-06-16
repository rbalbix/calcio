import { Champ } from '../../app/models';
import log from '../../services/logger';

async function seed() {
  try {
    log.info('Seeding Champs ...');
    await Champ.deleteMany({});

    await Champ.create([
      {
        name: 'Campeonato 2019',
        season: 2019,
      },
      {
        name: 'Campeonato 2020',
        season: 2020,
      },
    ]);
  } catch (err) {
    log.error(err);
  }
}

export { seed as seedChamp };
