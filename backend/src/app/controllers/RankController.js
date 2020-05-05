const { Rank } = require('../models');
const log = require('../../services/logger');
const getCurrentChampId = require('../../utils/getCurrentChampId');

function rank(a, b) {
  if (a.points > b.points) return -1;
  if (a.points < b.points) return 1;
  if (a.points === b.points) {
    if (a.wons > b.wons) return -1;
    if (a.wons < b.wons) return 1;
    if (a.wons === b.wons) {
      if (a.goalDifference > b.goalDifference) return -1;
      if (a.goalDifference < b.goalDifference) return 1;
      if (a.goalDifference === b.goalDifference) {
        if (a.goalsFor > b.goalsFor) return -1;
        if (a.goalsFor < b.goalsFor) return 1;
        if (a.goalsFor === b.goalsFor) {
          if (a.goalsAgainst > b.goalsAgainst) return -1;
          if (a.goalsAgainst < b.goalsAgainst) return 1;
        }
      }
    }
  }
  return 0;
}

module.exports = {
  async top(req, res) {
    try {
      const top = 4;

      const champ = await getCurrentChampId();
      const ranks = await Rank.find({ champ })
        .select(
          'category thumbnail team points wons goalsFor goalsAgainst goalDifference'
        )
        .populate({ path: 'team', select: 'longName thumbnail thumbnail_url' });

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

      const champ = await getCurrentChampId();
      const response = await Rank.find({ champ, category })
        .select(
          'category thumbnail team points played wons drawn lost goalsFor goalsAgainst goalDifference'
        )
        .sort('-points -wons -goalDifference ')
        .populate('team');

      return res.json(response);
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },
};
