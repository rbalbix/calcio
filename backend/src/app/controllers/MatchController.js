const moment = require('moment');
const { Match } = require('../models');
const log = require('../../services/logger');
const getCurrentChampId = require('../../utils/getCurrentChampId');

module.exports = {
  async index(req, res) {
    try {
      const { category, limit = 5 } = req.query;
      let { round } = req.query;

      if (round === 0) {
        moment.locale('pt-BR');
        const result = await Match.find({
          $or: [
            {
              day: moment(moment(Date.now()).format('YYYY-MM-DD 21:00:00'))
                .utc()
                .format(),
            },
            { week: moment(Date.now()).format('ww') },
          ],
        });
        round = result.length > 0 ? result[0].round : 1;
      }

      const champ = await getCurrentChampId();
      const response = await Match.find({ champ, category, round })
        .sort('day')
        .limit(limit)
        .populate({
          path: 'teamHome',
          select: 'shortName thumbnail thumbnail_url',
        })
        .populate({
          path: 'teamAway',
          select: 'shortName thumbnail thumbnail_url',
        });

      res.header(
        'X-Total-Count',
        (await Match.countDocuments({ champ, category })) / limit
      );
      res.header('X-round', round);
      return res.json(response);
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },
};
