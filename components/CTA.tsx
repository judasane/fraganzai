import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import Button from './ui/Button';
import CtaIllustration from './illustrations/CtaIllustration';

interface CTAProps {
  openModal: () => void;
  scrollY: number;
}

const CTA: React.FC<CTAProps> = ({ openModal, scrollY }) => {
  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden bg-slate-800 text-white px-4">
      <CtaIllustration scrollY={scrollY} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/80 to-slate-800" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-black/20 p-8 sm:p-12 rounded-3xl backdrop-blur-lg border border-white/10 shadow-2xl">
          <h2 className="text-4xl sm:text-6xl font-extralight mb-6 tracking-tighter leading-tight text-white">
            Your Unique Fragrance
            <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Awaits
            </span>
          </h2>
          <p className="text-lg mb-10 text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Join the olfactory revolution where AI and masterful craftsmanship create the perfect fragrance for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="golden" onClick={openModal}>
              <Sparkles className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
              Create My Fragrance Now
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-slate-400 text-sm font-light flex items-center justify-center gap-2">
            <Heart className="h-3 w-3" />
            100% Satisfaction Guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;