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

  it('should find a /rank/top [get] route', async () => {
    await Champ.create([
      {
        name: 'Campeonato 2020',
        season: 2020,
      },
    ]);

    const response = await request(app).get('/rank/top');

    expect(response.status).toBe(OK);
  });

  it('should get the top teams of ranking', async () => {
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

    const champs = await Champ.find();
    const teams = await Team.find();

    await Rank.create([
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'SAMPDORIA')!._id,
        points: 30,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'INTERNAZIONALE')!._id,
        points: 15,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },

      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'FIORENTINA')!._id,
        points: 10,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'MILAN')!._id,
        points: 20,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'JUVENTUS')!._id,
        points: 5,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'NAPOLI')!._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 10,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'SUASSUOLO')!._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 15,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'PARMA')!._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'PALERMO')!._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'ROMA')!._id,
        points: 4,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'SAMPDORIA')!._id,
        points: 30,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'INTERNAZIONALE')!._id,
        points: 25,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'FIORENTINA')!._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'MILAN')!._id,
        points: 15,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'JUVENTUS')!._id,
        points: 5,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'NAPOLI')!._id,
        points: 20,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 10,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'SUASSUOLO')!._id,
        points: 35,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 15,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'PARMA')!._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'PALERMO')!._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'ROMA')!._id,
        points: 4,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
    ]);

    const response = await request(app).get('/rank/top');
    expect(response.status).toBe(OK);

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
    await Champ.create([
      {
        name: 'Campeonato 2020',
        season: 2020,
      },
    ]);

    const response = await request(app).get('/rank?category=A');

    expect(response.status).toBe(200);
  });

  it('should get the total ranking for a specific category', async () => {
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

    const champs = await Champ.find();
    const teams = await Team.find();

    await Rank.create([
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'SAMPDORIA')!._id,
        points: 30,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'INTERNAZIONALE')!._id,
        points: 15,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'FIORENTINA')!._id,
        points: 10,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'MILAN')!._id,
        points: 20,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'JUVENTUS')!._id,
        points: 5,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'NAPOLI')!._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 10,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'SUASSUOLO')!._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 15,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'PARMA')!._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'PALERMO')!._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        team: teams.find((team) => team.longName === 'ROMA')!._id,
        points: 4,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'SAMPDORIA')!._id,
        points: 30,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'INTERNAZIONALE')!._id,
        points: 25,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'FIORENTINA')!._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'MILAN')!._id,
        points: 15,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'JUVENTUS')!._id,
        points: 5,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'NAPOLI')!._id,
        points: 20,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 10,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'SUASSUOLO')!._id,
        points: 35,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 15,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'PARMA')!._id,
        points: 8,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'PALERMO')!._id,
        points: 6,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        team: teams.find((team) => team.longName === 'ROMA')!._id,
        points: 4,
        played: 5,
        wons: 10,
        drawn: 1,
        lost: 0,
        goalDifference: 20,
        goalsFor: 1,
        goalsAgainst: 1,
      },
    ]);

    const response = await request(app).get('/rank?category=A');

    expect(response.status).toBe(OK);

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
          goalsFor: 1,
          goalsAgainst: 1,
        }),
        // expect.objectContaining({
        //   champ: champs.find((champ) => champ.season === 2020)!._id,
        // (category: 'A'),
        //   // team: 'INTERNAZIONALE',
        //   points: 15,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
        // expect.objectContaining({
        //   champ: champs.find((champ) => champ.season === 2020)!._id,
        // (category: 'A'),
        //   // team: 'FIORENTINA',
        //   points: 10,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
        // expect.objectContaining({
        //   champ: champs.find((champ) => champ.season === 2020)!._id,
        //(category: 'A'),
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
        //   champ: champs.find((champ) => champ.season === 2020)!._id,
        //(category: 'A'),
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
        //   champ: champs.find((champ) => champ.season === 2020)!._id,
        //(category: 'A'),
        //   // team: 'NAPOLI',
        //   points: 8,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 10,
        // }),
        // expect.objectContaining({
        //   champ: champs.find((champ) => champ.season === 2020)!._id,
        //(category: 'A'),
        //   // team: 'SUASSUOLO',
        //   points: 8,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 15,
        // }),
        // expect.objectContaining({
        //   champ: champs.find((champ) => champ.season === 2020)!._id,
        //(category: 'A'),
        //   // team: 'PARMA',
        //   points: 8,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
        // expect.objectContaining({
        //   champ: champs.find((champ) => champ.season === 2020)!._id,
        //(category: 'A'),
        //   // team: 'PALERMO',
        //   points: 6,
        //   played: 5,
        //   wons: 10,
        //   drawn: 1,
        //   lost: 0,
        //   goalDifference: 20,
        // }),
        // expect.objectContaining({
        //   champ: champs.find((champ) => champ.season === 2020)!._id,
        //(category: 'A'),
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

  it('should return a BAD_REQUEST error status for /rank/top route', async () => {
    const response = await request(app).get('/rank/top');

    expect(response.status).toBe(BAD_REQUEST);
  });

  it('should return a BAD_REQUEST error status for /rank route', async () => {
    const response = await request(app).get('/rank?category=A');

    expect(response.status).toBe(BAD_REQUEST);
  });
});
