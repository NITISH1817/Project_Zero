function FounderDashboard() {
  const stats = [
    {
      title: "Problems Discovered",
      value: "1,028",
      icon: "📌",
    },
    {
      title: "Opportunities Generated",
      value: "246",
      icon: "🚀",
    },
    {
      title: "Potential Startups",
      value: "81",
      icon: "💡",
    },
    {
      title: "Estimated Market Size",
      value: "$24M",
      icon: "💰",
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
        🚀 Founder Dashboard
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background:
                "linear-gradient(145deg,#111827,#1f2937)",
              border:
                "1px solid rgba(212,175,55,0.25)",
              borderRadius: "24px",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px" }}>
              {item.icon}
            </div>

            <h1
              style={{
                color: "#D4AF37",
                margin: "15px 0",
              }}
            >
              {item.value}
            </h1>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FounderDashboard;