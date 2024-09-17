# Wysa Backend Project

This project implements a RESTful API for a sleep assessment application, similar to the Wysa for Sleep app. The API allows users to complete sleep assessments, receive personalized recommendations, and track their sleep health. The backend is built using **Node.js** and **MongoDB**.

## Deployed Link - https://wysa-backend-project.onrender.com

## Overview

This project is a REST API that allows users to:
- Sign up and authenticate.
- Complete sleep assessments.
- Receive personalized sleep scores and recommendations.
- Track their sleep over time.

The API is designed using a modern stack: **Node.js**, **Express**, and **MongoDB**. The assessments and scores are stored securely, and personalized recommendations are generated based on the user's input.

## Features

- **User Authentication:** Users can sign up and log in to the app.
- **Sleep Assessment:** A dynamic sleep assessment system with multiple-choice questions and ratings.
- **Sleep Score Calculation:** After completing the assessment, users receive a sleep score and recommendations.
- **RESTful Endpoints:** API endpoints for onboarding, assessments, and scores.
- **MongoDB Schema:** A MongoDB schema to store user data, assessments, and recommendations.

## API Documentation

- **POST "/users"** - Create a new user account.
- **GET "/assessments"** - Get the assessment questions.
- **POST "/assessments"** - Post the assessment answers.
- **GET "/scores"** - Get the score of your assessment.

## Run the server

**Command to run in terminal** - **npm run server**





