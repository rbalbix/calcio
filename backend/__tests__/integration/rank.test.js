const app = require('../../src/app');
const request = require('supertest');

const mongoTest = require('../../src/database');

const { Team, Rank } = require('../../src/app/models');

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
        longName: 'SUASSUOLO',
        shortName: 'SUA',
        thumbnail: 'suassuolo.png',
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
    const teams = await Team.find();

    await Rank.create([
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        points: 30,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        points: 15,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'FIORENTINA')._id,
        points: 10,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'MILAN')._id,
        points: 20,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'JUVENTUS')._id,
        points: 5,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'NAPOLI')._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 10,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'SUASSUOLO')._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 15,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'PARMA')._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'PALERMO')._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'ROMA')._id,
        points: 4,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        points: 30,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        points: 25,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'FIORENTINA')._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'MILAN')._id,
        points: 15,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'JUVENTUS')._id,
        points: 5,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'NAPOLI')._id,
        points: 20,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 10,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'SUASSUOLO')._id,
        points: 35,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 15,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'PARMA')._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'PALERMO')._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'ROMA')._id,
        points: 4,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
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
            // team: teams.find((team) => team.longName === 'SAMPDORIA'),
            points: 30,
          }),
          expect.objectContaining({
            category: 'A',
            // team: teams.find((team) => team.longName === 'MILAN'),
            points: 20,
          }),
          expect.objectContaining({
            category: 'A',
            // team: teams.find((team) => team.longName === 'INTERNAZIONALE'),
            points: 15,
          }),
          expect.objectContaining({
            category: 'A',
            // team: teams.find((team) => team.longName === 'FIORENTINA'),
            points: 10,
          }),
        ]),
        B: expect.arrayContaining([
          expect.objectContaining({
            category: 'B',
            // team: teams.find((team) => team.longName === 'SUASSUOLO'),
            points: 35,
          }),
          expect.objectContaining({
            category: 'B',
            // team: teams.find((team) => team.longName === 'SAMPDORIA'),
            points: 30,
          }),
          expect.objectContaining({
            category: 'B',
            // team: teams.find((team) => team.longName === 'INTERNAZIONALE'),
            points: 25,
          }),
          expect.objectContaining({
            category: 'B',
            // team: teams.find((team) => team.longName === 'NAPOLI'),
            points: 20,
          }),
        ]),
      })
    );
  });

  it('should find a /rank [get] route', async () => {
    const response = await request(app).get('/rank?category=A');

    expect(response.status).toBe(200);
  });

  it('should get the total ranking for a specific category', async () => {
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
        longName: 'SUASSUOLO',
        shortName: 'SUA',
        thumbnail: 'suassuolo.png',
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
    const teams = await Team.find();

    await Rank.create([
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        points: 30,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        points: 15,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'FIORENTINA')._id,
        points: 10,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'MILAN')._id,
        points: 20,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'JUVENTUS')._id,
        points: 5,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'NAPOLI')._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 10,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'SUASSUOLO')._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 15,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'PARMA')._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'PALERMO')._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'A',
        team: teams.find((team) => team.longName === 'ROMA')._id,
        points: 4,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        points: 30,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        points: 25,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'FIORENTINA')._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'MILAN')._id,
        points: 15,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'JUVENTUS')._id,
        points: 5,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'NAPOLI')._id,
        points: 20,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 10,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'SUASSUOLO')._id,
        points: 35,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 15,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'PARMA')._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'PALERMO')._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
      {
        category: 'B',
        team: teams.find((team) => team.longName === 'ROMA')._id,
        points: 4,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
      },
    ]);

    const response = await request(app).get('/rank?category=A');

    expect(response.status).toBe(200);

    expect(response.body).toHaveLength(10);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          category: 'A',
          // team: 'SAMPDORIA',
          points: 30,
          played: 5,
          wons: 10,
          drawn: 1,
          lost: 0,
          goalDifference: 20,
        }),
        // expect.objectContaining({
        //   category: 'A',
        //   // team: 'INTERNAZIONALE',
        //   points: 15,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
        // expect.objectContaining({
        //   category: 'A',
        //   // team: 'FIORENTINA',
        //   points: 10,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
        // expect.objectContaining({
        //   category: 'A',
        //   thumbnail: 'milan.png',
        //   team: 'MILAN',
        //   points: 20,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
        // expect.objectContaining({
        //   category: 'A',
        //   thumbnail: 'juventus.png',
        //   team: 'JUVENTUS',
        //   points: 5,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
        // expect.objectContaining({
        //   category: 'A',
        //   // team: 'NAPOLI',
        //   points: 8,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 10,
        // }),
        // expect.objectContaining({
        //   category: 'A',
        //   // team: 'SUASSUOLO',
        //   points: 8,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 15,
        // }),
        // expect.objectContaining({
        //   category: 'A',
        //   // team: 'PARMA',
        //   points: 8,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
        // expect.objectContaining({
        //   category: 'A',
        //   // team: 'PALERMO',
        //   points: 6,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
        // expect.objectContaining({
        //   category: 'A',
        //   // team: 'ROMA',
        //   points: 4,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
      ])
    );
  });
});
