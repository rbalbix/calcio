const { Rank } = require('../models');

module.exports = {
  async index(req, res) {
    const ranking = await Rank.find();

    return res.json(ranking);
  },
};
