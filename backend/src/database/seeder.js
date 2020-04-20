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
}

async function seed() {
  await connect();

  await seedRank();

  await disconnect();
}

seed();
