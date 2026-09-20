import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../services/authService";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    setError(null);
    const res = await authService.login(email, password);
    setIsLoading(false);
    
    if (res.success) {
      navigate("/dashboard");
    } else {
      setError(res.error || "Failed to authenticate");
    }
  };

  return (
    <div className="container mx-auto px-6 py-24 flex justify-center items-center">
      <div className="glass-panel p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
        
        {error && (
          <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0B1118] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#4F8CFF] focus:outline-none" 
              placeholder="you@example.com" 
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#0B1118] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#4F8CFF] focus:outline-none" 
              placeholder="••••••••" 
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className={`mt-4 bg-[#4F8CFF] text-white px-4 py-3 rounded-xl font-bold transition-colors ${isLoading ? 'opacity-70 cursor-wait' : 'hover:bg-[#4F8CFF]/80'}`}
          >
            {isLoading ? "Authenticating..." : "Log In"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-400">
          Don't have an account? <Link to="/register" className="text-[#4F8CFF] hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
}
