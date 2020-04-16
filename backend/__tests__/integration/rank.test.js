const app = require('../../src/app');
const request = require('supertest');

const mongoTest = require('../../src/database');

// const Rank = require('../../src/app/models/Rank');
const { Rank } = require('../../src/app/models');

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
    await Rank.create([
      { team: 'SAMPDORIA', points: 30, wons: 10, goalDifference: 20 },
      { team: 'INTERNAZIONALE', points: 15, wons: 10, goalDifference: 20 },
      { team: 'FIORENTINA', points: 10, wons: 10, goalDifference: 20 },
      { team: 'MILAN', points: 20, wons: 10, goalDifference: 20 },
      { team: 'JUVENTUS', points: 5, wons: 10, goalDifference: 20 },
      { team: 'NAPOLI', points: 8, wons: 10, goalDifference: 10 },
      { team: 'SUASSUOLO', points: 8, wons: 10, goalDifference: 15 },
      { team: 'PARMA', points: 8, wons: 10, goalDifference: 20 },
      { team: 'PALERMO', points: 6, wons: 10, goalDifference: 20 },
      { team: 'ROMA', points: 4, wons: 10, goalDifference: 20 },
    ]);

    const response = await request(app).get('/rank/top');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ team: 'SAMPDORIA' }),
        expect.objectContaining({ team: 'MILAN' }),
        expect.objectContaining({ team: 'FIORENTINA' }),
        expect.objectContaining({ team: 'INTERNAZIONALE' }),
      ])
    );
    expect(response.body).toHaveLength(4);
  });
});
