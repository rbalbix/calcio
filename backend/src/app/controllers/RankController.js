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

      const ranks = await Rank.find().select(
        'category thumbnail team points wons goalDifference'
      );

      const response = {
        A: ranks
          .filter((team) => team.category === 'A')
          .sort((a, b) => rank(a, b))
          .slice(0, top),

        B: ranks
          .filter((team) => team.category === 'B')
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
      return res.json({ message: 'TO DO' });
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },
};
