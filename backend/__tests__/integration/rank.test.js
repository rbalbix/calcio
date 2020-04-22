const app = require('../../src/app');
const request = require('supertest');

const mongoTest = require('../../src/database');

const { Rank } = require('../../src/app/models');

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

  it('should find a /rank/top [get] route', async () => {
    const response = await request(app).get('/rank/top');

    expect(response.status).toBe(200);
  });

  it('should get the top teams of ranking', async () => {
    await Rank.create([
      {
        category: 'A',
        thumbnail: 'sampdoria.png',
        team: 'SAMPDORIA',
        points: 30,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'inter-de-milao.png',
        team: 'INTERNAZIONALE',
        points: 15,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'fiorentina.png',
        team: 'FIORENTINA',
        points: 10,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'milan.png',
        team: 'MILAN',
        points: 20,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'juventus.png',
        team: 'JUVENTUS',
        points: 5,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'napoli.png',
        team: 'NAPOLI',
        points: 8,
        wons: 10,
        goalDifference: 10,
      },
      {
        category: 'A',
        thumbnail: 'suassuolo.png',
        team: 'SUASSUOLO',
        points: 8,
        wons: 10,
        goalDifference: 15,
      },
      {
        category: 'A',
        thumbnail: 'parma.png',
        team: 'PARMA',
        points: 8,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'palermo.png',
        team: 'PALERMO',
        points: 6,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'roma.png',
        team: 'ROMA',
        points: 4,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'sampdoria.png',
        team: 'SAMPDORIA',
        points: 30,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'inter-de-milao.png',
        team: 'INTERNAZIONALE',
        points: 25,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'fiorentina.png',
        team: 'FIORENTINA',
        points: 6,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'milan.png',
        team: 'MILAN',
        points: 15,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: '',
        team: 'JUVENTUS',
        points: 5,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'napoli.png',
        team: 'NAPOLI',
        points: 20,
        wons: 10,
        goalDifference: 10,
      },
      {
        category: 'B',
        thumbnail: 'suassuolo.png',
        team: 'SUASSUOLO',
        points: 35,
        wons: 10,
        goalDifference: 15,
      },
      {
        category: 'B',
        thumbnail: 'parma.png',
        team: 'PARMA',
        points: 8,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'palermo.png',
        team: 'PALERMO',
        points: 6,
        wons: 10,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'roma.png',
        team: 'ROMA',
        points: 4,
        wons: 10,
        goalDifference: 20,
      },
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

  it('should find a /rank [get] route', async () => {
    const response = await request(app).get('/rank');

    expect(response.status).toBe(200);
  });

  it('should get the total ranking for a specific category', async () => {
    await Rank.create([
      {
        category: 'A',
        thumbnail: 'sampdoria.png',
        team: 'SAMPDORIA',
        points: 30,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'inter-de-milao.png',
        team: 'INTERNAZIONALE',
        points: 15,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'fiorentina.png',
        team: 'FIORENTINA',
        points: 10,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'milan.png',
        team: 'MILAN',
        points: 20,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'juventus.png',
        team: 'JUVENTUS',
        points: 5,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'napoli.png',
        team: 'NAPOLI',
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 10,
      },
      {
        category: 'A',
        thumbnail: 'suassuolo.png',
        team: 'SUASSUOLO',
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 15,
      },
      {
        category: 'A',
        thumbnail: 'parma.png',
        team: 'PARMA',
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'palermo.png',
        team: 'PALERMO',
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        thumbnail: 'roma.png',
        team: 'ROMA',
        points: 4,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'sampdoria.png',
        team: 'SAMPDORIA',
        points: 30,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'inter-de-milao.png',
        team: 'INTERNAZIONALE',
        points: 25,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'fiorentina.png',
        team: 'FIORENTINA',
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'milan.png',
        team: 'MILAN',
        points: 15,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: '',
        team: 'JUVENTUS',
        points: 5,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'napoli.png',
        team: 'NAPOLI',
        points: 20,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 10,
      },
      {
        category: 'B',
        thumbnail: 'suassuolo.png',
        team: 'SUASSUOLO',
        points: 35,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 15,
      },
      {
        category: 'B',
        thumbnail: 'parma.png',
        team: 'PARMA',
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'palermo.png',
        team: 'PALERMO',
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        thumbnail: 'roma.png',
        team: 'ROMA',
        points: 4,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
    ]);

    const response = await request(app).get('/rank');

    expect(response.status).toBe(200);

    expect(response.body).toHaveLength(10);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          category: 'A',
          thumbnail: 'sampdoria.png',
          team: 'SAMPDORIA',
          points: 30,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 20,
        }),
        expect.objectContaining({
          category: 'A',
          thumbnail: 'inter-de-milao.png',
          team: 'INTERNAZIONALE',
          points: 15,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 20,
        }),
        expect.objectContaining({
          category: 'A',
          thumbnail: 'fiorentina.png',
          team: 'FIORENTINA',
          points: 10,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 20,
        }),
        expect.objectContaining({
          category: 'A',
          thumbnail: 'milan.png',
          team: 'MILAN',
          points: 20,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 20,
        }),
        expect.objectContaining({
          category: 'A',
          thumbnail: 'juventus.png',
          team: 'JUVENTUS',
          points: 5,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 20,
        }),
        expect.objectContaining({
          category: 'A',
          thumbnail: 'napoli.png',
          team: 'NAPOLI',
          points: 8,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 10,
        }),
        expect.objectContaining({
          category: 'A',
          thumbnail: 'suassuolo.png',
          team: 'SUASSUOLO',
          points: 8,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 15,
        }),
        expect.objectContaining({
          category: 'A',
          thumbnail: 'parma.png',
          team: 'PARMA',
          points: 8,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 20,
        }),
        expect.objectContaining({
          category: 'A',
          thumbnail: 'palermo.png',
          team: 'PALERMO',
          points: 6,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 20,
        }),
        expect.objectContaining({
          category: 'A',
          thumbnail: 'roma.png',
          team: 'ROMA',
          points: 4,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 20,
        }),
      ])
    );
  });
});
