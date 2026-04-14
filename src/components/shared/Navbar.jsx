import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../Logo"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Features", id: "features" },
    { name: "Roadmap", id: "roadmap" },
    { name: "About", id: "about" },
    { name: "FAQs", id: "faq" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-6 flex items-center justify-between md:justify-start gap-4 md:gap-6 px-4 md:px-6 py-2.5 backdrop-blur-xl bg-white/3 border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-fit md:w-auto"
      >
        {/* LOGO - Mini Version */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <Logo /> {/* Tera Logo Component yahan fit ho gaya */}
          <span className="text-sm md:text-base font-heading font-bold tracking-tighter text-white hidden xs:block">
            Career<span className="text-brand-primary">Blueprint</span>
          </span>
        </Link>

        {/* Separator - Desktop Only */}
        <div className="h-4 w-px bg-white/10 hidden md:block" />

        {/* NAV LINKS - Desktop Only */}
        <div className="hidden md:flex items-center gap-5 text-[13px] font-medium text-slate-400">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-brand-primary transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Separator - Desktop Only */}
        <div className="h-4 w-px bg-white/10 hidden md:block" />

        {/* ACTION BUTTONS & MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <Link
            to="/register"
            className="hidden sm:block px-4 py-1.5 text-[11px] md:text-[12px] font-bold rounded-full bg-brand-primary text-slate-950 shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] hover:scale-105 transition-all"
          >
            Get Started
          </Link>

          {/* Hamburger Icon - Mobile Only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full bg-white/5 border border-white/10 md:hidden text-white transition-all active:scale-90"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU - Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 p-6 bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-3xl md:hidden flex flex-col items-center gap-6 z-40 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-lg font-medium text-slate-300 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 rounded-2xl bg-brand-primary text-slate-950 font-black text-sm uppercase tracking-widest shadow-lg"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;