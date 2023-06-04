const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;

