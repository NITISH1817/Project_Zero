import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "140px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Premium Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        style={{
          display: "inline-block",
          padding: "12px 24px",
          borderRadius: "999px",
          background: "rgba(212,175,55,0.08)",
          border: "1px solid rgba(212,175,55,0.25)",
          backdropFilter: "blur(20px)",
          color: "#D4AF37",
          fontWeight: "600",
          marginBottom: "35px",
        }}
      >
        ✨ Innovation Intelligence Platform
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "clamp(3rem,8vw,7rem)",
          fontWeight: "900",
          lineHeight: "1",
          marginBottom: "25px",
          color: "#F8FAFC",
        }}
      >
        Discover
        <br />
        <span
          style={{
            color: "#D4AF37",
            textShadow:
              "0 0 40px rgba(212,175,55,0.25)",
          }}
        >
          Problems Worth Solving
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          color: "#CBD5E1",
          fontSize: "24px",
          lineHeight: "1.8",
        }}
      >
        The world's first operating system for
        discovering, ranking and transforming
        unsolved problems into startup
        opportunities and innovation ventures.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Explore Problems */}
        <motion.button
          onClick={() =>
            document
              .getElementById("problems")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          style={{
            padding: "18px 40px",
            borderRadius: "18px",
            border: "none",
            background:
              "linear-gradient(135deg,#D4AF37,#F7E7CE)",
            color: "#111111",
            fontSize: "18px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow:
              "0 0 40px rgba(212,175,55,0.2)",
          }}
        >
          Explore Problems →
        </motion.button>

        {/* Watch Demo */}
        <motion.button
          onClick={() =>
            document
              .getElementById("demo")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          style={{
            padding: "18px 40px",
            borderRadius: "18px",
            background:
              "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            border:
              "1px solid rgba(212,175,55,0.25)",
            color: "#D4AF37",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Watch Demo
        </motion.button>
      </motion.div>

      {/* Stats */}
      <div
        style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {[
          ["1028+", "Problems"],
          ["1250+", "Innovators"],
          ["92", "Innovation Score"],
        ].map(([value, label]) => (
          <motion.div
            key={label}
            whileHover={{
              y: -8,
              scale: 1.04,
            }}
            style={{
              background:
                "linear-gradient(145deg,#111827,#1f2937)",
              border:
                "1px solid rgba(212,175,55,0.25)",
              borderRadius: "20px",
              padding: "22px 35px",
              minWidth: "200px",
              boxShadow:
                "0 10px 40px rgba(212,175,55,0.08)",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#D4AF37",
                fontSize: "40px",
              }}
            >
              {value}
            </h2>

            <p
              style={{
                color: "#CBD5E1",
                marginTop: "8px",
              }}
            >
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Hero;