/**
 *
 * A rank can be of a specific champ and category.
 *
 */

const { Schema, model } = require('../../database').mongoose;

const RankSchema = Schema(
  {
    category: {
      type: String,
      required: true,
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    points: { type: Number, min: 0, max: 99 },
    played: { type: Number, min: 0, max: 99 },
    wons: { type: Number, min: 0, max: 99 },
    drawn: { type: Number, min: 0, max: 99 },
    lost: { type: Number, min: 0, max: 99 },
    goalDifference: Number,
  },
  { timestamps: true }
);

const Rank = model('Rank', RankSchema);

module.exports = Rank;
