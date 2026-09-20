import { useState } from "react";
import { motion } from "framer-motion";

function SubmitProblem({
  setProblemList,
}) {
  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("");

  const submitProblem = () => {
    if (!title || !category) return;

    const newProblem = {
      id: Date.now(),
      title,
      category,
      severity: "Medium",
      urgency: "Medium",
      affectedUsers: 100,
      impactScore: 70,
      innovationScore: 75,
    };

    setProblemList((prev) => [
      newProblem,
      ...prev,
    ]);

    setTitle("");
    setCategory("");
  };

  return (
    <section
      style={{
        padding: "100px 20px",
      }}
    >
      <motion.div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background:
            "linear-gradient(145deg,#111827,#1f2937)",
          borderRadius: "30px",
          padding: "40px",
        }}
      >
        <h2>
          🚀 Submit a Problem
        </h2>

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Problem Title"
          style={{
            width: "100%",
            padding: "16px",
            marginTop: "20px",
            borderRadius: "14px",
          }}
        />

        <input
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          placeholder="Category"
          style={{
            width: "100%",
            padding: "16px",
            marginTop: "15px",
            borderRadius: "14px",
          }}
        />

        <button
          onClick={submitProblem}
          style={{
            marginTop: "20px",
            padding: "16px 30px",
            borderRadius: "14px",
            border: "none",
            background:
              "linear-gradient(90deg,#D4AF37,#F7E7CE)",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Submit Problem
        </button>
      </motion.div>
    </section>
  );
}

export default SubmitProblem;