import { ShieldCheck, Target, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const AnalysisHeader = ({ data, reportId }) => (
  <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white/2 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-white/10 relative overflow-hidden group transition-all">
    {/* Background Decorative Element for Mobile */}
    <div className="absolute -top-10 -right-10 opacity-[0.02] md:opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-700">
      <Gauge size={180} />
    </div>

    <div className="relative z-10 w-full md:w-auto">
      {/* ID Badge */}
      <div className="flex items-center gap-2 text-brand-primary text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-3">
        <ShieldCheck size={12} className="md:w-3.5 md:h-3.5" />
        <span className="truncate">
          Report Verified: #{reportId?.slice(-6)}
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase italic leading-tight md:leading-none">
        Deep <span className="text-brand-primary">Analysis</span>
      </h1>

      {/* Company & Role Info */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-4 text-slate-500 font-bold uppercase text-[9px] md:text-[11px] tracking-widest">
        <span className="flex items-center gap-1.5 text-white md:text-slate-500">
          <Target size={14} className="text-brand-primary shrink-0" />
          <span className="truncate max-w-30 md:max-w-none">
            {data.companyName}
          </span>
        </span>
        <span className="hidden xs:block h-3 w-px bg-white/10" />
        <span className="text-white/80 md:text-white truncate max-w-50 md:max-w-none">
          {data.title}
        </span>
      </div>
    </div>

    {/* Match Score Section */}
    <div className="flex md:block items-center justify-between w-full md:w-auto text-right relative z-10 pt-4 md:pt-0 border-t border-white/5 md:border-none">
      <div className="md:hidden text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
        Probability
      </div>

      <div>
        <div className="text-5xl md:text-6xl font-black text-brand-primary leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">
          {data.matchScore}%
        </div>
        <div className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-2 font-mono">
          Match Probability
        </div>
      </div>
    </div>
  </header>
);

export default AnalysisHeader;
