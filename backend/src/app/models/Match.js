/**
-- A match between two teams. Its happens in a determinated day, hour, week day. Have a result, match summary.
-- Automaticaly organize soccer matches considering the championship and the stages, to all categories.
**/

const { Schema, model } = require('../../database').mongoose;
const Rank = require('./Rank');
const Champ = require('./Champ');
const Team = require('./Team');

const MatchSchema = new Schema(
  {
    champ: {
      type: Schema.Types.ObjectId,
      ref: 'Champ',
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    round: {
      type: Number,
      required: true,
    },
    day: {
      type: Date,
      required: true,
    },
    week: { type: Number, min: 1, max: 53 },
    weekDay: {
      type: String,
      uppercase: true,
    },
    teamHome: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    scoreHome: { type: Number, min: 0, max: 99 },
    teamAway: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    scoreAway: { type: Number, min: 0, max: 99 },
  },
  { timestamps: true }
);

// Trigger to update Rank
// MatchSchema.post('findOneAndUpdate', async function (doc) {
//   console.log('...');
// });

// MatchSchema.post('save', async function (doc) {
MatchSchema.post('save', async function (doc) {
  // const champ = await Champ.findById(doc.champ);
  // const home = await Team.findById(doc.teamHome);
  // const away = await Team.findById(doc.teamAway);
  // (2020 - A) ROUND 1: HOME 2 x 3 AWAY
  // console.log(
  //   `(${champ.season} - ${doc.category}) ROUND ${doc.round}: ${
  //     home.shortName
  //   } ${doc.scoreHome === null ? ' ' : doc.scoreHome} x ${
  //     doc.scoreAway === null ? ' ' : doc.scoreAway
  //   } ${away.shortName}`
  // );

  // Champ.findById(doc.champ)
  //   .then((champ) => {
  //     Team.findById(doc.teamHome)
  //       .then((home) => {
  //         Team.findById(doc.teamAway)
  //           .then((away) => {
  //             console.log(
  //               `(${champ.season} - ${doc.category}) ROUND ${doc.round}: ${
  //                 home.shortName
  //               } ${doc.scoreHome === null ? ' ' : doc.scoreHome} x ${
  //                 doc.scoreAway === null ? ' ' : doc.scoreAway
  //               } ${away.shortName}`
  //             );
  //           })
  //           .catch((e) => console.log(e));
  //       })
  //       .catch((e) => console.log(e));
  //   })
  //   .catch((e) => console.log(e));

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
});

const Match = model('Match', MatchSchema);

module.exports = Match;
