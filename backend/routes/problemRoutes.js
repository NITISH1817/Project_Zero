import express from "express";
import { getProblems, getProblemById, createProblem, upvoteProblem, saveProblem, unsaveProblem, analyzeProblem } from "../controllers/problemController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProblems).post(protect, createProblem);
router.route("/:id").get(getProblemById);
router.route("/:id/vote").post(protect, upvoteProblem);
router.route("/:id/save").post(protect, saveProblem).delete(protect, unsaveProblem);
router.route("/:id/analyze").post(protect, analyzeProblem);

export default router;
