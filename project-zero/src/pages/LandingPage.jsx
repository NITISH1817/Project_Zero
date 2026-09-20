import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      
      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Copy */}
        <div className="flex-1 space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
            Innovation Intelligence Platform
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Find the problems <br />
            <span className="text-gradient">worth solving.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
          >
            Project Zero turns fragmented real-world problems into structured intelligence — helping founders, researchers, and innovators discover where meaningful opportunities exist <span className="text-white font-medium">before everyone else.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
              Explore Problems
            </button>
            <button className="glass-panel text-white px-8 py-3 rounded-md font-semibold hover:bg-surface-elevated transition-colors flex items-center justify-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              See How It Works
            </button>
          </motion.div>
        </div>

        {/* Right: Problem Intelligence Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex-1 w-full aspect-square relative z-10 hidden md:block"
        >
          {/* Custom Visualization placeholder */}
          <div className="absolute inset-0 glass-panel-elevated rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,140,255,0.1)_0,transparent_70%)]"></div>
            
            {/* Abstract nodes connecting */}
            <div className="relative w-full h-full">
              {/* Central Opportunity Node */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-accent-blue/20 border border-accent-blue shadow-[0_0_30px_rgba(79,140,255,0.3)] flex items-center justify-center"
              >
                <span className="text-accent-blue font-bold text-xs tracking-widest uppercase">Opportunity</span>
              </motion.div>
              
              {/* Satellite nodes */}
              {[
                { label: "Problem", top: "20%", left: "30%", color: "border-accent-violet" },
                { label: "Evidence", top: "70%", left: "20%", color: "border-white/20" },
                { label: "Impact", top: "30%", left: "70%", color: "border-white/20" },
                { label: "Trend", top: "80%", left: "65%", color: "border-accent-cyan" },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [-3, 3, -3] }}
                  transition={{ delay: 1.5 + i * 0.2, duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute w-16 h-16 rounded-full border ${node.color} bg-surface flex items-center justify-center text-[10px] text-text-muted uppercase tracking-wider`}
                  style={{ top: node.top, left: node.left }}
                >
                  {node.label}
                </motion.div>
              ))}

              {/* SVG Connecting lines (simplified representation) */}
              <svg className="absolute inset-0 w-full h-full -z-10 opacity-30" pointerEvents="none">
                 <line x1="30%" y1="20%" x2="50%" y2="50%" stroke="#4F8CFF" strokeWidth="1" strokeDasharray="4 4" />
                 <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="#4F8CFF" strokeWidth="1" strokeDasharray="4 4" />
                 <line x1="70%" y1="30%" x2="50%" y2="50%" stroke="#4F8CFF" strokeWidth="1" strokeDasharray="4 4" />
                 <line x1="65%" y1="80%" x2="50%" y2="50%" stroke="#4F8CFF" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HOW IT WORKS SECTION PLACEHOLDER */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {[
             { step: "01", title: "CAPTURE", desc: "Collect real-world problems." },
             { step: "02", title: "STRUCTURE", desc: "Organize by category, location, and stakeholders." },
             { step: "03", title: "INTELLIGENCE", desc: "Analyze impact, urgency, and potential." },
             { step: "04", title: "ACT", desc: "Turn validated problems into solutions." }
           ].map((item, i) => (
             <div key={i} className="glass-panel p-6 rounded-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                 {item.step}
               </div>
               <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
               <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
}
