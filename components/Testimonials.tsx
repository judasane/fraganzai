
import React from 'react';
import { Star } from 'lucide-react';
import TestimonialsIllustration from './illustrations/TestimonialsIllustration';
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface TestimonialsProps {
  scrollY: number;
}

// Define testimonials with translation keys matching JSON structure
const testimonialData = [
  {
    id: 1,
    nameKey: 'testimonials.testimonial1.name',
    titleKey: 'testimonials.testimonial1.title',
    avatar: 'M', 
    rating: 5,
    quoteKey: 'testimonials.quotes.quote1', // Corrected key
  },
  {
    id: 2,
    nameKey: 'testimonials.testimonial2.name',
    titleKey: 'testimonials.testimonial2.title',
    avatar: 'A',
    rating: 5,
    quoteKey: 'testimonials.quotes.quote2', // Corrected key
  },
  {
    id: 3,
    nameKey: 'testimonials.testimonial3.name',
    titleKey: 'testimonials.testimonial3.title',
    avatar: 'S',
    rating: 5,
    quoteKey: 'testimonials.quotes.quote3', // Corrected key
  },
];

const TestimonialCard: React.FC<{ testimonial: { id: number; nameKey: string; titleKey: string; avatar: string; rating: number; quoteKey: string } }> = ({ testimonial }) => {
  const { t } = useTranslation(); // Use the hook in the card component
  return (
  <div className="group h-full">
    <div className="h-full bg-white/40 dark:bg-slate-800/40 p-8 rounded-3xl backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 transition-all duration-500 hover:bg-white/60 dark:hover:bg-slate-800/70 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-emerald-500 fill-current" />
        ))}
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-6 italic font-light leading-relaxed">
        "{t(testimonial.quoteKey)}"{/* Use translated quote */}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 rounded-full flex items-center justify-center text-white dark:text-slate-900 font-light text-lg shadow-md">
          {/* Avatar might not be translatable, depending on requirements */}
          {testimonial.avatar}
        </div>
        <div className="ml-4">
          <p className="font-medium text-slate-900 dark:text-slate-100">{t(testimonial.nameKey)}</p>{/* Use translated name */}
          <p className="text-slate-600 dark:text-slate-400 text-sm font-light">{t(testimonial.titleKey)}</p>{/* Use translated title */}
        </div>
      </div>
    </div>
  </div>
);
}

const Testimonials: React.FC<TestimonialsProps> = ({ scrollY }) => {
  const { t } = useTranslation(); // Use the hook in the main component
  return (
    <section id="testimonios" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <TestimonialsIllustration scrollY={scrollY} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-extralight text-slate-900 dark:text-slate-100 mb-6 tracking-tighter leading-tight">
            {t('testimonials.title_part1')}{/* Use translated title part 1 */}
            <span className="block bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-500 bg-clip-text text-transparent">
              {t('testimonials.title_part2')}{/* Use translated title part 2 */}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            {t('testimonials.description')}{/* Use translated description */}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialData.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;