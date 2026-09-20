import { query } from "../config/db.js";

// @desc    Get all problems
// @route   GET /api/problems
// @access  Public
export const getProblems = async (req, res) => {
  try {
    const result = await query("SELECT * FROM problems ORDER BY created_at DESC");
    res.json({ success: true, data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Get single problem
// @route   GET /api/problems/:id
// @access  Public
export const getProblemById = async (req, res) => {
  try {
    const result = await query("SELECT * FROM problems WHERE id = $1", [req.params.id]);
    if (result.rows.length > 0) {
      res.json({ success: true, data: result.rows[0] });
    } else {
      res.status(404).json({ success: false, error: "Problem not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Create a problem
// @route   POST /api/problems
// @access  Private
export const createProblem = async (req, res) => {
  const { title, description, category, severity, affectedUsers } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({ success: false, error: "Title and description are required" });
  }

  try {
    const result = await query(
      "INSERT INTO problems (title, description, category, severity, affected_users, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [title, description, category, severity, affectedUsers, req.user ? req.user.id : null]
    );
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Upvote a problem
// @route   POST /api/problems/:id/vote
// @access  Private
export const upvoteProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const existing = await query("SELECT * FROM problem_votes WHERE problem_id = $1 AND user_id = $2", [id, userId]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ success: false, error: "Already voted for this problem" });
    }

    await query("INSERT INTO problem_votes (problem_id, user_id) VALUES ($1, $2)", [id, userId]);
    res.json({ success: true, message: "Problem upvoted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Save a problem
// @route   POST /api/problems/:id/save
// @access  Private
export const saveProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    
    await query("INSERT INTO saved_problems (problem_id, user_id) VALUES ($1, $2) ON CONFLICT DO NOTHING", [id, userId]);
    res.json({ success: true, message: "Problem saved" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Unsave a problem
// @route   DELETE /api/problems/:id/save
// @access  Private
export const unsaveProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    
    await query("DELETE FROM saved_problems WHERE problem_id = $1 AND user_id = $2", [id, userId]);
    res.json({ success: true, message: "Problem unsaved" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Analyze a problem with AI
// @route   POST /api/problems/:id/analyze
// @access  Private
export const analyzeProblem = async (req, res) => {
  try {
    const { id } = req.params;
    if (!process.env.GEMINI_API_KEY) {
      return res.json({ success: true, data: { summary: "AI service not configured." } });
    }
    const mockSummary = "AI Summary for problem " + id;
    
    const result = await query(
      "INSERT INTO ai_analyses (problem_id, summary) VALUES ($1, $2) RETURNING *",
      [id, mockSummary]
    );
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
