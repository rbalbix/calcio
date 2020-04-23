/**
 -- Teams have players (at least one and at most eleven [1,11])
 **/

const { Schema, model } = require('../../database').mongoose;

const TeamSchema = new Schema(
  {
    longName: {
      type: String,
      uppercase: true,
      unique: true,
      required: true,
    },
    shortName: {
      type: String,
      uppercase: true,
      required: true,
      min: 3,
      max: 3,
    },
    thumbnail: String,
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
  { timestamps: true }
);

TeamSchema.virtual('thumbnail_url').get(function () {
  return `https://rb-calcio.herokuapp.com/files/shields/${this.thumbnail}`;
});

const Team = model('Team', TeamSchema);

module.exports = Team;
