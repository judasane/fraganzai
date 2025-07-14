
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Ingredients from './components/Ingredients';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PerfumeCreatorModal from './components/PerfumeCreatorModal';

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div 
        className="fixed inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-black opacity-50 bg-[size:400%_400%] animate-gradient-shift"
      />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-300 dark:bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-gentle"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-slate-400 dark:bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-gentle [animation-delay:-5s]"></div>
      </div>
      
      <div className="relative z-10">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          scrollToSection={scrollToSection} 
        />
        <main>
          <Hero scrollToSection={scrollToSection} openModal={openModal} scrollY={scrollY} />
          <Process scrollY={scrollY} />
          <Ingredients scrollY={scrollY} />
          <Testimonials scrollY={scrollY} />
          <CTA openModal={openModal} scrollY={scrollY} />
        </main>
        <Footer />
      </div>

      <PerfumeCreatorModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
