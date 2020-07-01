import { mongoose } from '@database';
import { baseURL } from '@config';

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
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

ChampSchema.virtual('rule_url').get(function (this: IChamp) {
  return `${baseURL}/files/rules/rule-${this.season}.pdf`;
});

export const Champ = model<IChamp>('Champ', ChampSchema);
