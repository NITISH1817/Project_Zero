import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../services/authService";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", role: "Founder", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const res = await authService.register(formData);
    setIsLoading(false);
    
    if (res.success) {
      navigate("/dashboard");
    } else {
      setError(res.error || "Failed to register");
    }
  };

  return (
    <div className="container mx-auto px-6 py-16 flex justify-center items-center">
      <div className="glass-panel p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-2 text-center">Create Account</h2>
        <p className="text-center text-gray-400 mb-6 text-sm">Join Project Zero to discover what to solve next.</p>
        
        {error && (
          <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400">Full Name</label>
            <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="bg-[#0B1118] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#4F8CFF] focus:outline-none" placeholder="Jane Doe" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400">Email</label>
            <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-[#0B1118] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#4F8CFF] focus:outline-none" placeholder="you@example.com" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400">Role</label>
            <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="bg-[#0B1118] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#4F8CFF] focus:outline-none">
              <option>Founder</option>
              <option>Student</option>
              <option>Researcher</option>
              <option>Institution</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400">Password</label>
            <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="bg-[#0B1118] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#4F8CFF] focus:outline-none" placeholder="••••••••" required />
          </div>
          <button type="submit" disabled={isLoading} className={`mt-4 bg-[#4F8CFF] text-white px-4 py-3 rounded-xl font-bold transition-colors ${isLoading ? 'opacity-70 cursor-wait' : 'hover:bg-[#4F8CFF]/80'}`}>
            {isLoading ? "Creating..." : "Get Started"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account? <Link to="/login" className="text-white hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
}
