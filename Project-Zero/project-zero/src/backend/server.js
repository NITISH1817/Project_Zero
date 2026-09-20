const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/projectzero")
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err);
  });

// Problem Schema
const problemSchema = new mongoose.Schema({
  title: String,
  category: String,
  severity: String,
  urgency: String,
  affectedUsers: Number,
  impactScore: Number,
  innovationScore: Number,
});

const Problem = mongoose.model(
  "Problem",
  problemSchema
);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Project Zero Backend Running");
});

// Get All Problems
app.get("/problems", async (req, res) => {
  try {
    const problems = await Problem.find();

    res.status(200).json(problems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Add Problem
app.post("/problems", async (req, res) => {
  try {
    const problem = new Problem(req.body);

    const savedProblem =
      await problem.save();

    res.status(201).json(savedProblem);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete Problem
app.delete(
  "/problems/:id",
  async (req, res) => {
    try {
      await Problem.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Problem deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

// Update Problem
app.put(
  "/problems/:id",
  async (req, res) => {
    try {
      const updatedProblem =
        await Problem.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.json(updatedProblem);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});