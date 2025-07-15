import React from 'react';
import { ArrowRight, ChevronDown, FlaskConical, Sparkles, Play } from 'lucide-react';
import Button from './ui/Button';
import Badge from './ui/Badge';
import HeroIllustration from './illustrations/HeroIllustration';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  scrollToSection: (id: string) => void;
  openModal: () => void;
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, openModal, scrollY }) => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden text-center px-4">
      <HeroIllustration scrollY={scrollY} />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <Badge className="mb-6">
          <Sparkles className="h-3 w-3 mr-2 text-emerald-500" />
          The Future of Perfumery
        {t('hero.badge')}        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tighter leading-tight">
          <span className="block text-slate-900 dark:text-slate-100">{t('hero.title.part1')}</span>
          <span className="block bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-500 bg-clip-text text-transparent">{t('hero.title.part2')}</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
          Where artificial intelligence meets artisanal perfumery to craft your uniquely personal fragrance.
 {t('hero.description')}        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
          <Button size="lg" variant="primary" onClick={openModal}>
            <FlaskConical className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
 {t('hero.button1')}            <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('proceso')}>
            <Play className="h-5 w-5 mr-3" />
 {t('hero.button2')}          </Button>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
          <Button size="lg" variant="primary" onClick={openModal}>
            <FlaskConical className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
            Discover Your Scent
            <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
 </div>

        <button
          onClick={() => scrollToSection('proceso')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;