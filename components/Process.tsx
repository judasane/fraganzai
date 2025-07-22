import React from 'react';
import { Brain, Beaker, Sparkles } from 'lucide-react';
import ProcessIllustration from './illustrations/ProcessIllustration';
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface ProcessProps {
  scrollY: number;
}

// Define steps with translation keys
const steps = [
  {
    id: 1,
    titleKey: 'process.steps.step1.title',
    descriptionKey: 'process.steps.step1.description',
    icon: Brain,
  },
  {
    id: 2,
    titleKey: 'process.steps.step2.title',
    descriptionKey: 'process.steps.step2.description',
    icon: Beaker,
  },
  {
    id: 3,
    titleKey: 'process.steps.step3.title',
    descriptionKey: 'process.steps.step3.description',
    icon: Sparkles,
  },
];

const ProcessCard: React.FC<{ step: { id: number; titleKey: string; descriptionKey: string; icon: any } }> = ({ step }) => {
  const { t } = useTranslation(); // Use the hook in the card component
  return (
  <div className="group h-full">
    <div className="h-full bg-white/40 dark:bg-slate-800/40 p-8 rounded-3xl backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 transition-all duration-500 hover:bg-white/60 dark:hover:bg-slate-800/70 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 p-4 rounded-2xl w-fit mb-6 shadow-lg">
        <step.icon className="h-6 w-6 text-white dark:text-slate-900" />
      </div>
      <h3 className="text-2xl font-light text-slate-900 dark:text-slate-100 mb-4">{t(step.titleKey)}</h3> {/* Use translated title */}
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{t(step.descriptionKey)}</p> {/* Use translated description */}
    </div>
  </div>
);
}

const Process: React.FC<ProcessProps> = ({ scrollY }) => {
  const { t } = useTranslation(); // Use the hook in the main component
  return (
    <section id="proceso" className="relative py-24 sm:py-32 overflow-hidden px-4">
      <ProcessIllustration scrollY={scrollY} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-extralight text-slate-900 dark:text-slate-100 mb-6 tracking-tighter leading-tight">
            {t('process.title_part1')}{/* Use translated title part 1 */}
            <span className="block bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-500 bg-clip-text text-transparent">
              {t('process.title_part2')}{/* Use translated title part 2 */}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            {t('process.description')}{/* Use translated description */}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map(step => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;