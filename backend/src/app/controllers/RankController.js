const { Rank } = require('../models');
const log = require('../../services/logger');

function rank(a, b) {
  if (a.points > b.points) return -1;
  if (a.points < b.points) return 1;
  return 0;
}

module.exports = {
  async top(req, res) {
    try {
      const top = 4;

      const ranks = await Rank.find()
        .select('category thumbnail team points wons goalDifference')
        .populate('team');

      const response = {
        A: ranks
          .filter((rank) => rank.category === 'A')
          .sort((a, b) => rank(a, b))
          .slice(0, top),

        B: ranks
          .filter((rank) => rank.category === 'B')
          .sort((a, b) => rank(a, b))
          .slice(0, top),
      };

      return res.json(response);
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },

  async index(req, res) {
    try {
      const { category } = req.query;
      const response = await Rank.find({ category })
        .select(
          'category thumbnail team points played wons drawn lost goalDifference'
        )
        .sort('-points')
        .populate('team');

      return res.json(response);
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },
};
