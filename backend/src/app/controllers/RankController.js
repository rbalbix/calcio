const { Rank } = require('../models');
const log = require('../../services/logger');

module.exports = {
  async top(req, res) {
    try {
      const ranking = await Rank.find()
        .select('team points wons goalDifference -_id')
        .sort('-points')
        .limit(4);

      return res.json(ranking);
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
