function AIPredictionEngine() {
  const predictions = [
    {
      title: "Mentorship Problems",
      growth: "+45%",
      startup: "MentorAI",
    },
    {
      title: "Internship Discovery",
      growth: "+38%",
      startup: "CareerLink",
    },
    {
      title: "Student Collaboration",
      growth: "+29%",
      startup: "HackMate",
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
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "40px",
          color: "#F8FAFC",
        }}
      >
        🔮 AI Prediction Engine
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {predictions.map((item) => (
          <div
            key={item.title}
            style={{
              background:
                "linear-gradient(145deg,#111827,#1f2937)",
              border:
                "1px solid rgba(212,175,55,0.25)",
              borderRadius: "24px",
              padding: "25px",
            }}
          >
            <h2 style={{ color: "#D4AF37" }}>
              {item.title}
            </h2>

            <h1 style={{ color: "#10B981" }}>
              {item.growth}
            </h1>

            <p>
              Suggested Startup:
            </p>

            <h3>{item.startup}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AIPredictionEngine;