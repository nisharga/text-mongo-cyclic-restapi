const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: { required: true, type: String },
  age: { required: true, type: Number },
});

module.exports = mongoose.model("Student", schema);
