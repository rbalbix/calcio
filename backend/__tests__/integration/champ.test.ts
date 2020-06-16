import App from '../../src/app';
import request from 'supertest';
import { OK, BAD_REQUEST } from 'http-status-codes';

import { connect, disconnectTest, truncate } from '../../src/database';

import { Champ, Team, Rank } from '../../src/app/models';

const app = new App().getApp();

describe('Rank', () => {
  beforeEach(async () => {
    connect();
    await truncate();
  });

  afterEach((done) => {
    disconnectTest(done);
  });

  it('should find a /champ/current [get] route', async () => {
    await Champ.create([
      {
        name: 'Campeonato 2020',
        season: 2020,
      },
    ]);

    const response = await request(app).get('/champ/current');

    expect(response.status).toBe(OK);
  });

  it('should get the current champ', async () => {
    const previousChamp = await Champ.create({
      name: 'Campeonato 2019',
      season: 2019,
    });

    const previousChampSearched = await request(app).get('/champ/current');

    const champ = await Champ.create({
      name: 'Campeonato 2020',
      season: 2020,
    });

    const currChamp = await request(app).get('/champ/current');

    expect(previousChampSearched.status).toBe(OK);
    expect(currChamp.status).toBe(OK);

    expect(String(previousChamp._id)).toEqual(previousChampSearched.body._id);
    expect(String(champ._id)).toEqual(currChamp.body._id);
  });

  it('should return a BAD_REQUEST error status for /champ/current route', async () => {
    const response = await request(app).get('/champ/current');

    expect(response.status).toBe(BAD_REQUEST);
  });
});
