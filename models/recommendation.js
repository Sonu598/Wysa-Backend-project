const mongoose = require("mongoose");

const RecommendationSchema = new mongoose.Schema({
  text: String,
});

const Recommendation = mongoose.model("Recommendation", RecommendationSchema);

module.exports = Recommendation;
