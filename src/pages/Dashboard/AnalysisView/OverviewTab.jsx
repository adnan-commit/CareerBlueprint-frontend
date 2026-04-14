import { Target, Quote } from "lucide-react";

const OverviewTab = ({ data }) => (
  <div className="space-y-6 md:space-y-10 animate-in slide-in-from-bottom-4 duration-500 overflow-x-hidden">
    {/* 1. Target Intelligence Section */}
    <section>
      <div className="flex items-center gap-3 mb-4 md:mb-6 px-1">
        <Target size={18} className="text-brand-primary md:w-5 md:h-5" />
        <h3 className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-500">
          Target Intelligence
        </h3>
      </div>

      <div className="p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white/3 border border-white/5 leading-relaxed text-slate-300 italic text-lg md:text-xl font-medium relative overflow-hidden group">
        {/* Adjusted Background Quote for Mobile Visibility */}
        <Quote
          className="absolute -top-2 -left-2 text-brand-primary/10 w-24 h-24 md:w-40 md:h-40 -rotate-12 transition-transform group-hover:rotate-0 duration-700"
          strokeWidth={0.5}
        />

        <p className="relative z-10 px-2 md:px-6 leading-snug md:leading-relaxed">
          {data?.companyInsights}
        </p>
      </div>
    </section>

    {/* 2. Strategy Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      {/* Role Strategy Card */}
      <div className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-brand-primary/5 border border-brand-primary/10 group hover:border-brand-primary/30 transition-all">
        <h4 className="text-[8px] md:text-[10px] font-black text-brand-primary uppercase mb-2 md:mb-4 tracking-widest opacity-70">
          Role Strategy
        </h4>
        <p className="text-xl md:text-2xl lg:text-3xl font-black text-white italic uppercase tracking-tighter leading-tight wrap-break-word">
          {data?.title}
        </p>
      </div>

      {/* Global Target Card */}
      <div className="p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white/3 border border-white/5 group hover:border-white/20 transition-all">
        <h4 className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase mb-2 md:mb-4 tracking-widest opacity-70">
          Global Target
        </h4>
        <p className="text-xl md:text-2xl lg:text-3xl font-black text-white italic uppercase tracking-tighter leading-tight truncate">
          {data?.companyName}
        </p>
      </div>
    </div>
  </div>
);

export default OverviewTab;
