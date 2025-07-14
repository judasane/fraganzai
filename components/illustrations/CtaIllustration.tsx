import React from 'react';

const CtaIllustration: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        transform: `translateY(${scrollY * 0.02}px)`
      }}
    >
       <svg
            viewBox="0 0 1440 800"
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-80"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
        >
             <defs>
                <radialGradient id="cta-glow-back" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" className="text-slate-800" stopColor="currentColor" />
                    <stop offset="100%" className="text-slate-900" stopColor="currentColor" />
                </radialGradient>
                <radialGradient id="cta-glow-front" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" className="text-emerald-600/60" stopColor="currentColor" />
                    <stop offset="100%" className="text-emerald-600/0" stopColor="currentColor" />
                </radialGradient>
                 <linearGradient id="cta-petal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" className="text-emerald-500/0" stopColor="currentColor" />
                    <stop offset="50%" className="text-emerald-500/80" stopColor="currentColor" />
                    <stop offset="100%" className="text-emerald-500/0" stopColor="currentColor" />
                </linearGradient>
            </defs>
            <rect width="1440" height="800" fill="url(#cta-glow-back)"/>
            <circle cx="720" cy="400" r="400" fill="url(#cta-glow-front)" />

            {/* Scent Explosion */}
            <g transform="translate(720 400)">
                {[...Array(12)].map((_, i) => (
                    <g key={i} transform={`rotate(${i * 30})`}>
                        <path d="M 50 0 C 150 100, 250 -100, 350 0" stroke="url(#cta-petal)" strokeWidth="2" fill="none" opacity="0.7"/>
                        <circle cx="200" cy="0" r="1.5" className="fill-emerald-200" />
                    </g>
                ))}
            </g>

            {/* Central Bottle */}
            <g transform="translate(720 400) scale(1.2)">
                <path d="M -50 80 L -60 0 L 60 0 L 50 80 Z" 
                      className="fill-black/30 stroke-white/20" strokeWidth="0.5"
                />
                <path d="M -50 80 L 0 100 L 50 80" fill="none" className="stroke-white/20" strokeWidth="0.5"/>
                <rect x="-20" y="-30" width="40" height="30" rx="3" className="fill-black/30 stroke-white/20" strokeWidth="0.5" />
                 <path d="M -50 20 L 0 30 L 50 20 M -30 -10 L 30 -10" className="stroke-white/10" strokeWidth="0.5"/>
            </g>
        </svg>
    </div>
  );
};
export default CtaIllustration;
