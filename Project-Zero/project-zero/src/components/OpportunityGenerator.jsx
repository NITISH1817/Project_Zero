import { motion } from "framer-motion";

function OpportunityGenerator() {
  const ideas = [
    {
      name: "MentorAI",
      description:
        "AI-powered mentor matching platform for students and professionals.",
      market: "$2.1B Market",
      score: 95,
    },
    {
      name: "HackMate",
      description:
        "Find teammates based on skills, interests, and hackathon goals.",
      market: "$1.4B Market",
      score: 94,
    },
    {
      name: "ScholarLink",
      description:
        "Scholarship discovery, deadline tracking, and eligibility analysis.",
      market: "$950M Market",
      score: 91,
    },
  ];

  return (
    <section
      style={{
        padding: "80px 60px",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "35px",
          color: "#F8FAFC",
        }}
      >
        🚀 Opportunity Generator
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(340px,1fr))",
          gap: "28px",
        }}
      >
        {ideas.map((idea) => (
          <motion.div
            key={idea.name}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow:
                "0 20px 60px rgba(212,175,55,0.15)",
            }}
            transition={{
              duration: 0.25,
            }}
            style={{
              background:
                "linear-gradient(145deg,#111827,#1f2937)",
              border:
                "1px solid rgba(212,175,55,0.25)",
              borderRadius: "24px",
              padding: "30px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
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

            <h2
              style={{
                color: "#D4AF37",
                marginBottom: "15px",
                fontSize: "28px",
              }}
            >
              {idea.name}
            </h2>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              {idea.description}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#10B981",
                  fontWeight: "600",
                }}
              >
                {idea.market}
              </span>

              <span
                style={{
                  background:
                    "rgba(212,175,55,0.12)",
                  color: "#D4AF37",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  fontWeight: "700",
                }}
              >
                Score {idea.score}
              </span>
            </div>

            {/* Decorative Glow */}
            <div
              style={{
                position: "absolute",
                bottom: "-70px",
                right: "-70px",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "#D4AF37",
                opacity: 0.08,
                filter: "blur(50px)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OpportunityGenerator;