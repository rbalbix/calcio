/**
-- A match between two teams. Its happens in a determinated day, hour, week day. Have a result, match summary.
-- Automaticaly organize soccer matches considering the championship and the stages, to all categories.
**/

const { Schema, model } = require('../../database').mongoose;
const Rank = require('./Rank');

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
MatchSchema.post('save', async function (doc) {
  const champ = doc.champ;
  const category = doc.category;
  const teamHome = doc.teamHome;
  const teamAway = doc.teamAway;
  console.log('%s has been saved', doc._id);
  console.log('Champ ', champ);
  console.log('Category ', category);
  console.log(`teamHome: ${teamHome} -> ${doc.scoreHome}`);
  console.log(`teamAway: ${teamAway} -> ${doc.scoreAway}`);
  console.log('teamHome won: ', doc.scoreHome > doc.scoreAway);
  console.log('drawn: ', doc.scoreHome === doc.scoreAway);

  // Update teamHome rank
  const rank = await Rank.findOne({
    champ: doc.champ,
    category: doc.category,
    team: doc.teamHome,
  });
  console.log(rank);
  // Update teamAway rank
});

const Match = model('Match', MatchSchema);

module.exports = Match;
