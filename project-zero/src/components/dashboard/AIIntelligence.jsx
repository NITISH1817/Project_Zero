export default function AIIntelligence() {
  const insights = [
    {
      type: "OBSERVATION",
      color: "text-[#8B5CF6]",
      bg: "bg-[#8B5CF6]",
      text: "Water-related problems are appearing across multiple categories including Agriculture and Mobility.",
      action: "Why am I seeing this?"
    },
    {
      type: "ANALYSIS",
      color: "text-[#4F8CFF]",
      bg: "bg-[#4F8CFF]",
      text: "Impact scores for Campus Transport issues have breached the 'Critical' threshold simultaneously in 3 universities.",
      action: "View Signals"
    },
    {
      type: "OPPORTUNITY",
      color: "text-[#22D3EE]",
      bg: "bg-[#22D3EE]",
      text: "A unified water monitoring platform could address overlapping systemic gaps detected across 4 distinct problem clusters.",
      action: "Generate Opportunity"
    }
  ];

  return (
    <div className="bg-[#0B1118] border border-white/5 p-6 rounded-2xl flex-1 flex flex-col">
      <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center justify-between">
        Project Zero Intelligence
        <span className="text-[10px] bg-white/5 text-gray-500 px-2 py-0.5 rounded">AI GENERATED</span>
      </h2>
      <div className="flex flex-col gap-4 overflow-y-auto">
        {insights.map((insight, idx) => (
          <div key={idx} className="p-4 bg-[#101722] rounded-xl border border-white/5 hover:border-white/10 transition-colors">
            <div className={`text-[10px] font-bold ${insight.color} uppercase tracking-widest mb-2 flex items-center gap-2`}>
              <span className={`w-1.5 h-1.5 rounded-full ${insight.bg}`}></span> {insight.type}
            </div>
            <p className="text-sm text-gray-300 font-medium leading-relaxed mb-3">
              "{insight.text}"
            </p>
            <div className="flex justify-between items-center border-t border-white/5 pt-3 mt-2">
              <span className="text-[10px] text-gray-500">Confidence: High</span>
              <button className="text-[10px] text-gray-400 hover:text-white underline">{insight.action}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
