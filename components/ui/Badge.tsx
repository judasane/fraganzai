
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'note';
}

const Badge: React.FC<BadgeProps> = ({ children, className = '', variant = 'default' }) => {
  const baseClasses = 'inline-flex items-center rounded-full font-light px-4 py-1 text-xs backdrop-blur-md transition-all';
  
  const variantClasses = {
    default: 'bg-white/30 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 border border-slate-200/30 dark:border-slate-700/30',
    note: 'bg-emerald-400/20 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-300 border border-emerald-400/30'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
