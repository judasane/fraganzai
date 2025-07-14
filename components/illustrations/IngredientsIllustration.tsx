import React from 'react';

const IngredientsIllustration: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  return (
    <div
      className="absolute inset-0 -z-10 bg-slate-900 overflow-hidden"
      style={{
        transform: `translateY(${scrollY * 0.05}px)`
      }}
    >
        <svg
            viewBox="0 0 1440 900"
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-70"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="ing-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" className="text-emerald-500/20" stopColor="currentColor" />
                    <stop offset="100%" className="text-emerald-500/0" stopColor="currentColor" />
                </radialGradient>
                <linearGradient id="ing-rose-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e11d48" />
                    <stop offset="100%" stopColor="#be123c" />
                </linearGradient>
                 <linearGradient id="ing-sandalwood-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a16207" />
                    <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>
            </defs>

            <circle cx="720" cy="450" r="500" fill="url(#ing-glow)" />

            {/* Rose */}
            <g transform="translate(300 300) rotate(-15)">
                <path d="M0,0 Q50,-60 100,0 Q50,60 0,0 M0,0 Q-50,-60 -100,0 Q-50,60 0,0" fill="url(#ing-rose-grad)"/>
                <path d="M0,0 Q30,-40 60,0 Q30,40 0,0 M0,0 Q-30,-40 -60,0 Q-30,40 0,0" className="fill-rose-500"/>
                <circle r="15" className="fill-rose-400" />
            </g>

            {/* Jasmine */}
            <g transform="translate(1100 650) rotate(20)">
                <path d="M 0 0 L 50 -10 L 60 40 L 10 50 Z" className="fill-white/80" />
                <path d="M 0 0 L -50 -10 L -60 40 L -10 50 Z" className="fill-white/80" />
                <path d="M 0 0 L -10 60 L 10 60 Z" className="fill-white/80" />
                <circle r="8" className="fill-green-300" />
            </g>

            {/* Bergamot/Citrus */}
            <g transform="translate(1200 250) rotate(10)">
                <circle r="100" className="fill-lime-400" />
                <circle r="80" className="fill-lime-500/50" />
                <path d="M 0 0 L 80 0 M 0 0 L -40 69 M 0 0 L -40 -69" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
            </g>
            
            {/* Sandalwood */}
             <g transform="translate(500 700) rotate(30)">
                 <path d="M 0 0 L 200 50 L 180 100 L -20 50 Z" fill="url(#ing-sandalwood-grad)" />
                 <path d="M 20 20 C 100 40, 120 60, 180 70" fill="none" className="stroke-yellow-800/50" strokeWidth="3" />
            </g>
        </svg>
    </div>
  );
};
export default IngredientsIllustration;