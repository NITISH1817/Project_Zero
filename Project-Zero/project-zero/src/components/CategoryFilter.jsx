function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "Career",
    "Education",
    "Health",
    "Technology",
    "Campus",
    "Collaboration",
  ];

  return (
    <section
      style={{
        padding: "20px 60px",
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category)
          }
          style={{
            padding: "12px 24px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            background:
              selectedCategory === category
                ? "#D4AF37"
                : "#111827",
            color:
              selectedCategory === category
                ? "#000"
                : "#fff",
          }}
        >
          {category}
        </button>
      ))}
    </section>
  );
}

export default CategoryFilter;