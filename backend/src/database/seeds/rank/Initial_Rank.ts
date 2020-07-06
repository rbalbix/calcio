import { getCurrentChamp } from '../../../app/controllers/utils/getCurrentChamp';
import { Rank, Match, Team } from '@models';

async function seed() {
  try {
    const champ = await getCurrentChamp();
    if (!champ) throw new Error('Championship does not exists.');

    // const categories = await Match.find({ champ }).distinct('category');
    // if (categories.length === 0) throw new Error('Categories do not exists.');

    // const category = 'A';
    // categories.map(async (category) => {
    await createRank(champ, 'A');
    await createRank(champ, 'B');
    // });
  } catch (err) {
    throw new Error(err);
  }
}

async function createRank(champ, category) {
  try {
    const rank = await Rank.find({ champ, category });
    if (rank.length !== 0) {
      return;
    }

    const teamIds = await Match.find({
      champ,
      category,
      roundName: 'REGULAR',
    }).distinct('teamHome');

    const teams = await Team.find(
      { _id: { $in: teamIds } },
      '_id longName'
    ).sort('longName');

    let rankArr = [];
    teams.map((team) => {
      rankArr.push({
        champ: champ._id,
        category,
        team: team._id,
        points: 0,
        played: 0,
        wons: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
      });
    });
    await Rank.insertMany(rankArr, { ordered: true });
  } catch (err) {
    throw new Error(err);
  }
}

export { seed as seedRankIfNeeded };
