import App from '../../src/app';
import request from 'supertest';
import { OK, BAD_REQUEST } from 'http-status-codes';

import { connect, disconnectTest, truncate } from '../../src/database';

import { Champ } from '../../src/app/models';

import { seedChamp } from '../../src/database/seeds/01_Create_Champs';

const app = new App().getApp();

describe('Champ', () => {
  beforeEach(async () => {
    connect();
    await truncate();
  });

  afterEach((done: any) => {
    disconnectTest(done);
  });

  it('should find a /champ/current [get] route', async () => {
    await seedChamp();

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
