const moment = require('moment');
const { Match } = require('../models');
const log = require('../../services/logger');
const getCurrentChampId = require('../../utils/getCurrentChampId');

module.exports = {
  async index(req, res) {
    try {
      const { category, limit = 5 } = req.query;
      let { round } = req.query;

      const champ = await getCurrentChampId();

      if (round === 0) {
        moment.locale('pt-BR');
        let result = await Match.find({
          champ,
          category,
          day: moment(moment(Date.now()).format('YYYY-MM-DD')).utc().format(),
        });
        if (!result.length) {
          result = await Match.find({
            champ,
            category,
            week: moment(Date.now()).format('ww'),
          });
        }
        round = result.length > 0 ? result[result.length - 1].round : 1;
      }

      const response = await Match.find({ champ, category, round })
        .sort('day')
        .limit(limit)
        .populate({
          path: 'teamHome',
          select: 'shortName longName thumbnail thumbnail_url',
        })
        .populate({
          path: 'teamAway',
          select: 'shortName longName thumbnail thumbnail_url',
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

  async update(req, res) {
    try {
      const { scoreFields, dateFields } = req.body;

      scoreFields.map(async (score) => {
        const { _id, scoreHome, scoreAway } = score;

        if (_id && scoreHome && scoreAway) {
          const match = await Match.findById(_id);
          match.scoreHome = scoreHome;
          match.scoreAway = scoreAway;
          await match.save();
        }
      });

      dateFields.map(async (item) => {
        const { _id, day } = item;

        if (_id && day) {
          moment.locale('pt-BR');
          const formatedDay = moment(day).utc().format('YYYY-MM-DD');
          const week = moment(day).utc().format('ww');
          const weekDay = moment(day).utc().format('ddd');

          const match = await Match.findByIdAndUpdate(_id, {
            day: formatedDay,
            week,
            weekDay,
          });
        }
      });

      return res.json({ response: 'ok' });
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },

  async categoriesDistinct(req, res) {
    try {
      const response = await Match.find().distinct('category');
      return res.json(response);
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },
};
