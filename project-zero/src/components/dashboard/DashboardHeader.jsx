export default function DashboardHeader() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }).toUpperCase();

  const timestamp = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="flex flex-col gap-8 mb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Your Innovation Intelligence.</h1>
          <p className="text-sm text-gray-400 max-w-2xl font-medium">
            Monitor emerging problems, detect opportunity signals, and decide what deserves attention next.
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">LIVE INTELLIGENCE</div>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-xs font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            SYSTEM ACTIVE
          </div>
          <div className="text-[10px] text-gray-500 mt-1">Last updated: {timestamp}</div>
        </div>
      </div>

      {/* INTELLIGENCE PULSE */}
      <div>
        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">INTELLIGENCE PULSE</h3>
        <div className="flex flex-col md:flex-row items-center gap-4 bg-[#0B1118] border border-white/5 p-6 rounded-xl relative overflow-hidden">
          {/* Subtle ambient background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4F8CFF]/5 blur-3xl -z-10 rounded-full"></div>
          
          <div className="flex-1 flex flex-col items-center">
            <div className="text-3xl font-black text-white">124</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">PROBLEMS</div>
          </div>
          <div className="hidden md:block text-gray-600">&rarr;</div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-3xl font-black text-[#4F8CFF]">18</div>
            <div className="text-[10px] font-bold text-[#4F8CFF] uppercase tracking-widest mt-1">EMERGING</div>
          </div>
          <div className="hidden md:block text-gray-600">&rarr;</div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-3xl font-black text-[#22D3EE]">7</div>
            <div className="text-[10px] font-bold text-[#22D3EE] uppercase tracking-widest mt-1">NEW SIGNALS</div>
          </div>
          <div className="hidden md:block text-gray-600">&rarr;</div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-3xl font-black text-[#8B5CF6]">4</div>
            <div className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest mt-1">OPPORTUNITIES</div>
          </div>
          <div className="hidden md:block text-gray-600">&rarr;</div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-3xl font-black text-amber-400">2</div>
            <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mt-1">REQUIRE ACTION</div>
          </div>
        </div>
      </div>
    </div>
  );
}
