import problems from "../data/problems";
import { motion } from "framer-motion";

function CategoryAnalytics() {
  const categoryCount = {};

  problems.forEach((problem) => {
    categoryCount[problem.category] =
      (categoryCount[problem.category] || 0) + 1;
  });

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
        📊 Category Analytics
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "28px",
        }}
      >
        {Object.entries(categoryCount).map(
          ([category, count]) => (
            <motion.div
              key={category}
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
                textAlign: "center",
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

              {/* Category Name */}
              <h2
                style={{
                  color: "#D4AF37",
                  marginBottom: "15px",
                  fontSize: "24px",
                }}
              >
                {category}
              </h2>

              {/* Count */}
              <h1
                style={{
                  margin: 0,
                  fontSize: "64px",
                  color: "#F7E7CE",
                  fontWeight: "800",
                }}
              >
                {count}
              </h1>

              <p
                style={{
                  color: "#CBD5E1",
                  marginTop: "10px",
                  fontSize: "15px",
                }}
              >
                Problems Reported
              </p>

              {/* Decorative Glow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-70px",
                  right: "-70px",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: "#D4AF37",
                  opacity: 0.08,
                  filter: "blur(50px)",
                }}
              />
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}

export default CategoryAnalytics;