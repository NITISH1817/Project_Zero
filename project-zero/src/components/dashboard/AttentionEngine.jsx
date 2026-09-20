import { motion } from "framer-motion";

export default function AttentionEngine() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Attention Engine</h2>
        <p className="text-[10px] text-gray-500">Signals that may deserve your attention.</p>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {/* High Impact */}
        <motion.div whileHover={{ x: 2 }} className="p-4 bg-[#0B1118] border-l-2 border-red-500 rounded-r-xl border-y border-r border-white/5 cursor-pointer group">
          <div className="text-[10px] font-bold text-red-500 tracking-wider uppercase mb-2">High Impact</div>
          <h3 className="font-bold text-white mb-2 group-hover:text-[#4F8CFF] transition-colors">Water supply interruptions</h3>
          <div className="flex gap-4 text-xs text-gray-400 mb-4">
            <div>Impact: <span className="font-bold text-white">92</span></div>
            <div>Trend: <span className="font-bold text-red-400">↑ 18%</span></div>
          </div>
          <button className="text-xs font-bold text-[#4F8CFF] flex items-center gap-1 group-hover:gap-2 transition-all">
            Analyze <span>&rarr;</span>
          </button>
        </motion.div>

        {/* Emerging */}
        <motion.div whileHover={{ x: 2 }} className="p-4 bg-[#0B1118] border-l-2 border-[#22D3EE] rounded-r-xl border-y border-r border-white/5 cursor-pointer group">
          <div className="text-[10px] font-bold text-[#22D3EE] tracking-wider uppercase mb-2">Emerging</div>
          <h3 className="font-bold text-white mb-2 group-hover:text-[#4F8CFF] transition-colors">Campus mobility inefficiency</h3>
          <div className="flex gap-4 text-xs text-gray-400 mb-4">
            <div>Trend: <span className="font-bold text-[#22D3EE]">↑ 27%</span></div>
          </div>
          <button className="text-xs font-bold text-[#4F8CFF] flex items-center gap-1 group-hover:gap-2 transition-all">
            Investigate <span>&rarr;</span>
          </button>
        </motion.div>

        {/* Opportunity */}
        <motion.div whileHover={{ x: 2 }} className="p-4 bg-[#0B1118] border-l-2 border-[#8B5CF6] rounded-r-xl border-y border-r border-white/5 cursor-pointer group">
          <div className="text-[10px] font-bold text-[#8B5CF6] tracking-wider uppercase mb-2">Opportunity</div>
          <h3 className="font-bold text-white mb-2 group-hover:text-[#4F8CFF] transition-colors">Agricultural resource intelligence</h3>
          <div className="flex gap-4 text-xs text-gray-400 mb-4">
            <div>Opportunity: <span className="font-bold text-white">88</span></div>
          </div>
          <button className="text-xs font-bold text-[#4F8CFF] flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore <span>&rarr;</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
