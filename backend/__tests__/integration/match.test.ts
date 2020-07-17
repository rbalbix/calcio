import App from '../../src/app';
import request from 'supertest';
import { OK, BAD_REQUEST } from 'http-status-codes';

import { connect, disconnectTest, truncate } from '../../src/database';

import { Champ, Team, Match, IMatch } from '../../src/app/models';

import { seedChamp } from '../../src/database/seeds/01_Create_Champs';
import { seedTeam } from '../../src/database/seeds/02_Create_Teams';
import { seedA } from '../../src/database/seeds/matches/A_matches';

import http from 'http';
import { setupWebSocket } from '../../src/services/websocket';

const app = new App().getApp();
const server = http.createServer(app);

describe('Match', () => {
  beforeAll(() => {
    setupWebSocket(server);
  });

  beforeEach(async () => {
    connect();
    await truncate();
  });

  afterEach((done: any) => {
    disconnectTest(done);
  });

  it('should find a /match [get] route', async () => {
    await seedChamp();
    await seedTeam();
    await seedA();

    const response = await request(app).get('/match?category=A&round=1');

    expect(response.status).toBe(OK);
  });

  it('should get the matches by category and round', async () => {
    await seedChamp();
    await seedTeam();
    await seedA();

    const response = await request(app).get('/match?category=A&round=1');

    expect(response.status).toBe(OK);
    // expect(response.body).toHaveLength(5);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          // champ: champs.find((champ) => champ.season === 2020)!._id,
          category: 'A',
          // teamAway: { longName: 'NAPOLI' },
        }),
      ])
    );
  });

  it('should get the matches of the current week or round', async () => {
    await seedChamp();
    await seedTeam();
    await seedA();

    const response = await request(app).get('/match?category=A&round=0');

    expect(response.status).toBe(OK);
    // expect(response.body).toHaveLength(5);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          // champ: champs.find((champ) => champ.season === 2020)!._id,
          category: 'A',
          // teamAway: { longName: 'NAPOLI' },
        }),
      ])
    );
  });

  it('should return a BAD_REQUEST error status to /match route', async () => {
    const response = await request(app).get('/match?category=A&round=1');

    expect(response.status).toBe(BAD_REQUEST);
  });

  it('should update the ranking', async () => {
    await seedChamp();
    await seedTeam();
    await seedA();

    const response = await request(app).get('/rank?category=A');

    expect(response.status).toBe(OK);
    expect(response.body).toHaveLength(10);
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

  it('should update a match [POST] /match route', async () => {
    await seedChamp();
    await seedTeam();

    const champs = await Champ.find();
    const teams = await Team.find();

    const match: IMatch = await Match.create({
      champ: champs.find((champ) => champ.season === 2020)!._id,
      category: 'A',
      round: 1,
      roundName: 'REGULAR',
      teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')!._id,
      scoreHome: null,
      teamAway: teams.find((team) => team.longName === 'SAMPDORIA')!._id,
      scoreAway: null,
      day: '2020-02-10 21:00:00',
      week: 7,
      weekDay: 'SEG',
    });

    const scoreFields = [
      { _id: null, scoreHome: 0, scoreAway: 2 },
      { _id: null, scoreHome: '', scoreAway: '' },
      { _id: null, scoreHome: '', scoreAway: '' },
      { _id: null, scoreHome: '', scoreAway: '' },
      { _id: null, scoreHome: '', scoreAway: '' },
    ];

    const dateFields = [
      { _id: match._id, day: '2020-04-06' },
      { _id: null, day: null },
      { _id: null, day: null },
      { _id: null, day: null },
      { _id: null, day: null },
    ];

    const penaltyFields = [
      { _id: null, penaltyHome: '', penaltyAway: '' },
      { _id: null, penaltyHome: '', penaltyAway: '' },
      { _id: null, penaltyHome: '', penaltyAway: '' },
      { _id: null, penaltyHome: '', penaltyAway: '' },
      { _id: null, penaltyHome: '', penaltyAway: '' },
    ];

    const response = await request(app).post('/match').send({
      scoreFields,
      dateFields,
      penaltyFields,
    });
    expect(response.status).toBe(OK);
  });

  it('should get distincted categories of matches /category/distinct route', async () => {
    await seedChamp();
    await seedTeam();

    const champs = await Champ.find();
    const teams = await Team.find();

    await Match.create(
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'INICIO',
        round: 1,
        roundName: 'REGULAR',
        teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === 'SAMPDORIA')!._id,
        scoreAway: null,
        day: '2020-02-10 21:00:00',
        week: 7,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        round: 1,
        roundName: 'REGULAR',
        teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === 'SAMPDORIA')!._id,
        scoreAway: null,
        day: '2020-02-10 21:00:00',
        week: 7,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 1,
        roundName: 'REGULAR',
        teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === 'SAMPDORIA')!._id,
        scoreAway: null,
        day: '2020-02-10 21:00:00',
        week: 7,
        weekDay: 'SEG',
      }
    );

    const response = await request(app).get('/category/distinct');

    expect(response.status).toBe(OK);

    expect(response.body).toHaveLength(3);
    expect(response.body).toContain('INICIO');
    expect(response.body).toContain('A');
    expect(response.body).toContain('B');
  });

  it('should get a BAD REQUEST to /category/distinct route', async () => {
    const response = await request(app).get('/category/distinct');
    expect(response.status).toBe(BAD_REQUEST);
  });
});
