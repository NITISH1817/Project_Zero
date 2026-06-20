import problems from "../data/problems";
import { motion } from "framer-motion";

function InnovationRadar() {
  const topProblem = [...problems].sort(
    (a, b) => b.impactScore - a.impactScore
  )[0];

  const startupSuggestion =
    topProblem.category === "Career"
      ? "MentorAI Platform"
      : topProblem.category === "Collaboration"
      ? "HackMate"
      : topProblem.category === "Education"
      ? "ScholarLink"
      : "Innovation Opportunity Detected";

  return (
    <section
      style={{
        padding: "80px 60px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "52px",
          color: "#F8FAFC",
          marginBottom: "40px",
        }}
      >
        📡 Innovation Radar
      </h2>

      <motion.div
        whileHover={{
          y: -5,
          scale: 1.01,
        }}
        transition={{
          duration: 0.3,
        }}
        style={{
          background:
            "linear-gradient(145deg,#111827,#1f2937)",
          border:
            "1px solid rgba(212,175,55,0.25)",
          borderRadius: "30px",
          padding: "40px",
          position: "relative",
          overflow: "hidden",
          boxShadow:
            "0 10px 40px rgba(212,175,55,0.08)",
        }}
      >
        {/* Gold Top Border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background:
              "linear-gradient(90deg,#D4AF37,#F7E7CE)",
          }}
        />

        {/* Problem Title */}
        <h1
          style={{
            textAlign: "center",
            color: "#D4AF37",
            fontSize: "48px",
            marginBottom: "40px",
            fontWeight: "800",
          }}
        >
          {topProblem.title}
        </h1>

        {/* Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background:
                "rgba(255,255,255,0.03)",
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#CBD5E1" }}>
              👥 Affected Users
            </h3>

            <h2
              style={{
                color: "#F8FAFC",
                marginTop: "15px",
              }}
            >
              {topProblem.affectedUsers}
            </h2>
          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.03)",
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#CBD5E1" }}>
              📈 Impact Score
            </h3>

            <h2
              style={{
                color: "#10B981",
                marginTop: "15px",
              }}
            >
              {topProblem.impactScore}
            </h2>
          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.03)",
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#CBD5E1" }}>
              🚀 Innovation Score
            </h3>

            <h2
              style={{
                color: "#D4AF37",
                marginTop: "15px",
              }}
            >
              {topProblem.innovationScore}
            </h2>
          </div>

          <div
            style={{
              background:
                "rgba(255,255,255,0.03)",
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#CBD5E1" }}>
              ⚡ Severity
            </h3>

            <h2
              style={{
                color:
                  topProblem.severity === "High"
                    ? "#EF4444"
                    : "#F59E0B",
                marginTop: "15px",
              }}
            >
              {topProblem.severity}
            </h2>
          </div>
        </div>

        {/* AI Startup Recommendation */}
        <div
          style={{
            marginTop: "35px",
            background:
              "linear-gradient(145deg,#0f172a,#111827)",
            border:
              "1px solid rgba(212,175,55,0.2)",
            borderRadius: "24px",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#D4AF37",
              marginBottom: "15px",
              fontSize: "24px",
            }}
          >
            🤖 AI Suggested Startup
          </h3>

          <h2
            style={{
              color: "#F8FAFC",
              marginBottom: "10px",
            }}
          >
            {startupSuggestion}
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            This opportunity is generated from impact,
            severity, affected users and innovation
            potential. It represents the strongest
            startup opportunity currently detected in
            Project Zero.
          </p>
        </div>

        {/* Gold Glow */}
        <div
          style={{
            position: "absolute",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "#D4AF37",
            filter: "blur(100px)",
            opacity: 0.08,
            right: "-120px",
            bottom: "-120px",
          }}
        />
      </motion.div>
    </section>
  );
}

export default InnovationRadar;