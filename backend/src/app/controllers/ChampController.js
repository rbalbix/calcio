const log = require('../../services/logger');
const getCurrentChamp = require('../../utils/getCurrentChamp');

module.exports = {
  async current(req, res) {
    try {
      const response = await getCurrentChamp();

      return res.json(response);
    } catch (err) {
      log.error(err);
      res.status(503).send('Algo deu errado. Tente novamente.');
    }
  },
};
