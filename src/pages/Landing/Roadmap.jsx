import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Upload, Cpu, FileCheck, Trophy, Sparkle } from "lucide-react";

const RoadmapStep = ({
  icon: Icon,
  title,
  description,
  stepNumber,
  isLast,
}) => {
  return (
    <div className="relative flex gap-6 md:gap-16 pb-20 md:pb-32 last:pb-0 group">
      {/* Step Indicator & Line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ rotate: -45, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-20 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-950 border border-white/10 group-hover:border-brand-primary transition-all duration-500 shadow-2xl overflow-hidden"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors" />
          <Icon className="w-7 h-7 md:w-8 md:h-8 text-brand-primary relative z-10 group-hover:scale-110 transition-transform duration-500" />

          {/* Step Number Badge */}
          <div className="absolute top-0 right-0 bg-brand-primary/20 text-brand-primary text-[10px] px-2 py-0.5 font-black rounded-bl-lg">
            0{stepNumber}
          </div>
        </motion.div>

        {/* Vertical Line Connector */}
        {!isLast && (
          <div className="w-0.5 h-full bg-white/5 relative">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "anticipate" }}
              className="absolute top-0 left-0 w-full bg-linear-to-b from-brand-primary via-brand-secondary to-transparent"
            />
          </div>
        )}
      </div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex-1 pt-2 md:pt-4"
      >
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="h-px w-8 bg-brand-primary/30" />
          <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em]">
            Phase 0{stepNumber}
          </span>
        </div>

        <h4 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase italic group-hover:translate-x-2 transition-transform duration-500">
          {title}
        </h4>

        <p className="text-slate-400 font-body text-base md:text-lg max-w-xl leading-relaxed group-hover:text-slate-300 transition-colors">
          {description}
        </p>

        {/* Decorative HUD line for Desktop */}
        <div className="mt-6 h-px w-full bg-linear-to-r from-white/10 to-transparent hidden md:block" />
      </motion.div>
    </div>
  );
};

const Roadmap = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-40 relative bg-slate-950 overflow-hidden"
      id="roadmap"
    >
      {/* Background Grid/Design */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #2dd4bf 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8"
          >
            <Sparkle size={12} className="animate-pulse" /> The Execution Engine
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            Your path to <br />
            <span className="bg-linear-to-r from-brand-primary via-emerald-400 to-brand-secondary bg-clip-text text-transparent italic">
              Day One.
            </span>
          </h2>
        </div>

        {/* Vertical Steps Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <RoadmapStep
            stepNumber={1}
            icon={Upload}
            title="Upload Assets"
            description="Drag and drop your resume and JD. Our system initiates a full-spectrum architectural scan instantly."
          />
          <RoadmapStep
            stepNumber={2}
            icon={Cpu}
            title="AI Extraction"
            description="Gemini Deep-Analysis identifies high-impact metrics, keyword gaps, and hidden ATS obstacles in your profile."
          />
          <RoadmapStep
            stepNumber={3}
            icon={FileCheck}
            title="Blueprint Forge"
            description="Get a tailored prep-plan, resume and predictive Q&A bank. Every detail is calibrated for your specific target role."
          />
          <RoadmapStep
            stepNumber={4}
            isLast
            icon={Trophy}
            title="Final Victory"
            description="Leverage AI-driven behavioral feedback and technical insights to secure the offer you deserve."
          />

          {/* Decorative Floating Elements */}
          <div className="absolute -right-20 top-1/4 w-72 h-72 bg-brand-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
          <div className="absolute -left-20 bottom-1/4 w-72 h-72 bg-brand-secondary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
