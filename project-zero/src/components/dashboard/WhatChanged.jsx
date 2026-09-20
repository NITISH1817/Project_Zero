import { motion } from "framer-motion";

export default function WhatChanged() {
  const changes = [
    { type: "SIGNAL INCREASE", title: "Water infrastructure", desc: "Problem activity increased 18% across tracked signals.", action: "Investigate", color: "text-[#22D3EE]", bg: "bg-[#22D3EE]/10", border: "border-[#22D3EE]/20" },
    { type: "NEW OPPORTUNITY", title: "Smart Irrigation Networks", desc: "A new opportunity cluster was detected based on agricultural anomalies.", action: "Explore", color: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/10", border: "border-[#8B5CF6]/20" },
    { type: "HIGH IMPACT", title: "Rural Healthcare Access", desc: "Severity score exceeded the critical threshold (90+).", action: "Analyze", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">What Changed?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {changes.map((c, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -2, borderColor: 'rgba(255,255,255,0.2)' }}
            className="bg-[#0B1118] border border-white/5 rounded-xl p-5 flex flex-col cursor-pointer transition-colors"
          >
            <div className={`text-[10px] font-bold tracking-wider uppercase mb-3 ${c.color} flex items-center gap-2`}>
              ↑ {c.type}
            </div>
            <h3 className="font-bold text-white mb-2 text-lg">{c.title}</h3>
            <p className="text-sm text-gray-400 mb-6 flex-1">{c.desc}</p>
            <button className={`text-xs font-bold flex items-center gap-1 ${c.color}`}>
              {c.action} <span>&rarr;</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
