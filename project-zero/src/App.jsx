import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import DiscoverPage from "./pages/DiscoverPage";
import ProblemDetailsPage from "./pages/ProblemDetailsPage";
import SubmitProblemPage from "./pages/SubmitProblemPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import IntelligencePage from "./pages/IntelligencePage";
import PricingPage from "./pages/PricingPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="problems/:id" element={<ProblemDetailsPage />} />
          <Route path="submit" element={<SubmitProblemPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="intelligence" element={<IntelligencePage />} />
          <Route path="pricing" element={<PricingPage />} />
          
          {/* Fix the /platform bug requested by the user */}
          <Route path="platform" element={<Navigate to="/intelligence" replace />} />
          
          <Route path="solutions" element={<div className="container mx-auto py-24 text-center text-2xl font-bold">Solutions & Innovation Radar (Coming Soon)</div>} />
        </Route>
        
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}