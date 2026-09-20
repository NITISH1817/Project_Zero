import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DiscoverPage() {
  const [search, setSearch] = useState("");

  const mockProblems = [
    { id: 1, title: "Inefficient Student Transportation", desc: "College students face unpredictable bus schedules and long waits.", category: "Education", severity: "Medium", impact: 85, innovation: 92, trend: "Rising" },
    { id: 2, title: "Unstructured Medical Records", desc: "Doctors spend 2 hours a day manually organizing fragmented patient data.", category: "Healthcare", severity: "High", impact: 94, innovation: 88, trend: "Stable" },
    { id: 3, title: "Urban Food Waste", desc: "Supermarkets throw away tons of perfectly good food due to expiration date logistics.", category: "Sustainability", severity: "High", impact: 91, innovation: 76, trend: "Rising" }
  ];

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <div className="flex flex-col gap-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Explore the world's <span className="text-gradient">unsolved problems.</span>
        </h1>
        
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Search problems, categories, locations..."
              className="w-full bg-surface-elevated border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select className="bg-surface-elevated border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue">
            <option>All Categories</option>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Sustainability</option>
          </select>
          <select className="bg-surface-elevated border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue">
            <option>Trending</option>
            <option>Highest Impact</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProblems.map(problem => (
          <Link to={`/problems/${problem.id}`} key={problem.id}>
            <motion.div 
              whileHover={{ y: -5, borderColor: "rgba(79,140,255,0.4)" }}
              className="glass-panel p-6 rounded-2xl h-full flex flex-col gap-4 cursor-pointer transition-colors"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold px-2 py-1 bg-white/5 rounded-md text-text-muted">{problem.category}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${problem.severity === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {problem.severity}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-white">{problem.title}</h2>
              <p className="text-sm text-text-muted flex-grow">{problem.desc}</p>
              
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                <div>
                  <div className="text-xs text-text-muted">Impact Score</div>
                  <div className="font-bold text-accent-blue">{problem.impact}/100</div>
                </div>
                <div>
                  <div className="text-xs text-text-muted">Trend</div>
                  <div className="font-bold text-accent-cyan">{problem.trend}</div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
