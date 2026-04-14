import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-slate-950 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center space-y-8"
      >
        {/* Error Code */}
        <div className="relative inline-block">
          <h1 className="text-[150px] md:text-[200px] font-black text-white/5 italic leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertTriangle size={80} className="text-brand-primary animate-pulse" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Protocol <span className="text-brand-primary">Breach</span>
          </h2>
          <p className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-[0.3em]">
            Error: Requested coordinate not found in system
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button
            onClick={() => navigate(-1)}
            className="w-full  cursor-pointer sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Safety
          </button>
          
          <button
            onClick={() => navigate("/")}
            className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-brand-primary text-slate-950 rounded-2xl font-black uppercase text-xs tracking-widest shadow-brand-glow hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <Home size={16} /> Return to Terminal
          </button>
        </div>
      </motion.div>

      {/* Glitch Footer Text */}
      <div className="absolute bottom-10 font-mono text-[10px] text-slate-700 uppercase tracking-[0.5em] select-none">
        Career Blueprint // System_Failure // No_Data_Found
      </div>
    </div>
  );
};

export default NotFound;