const db = require('./index');
const { Team, Rank } = require('../app/models');

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
  await seedRank();

  await disconnect();
}

seed();
