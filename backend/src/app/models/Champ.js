/**
 -- A championship have a name, year, stages and categories
 -- Also have a set of teams.
 **/

const { Schema, model } = require('../../database').mongoose;

const ChampSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    season: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Champ = model('Champ', ChampSchema);

module.exports = Champ;
