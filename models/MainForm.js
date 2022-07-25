import mongoose from "mongoose";

const mainFormSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your work email"],
    lowercase: true,
  },
  company: {
    type: String,
    required: [true, "Please enter your company name"],
  },
  pageViews: {
    type: String,
    required: [true, "Please select your monthly page views"],
  },
});

const MainForm = mongoose.model("mainForm", mainFormSchema);

module.exports = MainForm;
