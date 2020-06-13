import { mongoose } from '../../database';
import { baseURL } from '../../config';

const { Schema, model } = mongoose;

export interface ITeam extends mongoose.Document {
  longName: string;
  shortName: string;
  thumbnail: string;
}

const TeamSchema = new Schema(
  {
    longName: {
      type: String,
      uppercase: true,
      unique: true,
      required: true,
    },
    shortName: {
      type: String,
      uppercase: true,
      required: true,
      min: 3,
      max: 3,
    },
    thumbnail: String,
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

TeamSchema.virtual('thumbnail_url').get(function (this: ITeam) {
  return `${baseURL}/files/shields/${this.thumbnail}`;
});

export const Team = model<ITeam>('Team', TeamSchema);
