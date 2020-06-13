import { Champ } from '../../app/models';

async function seed() {
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
}

export { seed as seedChamp };
