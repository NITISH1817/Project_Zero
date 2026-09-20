import { useState } from "react";
import DemoSection from "./components/DemoSection";
import FounderDashboard from "./components/FounderDashboard";
import AIPredictionEngine from "./components/AIPredictionEngine";
import ProblemLeaderboard from "./components/ProblemLeaderboard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import SortDropdown from "./components/SortDropdown";
import Stats from "./components/Stats";
import TrendingProblems from "./components/TrendingProblems";
import CategoryAnalytics from "./components/CategoryAnalytics";
import AIInsights from "./components/AIInsights";
import OpportunityGenerator from "./components/OpportunityGenerator";
import InnovationRadar from "./components/InnovationRadar";
import SubmitProblem from "./components/SubmitProblem";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import problemsData from "./data/problems";
import AIStartupGenerator from "./components/AIStartupGenerator";
import ProblemModal from "./components/ProblemModal";
import ProblemLifecycle from "./components/ProblemLifecycle";
export default function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [sortBy, setSortBy] =
    useState("impact");
    const [selectedProblem, setSelectedProblem] =
  useState(null);
  const [problemList, setProblemList] =
  useState(problemsData);

  const filteredProblems = problemList
    .filter((problem) => {
      const matchesSearch =
        problem.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        problem.category
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        problem.severity
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        problem.category === selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    })
    .sort((a, b) => {
      if (sortBy === "impact") {
        return (
          b.impactScore -
          a.impactScore
        );
      }

      if (sortBy === "innovation") {
        return (
          b.innovationScore -
          a.innovationScore
        );
      }

      if (sortBy === "users") {
        return (
          b.affectedUsers -
          a.affectedUsers
        );
      }

      return 0;
    });

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0a0a0a,#111111,#1a1a1a)",
        color: "#F8FAFC",
        fontFamily:
          "Inter, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gold Glow */}
      <div
        style={{
          position: "fixed",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "#D4AF37",
          filter: "blur(250px)",
          top: "-300px",
          right: "-200px",
          opacity: 0.12,
          zIndex: 0,
        }}
      />

      {/* Emerald Glow */}
      <div
        style={{
          position: "fixed",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "#10B981",
          filter: "blur(250px)",
          bottom: "-250px",
          left: "-200px",
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Navbar />

        <Hero />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          selectedCategory={
            selectedCategory
          }
          setSelectedCategory={
            setSelectedCategory
          }
        />

        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <Stats />

        <p
          style={{
            textAlign: "center",
            color: "#D4AF37",
            marginTop: "20px",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          Showing{" "}
          {filteredProblems.length} Problems
        </p>

       <TrendingProblems
  problems={filteredProblems}
  setSelectedProblem={setSelectedProblem}
/>
        <ProblemLeaderboard />

        <AIPredictionEngine />

        <FounderDashboard />

        <ProblemLifecycle />

        <CategoryAnalytics />

        <AnalyticsDashboard />

        <AIInsights />

        <OpportunityGenerator />

        <InnovationRadar />

        <DemoSection />

        <AIStartupGenerator />

        <SubmitProblem
  setProblemList={setProblemList}
/>
      </div>
    </div>
  );
}