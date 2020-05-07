const Rank = require('../app/models/Rank');

module.exports = async function updateRank(doc) {
  if (doc.scoreHome !== null && doc.scoreAway !== null) {
    const drawn = doc.scoreHome === doc.scoreAway;
    const homeWon = doc.scoreHome > doc.scoreAway;

    await Rank.findOneAndUpdate(
      {
        champ: doc.champ,
        category: doc.category,
        team: doc.teamHome,
      },
      {
        champ: doc.champ,
        category: doc.category,
        team: doc.teamHome,
        $inc: {
          points: drawn ? 1 : homeWon ? 3 : 0,
          played: 1,
          wons: homeWon ? 1 : 0,
          drawn: drawn ? 1 : 0,
          lost: drawn ? 0 : homeWon ? 0 : 1,
          goalsFor: doc.scoreHome,
          goalsAgainst: doc.scoreAway,
          goalDifference: doc.scoreHome - doc.scoreAway,
        },
      },
      {
        upsert: true,
      }
    );

    await Rank.findOneAndUpdate(
      {
        champ: doc.champ,
        category: doc.category,
        team: doc.teamAway,
      },
      {
        champ: doc.champ,
        category: doc.category,
        team: doc.teamAway,
        $inc: {
          points: drawn ? 1 : !homeWon ? 3 : 0,
          played: 1,
          wons: drawn ? 0 : !homeWon ? 1 : 0,
          drawn: drawn ? 1 : 0,
          lost: drawn ? 0 : homeWon ? 1 : 0,
          goalsFor: doc.scoreAway,
          goalsAgainst: doc.scoreHome,
          goalDifference: doc.scoreAway - doc.scoreHome,
        },
      },
      {
        upsert: true,
      }
    );
  }
};
