const { Match } = require('./app/models');

start();

async function start() {
  connectToDB();
  const match = await getMatches({
    champ: '5eb32679501b8c481e6d5d77',
    category: 'A',
    round: 1,
    teamHome: '5eb32679501b8c481e6d5d7d',
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
  // match.scoreHome = 3;
  // match.scoreAway = 1;
  // let newMatch = new Match(match);

  // newMatch.isNew = false;
  // newMatch.save();

  const filter = { _id: match._id };
  const update = { scoreHome: 0, scoreAway: 0 };

  let doc = await Match.findOneAndUpdate(filter, update, { new: true });

  // console.log(doc);
}
