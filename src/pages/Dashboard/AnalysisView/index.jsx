import React, { useState, useEffect } from "react";
import api from "../../../api/axios";
import {
  Layout,
  Zap,
  Brain,
  Calendar,
  FileJson,
  BarChart3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Sub-components Imports
import AnalysisHeader from "./AnalysisHeader";
import OverviewTab from "./OverviewTab";
import QuestionsTab from "./QuestionsTab";
import SkillTab from "./SkillTab";
import RoadmapTab from "./RoadmapTab";
import ResumeTab from "./ResumeTab";

const AnalysisView = ({ reportId }) => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlueprint = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/report/${reportId}`);
        setData(res.data.data);
      } catch (err) {
        console.error("Error fetching report");
      } finally {
        setLoading(false);
      }
    };
    if (reportId) fetchBlueprint();
  }, [reportId]);

  // Mobile Friendly Loading State
  if (loading)
    return (
      <div className="h-[40vh] md:h-125 flex flex-col items-center justify-center gap-4 text-brand-primary">
        <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-t-transparent border-brand-primary rounded-full animate-spin" />
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] animate-pulse">
          Synthesizing Intel...
        </span>
      </div>
    );

  if (!data)
    return (
      <div className="text-center py-20 italic opacity-50 text-xs uppercase tracking-widest font-black">
        PROTOCOL_ERROR // ANALYSIS_NOT_FOUND
      </div>
    );

  const tabs = [
    { id: "overview", label: "Overview", icon: Layout },
    { id: "technical", label: "Technical", icon: Zap },
    { id: "behavioral", label: "Behavioral", icon: Brain },
    { id: "skills", label: "Skills", icon: BarChart3 }, // Label shortened for mobile
    { id: "roadmap", label: "Roadmap", icon: Calendar },
    { id: "resume", label: "Resume", icon: FileJson }, // Label shortened for mobile
  ];

  return (
    <div className="w-full space-y-6 md:space-y-10 animate-in fade-in duration-700">
      <AnalysisHeader data={data} reportId={reportId} />

     {/* --- TABS NAVIGATION: FULL WIDTH (Desktop) & SCROLLABLE (Mobile) --- */}
<div className="sticky top-0 z-[40] -mx-4 md:mx-0">
  <div className="bg-slate-950/90 backdrop-blur-xl border-b border-white/10 px-4 py-3 md:py-4 md:px-0">
    
    {/* Mobile: overflow-x-auto + flex (for smooth scrolling)
        Desktop: md:grid md:grid-cols-6 (for full width)
    */}
    <div className="flex md:grid md:grid-cols-6 overflow-x-auto md:overflow-x-visible gap-2 md:gap-3 no-scrollbar bg-white/2 p-1.5 md:p-2 rounded-xl md:rounded-2xl border border-white/5 shadow-2xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            const offset = 100;
            window.scrollTo({ top: offset, behavior: "smooth" });
          }}
          className={`flex cursor-pointer items-center justify-center gap-2.5 px-6 md:px-2 py-3 md:py-4 rounded-lg md:rounded-xl font-black transition-all whitespace-nowrap uppercase tracking-tighter text-[10px] md:text-[11px] min-w-max md:min-w-0 ${
            activeTab === tab.id
              ? "bg-brand-primary text-slate-950 shadow-[0_0_20px_rgba(45,212,191,0.5)] scale-[1.02]"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <tab.icon size={16} strokeWidth={3} className="shrink-0" />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  </div>
</div>

      {/* --- TAB CONTENT CONTAINER --- */}
      <div className="min-h-75 md:min-h-125 relative pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {activeTab === "overview" && <OverviewTab data={data} />}
            {activeTab === "technical" && (
              <QuestionsTab
                questions={data.technicalQuestions}
                type="Technical"
              />
            )}
            {activeTab === "behavioral" && (
              <QuestionsTab
                questions={data.behavioralQuestions}
                type="Behavioral"
              />
            )}
            {activeTab === "skills" && <SkillTab skills={data.skillGaps} />}
            {activeTab === "roadmap" && (
              <RoadmapTab plan={data.preparationPlan} />
            )}
            {activeTab === "resume" && (
              <ResumeTab data={data} reportId={reportId || data._id} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnalysisView;
