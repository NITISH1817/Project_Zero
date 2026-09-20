import { motion } from "framer-motion";

export default function EmergingProblems() {
  const problems = [
    { title: "Water supply interruptions", category: "Sustainability", impact: 92, trend: "↑ 18%", users: "12.4K", innovation: 87, status: "Emerging" },
    { title: "Campus transport inefficiency", category: "Mobility", impact: 86, trend: "↑ 12%", users: "8.7K", innovation: 82, status: "Emerging" },
    { title: "Healthcare appointment delays", category: "Healthcare", impact: 84, trend: "↑ 9%", users: "21K", innovation: 78, status: "Stable" },
  ];

  return (
    <div className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-white/5 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Emerging Problems</h2>
          <p className="text-sm text-text-muted mt-1">High-velocity signals from your ecosystem.</p>
        </div>
        <button className="text-sm font-bold text-accent-blue hover:text-white transition-colors">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 text-xs font-semibold text-text-muted uppercase tracking-wider bg-white/5">
              <th className="p-4 pl-6">Problem</th>
              <th className="p-4">Category</th>
              <th className="p-4">Impact</th>
              <th className="p-4">Trend</th>
              <th className="p-4">Users</th>
              <th className="p-4 pr-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((p, idx) => (
              <motion.tr 
                key={idx}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="border-b border-white/5 text-sm cursor-pointer group"
              >
                <td className="p-4 pl-6 font-medium text-white group-hover:text-accent-blue transition-colors border-l-2 border-transparent group-hover:border-accent-blue">
                  {p.title}
                </td>
                <td className="p-4"><span className="px-2 py-1 rounded bg-white/5 text-xs">{p.category}</span></td>
                <td className="p-4 font-bold text-accent-blue">{p.impact}</td>
                <td className="p-4 font-bold text-accent-cyan">{p.trend}</td>
                <td className="p-4 text-text-muted">{p.users}</td>
                <td className="p-4 pr-6">
                  <button className="text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded transition-colors">Analyze &rarr;</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
