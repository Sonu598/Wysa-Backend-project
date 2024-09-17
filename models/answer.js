const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  assessmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Assessment" },
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  answer: String,
});

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;
