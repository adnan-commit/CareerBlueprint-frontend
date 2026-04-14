import { BarChart3, ExternalLink, ShieldAlert } from "lucide-react";

const SkillTab = ({ skills }) => (
  <div className="space-y-6 md:space-y-10 animate-in fade-in duration-700">
    {/* Section Header for Mobile Context */}
    <div className="flex items-center gap-3 px-1 md:hidden">
      <BarChart3 size={18} className="text-brand-primary" />
      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
        Skill Matrix Analytics
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {skills?.map((s, i) => (
        <div
          key={i}
          className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-white/3 border border-white/5 hover:border-brand-primary/20 transition-all group relative overflow-hidden flex flex-col justify-between"
        >
          {/* Header Info */}
          <div className="flex justify-between items-start mb-6 md:mb-8 gap-4">
            <div className="min-w-0">
              <span className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">
                Target Skill
              </span>
              <h4 className="font-black text-white text-xl md:text-2xl uppercase italic group-hover:text-brand-primary transition-colors truncate">
                {s.skill}
              </h4>
            </div>

            {/* Severity Badge - Adjusted for Mobile */}
            <div
              className={`flex items-center gap-1.5 text-[8px] md:text-[10px] px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl font-black uppercase border shrink-0 ${
                s.severity === "high"
                  ? "bg-red-500/10 text-red-500 border-red-500/20"
                  : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
              }`}
            >
              <ShieldAlert size={10} className="hidden xs:block" />
              {s.severity}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid gap-2">
            <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest mb-1 block">
              Recommended Resources
            </span>
            {s.resources?.map((res, ri) => (
              <a
                key={ri}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 md:p-4 rounded-xl md:rounded-2xl bg-white/5 hover:bg-brand-primary text-slate-400 hover:text-slate-950 transition-all font-bold text-[10px] md:text-xs uppercase tracking-tight group/link"
              >
                <span className="truncate pr-2">{res.title}</span>
                <ExternalLink size={12} className="shrink-0" />
              </a>
            ))}
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -bottom-4 -right-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
            <BarChart3 size={100} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillTab;
