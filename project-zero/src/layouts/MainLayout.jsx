import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      
      {/* Simple Footer Placeholder */}
      <footer className="border-t border-white/5 py-8 mt-24">
        <div className="container mx-auto px-6 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Project Zero. Discover Problems Worth Solving.
        </div>
      </footer>
    </div>
  );
}
