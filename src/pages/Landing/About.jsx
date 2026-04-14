import { motion } from "framer-motion";
import {
  Mail,
  Link,
  GitCompare,
  Globe,
  Sparkles,
  Terminal,
} from "lucide-react";

const About = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:aadiqureshi89@gmail.com", label: "Email" },
    {
      icon: Link,
      href: "https://www.linkedin.com/in/adnan-qureshi-aa1517246/",
      label: "LinkedIn",
    },
    { icon: GitCompare, href: "https://github.com/adnan-commit", label: "GitHub" },
    { icon: Globe, href: "https://adnanos.vercel.app/", label: "Portfolio" },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden bg-slate-950"
    >
      {/* Background HUD elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <div className="absolute top-10 left-10 font-mono text-[10rem] font-black tracking-tighter">
          0101
        </div>
        <div className="absolute bottom-10 right-10 font-mono text-[10rem] font-black tracking-tighter">
          MERN
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Visual Side (Left) - Responsive handling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Outer Glow Decor */}
              <div className="absolute -inset-4 bg-brand-primary/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/50 p-2 backdrop-blur-3xl shadow-2xl">
                <img
                  src="/about.jpg"
                  alt="Adnan Qureshi - The Architect"
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-4xl object-cover aspect-4/5 scale-105 group-hover:scale-100"
                />

                {/* Floating HUD Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-brand-primary/10">
                    <Terminal size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none mb-1">
                      Status
                    </p>
                    <p className="text-xs font-bold text-white leading-none">
                      Architecting the Future
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Side (Right) - 3rd Party Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col space-y-8 order-1 lg:order-2 text-center lg:text-left items-center lg:items-start"
          >
            <div className="space-y-2">
              <motion.div
                whileInView={{ width: [0, 60] }}
                className="h-2px bg-brand-primary hidden lg:block"
              />
              <h2 className="text-brand-primary font-black text-[10px] uppercase tracking-[0.5em] flex items-center gap-2">
                <Sparkles size={12} /> The Visionary
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase italic">
                Adnan <span className="text-brand-primary">Qureshi</span>
              </h1>
            </div>

            <div className="space-y-6 text-slate-400 font-body leading-relaxed text-base md:text-xl max-w-2xl">
              <p>
                A high-octane{" "}
                <span className="text-white font-bold">Software Engineer.</span>{" "}
                 Adnan Qureshi doesn't just write code, he
                engineers solutions for the next generation of tech talent.
                Specializing in the{" "}
                <span className="text-white font-bold italic">MERN stack</span>{" "}
                and{" "}
                <span className="text-white font-bold italic">
                  AI orchestration
                </span>
                , his work is defined by a relentless pursuit of technical
                excellence.
              </p>

              <p className=" border-l-2 border-brand-primary/30 pl-6 py-2 bg-brand-primary/5 rounded-r-xl">
                His brainchild,{" "}
                <span className="text-brand-primary font-black uppercase tracking-tighter italic">
                  CareerBlueprint
                </span>
                , emerged not as a simple tool, but as a direct response to the
                industry's largest friction point: the gap between raw potential
                and strategic hiring.
              </p>

              <p>
                By fusing{" "}
                <span className="text-white font-bold">Gemini AI</span> with
                data-driven career analytics, Adnan has effectively bridged the
                divide, transforming static resumes into dynamic, high-impact
                tactical maps for FAANG and beyond.
              </p>
            </div>

            {/* Social Links Grid */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-8 w-full">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/3 border border-white/10 text-slate-400 hover:text-brand-primary hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all shadow-xl"
                >
                  <link.icon size={18} />
                  <span className="text-xs font-black uppercase tracking-widest">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
