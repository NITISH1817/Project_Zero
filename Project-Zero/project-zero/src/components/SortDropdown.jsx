function SortDropdown({ sortBy, setSortBy }) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "30px",
      }}
    >
      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
        style={{
          padding: "14px 20px",
          borderRadius: "12px",
          background: "#111827",
          color: "white",
          border: "1px solid rgba(212,175,55,0.3)",
          fontSize: "16px",
        }}
      >
        <option value="impact">
          Sort by Impact Score
        </option>

        <option value="innovation">
          Sort by Innovation Score
        </option>

        <option value="users">
          Sort by Affected Users
        </option>
      </select>
    </section>
  );
}

export default SortDropdown;