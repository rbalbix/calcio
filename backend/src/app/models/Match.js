/**
-- A match between two teams. Its happens in a determinated day, hour, week day. Have a result, match summary.
-- Automaticaly organize soccer matches considering the championship and the stages, to all categories.
**/

const { Schema, model } = require('../../database').mongoose;

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

const Match = model('Match', MatchSchema);

module.exports = Match;
