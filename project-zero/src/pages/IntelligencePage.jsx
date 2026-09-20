import { motion } from "framer-motion";

export default function IntelligencePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Problem <span className="text-gradient">Intelligence</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Turn fragmented problems into structured insights using our AI-driven opportunity engine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-2xl flex flex-col gap-6">
          <h2 className="text-2xl font-bold">AI Analysis Engine</h2>
          <div className="space-y-4">
            <div className="p-4 bg-surface rounded-xl border border-white/5">
              <h3 className="text-accent-violet font-semibold text-sm mb-1">Root Causes</h3>
              <p className="text-text-muted text-sm">Automatically identifies systemic failures behind surface-level symptoms.</p>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-white/5">
              <h3 className="text-accent-blue font-semibold text-sm mb-1">Stakeholder Mapping</h3>
              <p className="text-text-muted text-sm">Maps out all affected parties, decision-makers, and beneficiaries.</p>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-white/5">
              <h3 className="text-accent-cyan font-semibold text-sm mb-1">Impact Quantification</h3>
              <p className="text-text-muted text-sm">Estimates market size, severity, and economic impact of the problem.</p>
            </div>
          </div>
          <button className="mt-auto bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
            Try Demo Analysis
          </button>
        </div>

        <div className="glass-panel-elevated p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl -z-10"></div>
          <h2 className="text-2xl font-bold">Opportunity Generator</h2>
          <p className="text-text-muted">
            Transform validated problems into actionable startup concepts, MVPs, and research proposals.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 text-text-muted">
            <li>Target User Personas</li>
            <li>Value Proposition drafting</li>
            <li>Business & Revenue Model ideas</li>
            <li>Competitive Landscape analysis</li>
            <li>Validation Experiment design</li>
          </ul>
          <div className="mt-auto p-4 border border-accent-blue/30 bg-accent-blue/5 rounded-xl">
            <p className="text-xs text-accent-blue font-semibold tracking-wider uppercase mb-2">Live Example</p>
            <p className="text-sm font-medium">"Smart Grid Water Optimization"</p>
            <p className="text-xs text-text-muted mt-1">Generated from: Rural Water Supply Disruptions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
