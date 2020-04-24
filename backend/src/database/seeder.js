const db = require('./index');
const { Team, Match, Rank } = require('../app/models');

async function connect() {
  db.connect();
}

async function disconnect(done) {
  db.disconnect(done);
}

async function seedTeam() {
  await Team.deleteMany({});

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
}

async function seedMatch() {
  await Match.deleteMany({});

  const teams = await Team.find();

  await Match.create([
    {
      category: 'A',
      round: 1,
      teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
      scoreHome: 1,
      teamAway: teams.find((team) => team.longName === 'NAPOLI')._id,
      scoreAway: 3,
      day: '2020-02-10 12:00:00',
      week: 7,
      weekDay: 'SEG',
    },
    {
      category: 'A',
      round: 1,
      teamHome: teams.find((team) => team.longName === 'JUVENTUS')._id,
      scoreHome: 1,
      teamAway: teams.find((team) => team.longName === 'SAMPDORIA')._id,
      scoreAway: 2,
      day: '2020-02-11 12:00:00',
      week: 7,
      weekDay: 'TER',
    },
    {
      category: 'A',
      round: 1,
      teamHome: teams.find((team) => team.longName === 'SUASSUOLO')._id,
      scoreHome: 0,
      teamAway: teams.find((team) => team.longName === 'PARMA')._id,
      scoreAway: 2,
      day: '2020-02-12 12:00:00',
      week: 7,
      weekDay: 'QUA',
    },
    {
      category: 'A',
      round: 1,
      teamHome: teams.find((team) => team.longName === 'ROMA')._id,
      scoreHome: 1,
      teamAway: teams.find((team) => team.longName === 'PALERMO')._id,
      scoreAway: 1,
      day: '2020-02-13 12:00:00',
      week: 7,
      weekDay: 'QUI',
    },
    {
      category: 'A',
      round: 1,
      teamHome: teams.find((team) => team.longName === 'MILAN')._id,
      scoreHome: 5,
      teamAway: teams.find((team) => team.longName === 'FIORENTINA')._id,
      scoreAway: 1,
      day: '2020-02-17 12:00:00',
      week: 8,
      weekDay: 'SEG',
    },

    {
      category: 'A',
      round: 2,
      teamHome: teams.find((team) => team.longName === 'JUVENTUS')._id,
      scoreHome: 1,
      teamAway: teams.find((team) => team.longName === 'PARMA')._id,
      scoreAway: 4,
      day: '2020-02-18 12:00:00',
      week: 8,
      weekDay: 'TER',
    },
    {
      category: 'A',
      round: 2,
      teamHome: teams.find((team) => team.longName === 'INTERNAZIONALE')._id,
      scoreHome: 2,
      teamAway: teams.find((team) => team.longName === 'ROMA')._id,
      scoreAway: 4,
      day: '2020-02-19 12:00:00',
      week: 8,
      weekDay: 'QUA',
    },
    {
      category: 'A',
      round: 2,
      teamHome: teams.find((team) => team.longName === 'NAPOLI')._id,
      scoreHome: 3,
      teamAway: teams.find((team) => team.longName === 'SUASSUOLO')._id,
      scoreAway: 3,
      day: '2020-02-20 12:00:00',
      week: 8,
      weekDay: 'QUI',
    },
    {
      category: 'A',
      round: 2,
      teamHome: teams.find((team) => team.longName === 'SAMPDORIA')._id,
      scoreHome: '',
      teamAway: teams.find((team) => team.longName === 'MILAN')._id,
      scoreAway: '',
      day: '2020-03-02 12:00:00',
      week: 10,
      weekDay: 'SEG',
    },
    {
      category: 'A',
      round: 2,
      teamHome: teams.find((team) => team.longName === 'PALERMO')._id,
      scoreHome: 4,
      teamAway: teams.find((team) => team.longName === 'FIORENTINA')._id,
      scoreAway: 4,
      day: '2020-03-03 12:00:00',
      week: 10,
      weekDay: 'TER',
    },
  ]);
}

async function seedRank() {
  await Rank.deleteMany({});

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
}

async function seed() {
  await connect();

  await seedTeam();
  await seedMatch();
  await seedRank();

  await disconnect();
}

seed();
