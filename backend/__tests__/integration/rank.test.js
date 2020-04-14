const app = require('../../src/app');
const request = require('supertest');

const mongoTest = require('../../src/database');

describe('Rank', () => {
  beforeAll(async (done) => {
    mongoTest.connect();
    await mongoTest.truncate();
    mongoTest.disconnect(done);
  });

  beforeEach(() => {
    mongoTest.connect();
  });

  afterEach((done) => {
    mongoTest.disconnect(done);
  });

  it('should find a /rank/top [get] route', async () => {
    const response = await request(app).get('/rank/top');

    expect(response.status).toBe(200);
  });

  it('should get the top teams of ranking', async () => {
    // Populate the rank
    // SAMP, MIL, JUV, INTER

    const response = await request(app).get('/rank/top');

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ team: 'SAMPDORIA' }),
        expect.objectContaining({ team: 'MILAN' }),
      ])
    );
  });
});
