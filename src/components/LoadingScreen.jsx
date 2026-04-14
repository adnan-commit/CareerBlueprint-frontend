import React from "react";
import { motion } from "framer-motion";
import { Terminal, Sparkles } from "lucide-react";

const LoadingScreen = () => (
  <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] text-white">
    {/* Animated Pulse Logic */}
    <motion.div 
      animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="p-6 rounded-3xl bg-slate-900 border border-brand-primary/20 shadow-glow"
    >
      <Terminal size={48} className="text-brand-primary" />
    </motion.div>

    <div className="mt-8 text-center space-y-4">
      <h2 className="text-xs font-black uppercase tracking-[0.4em] text-brand-primary animate-pulse">
        Initialising Genesis Protocol
      </h2>
      <p className="text-[10px] text-slate-500 uppercase tracking-widest italic">
        Systems are booting from cold-state... Please wait.
      </p>
    </div>
  </div>
);
export default LoadingScreen;