const { Schema, model } = require('../../database').mongoose;

const RankSchema = Schema(
  {
    category: {
      type: String,
      required: true,
    },
    thumbnail: String,
    team: {
      type: String,
      required: true,
    },
    points: { type: Number, min: 0, max: 99 },
    wons: { type: Number, min: 0, max: 99 },
    goalDifference: { type: Number, min: 0, max: 99 },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
  { timestamps: true }
);

RankSchema.virtual('thumbnail_url').get(function () {
  return `https://rb-calcio.herokuapp.com/files/shields/${this.thumbnail}`;
});

const Rank = model('Rank', RankSchema);

module.exports = Rank;
