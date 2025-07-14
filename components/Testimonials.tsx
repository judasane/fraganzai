
import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';
import TestimonialsIllustration from './illustrations/TestimonialsIllustration';

interface TestimonialsProps {
  scrollY: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Elena',
    title: 'Creative Director',
    avatar: 'M',
    rating: 5,
    quote: 'I never thought a fragrance could so perfectly capture my personality. It\'s as if they read my soul.',
  },
  {
    id: 2,
    name: 'Alessandro',
    title: 'Entrepreneur',
    avatar: 'A',
    rating: 5,
    quote: 'The blend of technology and craftsmanship is extraordinary. My fragrance is unique and sophisticated.',
  },
  {
    id: 3,
    name: 'Sophia',
    title: 'Architect',
    avatar: 'S',
    rating: 5,
    quote: 'Every time I wear my fraganz.ai fragrance, I get compliments. It\'s truly exceptional.',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="group h-full">
    <div className="h-full bg-white/40 dark:bg-slate-800/40 p-8 rounded-3xl backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 transition-all duration-500 hover:bg-white/60 dark:hover:bg-slate-800/70 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-emerald-500 fill-current" />
        ))}
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-6 italic font-light leading-relaxed">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 rounded-full flex items-center justify-center text-white dark:text-slate-900 font-light text-lg shadow-md">
          {testimonial.avatar}
        </div>
        <div className="ml-4">
          <p className="font-medium text-slate-900 dark:text-slate-100">{testimonial.name}</p>

          <p className="text-slate-600 dark:text-slate-400 text-sm font-light">{testimonial.title}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC<TestimonialsProps> = ({ scrollY }) => {
  return (
    <section id="testimonios" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <TestimonialsIllustration scrollY={scrollY} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-extralight text-slate-900 dark:text-slate-100 mb-6 tracking-tighter leading-tight">
            Transformative
            <span className="block bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Discover how fraganz.ai has revolutionized the olfactory experience for our most discerning clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
