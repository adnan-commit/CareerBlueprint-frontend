import React from "react";

// Icon Symbol (Blueprint + Arrow Up)
const LogoIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Blueprint Grid Lines */}
    <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" opacity="0.3"/>
    <path d="M12 3V21" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.3"/>
    <path d="M3 12H21" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.3"/>

    {/* The Path/Arrow (Bold, Gradient effect in SVG) */}
    <path 
      d="M18.5 5.5L12 12L8 8L3.5 12.5" 
      stroke="url(#logo-gradient)" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]"
    />
    <path 
      d="M18.5 5.5H14.5V9.5" 
      stroke="url(#logo-gradient)" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />

    {/* Defining the Gradient inside SVG */}
    <defs>
      <linearGradient id="logo-gradient" x1="3.5" y1="5.5" x2="18.5" y2="12.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2DD4BF" /> {/* Teal */}
        <stop offset="1" stopColor="#06B6D4" /> {/* Cyan */}
      </linearGradient>
    </defs>
  </svg>
);

const Logo = ({ showIcon = true, size = "text-xl" }) => {
  return (
    <div className={`flex items-center gap-3 font-heading font-extrabold tracking-tighter ${size}`}>
      {showIcon && (
        <div className="p-2.5 rounded-xl bg-slate-900 border border-white/8 shadow-[0_0_15px_rgba(45,212,191,0.15)] hover:border-brand-primary/40 transition-colors">
          <LogoIcon className="w-7 h-7" />
        </div>
      )}
      
      <span className="text-white hover:text-slate-200 transition-colors">
        Career<span className="bg-linear-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Blueprint</span>
      </span>
    </div>
  );
};

export default Logo;