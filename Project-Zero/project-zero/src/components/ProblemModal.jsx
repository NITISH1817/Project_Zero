function ProblemModal({
  problem,
  onClose,
}) {
  if (!problem) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background:
          "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        style={{
          width: "700px",
          maxWidth: "90%",
          background:
            "linear-gradient(145deg,#111827,#1f2937)",
          borderRadius: "30px",
          padding: "35px",
          color: "white",
        }}
      >
        <h1>{problem.title}</h1>

        <p>
          Category: {problem.category}
        </p>

        <p>
          Severity: {problem.severity}
        </p>

        <p>
          Users: {problem.affectedUsers}
        </p>

        <p>
          Impact: {problem.impactScore}
        </p>

        <p>
          Innovation:
          {problem.innovationScore}
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProblemModal;