import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
  },
  page: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Subscribe = mongoose.model("subscribe", subscribeSchema);

module.exports = Subscribe;
