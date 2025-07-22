
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Sun, Moon, Globe } from 'lucide-react';
import Button from './ui/Button';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, scrollToSection }) => {
  const { i18n, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageDropdownRef]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(prev => !prev);
  };

  const navLinks = [
    { id: 'proceso', label: t('process.title_part1') },
    { id: 'ingredientes', label: t('ingredients.title_part1') },
    { id: 'testimonios', label: t('testimonials.title_part1') },
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
          <span className="text-xl font-sansation font-light text-slate-800 dark:text-slate-200 tracking-wide">
            <span className="opacity-75">FRAGANZ</span>
            <span className="text-lg font-bold">.AI</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 rounded-full text-sm font-sansation font-light text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <div className="relative" ref={languageDropdownRef}>
            <button
              onClick={toggleLanguageDropdown}
              className="p-3 rounded-full bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-all"
              aria-label="Change language"
              aria-haspopup="true"
              aria-expanded={isLanguageDropdownOpen}
            >
              <Globe className="h-4 w-4" />
            </button>

            {isLanguageDropdownOpen && (
              <div className="absolute top-full mt-2 w-32 bg-white/70 dark:bg-slate-900/70 rounded-lg shadow-lg backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden right-0">
                <button
                  onClick={() => handleLanguageChange('es')}
                  className="block w-full text-left px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors"
                >
                  Español
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="block w-full text-left px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors"
                >
                  English
                </button>
              </div>
            )}
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-all"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button variant="primary" size="sm" onClick={() => scrollToSection('cta')}>
            {t('cta.button_create')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
