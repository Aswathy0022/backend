const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
});

const UserModal = mongoose.model("user", UserSchema);

module.exports = UserModal;
