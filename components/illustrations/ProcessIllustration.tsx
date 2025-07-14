import React from 'react';

const ProcessIllustration: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        transform: `translateY(${scrollY * 0.1}px)`
      }}
    >
      <svg
        viewBox="0 0 1440 600"
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-50 dark:opacity-60"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="proc-glass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="text-emerald-400/5 dark:text-emerald-800/5" stopColor="currentColor" />
            <stop offset="100%" className="text-emerald-500/20 dark:text-emerald-700/20" stopColor="currentColor" />
          </linearGradient>
           <linearGradient id="proc-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className="text-emerald-500/0" stopColor="currentColor" />
            <stop offset="50%" className="text-emerald-500/40" stopColor="currentColor" />
            <stop offset="100%" className="text-emerald-500/0" stopColor="currentColor" />
          </linearGradient>
        </defs>

        {/* Alembic (Distiller) - Moved to the side and made subtle */}
        <g transform="translate(1150 300) scale(0.8)" opacity="0.7">
          {/* Base */}
          <path d="M -80 100 Q 0 150, 80 100 L 60 0 Q 0 -20, -60 0 Z" fill="url(#proc-glass-grad)" className="stroke-slate-400/20 dark:stroke-slate-600/20" strokeWidth="0.5" />
          {/* Top */}
          <path d="M 0 -80 C -50 -90, -60 -50, -30 -40 L 30 -40 C 60 -50, 50 -90, 0 -80 Z" fill="url(#proc-glass-grad)" />
          {/* Pipe */}
          <path d="M 35 -60 C 150 -100, 100 150, -150 100" fill="none" className="stroke-slate-400/20 dark:stroke-slate-600/30" strokeWidth="5" />
        </g>
        
        {/* Input: Botanicals & Data (Left side) */}
        <g transform="translate(300 250)">
          {/* Flower */}
          <path d="M 0 0 C -20 -40, 20 -40, 0 0 M 0 0 C -40 20, -40 -20, 0 0 M 0 0 C 40 20, 40 -20, 0 0" fill="none" className="stroke-slate-500/50 dark:stroke-slate-400/50" strokeWidth="1" />
          <circle cx="0" cy="0" r="4" className="fill-slate-500/70 dark:fill-slate-400/70" />
        </g>
        
        {/* Flowing particles/stream */}
        <path d="M 300 250 C 500 150, 900 450, 1150 350" fill="none" stroke="url(#proc-flow-grad)" strokeWidth="40" />
         <path d="M 350 250 C 600 350, 700 150, 900 220" fill="none" className="stroke-emerald-500/20" strokeWidth="1" strokeDasharray="3 5"/>


        {/* Output: Perfume Bottle (Center-ish bottom) */}
        <g transform="translate(720 480)">
          <path d="M -30 50 L -40 -20 L 40 -20 L 30 50 Z" className="fill-slate-300/10 dark:fill-slate-700/10 stroke-slate-400/50 dark:stroke-slate-600/50" strokeWidth="1"/>
          <rect x="-10" y="-40" width="20" height="20" rx="3" className="fill-slate-400/80 dark:fill-slate-500/80" />
        </g>
      </svg>
    </div>
  );
};

export default ProcessIllustration;