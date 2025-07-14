
import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';
import Button from './ui/Button';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'proceso', label: 'Process' },
    { id: 'ingredientes', label: 'Ingredients' },
    { id: 'testimonios', label: 'Testimonials' },
  ];

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300`}>
      <div className={`flex items-center justify-between p-2 rounded-full transition-all duration-300 backdrop-blur-xl border ${
        isScrolled 
        ? 'bg-white/70 dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-700/80 shadow-lg' 
        : 'bg-white/30 dark:bg-slate-900/30 border-transparent'
      }`}>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 rounded-full flex items-center justify-center shadow-md">
            <Sparkles className="h-5 w-5 text-white dark:text-slate-900" />
          </div>
          <span className="text-xl font-light text-slate-800 dark:text-slate-200 tracking-wide">
            fraganz.ai
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 rounded-full text-sm font-light text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-all"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button variant="primary" size="sm" onClick={() => scrollToSection('cta')}>
            Begin
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
