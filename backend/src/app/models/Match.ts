import { mongoose } from '../../database';
import { Rank } from './Rank';

const { Schema, model } = mongoose;

export interface IMatch extends mongoose.Document {
  champ: {} | any;
  category: string;
  round: number;
  roundName?: string;
  day: {} | any;
  week: number;
  weekDay: string;
  teamHome: {} | any;
  scoreHome: number | null;
  teamAway: {} | any;
  scoreAway: number | null;
}

const MatchSchema = new Schema(
  {
    champ: {
      type: Schema.Types.ObjectId,
      ref: 'Champ',
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    round: {
      type: Number,
      required: true,
    },
    roundName: {
      type: String,
    },
    day: {
      type: Date,
      required: true,
    },
    week: { type: Number, min: 1, max: 53 },
    weekDay: {
      type: String,
      uppercase: true,
    },
    teamHome: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      // required: true,
    },
    scoreHome: { type: Number, min: 0, max: 99 },
    teamAway: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      // required: true,
    },
    scoreAway: { type: Number, min: 0, max: 99 },
  },
  { timestamps: true }
);

// Trigger to update Rank
MatchSchema.post('findOneAndUpdate', async function (doc: IMatch) {
  await updateRank(doc);
});

MatchSchema.post('save', async function (doc: IMatch) {
  await updateRank(doc);
});

export const Match = model<IMatch>('Match', MatchSchema);

async function updateRank(doc: IMatch) {
  if (doc.scoreHome !== null && doc.scoreAway !== null) {
    const drawn = doc.scoreHome === doc.scoreAway;
    const homeWon = doc.scoreHome > doc.scoreAway;

    await Rank.findOneAndUpdate(
      {
        champ: doc.champ,
        category: doc.category,
        team: doc.teamHome,
      },
      {
        champ: doc.champ,
        category: doc.category,
        team: doc.teamHome,
        $inc: {
          points: drawn ? 1 : homeWon ? 3 : 0,
          played: 1,
          wons: homeWon ? 1 : 0,
          drawn: drawn ? 1 : 0,
          lost: drawn ? 0 : homeWon ? 0 : 1,
          goalsFor: doc.scoreHome,
          goalsAgainst: doc.scoreAway,
          goalDifference: doc.scoreHome - doc.scoreAway,
        },
      },
      {
        upsert: true,
      }
    );

    await Rank.findOneAndUpdate(
      {
        champ: doc.champ,
        category: doc.category,
        team: doc.teamAway,
      },
      {
        champ: doc.champ,
        category: doc.category,
        team: doc.teamAway,
        $inc: {
          points: drawn ? 1 : !homeWon ? 3 : 0,
          played: 1,
          wons: drawn ? 0 : !homeWon ? 1 : 0,
          drawn: drawn ? 1 : 0,
          lost: drawn ? 0 : homeWon ? 1 : 0,
          goalsFor: doc.scoreAway,
          goalsAgainst: doc.scoreHome,
          goalDifference: doc.scoreAway - doc.scoreHome,
        },
      },
      {
        upsert: true,
      }
    );
  }
}
