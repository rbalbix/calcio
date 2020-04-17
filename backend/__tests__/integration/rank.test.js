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
      {
        category: 'A',
        team: 'SAMPDORIA',
        points: 30,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: 'INTERNAZIONALE',
        points: 15,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: 'FIORENTINA',
        points: 10,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: 'MILAN',
        points: 20,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: 'JUVENTUS',
        points: 5,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: 'NAPOLI',
        points: 8,
        wons: 10,
        goalDifference: 10,
      },
      {
        category: 'A',
        team: 'SUASSUOLO',
        points: 8,
        wons: 10,
        goalDifference: 15,
      },
      { category: 'A', team: 'PARMA', points: 8, wons: 10, goalDifference: 20 },
      {
        category: 'A',
        team: 'PALERMO',
        points: 6,
        wons: 10,
        goalDifference: 20,
      },
      { category: 'A', team: 'ROMA', points: 4, wons: 10, goalDifference: 20 },
      {
        category: 'B',
        team: 'SAMPDORIA',
        points: 30,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: 'INTERNAZIONALE',
        points: 25,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: 'FIORENTINA',
        points: 6,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: 'MILAN',
        points: 15,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: 'JUVENTUS',
        points: 5,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: 'NAPOLI',
        points: 20,
        wons: 10,
        goalDifference: 10,
      },
      {
        category: 'B',
        team: 'SUASSUOLO',
        points: 35,
        wons: 10,
        goalDifference: 15,
      },
      { category: 'B', team: 'PARMA', points: 8, wons: 10, goalDifference: 20 },
      {
        category: 'B',
        team: 'PALERMO',
        points: 6,
        wons: 10,
        goalDifference: 20,
      },
      { category: 'B', team: 'ROMA', points: 4, wons: 10, goalDifference: 20 },
    ]);

    const response = await request(app).get('/rank/top');
    expect(response.status).toBe(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        A: expect.arrayContaining([
          expect.objectContaining({
            category: 'A',
            team: 'SAMPDORIA',
            points: 30,
          }),
          expect.objectContaining({
            category: 'A',
            team: 'MILAN',
            points: 20,
          }),
          expect.objectContaining({
            category: 'A',
            team: 'INTERNAZIONALE',
            points: 15,
          }),
          expect.objectContaining({
            category: 'A',
            team: 'FIORENTINA',
            points: 10,
          }),
        ]),
        B: expect.arrayContaining([
          expect.objectContaining({
            category: 'B',
            team: 'SUASSUOLO',
            points: 35,
          }),
          expect.objectContaining({
            category: 'B',
            team: 'SAMPDORIA',
            points: 30,
          }),
          expect.objectContaining({
            category: 'B',
            team: 'INTERNAZIONALE',
            points: 25,
          }),
          expect.objectContaining({
            category: 'B',
            team: 'NAPOLI',
            points: 20,
          }),
        ]),
      })
    );
  });
});
