const { Schema, model } = require("../dbconnection");

const mySchema = new Schema({
  username: String,
  email: { type: String, require: true },
  message: String,
  rating: String,

  createdAt: Date,
});

module.exports = model("userfeedback", mySchema);
