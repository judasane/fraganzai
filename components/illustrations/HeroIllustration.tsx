import React from 'react';

const HeroIllustration: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        transform: `translateY(${scrollY * 0.2}px)`,
      }}
    >
      <svg
        viewBox="0 0 1440 900"
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-50"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hero-grad-1" cx="50%" cy="50%" r="60%">
            <stop offset="0%" className="text-slate-200 dark:text-slate-800" stopColor="currentColor" />
            <stop offset="100%" className="text-slate-50 dark:text-slate-900" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#hero-grad-1)" />
        <g className="transition-transform duration-500 ease-out" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
            <path d="M-100 400 C 300 200, 500 700, 900 450 S 1300 700, 1500 450" className="stroke-slate-400/30 dark:stroke-slate-600/30" strokeWidth="2" fill="none" />
            <path d="M-100 500 C 300 750, 600 250, 900 500 S 1400 250, 1500 500" className="stroke-emerald-400/20 dark:stroke-emerald-600/20" strokeWidth="3" fill="none" />
            <path d="M-100 600 C 300 450, 600 750, 900 600 S 1400 450, 1500 600" className="stroke-slate-400/20 dark:stroke-slate-600/20" strokeWidth="1" fill="none" />
        </g>
      </svg>
    </div>
  );
};

export default HeroIllustration;
