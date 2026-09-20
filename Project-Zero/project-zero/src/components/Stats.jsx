import { motion } from "framer-motion";

function Stats() {
  const stats = [
    ["1028+", "Problems"],
    ["1250+", "Innovators"],
    ["12", "Categories"],
    ["92", "Innovation Score"],
  ];

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",
        gap: "25px",
        padding: "40px 60px",
      }}
    >
      {stats.map(([value, label]) => (
        <motion.div
          key={label}
          whileHover={{
            y: -10,
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
            boxShadow:
              "0 10px 40px rgba(212,175,55,0.08)",
            padding: "24px",
            borderRadius: "24px",
            textAlign: "center",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
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

          <h3
            style={{
              color: "#CBD5E1",
              marginBottom: "15px",
              fontSize: "22px",
            }}
          >
            {label}
          </h3>

          <h1
            style={{
              fontSize: "58px",
              margin: 0,
              color: "#D4AF37",
              fontWeight: "800",
              textShadow:
                "0 0 25px rgba(212,175,55,0.2)",
            }}
          >
            {value}
          </h1>

          {/* Glow */}
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              right: "-80px",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "#D4AF37",
              opacity: 0.06,
              filter: "blur(50px)",
            }}
          />
        </motion.div>
      ))}
    </section>
  );
}

export default Stats;