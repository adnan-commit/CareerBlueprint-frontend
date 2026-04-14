import { GitCompare, Link, Mail, ExternalLink, Cpu, Globe } from "lucide-react";
import Logo from "../Logo"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { name: "System Features", href: "#features" },
    { name: "Preparation Roadmap", href: "#roadmap" },
    { name: "About Architect", href: "#about" },
    { name: "Intelligence F.A.Q", href: "#faq" },
  ];

  return (
    <footer className="relative py-20 border-t border-white/5 bg-slate-950 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-primary/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* 1. Brand & Narrative - (5 Columns) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Logo />
              
            </div>

            <p className="text-slate-500 text-sm md:text-base font-body max-w-sm leading-relaxed">
              Orchestrating the next generation of software engineering careers
              through multi-model AI intelligence. Built for developers who
              demand strategic precision.
            </p>

            <div className="flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/5 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </div>
          </div>

          {/* 2. Platform Navigation - (3 Columns) */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">
              Protocol
            </h4>
            <nav className="flex flex-col gap-3">
              {platformLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-brand-primary text-sm transition-all duration-300 w-fit hover:translate-x-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* 3. Engineering & Connect - (4 Columns) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">
              Core Engineering
            </h4>
            <div className="space-y-4">
              <a
                href="https://adnanos.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                <span className="text-lg font-bold italic tracking-tight">
                  Adnan Qureshi
                </span>
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/adnan-qureshi-aa1517246/"
                  target="_blank"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-500 hover:text-brand-primary hover:border-brand-primary/30 transition-all shadow-xl"
                >
                  <Link size={18} />
                </a>
                <a
                  href="https://github.com/adnan-commit"
                  target="_blank"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-500 hover:text-brand-primary hover:border-brand-primary/30 transition-all shadow-xl"
                >
                  <GitCompare size={18} />
                </a>
                <a
                  href="mailto:aadiqureshi89@gmail.com"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-500 hover:text-brand-primary hover:border-brand-primary/30 transition-all shadow-xl"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://adnanos.vercel.app/"
                  target="_blank"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-500 hover:text-brand-primary hover:border-brand-primary/30 transition-all shadow-xl"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line Detail */}
        <div className="mt-20 pt-8 border-t border-white/3 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">
            © {currentYear} CAREER BLUEPRINT ARCHITECTURE
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-slate-700 font-mono tracking-widest uppercase flex items-center gap-2">
              <Cpu size={12} /> Hybrid AI Stack
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
