import { useState } from "react";

function AIStartupGenerator() {
  const [problem, setProblem] = useState("");
  const [idea, setIdea] = useState(null);

  const generateIdea = () => {
    let startup = {
      name: "InnovationX",
      description:
        "AI-powered platform solving real-world problems.",
      model: "Subscription",
      score: 85,
    };

    if (problem.toLowerCase().includes("mentor")) {
      startup = {
        name: "MentorAI",
        description:
          "AI mentor matching platform for students.",
        model: "Premium Subscription",
        score: 95,
      };
    }

    if (problem.toLowerCase().includes("team")) {
      startup = {
        name: "HackMate",
        description:
          "Find project teammates using AI matching.",
        model: "Freemium",
        score: 94,
      };
    }

    if (problem.toLowerCase().includes("scholarship")) {
      startup = {
        name: "ScholarLink",
        description:
          "Scholarship discovery and deadline tracker.",
        model: "Institution License",
        score: 92,
      };
    }

    setIdea(startup);
  };

  return (
    <section
      style={{
        padding: "80px 60px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "40px",
        }}
      >
        🤖 AI Startup Generator
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background:
            "linear-gradient(145deg,#111827,#1f2937)",
          borderRadius: "30px",
          padding: "40px",
        }}
      >
        <input
          value={problem}
          onChange={(e) =>
            setProblem(e.target.value)
          }
          placeholder="Enter a problem..."
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "16px",
            border: "none",
            background: "#0F172A",
            color: "white",
            fontSize: "18px",
          }}
        />

        <button
          onClick={generateIdea}
          style={{
            marginTop: "20px",
            padding: "16px 30px",
            borderRadius: "16px",
            border: "none",
            background:
              "linear-gradient(90deg,#D4AF37,#F7E7CE)",
            color: "#000",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Generate Startup
        </button>

        {idea && (
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <h1>{idea.name}</h1>

            <p>{idea.description}</p>

            <h3>
              Business Model: {idea.model}
            </h3>

            <h2>
              Potential Score: {idea.score}
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default AIStartupGenerator;