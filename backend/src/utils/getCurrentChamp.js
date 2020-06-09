const moment = require('moment');
const { Champ } = require('../app/models');

module.exports = async function getCurrentChamp() {
  let season = moment(Date.now()).format('YYYY');

  let champ = await Champ.findOne({ season });
  if (!champ) {
    season--;
    champ = await Champ.findOne({ season });
  }

  return champ;
};
