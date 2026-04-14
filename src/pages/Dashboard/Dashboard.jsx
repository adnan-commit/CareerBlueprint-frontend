import React, { useState, useEffect } from "react";
import Sidebar from "../../components/shared/Sidebar";
import { AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

import DashboardHeader from "./DashboardHeader";
import Forge from "./Forge";
import Archives from "./Archives";
import AnalysisView from "./AnalysisView/index";

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("forge");
  const [history, setHistory] = useState([]);
  const [selectedReportId, setSelectedReportId] = useState(null);
  const [selectedReportName, setSelectedReportName] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    companyName: "",
    jobDescription: "",
    selfIntro: "",
  });

  const dateStr = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  const fetchHistory = async () => {
    try {
      const res = await api.get("/report/all");
      if (res.data.success) {
        // Newest reports first
        const sortedData = res.data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setHistory(sortedData);
      }
    } catch (err) {
      console.log(err.res?.data?.message || "Error fetching history");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleViewReport = (id, name) => {
    setSelectedReportId(id);
    setSelectedReportName(name);
    setActiveTab("analysis");
    // Scroll to top when switching to analysis on mobile
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnalyze = async () => {
    if (
      !file ||
      !formData.companyName ||
      !formData.jobDescription ||
      !formData.selfIntro
    ) {
      return toast.error("All parameters are required.");
    }

    setIsAnalyzing(true); // Button disable aur loading start
    const loadingToast = toast.loading(
      "Gemini Orchestration: Building Strategy...",
    );
    try {
      const data = new FormData();
      data.append("resume", file);
      data.append("companyName", formData.companyName);
      data.append("jobDescription", formData.jobDescription);
      data.append("selfDescription", formData.selfIntro);

      const res = await api.post("/report", data);
      if (res.data.success) {
        toast.success("Forge Complete!", { id: loadingToast });

        // --- RESET FIELDS HERE ---
        setFile(null);
        setFormData({
          companyName: "",
          jobDescription: "",
          selfIntro: "",
        });
        fetchHistory();
        handleViewReport(res.data.data._id, res.data.data.companyName);
      }
    } catch (err) {
      // Error message handling
      const errorMsg = err.response?.data?.message || "Forge Failed";
      toast.error(errorMsg, { id: loadingToast });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-slate-200 overflow-x-hidden">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedReportId={selectedReportId}
        selectedReportName={selectedReportName}
      />

      {/* Mobile Padding: p-4
          Tablet/Laptop Padding: p-8
          Desktop Padding: p-12
          Sidebar Margin: lg:ml-64 (only for desktop)
      */}
      <main className="flex-1 w-full lg:ml-64 p-4 md:p-8 lg:p-12 transition-all duration-300">
        <DashboardHeader user={user} dateStr={dateStr} />

        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "forge" && (
              <Forge
                key="forge"
                file={file}
                setFile={setFile}
                isAnalyzing={isAnalyzing}
                formData={formData}
                setFormData={setFormData}
                handleAnalyze={handleAnalyze}
                history={history}
                onReportSelect={handleViewReport}
                onArchivesClick={() => setActiveTab("archives")}
              />
            )}

            {activeTab === "archives" && (
              <Archives
                key="archives"
                history={history}
                onReportSelect={handleViewReport}
              />
            )}

            {activeTab === "analysis" && selectedReportId && (
              <AnalysisView key="analysis" reportId={selectedReportId} />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
