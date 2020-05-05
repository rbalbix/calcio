const { Match } = require('./app/models');

start();

async function start() {
  connectToDB();
  const match = await getMatches({
    champ: '5eab35ffe017e9508635e22e',
    category: 'A',
    round: 1,
    teamHome: '5eab35ffe017e9508635e234',
  });
  await updateMatch(match);
  console.log('FINISH');
}

function connectToDB() {
  require('./database').connect();
}

async function getMatches(filter) {
  return await Match.findOne(filter).lean();
}

async function updateMatch(match) {
  match.scoreHome = 0;
  match.scoreAway = 0;
  let newMatch = new Match(match);
  // newMatch = { ...match };
  newMatch.isNew = false;
  newMatch.save();
}
