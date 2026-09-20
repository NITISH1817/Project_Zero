import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 60px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(20px)",
      }}
    >
      <motion.h2
        whileHover={{ scale: 1.05 }}
        style={{
          margin: 0,
          fontSize: "32px",
          fontWeight: "800",
          cursor: "pointer",
          letterSpacing: "2px",
        }}
      >
        PROJECT{" "}
        <span
          style={{
            color: "#D4AF37",
            textShadow: "0 0 20px rgba(212,175,55,0.5)",
          }}
        >
          ZERO
        </span>
      </motion.h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#CBD5E1",
            cursor: "pointer",
          }}
        >
          Dashboard
        </span>

        <span
          style={{
            color: "#CBD5E1",
            cursor: "pointer",
          }}
        >
          Problems
        </span>

        <span
          style={{
            color: "#CBD5E1",
            cursor: "pointer",
          }}
        >
          Analytics
        </span>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 0 30px rgba(212,175,55,0.4)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          style={{
            padding: "12px 26px",
            borderRadius: "14px",
            border: "none",
            background:
              "linear-gradient(135deg,#D4AF37,#F7E7CE)",
            color: "#111111",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Submit Problem
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;