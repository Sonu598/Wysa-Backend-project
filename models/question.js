const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  text: String,
  type: String,
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
