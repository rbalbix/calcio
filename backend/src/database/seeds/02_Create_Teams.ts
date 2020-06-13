import { Team } from '../../app/models';

async function seed() {
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
}

export { seed as seedTeam };
