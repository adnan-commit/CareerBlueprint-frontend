import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const DashboardHeader = ({ user, dateStr }) => {
  return (
    <div className="flex items-center justify-between mb-8 md:mb-16 pb-6 md:pb-8 border-b border-white/5">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-[70%]"
      >
        <div className="flex items-center gap-2 text-brand-primary text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1">
          <Activity size={10} className="animate-pulse md:w-3 md:h-3" />
          <span className="hidden xs:inline">System</span> Active
        </div>

        <h1 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase italic leading-tight">
          Hello,{" "}
          <span className="text-brand-primary wrap-break-word">
            {user?.username || "Architect"}
          </span>
        </h1>

        <p className="text-slate-500 font-mono text-[9px] md:text-[10px] uppercase tracking-widest mt-1">
          {dateStr}
        </p>
      </motion.div>

      {/* Futuristic Avatar - Responsive Size */}
      <div className="relative group shrink-0">
        <div className="absolute -inset-1 bg-linear-to-tr from-brand-primary to-brand-secondary rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
        <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-lg md:text-xl font-black text-brand-primary uppercase shadow-2xl">
          {user?.username?.[0] || "A"}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
