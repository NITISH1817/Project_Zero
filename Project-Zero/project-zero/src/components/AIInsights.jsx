import { motion } from "framer-motion";

function AIInsights() {
  const insights = [
    {
      icon: "📈",
      title: "Most Growing Category",
      value: "Career Development",
      color: "#10B981",
    },
    {
      icon: "⚠️",
      title: "Most Ignored Problem",
      value: "Finding Mentors",
      color: "#F59E0B",
    },
    {
      icon: "🚀",
      title: "Top Opportunity",
      value: "Team Formation Platform",
      color: "#D4AF37",
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
        🧠 AI Insights
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(340px,1fr))",
          gap: "28px",
        }}
      >
        {insights.map((item, index) => (
          <motion.div
            key={index}
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
              padding: "28px",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Accent Line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "4px",
                background: item.color,
              }}
            />

            {/* Icon */}
            <div
              style={{
                fontSize: "50px",
                marginBottom: "15px",
              }}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3
              style={{
                color: "#CBD5E1",
                marginBottom: "15px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {item.title}
            </h3>

            {/* Main Value */}
            <h2
              style={{
                color: item.color,
                margin: 0,
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              {item.value}
            </h2>

            {/* Bottom Glow */}
            <div
              style={{
                position: "absolute",
                bottom: "-80px",
                right: "-80px",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: item.color,
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

export default AIInsights;