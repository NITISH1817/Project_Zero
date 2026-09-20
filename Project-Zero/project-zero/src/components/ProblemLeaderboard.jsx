import problems from "../data/problems";

function ProblemLeaderboard() {
  const topProblems = [...problems]
    .sort(
      (a, b) =>
        b.impactScore - a.impactScore
    )
    .slice(0, 5);

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
          color: "#F8FAFC",
        }}
      >
        🏆 Problem Leaderboard
      </h2>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {topProblems.map(
          (problem, index) => (
            <div
              key={problem.id}
              style={{
                background:
                  "linear-gradient(145deg,#111827,#1f2937)",
                border:
                  "1px solid rgba(212,175,55,0.25)",
                borderRadius: "20px",
                padding: "20px",
                marginBottom: "15px",
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    color: "white",
                  }}
                >
                  #{index + 1}{" "}
                  {problem.title}
                </h3>

                <p
                  style={{
                    color: "#94A3B8",
                  }}
                >
                  {problem.category}
                </p>
              </div>

              <div
                style={{
                  color: "#D4AF37",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                {problem.impactScore}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default ProblemLeaderboard;