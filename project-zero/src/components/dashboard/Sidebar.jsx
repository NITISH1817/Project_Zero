import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/5 bg-[#05070A] flex flex-col hidden md:flex sticky top-0 h-screen text-[#0B1118]">
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-white">
            PROJECT<span className="text-[#4F8CFF]">ZERO</span>
          </span>
        </Link>
        <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-6">
        <div>
          <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3 px-2">Command Center</h3>
          <nav className="flex flex-col gap-1 text-sm font-medium">
            <Link to="/dashboard" className="flex items-center gap-3 px-2 py-2 bg-white/5 text-white rounded-lg border border-white/5 shadow-sm"><span className="w-2 h-2 rounded-full bg-[#4F8CFF]"></span>Overview</Link>
            <Link to="/intelligence" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors"><span className="w-2 h-2 rounded-full bg-transparent border border-gray-600"></span>Problem Intelligence</Link>
            <Link to="/intelligence" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors"><span className="w-2 h-2 rounded-full bg-transparent border border-gray-600"></span>Signal Map</Link>
            <Link to="/solutions" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors"><span className="w-2 h-2 rounded-full bg-transparent border border-gray-600"></span>Innovation Radar</Link>
            <Link to="/opportunities" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors"><span className="w-2 h-2 rounded-full bg-transparent border border-gray-600"></span>Opportunities</Link>
          </nav>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3 px-2">Workspace</h3>
          <nav className="flex flex-col gap-1 text-sm font-medium">
            <Link to="/my-problems" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors">My Problems</Link>
            <Link to="/saved" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors">Saved</Link>
            <Link to="/research" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors">Research</Link>
            <Link to="/projects" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors">Projects</Link>
          </nav>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3 px-2">Intelligence</h3>
          <nav className="flex flex-col gap-1 text-sm font-medium">
            <Link to="/intelligence" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors">AI Analysis</Link>
            <Link to="/trends" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors">Trends</Link>
            <Link to="/analytics" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors">Analytics</Link>
          </nav>
        </div>
        
        <div className="mt-auto">
          <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3 px-2">System</h3>
          <nav className="flex flex-col gap-1 text-sm font-medium">
            <Link to="/notifications" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors">
              Notifications 
              <span className="ml-auto bg-[#4F8CFF] text-white text-[10px] px-1.5 py-0.5 rounded">3</span>
            </Link>
            <Link to="/settings" className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors">Settings</Link>
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-white/5 bg-[#080C12]">
        <Link to="/settings" className="flex items-center gap-3 px-2 py-2 text-sm font-medium hover:bg-white/5 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-white/5">
          <div className="w-8 h-8 rounded bg-[#8B5CF6] flex items-center justify-center text-white font-bold shadow-sm">F</div>
          <div>
            <div className="text-white text-xs font-bold">Founder</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider">Founder Workspace</div>
          </div>
        </Link>
      </div>
    </aside>
  );
}
