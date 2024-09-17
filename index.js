const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { connection } = require("./config/db");
const { UserModel } = require("./models/usermodel");
const { Assessment } = require("./models/assesment");
const { Question } = require("./models/question");
const { Recommendation } = require("./models/recommendation");
require("dotenv").config();

// Create a new user
app.post("/users", async (req, res) => {
  try {
    const { nickname, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ nickname, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWTSecrete);
    res.json({ userId: user._id, token });
    //   console.log(token);
  } catch (error) {
    res.send(error.message);
  }
});

// Get the sleep assessment questions for a user
app.get("/assessments", async (req, res) => {
  try {
    const userId = req.query.userId;
    const assessment = await Assessment.findOne({ userId });
    if (!assessment) {
      const questions = await Question.find();
      const newAssessment = new Assessment({ userId, questions });
      await newAssessment.save();
      res.json({ assessmentId: newAssessment._id, questions });
    } else {
      res.json({
        assessmentId: assessment._id,
        questions: assessment.questions,
      });
    }
  } catch (error) {
    res.send(error.message);
  }
});

// Submit the user's answers
app.post("/assessments", async (req, res) => {
  try {
    const { assessmentId, answers } = req.body;
    const assessment = await Assessment.findById(assessmentId);
    assessment.answers = answers;
    const score = calculateScore(answers); //calculate the sleep score
    const recommendations = await getRecommendations(score);
    assessment.score = score;
    assessment.recommendations = recommendations; //calculate the recomm
    await assessment.save();
    res.json({ score, recommendations });
  } catch (error) {
    res.send(error.message);
  }
});

// Get the user's sleep score and recommendations
app.get("/scores", async (req, res) => {
  try {
    const userId = req.query.userId;
    const assessment = await Assessment.findOne({ userId });
    if (!assessment) {
      res.json({ score: null, recommendations: [] });
    } else {
      res.json({
        score: assessment.score,
        recommendations: assessment.recommendations,
      });
    }
  } catch (error) {
    res.send(error.message);
  }
});

// Helper functions

function calculateScore(answers) {
  return "Your score is 76%. It will improve to 95% soon."; //Hardcode the score
}

async function getRecommendations(score) {
  return []; //Please Ignore
}

// Start the server
app.listen(process.env.Port, async () => {
  try {
    await connection;
    console.log("conneccted with Database");
  } catch (error) {
    console.log(error.message);
  }
  console.log(`Server is running at Port ${process.env.Port}`);
});
