const mongoTest = require('../../src/database');

const { Champ } = require('../../src/app/models');
const getCurrentChampId = require('../../src/utils/getCurrentChampId');

describe('Rank', () => {
  beforeAll(async (done) => {
    mongoTest.connect();
    await mongoTest.truncate();
    mongoTest.disconnect(done);
  });

  beforeEach(async () => {
    mongoTest.connect();
    await mongoTest.truncate();
  });

  afterEach((done) => {
    mongoTest.disconnect(done);
  });

  it('should return a _id of a Champ', async () => {
    const champ = await Champ.create({
      name: 'Campeonato 2020',
      season: 2020,
    });

    const champId = await getCurrentChampId();

    await mongoTest.truncate();

    const champPlusOne = await Champ.create({
      name: 'Campeonato 2019',
      season: 2019,
    });

    const champPlusOneId = await getCurrentChampId();

    expect(champ._id).toStrictEqual(champId);
    expect(champPlusOne._id).toStrictEqual(champPlusOneId);
  });
});
