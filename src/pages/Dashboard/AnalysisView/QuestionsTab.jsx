import { ChevronDown, MessageSquareCode } from "lucide-react";

const QuestionsTab = ({ questions, type }) => (
  <div className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
    <header className="mb-6 md:mb-10 px-1">
      <div className="flex items-center gap-2 mb-2">
        <MessageSquareCode
          size={14}
          className="text-brand-primary md:w-5 md:h-5"
        />
        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary opacity-80">
          Live Database
        </span>
      </div>
      <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">
        {type} <span className="text-brand-primary">Intel</span>
      </h3>
      <p className="text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mt-1">
        AI-Predicted high-probability sequences
      </p>
    </header>

    <div className="grid gap-3 md:gap-4">
      {questions?.map((q, idx) => (
        <details
          key={idx}
          className="group p-5 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white/2 border border-white/5 hover:border-brand-primary/20 transition-all cursor-pointer"
        >
          <summary className="list-none flex justify-between items-start gap-4 font-black text-white text-base md:text-lg uppercase italic tracking-tight outline-none">
            <span className="leading-tight">
              <span className="text-brand-primary mr-2 font-mono">
                {(idx + 1).toString().padStart(2, "0")}
              </span>
              {q.question}
            </span>
            <ChevronDown
              className="group-open:rotate-180 transition-transform text-brand-primary mt-1 shrink-0"
              size={18}
              strokeWidth={3}
            />
          </summary>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/5 space-y-5 md:space-y-6 animate-in slide-in-from-top-2 duration-300">
            {/* Intent Section */}
            <div>
              <p className="text-[8px] md:text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-2 opacity-70">
                Interviewer Intent
              </p>
              <p className="text-slate-400 font-medium italic text-xs md:text-sm leading-relaxed">
                {q.intention}
              </p>
            </div>

            {/* Answer Architecture Section */}
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-brand-primary/5 border border-brand-primary/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary" />
              <p className="text-[8px] md:text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-3">
                Suggested Response Architecture
              </p>
              <p className="text-white leading-relaxed font-medium text-xs md:text-sm">
                {q.answer}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  </div>
);

export default QuestionsTab;
