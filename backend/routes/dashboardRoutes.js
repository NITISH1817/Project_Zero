import express from "express";
import { query } from "../config/db.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {
  try {
    const problemsCount = await query("SELECT COUNT(*) FROM problems");
    const savedCount = await query("SELECT COUNT(*) FROM saved_problems WHERE user_id = $1", [req.user.id]);
    const aiCount = await query("SELECT COUNT(*) FROM ai_analyses");

    res.json({
      success: true,
      data: {
        problemsTracked: parseInt(problemsCount.rows[0].count),
        savedProblems: parseInt(savedCount.rows[0].count),
        aiAnalyses: parseInt(aiCount.rows[0].count),
        opportunities: 0,
        recentActivity: []
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
