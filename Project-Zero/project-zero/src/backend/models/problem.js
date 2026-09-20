const mongoose = require("mongoose");

const ProblemSchema =
  new mongoose.Schema({
    title: String,
    category: String,
    severity: String,
    affectedUsers: Number,
    impactScore: Number,
    innovationScore: Number,
  });

module.exports = mongoose.model(
  "Problem",
  ProblemSchema
);