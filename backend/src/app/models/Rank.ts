import { mongoose } from '../../database';

const { Schema, model } = mongoose;

export interface IRank extends mongoose.Document {
  champ: {};
  category: string;
  team: {};
  points: number;
  played: number;
  wons: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

const RankSchema = new Schema(
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
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    points: { type: Number, min: 0, max: 99 },
    played: { type: Number, min: 0, max: 99 },
    wons: { type: Number, min: 0, max: 99 },
    drawn: { type: Number, min: 0, max: 99 },
    lost: { type: Number, min: 0, max: 99 },
    goalsFor: { type: Number, min: 0, max: 99 },
    goalsAgainst: { type: Number, min: 0, max: 99 },
    goalDifference: Number,
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

RankSchema.virtual('performance').get(function (this: IRank) {
  return Math.round((this.points / (this.played * 3)) * 100);
});

export const Rank = model<IRank>('Rank', RankSchema);
