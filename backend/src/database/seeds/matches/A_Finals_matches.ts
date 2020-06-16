import moment from 'moment';
import log from '../../../services/logger';
import { Champ, Match } from '../../../app/models';

async function seed() {
  try {
    log.info('Seeding A Finals Matches ...');
    const champs = await Champ.find();

    /**
     * Only for 2020 Champ
     */

    const matchesAFinals = [
      /**
       * QUARTAS
       *
       * IDA
       *
       */
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        round: 28,
        roundName: 'QUARTAS',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
        scoreAway: null,
        day: moment.utc(moment('2020-11-09')),
        week: 46,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        round: 28,
        roundName: 'QUARTAS',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
        scoreAway: null,
        day: moment.utc(moment('2020-11-10')),
        week: 46,
        weekDay: 'TER',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        round: 28,
        roundName: 'QUARTAS',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
        scoreAway: null,
        day: moment.utc(moment('2020-11-11')),
        week: 46,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        round: 28,
        roundName: 'QUARTAS',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
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
        category: 'A',
        round: 29,
        roundName: 'QUARTAS',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
        scoreAway: null,
        day: moment.utc(moment('2020-11-16')),
        week: 47,
        weekDay: 'SEG',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        round: 29,
        roundName: 'QUARTAS',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
        scoreAway: null,
        day: moment.utc(moment('2020-11-17')),
        week: 47,
        weekDay: 'TER',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        round: 29,
        roundName: 'QUARTAS',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
        scoreAway: null,
        day: moment.utc(moment('2020-11-18')),
        week: 47,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        round: 29,
        roundName: 'QUARTAS',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
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
        category: 'A',
        round: 30,
        roundName: 'SEMIFINAL',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
        scoreAway: null,
        day: moment.utc(moment('2020-11-25')),
        week: 48,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        round: 30,
        roundName: 'SEMIFINAL',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
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
        category: 'A',
        round: 30,
        roundName: 'SEMIFINAL',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
        scoreAway: null,
        day: moment.utc(moment('2020-12-02')),
        week: 49,
        weekDay: 'QUA',
      },
      {
        champ: champs.find((champ) => champ.season === 2020)!._id,
        category: 'A',
        round: 30,
        roundName: 'SEMIFINAL',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
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
        category: 'A',
        round: 31,
        roundName: 'FINAL',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
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
        category: 'A',
        round: 31,
        roundName: 'FINAL',
        teamHome: null,
        scoreHome: null,
        teamAway: null,
        scoreAway: null,
        day: moment.utc(moment('2020-12-17')),
        week: 51,
        weekDay: 'QUI',
      },
    ];

    await Match.create(matchesAFinals);
  } catch (err) {
    log.error(err);
  }
}

export { seed as seedAFinals };
