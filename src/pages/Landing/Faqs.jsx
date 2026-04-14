import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`mb-4 rounded-4xl border transition-all duration-500 ${
        isOpen
          ? "bg-white/4 border-brand-primary/30 shadow-[0_0_30px_rgba(45,212,191,0.05)]"
          : "bg-white/1 border-white/5 hover:border-white/10"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full cursor-pointer px-8 py-7 flex items-center justify-between text-left group"
      >
        <span
          className={`text-base md:text-lg font-bold tracking-tight transition-colors uppercase italic ${
            isOpen
              ? "text-brand-primary"
              : "text-slate-300 group-hover:text-white"
          }`}
        >
          {question}
        </span>
        <div
          className={`shrink-0 ml-4 p-2 rounded-xl border transition-all duration-300 ${
            isOpen
              ? "border-brand-primary bg-brand-primary text-slate-950"
              : "border-white/10 text-slate-500"
          }`}
        >
          {isOpen ? (
            <Minus size={16} strokeWidth={3} />
          ) : (
            <Plus size={16} strokeWidth={3} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 text-slate-400 leading-relaxed font-body text-sm md:text-base border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faqs = () => {
  const faqs = [
    {
      question: "How does the AI reverse-engineer recruiter expectations?",
      answer:
        "Our system utilizes Different Gemini models to cross-reference your project's technical architecture against proprietary hiring rubrics from top-tier firms. It identifies the exact high-impact metrics and technical depth that senior engineers look for during manual reviews.",
    },
    {
      question: "Can I generate blueprints for multiple companies?",
      answer:
        "Yes. Each analysis is role-specific. You can generate distinct blueprints for 'SDE-1 at Google' and 'Frontend Engineer at Stripe' using the same resume; the AI will pivot the strategy based on each company's unique engineering culture.",
    },
    {
      question: "What happens to my data after the analysis?",
      answer:
        "We follow a 'Privacy-First' protocol. Your resume is parsed into a temporary knowledge graph for analysis and encrypted. We do not train our models on your personal data, and you have full control to purge your history at any time.",
    },
    {
      question: "Does the roadmap include resource links?",
      answer:
        "Absolutely. The preparation plan doesn't just tell you what to study; it provides curated high-quality links for DSA patterns, System Design case studies, and documentation specific to your skill gaps.",
    },
    {
      question: "Is this effective for experienced developers?",
      answer:
        "Yes. For senior roles, the AI shifts focus from basic syntax to high-level architecture, scalability bottlenecks, and leadership-driven behavioral responses (STAR method) required for L5/L6 equivalent loops.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 md:py-32 relative bg-slate-950 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.03)_0%,transparent 70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <HelpCircle size={12} className="text-brand-primary" /> Intelligence
            Support
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            Common{" "}
            <span className="bg-linear-to-r from-brand-primary to-emerald-400 bg-clip-text text-transparent italic">
              Queries.
            </span>
          </h2>
          <p className="mt-6 text-slate-500 font-body max-w-lg mx-auto">
            Everything you need to know about the Career Blueprint architecture and
            privacy protocols.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} index={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
