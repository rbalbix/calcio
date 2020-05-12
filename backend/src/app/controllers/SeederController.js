const log = require('../../services/logger');
const { seedChamp, seedTeam, seedMatch } = require('../../database/seeder');

module.exports = {
  async index(req, res) {
    try {
      seedChamp();
      seedTeam();
      seedMatch();
      return res.json({ message: 'ok' });
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },
};
