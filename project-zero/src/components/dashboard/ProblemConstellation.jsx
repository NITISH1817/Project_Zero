import { motion } from "framer-motion";

export default function ProblemConstellation() {
  // A mock representation of nodes using pure CSS/Framer Motion
  const nodes = [
    { id: 1, label: "Healthcare", size: "w-16 h-16", color: "bg-[#4F8CFF]/20 border-[#4F8CFF]", top: "20%", left: "50%", text: "text-[#4F8CFF]" },
    { id: 2, label: "Appointment Delays", size: "w-10 h-10", color: "bg-[#22D3EE]/20 border-[#22D3EE]", top: "50%", left: "30%", text: "text-[#22D3EE]" },
    { id: 3, label: "Rural Access", size: "w-12 h-12", color: "bg-[#8B5CF6]/20 border-[#8B5CF6]", top: "60%", left: "70%", text: "text-[#8B5CF6]" },
    { id: 4, label: "Telehealth Gaps", size: "w-8 h-8", color: "bg-red-500/20 border-red-500", top: "80%", left: "50%", text: "text-red-400" },
  ];

  return (
    <div className="bg-[#0B1118] border border-white/5 rounded-2xl h-80 flex flex-col relative overflow-hidden group">
      <div className="p-6 pb-0 z-10 flex justify-between items-start">
        <div>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Problem Constellation</h2>
          <p className="text-[10px] text-gray-500 mb-4">Topological mapping of the ecosystem.</p>
        </div>
        <button className="text-[10px] bg-white/5 hover:bg-white/10 px-2 py-1 rounded text-gray-400 border border-white/5 transition-colors">Expand</button>
      </div>

      <div className="flex-1 relative w-full h-full">
        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full -z-0 opacity-20" pointerEvents="none">
          <line x1="50%" y1="20%" x2="30%" y2="50%" stroke="#4F8CFF" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="20%" x2="70%" y2="60%" stroke="#4F8CFF" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="30%" y1="50%" x2="50%" y2="80%" stroke="#22D3EE" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="70%" y1="60%" x2="50%" y2="80%" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="2 2" />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div 
            key={node.id}
            whileHover={{ scale: 1.1, zIndex: 20 }}
            className={`absolute flex items-center justify-center rounded-full border ${node.color} cursor-pointer shadow-lg backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 transition-colors hover:bg-opacity-40`}
            style={{ top: node.top, left: node.left, width: node.size.split(' ')[0].replace('w-','0.25rem*'), height: node.size.split(' ')[1].replace('h-','0.25rem*') }}
            // Note: Since Tailwind classes can't easily be parsed into inline styles this way without a mapping, I'll rely on the classNames directly.
          >
            <div className={`absolute flex items-center justify-center rounded-full border ${node.color} ${node.size} -translate-x-1/2 -translate-y-1/2`}>
              <span className={`text-[8px] font-bold uppercase tracking-wider text-center px-1 ${node.text} drop-shadow-md`}>{node.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Ambient background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#4F8CFF]/5 rounded-full blur-3xl pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
    </div>
  );
}
