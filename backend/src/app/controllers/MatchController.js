const { Match } = require('../models');
const log = require('../../services/logger');

module.exports = {
  async index(req, res) {
    try {
      const { category } = req.query;
      const response = await Match.find({ category })
        .sort('day')
        .limit(5)
        .populate('teamHome teamAway');

      res.header('X-Total-Count', await Match.countDocuments());

      return res.json(response);
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },
};
