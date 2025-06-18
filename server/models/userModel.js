const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  photoURL: String,
  uid: String,
  createdAt: Date
});

module.exports = mongoose.model("User", userSchema);
