const mongoose = require("mongoose");

const AssessmentSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
  score: Number,
  recommendations: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Recommendation" },
  ],
});

const Assessment = mongoose.model("Assessment", AssessmentSchema);

module.exports = Assessment;
