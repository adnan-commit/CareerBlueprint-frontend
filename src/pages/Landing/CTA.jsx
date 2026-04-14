import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight, Cpu, ShieldCheck, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-40 px-6 relative overflow-hidden bg-slate-950"
    >
      {/* 1. LAYERED BACKGROUND ANIMATION */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.08)_0%,transparent 60%)]" />
        {/* Moving Grid Effect */}
        <div
          className="absolute inset-0 opacity-[0.05] mask-[radial-gradient(ellipse_at_center,black,transparent)]"
          style={{
            backgroundImage: `linear-gradient(#2dd4bf 1px, transparent 1px), linear-gradient(90deg, #2dd4bf 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto relative group"
      >
        {/* 2. THE GLOWING OUTER FRAME */}
        <div className="absolute -inset-1 bg-linear-to-r from-brand-primary via-emerald-500 to-brand-secondary rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

        <div className="relative z-10 rounded-[3rem] bg-slate-900/80 border border-white/10 backdrop-blur-3xl p-10 md:p-24 overflow-hidden shadow-2xl">
          {/* Decorative HUD Elements */}
          <div className="absolute top-10 left-10 opacity-20 hidden md:block">
            <Globe
              className="animate-spin-slow text-brand-primary"
              size={100}
            />
          </div>

          <div className="relative z-20 flex flex-col items-center text-center">
            {/* Animated Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10"
            >
              <Cpu size={12} className="fill-brand-primary" />
              System Engine: Active
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85] uppercase italic">
              Architected by <br />
              <span className="bg-linear-to-r from-brand-primary via-brand-secondary to-emerald-400 bg-clip-text text-transparent">
                Gemini Multimodal AI.
              </span>
            </h2>

            <p className="text-slate-400 font-body text-base md:text-xl max-w-2xl mb-12 leading-relaxed">
              Join 500+ developers who ditched generic applications for
              AI-powered precision. Your next FAANG-level offer is one blueprint
              away.
            </p>

            {/* THE "NEON" BUTTON */}
            <div className="relative group/btn">
              {/* Button Glow shadow */}
              <div className="absolute -inset-1 bg-brand-primary rounded-2xl blur-xl opacity-20 group-hover/btn:opacity-60 transition duration-500" />

              <button
                onClick={() => navigate("/register")}
                className="relative cursor-pointer flex items-center gap-4 px-12 py-6 bg-brand-primary text-slate-950 font-black text-xl rounded-2xl overflow-hidden transition-all active:scale-95"
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform" />

                <span className="flex items-center gap-3 relative z-10">
                  ACTIVATE AI STRATEGY
                  <ArrowRight
                    className="group-hover/btn:translate-x-2 transition-transform duration-300"
                    size={24}
                  />
                </span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
                <ShieldCheck size={14} className="text-brand-primary" /> Secure
                Data Tunnel
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
                <Sparkles size={14} className="text-brand-primary" />{" "}
                Multi-Model Intelligence
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
