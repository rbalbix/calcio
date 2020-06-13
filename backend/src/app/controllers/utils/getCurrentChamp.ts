import moment from 'moment';
import { Champ, IChamp } from '../../models';

export const getCurrentChamp = async () => {
  let season = Number(moment(Date.now()).format('YYYY'));

  let champ = await Champ.findOne({ season });
  if (!champ) {
    season--;
    champ = await Champ.findOne({ season });
  }

  return <IChamp>champ;
};
