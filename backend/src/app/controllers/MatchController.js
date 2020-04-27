const moment = require('moment');
const { Match } = require('../models');
const log = require('../../services/logger');

module.exports = {
  async index(req, res) {
    try {
      const { category, round } = req.query;
      const limit = 5;
      let response;
      if (round !== 0) {
        response = await Match.find({ category, round })
          .sort('day')
          .limit(limit)
          .populate('teamHome teamAway');
      } else {
        const week = moment(Date.now()).format('ww');

        response = await Match.find({ category, round })
          .sort('day')
          .limit(5)
          .populate('teamHome teamAway');
      }
      res.header(
        'X-Total-Count',
        (await Match.countDocuments({ category })) / limit
      );
      return res.json(response);
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },
};
