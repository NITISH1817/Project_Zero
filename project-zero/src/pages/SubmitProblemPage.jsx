import { useState } from "react";
import { motion } from "framer-motion";

export default function SubmitProblemPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    severity: "Medium",
    affectedUsers: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This would submit to the backend API.");
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Submit a Problem</h1>
        <p className="text-text-muted">Add a new problem to the intelligence graph for analysis and validation.</p>
      </div>

      <div className="glass-panel-elevated p-8 rounded-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-primary">Problem Title</label>
            <input 
              type="text" 
              placeholder="E.g., Inefficient Student Transportation"
              className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-primary">Description</label>
            <textarea 
              rows="4"
              placeholder="Describe the problem, pain points, and current workarounds..."
              className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue resize-none"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-primary">Category</label>
              <select className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue">
                <option>Education</option>
                <option>Healthcare</option>
                <option>Finance</option>
                <option>Sustainability</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-primary">Severity</label>
              <select className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 mt-2 flex justify-end gap-4">
            <button type="button" className="px-6 py-3 rounded-xl font-bold text-text-muted hover:text-white transition-colors">
              Cancel
            </button>
            <button type="submit" className="bg-accent-blue hover:bg-accent-blue/80 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-[0_0_20px_rgba(79,140,255,0.3)]">
              Analyze & Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
