import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const targetRef = useRef(null);

  // Scroll Animations
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0px", "250px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Floating continuous animation for the image
  const floatingAnimation = {
    y: [0, -20, 0],
    rotateZ: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const scrollToRoadmap = () => {
    const element = document.getElementById("roadmap");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen md:min-h-[120vh] flex flex-col items-center pt-32 pb-20 overflow-hidden bg-slate-950"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 w-full">
        {/* TEXT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
        >
          <motion.span
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase bg-brand-primary/10 text-brand-primary border border-brand-primary/20 shadow-glow"
          >
            Powered by Gemini AI
          </motion.span>

          <motion.div variants={itemVariants} className="relative">
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black font-heading tracking-tighter leading-[0.9] text-white">
              Blueprint Your <br />
              <span className="relative inline-block py-2">
                <span className="relative z-10 bg-linear-to-r from-brand-primary via-emerald-400 to-brand-secondary bg-clip-text text-transparent">
                  Tech Career
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute bottom-2 left-0 h-1.5 md:h-2.5 bg-brand-primary/10 z-0 rounded-full"
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-400 font-body max-w-xl leading-relaxed"
          >
            Stop guessing. Our AI-driven engine architects precision-engineered
            roadmaps, resume optimizations, and interview intelligence tailored
            for FAANG & top-tier startups.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <motion.button
              onClick={scrollToRoadmap}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer relative flex items-center gap-3 px-8 py-4 bg-white/3 border border-white/10 rounded-2xl overflow-hidden transition-all hover:bg-white/8 hover:border-brand-primary/50 shadow-2xl"
            >
              {/* 1. Subtle Background Glow on Hover */}
              <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* 2. Content */}
              <span className="relative z-10 text-sm md:text-base font-black uppercase tracking-widest text-slate-200 group-hover:text-brand-primary transition-colors">
                Explore Roadmap
              </span>

              {/* 3. Animated Icon Container */}
              <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-400 group-hover:text-slate-950 transition-colors group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* 4. Bottom Line Accent */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-brand-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION - Stretched & Floating */}
        <motion.div
          style={{ y: imageY, opacity }}
          className="relative flex items-center justify-center lg:justify-end h-full"
        >
          <motion.div animate={floatingAnimation} className="relative z-10">
            {/* The Stretched Image Container */}
            <div className="relative p-1.5 rounded-[3rem] bg-white/3 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />

              <img
                src="/hero.jpg"
                alt="AI Career Blueprint"
                className="w-full max-w-[320px] md:max-w-112.5 lg:max-w-125 h-125 md:h-162.5 lg:h-187.5 object-cover rounded-[2.8rem] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Decorative HUD Elements on Image */}
              <div className="absolute top-10 left-10 z-20 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hidden md:block">
                <div className="w-8 h-1 bg-brand-primary rounded-full mb-1" />
                <div className="w-5 h-1 bg-white/20 rounded-full" />
              </div>
            </div>

            {/* Background Glow for Image */}
            <div className="absolute -inset-4 bg-brand-primary/20 blur-[60px] -z-10 rounded-[4rem] opacity-50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
