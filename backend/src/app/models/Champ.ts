import { mongoose } from '../../database';

const { Schema, model } = mongoose;

export interface IChamp extends mongoose.Document {
  name: string;
  season: number;
}

const ChampSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    season: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Champ = model<IChamp>('Champ', ChampSchema);
