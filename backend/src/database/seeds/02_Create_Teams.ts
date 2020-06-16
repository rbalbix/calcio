import { Team } from '../../app/models';
import log from '../../services/logger';

async function seed() {
  try {
    log.info('Seeding Teams ...');
    await Team.deleteMany({});

    await Team.create([
      {
        longName: 'SAMPDORIA',
        shortName: 'SAM',
        thumbnail: 'sampdoria.png',
      },
      {
        longName: 'INTERNAZIONALE',
        shortName: 'INT',
        thumbnail: 'inter-de-milao.png',
      },
      {
        longName: 'FIORENTINA',
        shortName: 'FIO',
        thumbnail: 'fiorentina.png',
      },
      {
        longName: 'MILAN',
        shortName: 'MIL',
        thumbnail: 'milan.png',
      },
      {
        longName: 'JUVENTUS',
        shortName: 'JUV',
        thumbnail: 'juventus.png',
      },
      {
        longName: 'NAPOLI',
        shortName: 'NAP',
        thumbnail: 'napoli.png',
      },
      {
        longName: 'SASSUOLO',
        shortName: 'SAS',
        thumbnail: 'sassuolo.png',
      },
      {
        longName: 'PARMA',
        shortName: 'PAR',
        thumbnail: 'parma.png',
      },
      {
        longName: 'PALERMO',
        shortName: 'PAL',
        thumbnail: 'palermo.png',
      },
      {
        longName: 'ROMA',
        shortName: 'ROM',
        thumbnail: 'roma.png',
      },
    ]);
  } catch (err) {
    log.error(err);
  }
}

export { seed as seedTeam };
