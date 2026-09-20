import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiClient } from "../services/apiClient";

export default function ProblemDetailsPage() {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await apiClient.getProblem(id);
        if (res.success) {
          setProblem(res.data);
          setVotes(res.data.votes || 0); // Need to sync with db schema votes
        } else {
          setError(res.error || "Problem not found");
        }
      } catch (err) {
        setError("Network error fetching problem");
      } finally {
        setLoading(false);
      }
    };
    fetchProblem();
  }, [id]);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const res = await apiClient.analyzeProblem(id);
      if (res.success) {
        setAnalysisResult(res.data);
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSave = async () => {
    try {
      if (isSaved) {
        await apiClient.unsaveProblem(id);
        setIsSaved(false);
      } else {
        await apiClient.saveProblem(id);
        setIsSaved(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpvote = async () => {
    if (hasVoted) return;
    try {
      const res = await apiClient.upvoteProblem(id);
      if (res.success) {
        setHasVoted(true);
        setVotes(v => v + 1);
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <div className="container mx-auto p-12 text-center text-white">Loading problem details...</div>;
  if (error || !problem) return <div className="container mx-auto p-12 text-center text-white">{error || "Problem not found"}</div>;

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Header Hero */}
        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-[#0B1118]">
          <div className="flex gap-2 mb-4">
            <span className="bg-[#4F8CFF]/10 text-[#4F8CFF] px-3 py-1 rounded-full text-xs font-bold">{problem.category || 'General'}</span>
            <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-xs font-bold">{problem.severity || 'Medium'} Severity</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-white">{problem.title}</h1>
          <p className="text-gray-400 mb-8 text-lg">{problem.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleAnalyze} 
              disabled={isAnalyzing || analysisResult}
              className={`bg-[#4F8CFF] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4F8CFF]/80'}`}
            >
              <span className="w-4 h-4">✨</span> 
              {isAnalyzing ? "Analyzing..." : analysisResult ? "Analysis Complete" : "Run AI Analysis"}
            </button>
            <button 
              onClick={handleSave}
              className={`border border-white/10 px-6 py-3 rounded-xl font-bold transition-colors ${isSaved ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-gray-300'}`}
            >
              {isSaved ? "Saved ✓" : "Save Problem"}
            </button>
            <button 
              onClick={handleUpvote}
              className={`border border-white/10 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors ${hasVoted ? 'bg-[#4F8CFF]/20 text-[#4F8CFF] border-[#4F8CFF]/30 cursor-default' : 'hover:bg-white/5 text-gray-300'}`}
            >
              ↑ {votes}
            </button>
          </div>
        </div>

        {/* AI Analysis Results Section (Conditional) */}
        {analysisResult && (
          <div className="p-8 rounded-3xl border border-white/10 bg-[#0B1118] border-l-4 border-l-[#4F8CFF]">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <span className="text-[#4F8CFF]">✨</span> Project Zero Intelligence
            </h2>
            <p className="text-gray-300 mb-6">{analysisResult.summary || "AI Analysis completed."}</p>
          </div>
        )}
      </div>
    </div>
  );
}
