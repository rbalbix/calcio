import { Team } from '@models';
import log from '@services/logger';

async function seed() {
  try {
    log.info('Seeding Teams ...');
    await Team.deleteMany({});

    await Team.insertMany([
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
      /**
       * FAKE TEAMS
       */
      /**
       * FOR QUARTAS
       */
      {
        isFake: true,
        longName: '1º',
        shortName: '1º',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: '2º',
        shortName: '2º',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: '3º',
        shortName: '3º',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: '4º',
        shortName: '4º',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: '5º',
        shortName: '5º',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: '6º',
        shortName: '6º',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: '7º',
        shortName: '7º',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: '8º',
        shortName: '8º',
        thumbnail: 'fake-shield.png',
      },
      /**
       * FOR SEMIFINAL
       */
      {
        isFake: true,
        longName: 'Venc. Quartas 1',
        shortName: 'QF1',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: 'Venc. Quartas 2',
        shortName: 'QF2',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: 'Venc. Quartas 3',
        shortName: 'QF3',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: 'Venc. Quartas 4',
        shortName: 'QF4',
        thumbnail: 'fake-shield.png',
      },
      /**
       * FOR FINAL
       */
      {
        isFake: true,
        longName: 'Semifinal 1',
        shortName: 'SF1',
        thumbnail: 'fake-shield.png',
      },
      {
        isFake: true,
        longName: 'Semifinal 2',
        shortName: 'SF2',
        thumbnail: 'fake-shield.png',
      },
    ]);
  } catch (err) {
    throw new Error(err);
  }
}

export { seed as seedTeam };
