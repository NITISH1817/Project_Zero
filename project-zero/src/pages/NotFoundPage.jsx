import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col items-center justify-center p-8">
      <div className="glass-panel p-12 rounded-3xl text-center max-w-lg border border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.1)]">
        <h1 className="text-6xl font-black text-red-500 mb-4 tracking-tighter">404</h1>
        <div className="text-sm font-bold text-text-muted tracking-widest uppercase mb-6">SIGNAL NOT FOUND</div>
        <p className="text-lg text-white font-medium mb-8">
          The intelligence path you're looking for does not exist in the Project Zero ecosystem.
        </p>
        <div className="flex flex-col gap-4">
          <Link to="/dashboard" className="w-full bg-accent-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-accent-blue/80 transition-colors">
            Return to Command Center
          </Link>
          <Link to="/discover" className="w-full bg-surface border border-white/10 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/5 transition-colors">
            Explore Problems
          </Link>
        </div>
      </div>
    </div>
  );
}
