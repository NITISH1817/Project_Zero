import { motion } from "framer-motion";

export default function KPIGrid() {
  const kpis = [
    { label: "Problems Tracked", value: "124", delta: "+18.4%", positive: true, context: "this month" },
    { label: "Emerging Problems", value: "18", delta: "+5 new", positive: false, context: "needs review" },
    { label: "High Impact Signals", value: "31", delta: "↑ 12%", positive: true, context: "vs last week" },
    { label: "Opportunities", value: "24", delta: "8 new", positive: true, context: "generated" },
    { label: "AI Analyses", value: "86", delta: "+21%", positive: true, context: "this month" },
    { label: "Saved Problems", value: "14", delta: "3 active", positive: false, context: "require attention" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {kpis.map((kpi, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ y: -2, borderColor: 'rgba(79,140,255,0.3)' }}
          className="glass-panel p-4 rounded-xl border border-white/5 flex flex-col gap-1 transition-colors cursor-default"
        >
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">{kpi.label}</div>
          <div className="text-2xl font-extrabold text-white my-1">{kpi.value}</div>
          <div className="flex items-center justify-between text-xs mt-auto">
            <span className={`font-bold ${kpi.positive ? 'text-green-400' : 'text-accent-blue'}`}>{kpi.delta}</span>
            <span className="text-text-muted">{kpi.context}</span>
          </div>
          {/* Mock sparkline using a simple CSS gradient border bottom for aesthetics */}
          <div className={`mt-2 h-0.5 w-full rounded-full ${kpi.positive ? 'bg-gradient-to-r from-transparent via-green-500/50 to-transparent' : 'bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent'}`}></div>
        </motion.div>
      ))}
    </div>
  );
}
