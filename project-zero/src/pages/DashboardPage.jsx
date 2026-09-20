import { useState, useEffect } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import WhatChanged from "../components/dashboard/WhatChanged";
import AttentionEngine from "../components/dashboard/AttentionEngine";
import ProblemConstellation from "../components/dashboard/ProblemConstellation";
import AIIntelligence from "../components/dashboard/AIIntelligence";
import { apiClient } from "../services/apiClient";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await apiClient.getDashboard();
        if (res.success) {
          setData(res.data);
        } else {
          setError(res.error || "Unable to load intelligence data.");
        }
      } catch (err) {
        setError("Network error fetching dashboard data.");
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-[#05070A] text-gray-200 flex font-sans">
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Command Bar */}
        <header className="h-16 border-b border-white/5 bg-[#05070A]/80 backdrop-blur-md px-8 flex items-center justify-between shrink-0 sticky top-0 z-10">
          <div className="flex-1 max-w-md relative">
            <input 
              type="text" 
              placeholder="Search problems, signals, opportunities... (CTRL+K)" 
              className="w-full bg-[#0B1118] border border-white/10 rounded-lg px-4 py-1.5 text-sm focus:outline-none focus:border-[#4F8CFF] text-white"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">Notifications</span>🔔</button>
            <div className="h-4 w-px bg-white/10"></div>
            <button className="bg-transparent border border-white/10 hover:border-white/20 text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-colors">
              + Create
            </button>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <DashboardHeader data={data} />
          
          {loading && (
            <div className="text-center py-12 text-gray-400 animate-pulse">Loading dashboard intelligence...</div>
          )}
          
          {error && (
            <div className="text-center py-12 text-red-400">
              <p className="mb-4">{error}</p>
              <button onClick={() => window.location.reload()} className="px-4 py-2 bg-white/10 rounded-lg">Retry</button>
            </div>
          )}

          {!loading && !error && (
            <>
              <WhatChanged />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <ProblemConstellation />
                  <div className="bg-[#0B1118] border border-white/5 p-6 rounded-2xl h-80 flex flex-col">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Founder Radar</h2>
                    <p className="text-[10px] text-gray-500 mb-4">Multi-dimensional comparison matrix.</p>
                    <div className="flex-1 border border-dashed border-white/10 rounded-xl flex items-center justify-center text-gray-500 text-xs">
                      [ Radar Chart: DEMO INTELLIGENCE ]
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <AttentionEngine />
                  <AIIntelligence />
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
