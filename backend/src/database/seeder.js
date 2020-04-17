const db = require('./index');
const { Rank } = require('../app/models');

async function connect() {
  db.connect();
}

async function disconnect(done) {
  db.disconnect(done);
}

async function seedRank() {
  await Rank.deleteMany({});

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
}

async function seed() {
  await connect();

  await seedRank();

  await disconnect();
}

seed();
