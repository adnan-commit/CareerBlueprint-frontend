import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import {
  Download,
  FileText,
  Sparkles,
  Mail,
  Phone,
  Edit3,
  Check,
} from "lucide-react";
import api from "../../../api/axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ResumeTab = ({ data, reportId }) => {
  const [resumeData, setResumeData] = useState(
    data?.optimizedResumeContent || data?.optimizedContent || null,
  );

  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const resumeRef = useRef();

  // Print Logic
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `Resume_${data?.personalDetails?.name || "Career_Blueprint"}`,
  });

  const handleOptimize = async () => {
    setLoading(true);
    const toastId = toast.loading("AI is re-architecting your experience...");
    try {
      const res = await api.post(`/report/${reportId}/optimize-resume`);
      if (res.data.success) {
        setResumeData(res.data.data.optimizedContent);
        toast.success("Resume Optimized!", { id: toastId });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Optimization failed", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  // Extracting additional data from JSON structure
  const education = data?.education || [];
  const personalLinks = data?.personalDetails?.links || [];

  if (!resumeData && !loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 md:py-20 bg-white/5 rounded-3xl md:rounded-4xl border border-dashed border-white/10 text-center px-4">
        <Sparkles className="text-brand-primary mb-4 w-10 h-10 md:w-12 md:h-12" />
        <h3 className="text-lg md:text-xl font-black text-white uppercase italic">
          Resume Not Generated
        </h3>
        <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-widest mt-2 max-w-xs">
          Blueprint data is missing. Initialize Genesis protocol to construct.
        </p>
        <button
          onClick={handleOptimize}
          className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-brand-primary text-slate-950 font-black rounded-xl md:rounded-2xl uppercase text-[10px] md:text-xs hover:shadow-brand-glow transition-all"
        >
          Trigger Genesis Protocol
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500 overflow-x-hidden">
      {/* Control Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 sticky top-0 z-20 backdrop-blur-md gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
          <FileText className="text-brand-primary w-4 h-4 md:w-5 md:h-5" />
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            ATS_ENGINE_v2.0
          </span>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-bold uppercase transition-all ${isEditing ? "bg-green-500 text-white shadow-lg shadow-green-500/20" : "bg-white/5 text-white hover:bg-white/10"}`}
          >
            {isEditing ? (
              <>
                <Check size={12} /> Finish
              </>
            ) : (
              <>
                <Edit3 size={12} /> Edit
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-brand-primary text-slate-950 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase shadow-lg shadow-brand-primary/20 transition-transform active:scale-95"
          >
            <Download size={12} /> Download PDF
          </button>
        </div>
      </div>

      {isEditing && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-primary/10 border border-brand-primary/20 p-2 md:p-3 rounded-xl text-center"
        >
          <p className="text-brand-primary text-[8px] md:text-[10px] font-black uppercase tracking-widest">
            ✨ Edit Mode Active: Direct modification enabled.
          </p>
        </motion.div>
      )}

      {/* --- PREVIEW CONTAINER --- */}
      <div className="flex justify-center p-2 md:p-8 bg-slate-900/50 rounded-3xl md:rounded-[2.5rem] border border-white/5 overflow-hidden">
        <div className="w-full flex justify-center overflow-x-auto no-scrollbar py-4">
          <div
            ref={resumeRef}
            className={`bg-white text-slate-900 w-198.5 min-h-280.75 p-10 md:p-16 shadow-2xl origin-top resume-paper shrink-0 transition-all ${isEditing ? "ring-2 ring-brand-primary ring-inset" : ""}`}
            style={{
              fontFamily: "'Inter', sans-serif",
              transform:
                typeof window !== "undefined" && window.innerWidth < 794
                  ? `scale(${(window.innerWidth - 40) / 794})`
                  : "none",
            }}
          >
            {/* Header */}
            <header className="text-center border-b-2 border-slate-950 pb-6 mb-6">
              <h1
                contentEditable={isEditing}
                suppressContentEditableWarning
                className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 outline-none"
              >
                {data?.personalDetails?.name}
              </h1>

              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-bold text-slate-600 uppercase outline-none">
                <span
                  className="flex items-center gap-1"
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                >
                  <Mail size={10} /> {data?.personalDetails?.email}
                </span>
                <span
                  className="flex items-center gap-1"
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                >
                  <Phone size={10} /> {data?.personalDetails?.phone}
                </span>
              </div>

              {/* Dynamic Links from JSON */}
              <div className="flex justify-center gap-4 mt-3 text-[9px] font-black text-brand-primary uppercase tracking-widest outline-none">
                {personalLinks.map((link, idx) => (
                  <span
                    key={idx}
                    contentEditable={isEditing}
                    suppressContentEditableWarning
                    className="border-b border-brand-primary/30"
                  >
                    {link}
                  </span>
                ))}
              </div>
            </header>

            <div className="space-y-6 text-left">
              {/* Summary */}
              <section>
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] border-b border-slate-200 pb-1 mb-3">
                  Professional Summary
                </h2>
                <p
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                  className="text-[10.5px] leading-relaxed text-slate-700 text-justify outline-none"
                >
                  {resumeData?.summary}
                </p>
              </section>

              {/* Skills (Technical Proficiency) */}
              <section>
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] border-b border-slate-200 pb-1 mb-3">
                  Technical Proficiency
                </h2>
                <div
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                  className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-800 font-bold outline-none leading-relaxed uppercase"
                >
                  {resumeData?.suggestedSkills?.length > 0
                    ? resumeData.suggestedSkills.join(" • ")
                    : "No skills suggested."}
                </div>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] border-b border-slate-200 pb-1 mb-4">
                  Professional Experience
                </h2>
                <div className="space-y-5">
                  {resumeData?.optimizedExperience?.map((exp, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline font-black text-[11px] uppercase">
                        <span
                          contentEditable={isEditing}
                          suppressContentEditableWarning
                        >
                          {exp.role}
                        </span>
                        <span
                          contentEditable={isEditing}
                          suppressContentEditableWarning
                          className="text-slate-500 italic lowercase font-medium"
                        >
                          {exp.duration}
                        </span>
                      </div>
                      <div
                        contentEditable={isEditing}
                        suppressContentEditableWarning
                        className="text-[10px] font-bold text-brand-primary uppercase mb-2 italic"
                      >
                        {exp.company}
                      </div>
                      <ul className="list-disc ml-5 space-y-1.5 text-slate-700">
                        {exp.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            contentEditable={isEditing}
                            suppressContentEditableWarning
                            className="text-[10.5px] leading-snug outline-none"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] border-b border-slate-200 pb-1 mb-4">
                  Technical Projects
                </h2>
                <div className="space-y-5">
                  {resumeData?.optimizedProjects?.map((proj, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline font-black text-[11px] uppercase mb-1">
                        <span
                          contentEditable={isEditing}
                          suppressContentEditableWarning
                        >
                          {proj.title}
                        </span>
                        <span
                          contentEditable={isEditing}
                          suppressContentEditableWarning
                          className="text-[9px] text-slate-400 font-mono lowercase"
                        >
                          {proj.techStack}
                        </span>
                      </div>
                      <ul className="list-disc ml-5 space-y-1.5 text-slate-700">
                        {proj.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            contentEditable={isEditing}
                            suppressContentEditableWarning
                            className="text-[10.5px] leading-snug outline-none"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education - Fixed Implementation */}
              <section>
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] border-b border-slate-200 pb-1 mb-3">
                  Education
                </h2>
                <div className="space-y-3">
                  {education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-start outline-none"
                    >
                      <div>
                        <h3
                          contentEditable={isEditing}
                          suppressContentEditableWarning
                          className="text-[11px] font-black uppercase leading-none mb-1"
                        >
                          {edu.institution}
                        </h3>
                        <p
                          contentEditable={isEditing}
                          suppressContentEditableWarning
                          className="text-[10px] text-slate-600 font-bold italic"
                        >
                          {edu.degree}
                        </p>
                      </div>
                      <span
                        contentEditable={isEditing}
                        suppressContentEditableWarning
                        className="text-[10px] font-black text-slate-500"
                      >
                        {edu.year}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTab;
