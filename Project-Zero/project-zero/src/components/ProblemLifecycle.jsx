function ProblemLifecycle() {
  const steps = [
    "Problem Reported",
    "Trending",
    "AI Analysis",
    "Opportunity Found",
    "Startup Generated",
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
          marginBottom: "60px",
          color: "#F8FAFC",
        }}
      >
        🎯 Problem Lifecycle
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(145deg,#111827,#1f2937)",
                border:
                  "1px solid rgba(212,175,55,0.25)",
                borderRadius: "20px",
                padding: "20px 30px",
                color: "white",
                fontWeight: "600",
              }}
            >
              {step}
            </div>

            {index !== steps.length - 1 && (
              <div
                style={{
                  margin: "0 10px",
                  color: "#D4AF37",
                  fontSize: "30px",
                }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProblemLifecycle;