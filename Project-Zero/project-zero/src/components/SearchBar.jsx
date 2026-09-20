function SearchBar({ search, setSearch }) {
  return (
    <section
      style={{
        padding: "20px 60px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search problems, categories, severity..."
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "18px",
            background: "#111827",
            border: "1px solid rgba(212,175,55,0.25)",
            color: "white",
            fontSize: "18px",
            outline: "none",
          }}
        />
      </div>
    </section>
  );
}

export default SearchBar;