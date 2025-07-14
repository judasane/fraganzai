import React from 'react';

const TestimonialsIllustration: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        transform: `translateY(${scrollY * 0.03}px)`
      }}
    >
        <svg
            viewBox="0 0 1440 800"
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-40 dark:opacity-50"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="test-cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" className="text-slate-400/50 dark:text-slate-600/50" stopColor="currentColor" />
                    <stop offset="100%" className="text-slate-400/0 dark:text-slate-600/0" stopColor="currentColor" />
                </linearGradient>
            </defs>

            {/* Perfume Bottle 1 */}
            <g transform="translate(250 400)">
                {/* Cloud */}
                <path d="M 0 -100 C -150 -100, -150 50, 0 50 C 150 50, 150 -100, 0 -100 Z" fill="url(#test-cloud-grad)" />
                <text x="0" y="-30" textAnchor="middle" className="font-sans text-sm fill-slate-700 dark:fill-slate-300 italic">"...read my soul."</text>
                <text x="0" y="-5" textAnchor="middle" className="font-sans text-lg fill-emerald-500">★★★★★</text>
                {/* Bottle */}
                <path d="M -40 150 L -50 80 L 50 80 L 40 150 Z" className="fill-slate-300/50 dark:fill-slate-700/50"/>
                <rect x="-15" y="60" width="30" height="20" rx="3" className="fill-slate-400 dark:fill-slate-500" />
            </g>

            {/* Perfume Bottle 2 */}
            <g transform="translate(720 450)">
                 {/* Cloud */}
                <path d="M 0 -120 C -180 -120, -180 60, 0 60 C 180 60, 180 -120, 0 -120 Z" fill="url(#test-cloud-grad)" />
                <text x="0" y="-40" textAnchor="middle" className="font-sans text-sm fill-slate-700 dark:fill-slate-300 italic">"...unique and sophisticated."</text>
                <text x="0" y="-15" textAnchor="middle" className="font-sans text-lg fill-emerald-500">★★★★★</text>
                {/* Bottle */}
                <path d="M 0 150 C -60 150, -60 80, 0 80 C 60 80, 60 150, 0 150 Z" className="fill-slate-300/50 dark:fill-slate-700/50"/>
                <circle cx="0" cy="70" r="15" className="fill-slate-400 dark:fill-slate-500" />
            </g>
            
            {/* Perfume Bottle 3 */}
            <g transform="translate(1150 400)">
                 {/* Cloud */}
                <path d="M 0 -100 C -150 -100, -150 50, 0 50 C 150 50, 150 -100, 0 -100 Z" fill="url(#test-cloud-grad)" />
                <text x="0" y="-30" textAnchor="middle" className="font-sans text-sm fill-slate-700 dark:fill-slate-300 italic">"...truly exceptional."</text>
                <text x="0" y="-5" textAnchor="middle" className="font-sans text-lg fill-emerald-500">★★★★★</text>
                {/* Bottle */}
                <path d="M -35 150 L -35 80 L 35 80 L 35 150 Z" className="fill-slate-300/50 dark:fill-slate-700/50"/>
                <path d="M 0 80 L -20 60 L 20 60 L 0 80 Z" className="fill-slate-400 dark:fill-slate-500" />
            </g>
        </svg>
    </div>
  );
};
export default TestimonialsIllustration;