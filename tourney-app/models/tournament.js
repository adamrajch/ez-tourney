import mongoose from "mongoose";
import shortid from "shortid";
const { String } = mongoose.Schema.Types;
const TournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  bracket: {
    type: String,
  },
});

export default mongoose.models.Tournament ||
  mongoose.model("Tournament", TournamentSchema);
