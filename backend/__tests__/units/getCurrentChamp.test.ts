import { connect, disconnect, truncate } from '../../src/database';
import { Champ } from '../../src/app/models';
import { getCurrentChamp } from '../../src/app/controllers/utils/getCurrentChamp';
import { config } from 'dotenv';

config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

describe('Current Champ', () => {
  beforeEach(async () => {
    connect();
    await truncate();
  });

  afterEach(() => {
    disconnect();
  });

  it('should return a current Champ', async () => {
    const previousChamp = await Champ.create({
      name: 'Campeonato 2019',
      season: 2019,
    });

    const previousChampSearched = await getCurrentChamp();

    const champ = await Champ.create({
      name: 'Campeonato 2020',
      season: 2020,
    });

    const currChamp = await getCurrentChamp();

    expect(previousChamp._id).toStrictEqual(previousChampSearched._id);
    expect(champ._id).toStrictEqual(currChamp._id);
  });
});
