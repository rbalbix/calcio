const moment = require('moment');
const { Match } = require('../models');
const log = require('../../services/logger');

module.exports = {
  async index(req, res) {
    try {
      const { category, limit = 5 } = req.query;
      let { round } = req.query;

      if (round === 0) {
        const result = await Match.find({
          $or: [
            { day: moment(Date.now()).format('YYYY-MM-DD 21:00:00') },
            { week: moment(Date.now()).format('ww') },
          ],
        });
        round = result.length > 0 ? result[0].round : 1;
      }

      const response = await Match.find({ category, round })
        .sort('day')
        .limit(limit)
        .populate('teamHome teamAway');

      res.header(
        'X-Total-Count',
        (await Match.countDocuments({ category })) / limit
      );
      res.header('X-round', round);
      return res.json(response);
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },
};
