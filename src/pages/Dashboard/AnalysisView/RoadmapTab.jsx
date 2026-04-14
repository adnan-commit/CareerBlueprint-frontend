import { CheckCircle2, Trophy } from "lucide-react";

const RoadmapTab = ({ plan }) => {
  const totalDays = plan?.length || 0;

  return (
    <div className="max-w-3xl mx-auto space-y-4 px-1 md:px-0 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-3">
          <Trophy size={12} className="text-brand-primary" />
          <span className="text-[8px] font-black uppercase tracking-widest text-brand-primary">
            Tactical Objective
          </span>
        </div>

        {/* Dynamic Title: Ab ye 7-day pe fixed nahi rahega */}
        <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter text-glow leading-none">
          The {totalDays}-Day Sprint
        </h3>

        <p className="text-slate-500 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mt-2">
          Personalized Execution Path
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {plan?.map((day, idx) => (
          <div
            key={idx}
            className="relative pl-8 md:pl-12 pb-8 md:pb-12 border-l border-white/10 last:border-0 ml-3 md:ml-0"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-1.5 md:-left-2.75 top-0 w-3 h-3 md:w-5 md:h-5 rounded-full bg-slate-950 border-2 md:border-4 border-brand-primary shadow-[0_0_10px_rgba(45,212,191,0.4)] z-10" />

            {/* Content Card */}
            <div className="bg-white/3 p-5 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-white/5 hover:border-brand-primary/20 transition-all group relative overflow-hidden">
              <h4 className="text-brand-primary font-black uppercase tracking-tighter text-lg md:text-xl mb-4 md:mb-6 flex flex-wrap items-center gap-2 md:gap-3 italic">
                Day {day.day}
                <span className="hidden xs:block h-px w-6 md:w-8 bg-brand-primary/30" />
                <span className="text-white text-base md:text-xl">
                  {day.focus}
                </span>
              </h4>

              <ul className="space-y-3 md:space-y-4">
                {day.tasks.map((task, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 md:gap-4 text-slate-400 group/item"
                  >
                    <div className="mt-1 p-0.5 md:p-1 rounded bg-white/5 group-hover/item:bg-brand-primary/20 transition-colors shrink-0">
                      <CheckCircle2
                        size={10}
                        className="text-brand-primary md:w-3 md:h-3"
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium group-hover/item:text-slate-200 transition-colors leading-relaxed">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTab;
