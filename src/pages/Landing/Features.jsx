import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Zap, Target, LineChart, Shield, Cpu, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const FeatureCard = ({
  title,
  icon: Icon,
  className,
  bgImage,
  description,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for the glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`relative rounded-4xl border border-white/8 overflow-hidden group cursor-pointer bg-slate-900/50 ${className}`}
    >
      {/* 1. Dynamic Glow Effect (Cursor Follower) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(45, 212, 191, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* 2. Background Image Layer */}
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.4 : 0.15,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-transparent transition-colors duration-700" />
      </motion.div>

      {/* 3. Content Layer */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
        <motion.div
          animate={{ y: isHovered ? -5 : 0 }}
          className="p-3 w-fit rounded-2xl bg-brand-primary/10 border border-brand-primary/20 mb-4 backdrop-blur-md"
        >
          <Icon className="w-6 h-6 text-brand-primary shadow-glow" />
        </motion.div>

        <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tighter uppercase italic group-hover:text-brand-primary transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-xs md:text-sm font-body leading-relaxed max-w-70 lg:max-w-none">
          {description}
        </p>

        {/* Decorative corner element */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Sparkles className="w-4 h-4 text-brand-primary/40" />
        </div>
      </div>

      {/* 4. Border Animation */}
      <div className="absolute inset-0 border-2 border-brand-primary/0 group-hover:border-brand-primary/20 rounded-4xl transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

// Helper for motion template
function useMotionTemplate(fragments, ...values) {
  return useTransform(values, (v) =>
    fragments.reduce((acc, f, i) => acc + f + (v[i] || ""), ""),
  );
}

const Features = () => {
  const featureData = [
    {
      title: "FAANG-Grade Optimizer",
      description:
        "We transform weak bullets into high-impact metrics that recruiters love.",
      icon: Zap,
      bgImage: "./resumeOptimizer.jpeg",
      size: "md:col-span-8 md:row-span-2",
    },
    {
      title: "The 90+ Club",
      description: "Know exactly how you rank against the JD before applying.",
      icon: Target,
      bgImage: "./matchScore.jpeg",
      size: "md:col-span-4 md:row-span-1",
    },
    {
      title: "Company DNA",
      description:
        "Inside scoop on Google, Meta, and Amazon's specific hiring bars.",
      icon: Cpu,
      bgImage: "./overview.png",
      size: "md:col-span-4 md:row-span-1",
    },
    {
      title: "Structured Blueprint",
      description:
        "A daily personalized curriculum covering DSA and System Design.",
      icon: LineChart,
      bgImage: "./blueprint.png",
      size: "md:col-span-5 md:row-span-2",
    },
    {
      title: "Predictive Q&A",
      description:
        "AI predicts the next questions based on your project tech stack.",
      icon: Sparkles,
      bgImage: "./technicalques.png",
      size: "md:col-span-7 md:row-span-1",
    },
    {
      title: "Soft Skill Analysis",
      description:
        "Master the STAR method with AI-generated behavioral responses.",
      icon: Shield,
      bgImage: "./behavioural.png",
      size: "md:col-span-7 md:row-span-1",
    },
  ];

  return (
    <section
      className="py-24 md:py-32 relative bg-slate-950 overflow-hidden"
      id="features"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 text-[20rem] font-black text-white/1 select-none pointer-events-none tracking-tighter translate-x-1/4 -translate-y-1/4">
        FEATURES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
                Decode your <br />
                <span className="bg-linear-to-r from-brand-primary via-brand-secondary to-emerald-400 bg-clip-text text-transparent italic">
                  Career DNA.
                </span>
              </h2>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 font-body text-base md:text-lg max-w-sm border-l border-brand-primary/30 pl-6 py-2"
          >
            Our AI doesn't just scan; it strategizes. Every feature is a
            precision-engineered step towards your dream offer.
          </motion.p>
        </div>

        {/* Bento Grid Layout - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[280px]">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              className={feature.size}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
