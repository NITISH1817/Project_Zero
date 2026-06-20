import { motion } from "framer-motion";

function TrendingProblems({
  problems,
  setSelectedProblem,
}) {
  return (
    <section
      id="problems"
      style={{
        padding: "80px 60px",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          textAlign: "center",
          color: "#F8FAFC",
          marginBottom: "40px",
        }}
      >
        🔥 Trending Problems
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "30px",
        }}
      >
        {problems.map((problem) => (
          <motion.div
            key={problem.id}
            onClick={() =>
              setSelectedProblem &&
              setSelectedProblem(problem)
            }
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            transition={{
              duration: 0.25,
            }}
            style={{
              background:
                "linear-gradient(145deg,#111827,#1f2937)",
              border:
                "1px solid rgba(212,175,55,0.25)",
              borderRadius: "28px",
              padding: "28px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow:
                "0 10px 40px rgba(212,175,55,0.08)",
            }}
          >
            {/* Gold Line */}
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

            {/* Badge */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background:
                  "rgba(212,175,55,0.12)",
                color: "#D4AF37",
                padding: "8px 14px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              HIGH OPPORTUNITY
            </div>

            <h3
              style={{
                color: "#F8FAFC",
                fontSize: "28px",
                marginBottom: "20px",
                maxWidth: "75%",
              }}
            >
              {problem.title}
            </h3>

            <div
              style={{
                display: "inline-block",
                background:
                  "rgba(212,175,55,0.12)",
                color: "#D4AF37",
                padding: "8px 14px",
                borderRadius: "999px",
                marginBottom: "25px",
              }}
            >
              {problem.category}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  background:
                    "rgba(255,255,255,0.03)",
                  padding: "18px",
                  borderRadius: "18px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "#94A3B8",
                  }}
                >
                  Impact Score
                </p>

                <h2
                  style={{
                    color: "#10B981",
                    margin: 0,
                  }}
                >
                  {problem.impactScore}
                </h2>
              </div>

              <div
                style={{
                  background:
                    "rgba(255,255,255,0.03)",
                  padding: "18px",
                  borderRadius: "18px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "#94A3B8",
                  }}
                >
                  Innovation
                </p>

                <h2
                  style={{
                    color: "#D4AF37",
                    margin: 0,
                  }}
                >
                  {problem.innovationScore}
                </h2>
              </div>
            </div>

            <div
              style={{
                borderTop:
                  "1px solid rgba(255,255,255,0.08)",
                paddingTop: "15px",
              }}
            >
              <p
                style={{
                  color: "#CBD5E1",
                }}
              >
                👥 {problem.affectedUsers} Users
              </p>

              <p
                style={{
                  color:
                    problem.severity === "High"
                      ? "#EF4444"
                      : "#F59E0B",
                }}
              >
                ⚡ {problem.severity} Severity
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {problems.length === 0 && (
        <h3
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "#D4AF37",
          }}
        >
          No Problems Found
        </h3>
      )}
    </section>
  );
}

export default TrendingProblems;