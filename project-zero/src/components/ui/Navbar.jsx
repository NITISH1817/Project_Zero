import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-text-primary">
            PROJECT<span className="text-accent-blue">ZERO</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/platform" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Platform</Link>
          <Link to="/discover" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Discover</Link>
          <Link to="/intelligence" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Intelligence</Link>
          <Link to="/solutions" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Solutions</Link>
          <Link to="/pricing" className="text-sm font-medium text-text-muted hover:text-white transition-colors">Pricing</Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-text-muted hover:text-white transition-colors">
            Log in
          </Link>
          <button 
            onClick={() => navigate("/register")}
            className="text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden text-text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}
