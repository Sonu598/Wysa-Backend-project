const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nickname: String,
  password: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
