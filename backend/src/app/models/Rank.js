const { Schema, model } = require('../../database').mongoose;

const RankSchema = Schema(
  {
    team: {
      type: String,
      required: true,
    },
    points: { type: Number, min: 0, max: 99 },
    wons: { type: Number, min: 0, max: 99 },
    goalDifference: { type: Number, min: 0, max: 99 },
  },
  { timestamps: true }
);

const Rank = model('Rank', RankSchema);

module.exports = Rank;
