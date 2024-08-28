const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  tags: [String],
  status: { type: String, default: "incomplete" },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

const habitModel = mongoose.model("habit", habitSchema);
module.exports = habitModel;
