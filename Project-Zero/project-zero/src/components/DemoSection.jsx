function DemoSection() {
  return (
    <section
      id="demo"
      style={{
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#D4AF37",
          fontSize: "48px",
        }}
      >
        🎥 Project Zero Demo
      </h1>

      <p
        style={{
          color: "#CBD5E1",
          fontSize: "20px",
          marginTop: "20px",
        }}
      >
        See how Project Zero discovers
        and ranks real-world problems.
      </p>

      <div
        style={{
          marginTop: "40px",
        }}
      >
        <iframe
          width="900"
          height="500"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Project Zero Demo"
          allowFullScreen
          style={{
            border: "none",
            borderRadius: "20px",
          }}
        />
      </div>
    </section>
  );
}

export default DemoSection;