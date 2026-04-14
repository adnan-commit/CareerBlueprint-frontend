import { motion } from "framer-motion";
import {
  FileText,
  Building2,
  UserCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Forge = ({
  file,
  setFile,
  formData,
  setFormData,
  handleAnalyze,
  isAnalyzing,
  history,
  onArchivesClick,
  onReportSelect,
}) => {
  const isFormIncomplete =
    !file ||
    !formData.companyName ||
    !formData.jobDescription ||
    !formData.selfIntro;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-full overflow-x-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        {/* Left Column: Upload & Context */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          {/* Step 01: Resume Upload */}
          <section className="p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white/2 border border-white/10 group hover:border-brand-primary/30 transition-all duration-500">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
              id="resume-up"
            />
            <label
              htmlFor="resume-up"
              className="cursor-pointer block border-2 border-dashed border-white/5 group-hover:border-brand-primary/20 p-8 md:p-12 rounded-2xl md:rounded-3xl text-center transition-all bg-white/1"
            >
              {file ? (
                <div className="text-white font-bold flex items-center justify-center gap-2 animate-in fade-in zoom-in break-all">
                  <FileText className="text-brand-primary shrink-0" />
                  <span className="text-xs md:text-sm truncate max-w-50 md:max-w-none">
                    {file.name}
                  </span>
                </div>
              ) : (
                <div className="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-tighter">
                  01. Drop Resume / Click to Browse
                </div>
              )}
            </label>
          </section>

          {/* Step 02: Target Parameters */}
          <section className="p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white/2 border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <Building2 size={16} className="text-brand-secondary" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                02. Target Parameters
              </span>
            </div>
            <input
              placeholder="Company Name (e.g. Google)"
              className="w-full p-4 md:p-5 text-sm md:text-base bg-white/5 rounded-xl md:rounded-2xl border border-white/10 outline-none focus:border-brand-primary/50 transition-all text-white"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
            <textarea
              placeholder="Paste Job Description Requirements"
              className="w-full p-4 md:p-5 h-32 md:h-48 text-sm md:text-base bg-white/5 rounded-xl md:rounded-2xl border border-white/10 outline-none resize-none focus:border-brand-primary/50 transition-all text-white"
              value={formData.jobDescription}
              onChange={(e) =>
                setFormData({ ...formData, jobDescription: e.target.value })
              }
            />
          </section>
        </div>

        {/* Right Column: Narrative & Button */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
          <section className="flex-1 p-6 md:p-8 bg-white/5 rounded-3xl md:rounded-[2.5rem] border border-white/10 flex flex-col min-h-50 lg:min-h-0">
            <div className="flex items-center gap-3 mb-6">
              <UserCircle size={16} className="text-purple-400" />
              <span className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest">
                03. Narrative Override
              </span>
            </div>
            <textarea
              placeholder="Define your career narrative..."
              className="flex-1 w-full p-4 md:p-5 text-sm md:text-base bg-white/5 rounded-xl md:rounded-2xl outline-none resize-none focus:border-brand-primary/50 transition-all text-white h-32 lg:h-full"
              value={formData.selfIntro}
              onChange={(e) =>
                setFormData({ ...formData, selfIntro: e.target.value })
              }
            />
          </section>

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || isFormIncomplete} // Dono conditions pe disable
            className={`group relative py-6 md:py-8 font-black rounded-2xl md:rounded-3xl uppercase text-xs md:text-sm tracking-widest overflow-hidden transition-all
              ${
                isAnalyzing || isFormIncomplete
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed opacity-50"
                  : "bg-brand-primary text-slate-950 cursor-pointer shadow-brand-glow active:scale-95 hover:scale-[1.02]"
              }`}
          >
            {/* Loading animation overlay */}
            {isAnalyzing && (
              <motion.div
                className="absolute inset-0 bg-brand-primary/20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            )}

            <span className="relative flex items-center justify-center gap-2">
              {isAnalyzing ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                  >
                    <Sparkles size={18} />
                  </motion.div>
                  Processing Blueprint...
                </>
              ) : (
                <>
                  <Sparkles size={18} /> Initiate Strategy Forge
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Quick History Preview */}
      <div className="mt-12 md:mt-20">
        <div className="flex flex-row justify-between items-center mb-6 md:mb-10">
          <div>
            <h3 className="text-xl md:text-2xl font-black italic uppercase text-white tracking-tighter leading-none">
              Recent Forges
            </h3>
            <p className="text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1">
              Latest Results
            </p>
          </div>
          <button
            onClick={onArchivesClick}
            className="text cursor-pointer-brand-primary text-[8px] md:text-[10px] font-black uppercase flex items-center gap-1.5 border border-brand-primary/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-brand-primary/10 transition-all"
          >
            Vault <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
          </button>
        </div>

        {/* Grid adjustments for mobile/tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {history
            .slice(-3)
            .reverse()
            .map((item) => (
              <div
                key={item._id}
                onClick={() => onReportSelect(item._id)}
                className="p-5 md:p-6 rounded-3xl md:rounded-4xl bg-white/2 border border-white/10 hover:border-brand-primary/30 transition-all cursor-pointer group"
              >
                <p className="text-[8px] md:text-[10px] font-black text-brand-primary uppercase tracking-widest mb-1 md:mb-2 group-hover:translate-x-1 transition-transform">
                  {item.companyName}
                </p>
                <h4 className="text-lg md:text-2xl font-black text-white italic">
                  {item.matchScore}% Match
                </h4>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Forge;
