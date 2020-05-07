const app = require('../../src/app');
const request = require('supertest');

const mongoTest = require('../../src/database');

const { Champ, Team, Match } = require('../../src/app/models');

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

  it('should find a /match [get] route', async () => {
    await Champ.create([
      {
        name: 'Campeonato 2020',
        season: 2020,
      },
    ]);

    const response = await request(app).get('/match?category=A&round=1');

    expect(response.status).toBe(200);
  });

  it('should get the matches by category and round', async () => {
    await Champ.create([
      {
        name: 'Campeonato 2020',
        season: 2020,
      },
    ]);

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

    await Match.deleteMany({});

    const teams = await Team.find();
    const champs = await Champ.find();

    await Match.create([
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        scoreHome: 1,
        teamAway: teams.find((team) => team.longName === 'NAPOLI')._id,
        scoreAway: 3,
        day: '2020-02-10',
        week: 7,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'JUVENTUS')._id,
        scoreHome: 1,
        teamAway: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        scoreAway: 2,
        day: '2020-02-11',
        week: 7,
        weekDay: 'TER',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'SUASSUOLO')._id,
        scoreHome: 0,
        teamAway: teams.find((team) => team.longName === 'PARMA')._id,
        scoreAway: 2,
        day: '2020-02-12',
        week: 7,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'ROMA')._id,
        scoreHome: 1,
        teamAway: teams.find((team) => team.longName === 'PALERMO')._id,
        scoreAway: 1,
        day: '2020-02-13',
        week: 7,
        weekDay: 'QUI',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'MILAN')._id,
        scoreHome: 5,
        teamAway: teams.find((team) => team.longName === 'FIORENTINA')._id,
        scoreAway: 1,
        day: '2020-02-17',
        week: 8,
        weekDay: 'SEG',
      },

      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 2,
        teamHome: teams.find((team) => team.longName === 'JUVENTUS')._id,
        scoreHome: 1,
        teamAway: teams.find((team) => team.longName === 'PARMA')._id,
        scoreAway: 4,
        day: '2020-02-18',
        week: 8,
        weekDay: 'TER',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 2,
        teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        scoreHome: 2,
        teamAway: teams.find((team) => team.longName === 'ROMA')._id,
        scoreAway: 4,
        day: '2020-02-19',
        week: 8,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 2,
        teamHome: teams.find((team) => team.longName === 'NAPOLI')._id,
        scoreHome: 3,
        teamAway: teams.find((team) => team.longName === 'SUASSUOLO')._id,
        scoreAway: 3,
        day: '2020-02-20',
        week: 8,
        weekDay: 'QUI',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 2,
        teamHome: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        scoreHome: '',
        teamAway: teams.find((team) => team.longName === 'MILAN')._id,
        scoreAway: '',
        day: '2020-03-02',
        week: 10,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 2,
        teamHome: teams.find((team) => team.longName === 'PALERMO')._id,
        scoreHome: 4,
        teamAway: teams.find((team) => team.longName === 'FIORENTINA')._id,
        scoreAway: 4,
        day: '2020-03-03',
        week: 10,
        weekDay: 'TER',
      },
    ]);

    const response = await request(app).get('/match?category=A&round=1');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(5);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          // champ: champs.find((champ) => champ.season === 2020)._id,
          category: 'A',
          // teamAway: { longName: 'NAPOLI' },
        }),
      ])
    );
  });

  it('should get the matches of the current week or round', async () => {
    await Champ.create([
      {
        name: 'Campeonato 2020',
        season: 2020,
      },
    ]);

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

    await Match.deleteMany({});

    const teams = await Team.find();
    const champs = await Champ.find();

    await Match.create([
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        scoreHome: 1,
        teamAway: teams.find((team) => team.longName === 'NAPOLI')._id,
        scoreAway: 3,
        day: '2020-02-10',
        week: 7,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'JUVENTUS')._id,
        scoreHome: 1,
        teamAway: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        scoreAway: 2,
        day: '2020-02-11',
        week: 7,
        weekDay: 'TER',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'SUASSUOLO')._id,
        scoreHome: 0,
        teamAway: teams.find((team) => team.longName === 'PARMA')._id,
        scoreAway: 2,
        day: '2020-02-12',
        week: 7,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'ROMA')._id,
        scoreHome: 1,
        teamAway: teams.find((team) => team.longName === 'PALERMO')._id,
        scoreAway: 1,
        day: '2020-02-13',
        week: 7,
        weekDay: 'QUI',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'MILAN')._id,
        scoreHome: 5,
        teamAway: teams.find((team) => team.longName === 'FIORENTINA')._id,
        scoreAway: 1,
        day: '2020-02-17',
        week: 8,
        weekDay: 'SEG',
      },

      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 2,
        teamHome: teams.find((team) => team.longName === 'JUVENTUS')._id,
        scoreHome: 1,
        teamAway: teams.find((team) => team.longName === 'PARMA')._id,
        scoreAway: 4,
        day: '2020-02-18',
        week: 8,
        weekDay: 'TER',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 2,
        teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        scoreHome: 2,
        teamAway: teams.find((team) => team.longName === 'ROMA')._id,
        scoreAway: 4,
        day: '2020-02-19',
        week: 8,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 2,
        teamHome: teams.find((team) => team.longName === 'NAPOLI')._id,
        scoreHome: 3,
        teamAway: teams.find((team) => team.longName === 'SUASSUOLO')._id,
        scoreAway: 3,
        day: '2020-02-20',
        week: 8,
        weekDay: 'QUI',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 2,
        teamHome: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        scoreHome: '',
        teamAway: teams.find((team) => team.longName === 'MILAN')._id,
        scoreAway: '',
        day: '2020-03-02',
        week: 10,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 2,
        teamHome: teams.find((team) => team.longName === 'PALERMO')._id,
        scoreHome: 4,
        teamAway: teams.find((team) => team.longName === 'FIORENTINA')._id,
        scoreAway: 4,
        day: '2020-03-03',
        week: 10,
        weekDay: 'TER',
      },
    ]);

    const response = await request(app).get('/match?category=A&round=0');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(5);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          // champ: champs.find((champ) => champ.season === 2020)._id,
          category: 'A',
          // teamAway: { longName: 'NAPOLI' },
        }),
      ])
    );
  });

  it('should return a 503 error status to /match route', async () => {
    const response = await request(app).get('/match?category=A&round=1');

    expect(response.status).toBe(503);
  });

  it('should update the ranking', async () => {
    await Champ.create({
      name: 'Campeonato 2020',
      season: 2020,
    });

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
    ]);

    const champs = await Champ.find();
    const teams = await Team.find();

    await Match.create([
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        scoreHome: 1,
        teamAway: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        scoreAway: 3,
        day: '2020-02-10 21:00:00',
        week: 7,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        scoreHome: 2,
        teamAway: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        scoreAway: 1,
        day: '2020-02-11 21:00:00',
        week: 7,
        weekDay: 'TER',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)._id,
        category: 'A',
        round: 1,
        teamHome: teams.find((team) => team.longName === 'SAMPDORIA')._id,
        scoreHome: 0,
        teamAway: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
        scoreAway: 0,
        day: '2020-02-12 21:00:00',
        week: 7,
        weekDay: 'QUA',
      },
    ]);

    const response = await request(app).get('/rank?category=A');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          category: 'A',
          // team: 'SAMPDORIA',
          // points: 4,
          // played: 3,
          // wons: 1,
          // drawn: 1,
          // lost: 1,
          // goalDifference: 1,
        }),
        expect.objectContaining({
          category: 'A',
          // team: 'INTERNAZIONALE',
          // points: 4,
          // played: 2,
          // wons: 1,
          // drawn: 1,
          // lost: 1,
          // goalDifference: -1,
        }),
      ])
    );
  });
});
