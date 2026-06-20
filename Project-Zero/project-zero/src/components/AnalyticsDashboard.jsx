import problems from "../data/problems";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AnalyticsDashboard() {
  const categoryCount = {};

  problems.forEach((problem) => {
    categoryCount[problem.category] =
      (categoryCount[problem.category] || 0) + 1;
  });

  const data = Object.entries(categoryCount).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const COLORS = [
    "#D4AF37",
    "#10B981",
    "#3B82F6",
    "#8B5CF6",
    "#EF4444",
    "#F59E0B",
  ];

  return (
    <section
      style={{
        padding: "80px 60px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "40px",
        }}
      >
        📊 Analytics Dashboard
      </h2>

      <div
        style={{
          background:
            "linear-gradient(145deg,#111827,#1f2937)",
          borderRadius: "30px",
          padding: "40px",
          height: "500px",
        }}
      >
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={180}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default AnalyticsDashboard;