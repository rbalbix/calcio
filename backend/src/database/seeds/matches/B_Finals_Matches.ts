import moment from 'moment';
import log from '@services/logger';
import { Champ, Team, Match } from '@models';

async function seed() {
  try {
    log.info('  Seeding B Finals Matches ...');
    const champs = await Champ.find();
    const teams = await Team.find();

    /**
     * Only for 2020 Champ
     */

    const matchesBFinals = [
      /**
       * QUARTAS
       *
       * IDA
       *
       */
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 28,
        roundName: 'QUARTAS',
        game: 1,
        teamHome: teams.find((team) => team.longName === '4º')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === '5º')!._id,
        scoreAway: null,
        day: moment.utc(moment('2020-11-09')),
        week: 46,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 28,
        roundName: 'QUARTAS',
        game: 2,
        teamHome: teams.find((team) => team.longName === '3º')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === '6º')!._id,
        scoreAway: null,
        day: moment.utc(moment('2020-11-10')),
        week: 46,
        weekDay: 'TER',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 28,
        roundName: 'QUARTAS',
        game: 3,
        teamHome: teams.find((team) => team.longName === '2º')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === '7º')!._id,
        scoreAway: null,
        day: moment.utc(moment('2020-11-11')),
        week: 46,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 28,
        roundName: 'QUARTAS',
        game: 4,
        teamHome: teams.find((team) => team.longName === '1º')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === '8º')!._id,
        scoreAway: null,
        day: moment.utc(moment('2020-11-12')),
        week: 46,
        weekDay: 'QUI',
      },
      /**
       * QUARTAS
       *
       * VOLTA
       *
       */
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 29,
        roundName: 'QUARTAS',
        game: 1,
        teamHome: teams.find((team) => team.longName === '4º')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === '5º')!._id,
        scoreAway: null,
        day: moment.utc(moment('2020-11-16')),
        week: 47,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 29,
        roundName: 'QUARTAS',
        game: 2,
        teamHome: teams.find((team) => team.longName === '3º')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === '6º')!._id,
        scoreAway: null,
        day: moment.utc(moment('2020-11-17')),
        week: 47,
        weekDay: 'TER',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 29,
        roundName: 'QUARTAS',
        game: 3,
        teamHome: teams.find((team) => team.longName === '2º')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === '7º')!._id,
        scoreAway: null,
        day: moment.utc(moment('2020-11-18')),
        week: 47,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 29,
        roundName: 'QUARTAS',
        game: 4,
        teamHome: teams.find((team) => team.longName === '1º')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === '8º')!._id,
        scoreAway: null,
        day: moment.utc(moment('2020-11-19')),
        week: 47,
        weekDay: 'QUI',
      },
      /**
       * SEMIFINAL
       *
       * IDA
       *
       */
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 30,
        roundName: 'SEMIFINAL',
        game: 1,
        teamHome: teams.find((team) => team.longName === 'VENC. QUARTAS 2')!
          ._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === 'VENC. QUARTAS 3')!
          ._id,
        scoreAway: null,
        day: moment.utc(moment('2020-11-25')),
        week: 48,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 30,
        roundName: 'SEMIFINAL',
        game: 2,
        teamHome: teams.find((team) => team.longName === 'VENC. QUARTAS 1')!
          ._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === 'VENC. QUARTAS 4')!
          ._id,
        scoreAway: null,
        day: moment.utc(moment('2020-11-26')),
        week: 48,
        weekDay: 'QUI',
      },
      /**
       * SEMIFINAL
       *
       * VOLTA
       *
       */
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 30,
        roundName: 'SEMIFINAL',
        game: 1,
        teamHome: teams.find((team) => team.longName === 'VENC. QUARTAS 2')!
          ._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === 'VENC. QUARTAS 3')!
          ._id,
        scoreAway: null,
        day: moment.utc(moment('2020-12-02')),
        week: 49,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 30,
        roundName: 'SEMIFINAL',
        game: 2,
        teamHome: teams.find((team) => team.longName === 'VENC. QUARTAS 1')!
          ._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === 'VENC. QUARTAS 4')!
          ._id,
        scoreAway: null,
        day: moment.utc(moment('2020-12-03')),
        week: 49,
        weekDay: 'QUI',
      },
      /**
       * FINAL
       *
       * IDA
       *
       */
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 31,
        roundName: 'FINAL',
        teamHome: teams.find((team) => team.longName === 'SEMIFINAL 1')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === 'SEMIFINAL 2')!._id,
        scoreAway: null,
        day: moment.utc(moment('2020-12-10')),
        week: 50,
        weekDay: 'QUI',
      },
      /**
       * FINAL
       *
       * VOLTA
       *
       */
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'B',
        round: 31,
        roundName: 'FINAL',
        teamHome: teams.find((team) => team.longName === 'SEMIFINAL 1')!._id,
        scoreHome: null,
        teamAway: teams.find((team) => team.longName === 'SEMIFINAL 2')!._id,
        scoreAway: null,
        day: moment.utc(moment('2020-12-17')),
        week: 51,
        weekDay: 'QUI',
      },
    ];

    await Match.create(matchesBFinals);
  } catch (err) {
    throw new Error(err);
  }
}

export { seed as seedBFinals };
