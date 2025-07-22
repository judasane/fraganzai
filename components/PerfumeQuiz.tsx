import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from './ui/Button';

interface PerfumeQuizProps {
  onSubmit: (answers: Record<string, string>) => void;
  isLoading: boolean;
}

const PerfumeQuiz: React.FC<PerfumeQuizProps> = ({ onSubmit, isLoading }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = t('quiz.questions', { returnObjects: true }) as { question: string; placeholder: string; key: string }[];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onSubmit(answers);
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
  };

  const currentQuestion = questions[step];

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <form onSubmit={handleNext}>
            <label className="block text-lg text-slate-700 dark:text-slate-300 mb-4 text-center">
              {currentQuestion.question}
            </label>
            <textarea
              name={currentQuestion.key}
              value={answers[currentQuestion.key] || ''}
              onChange={handleAnswerChange}
              placeholder={currentQuestion.placeholder}
              className="w-full h-32 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400 focus:outline-none transition"
              required
            />
            <div className="mt-6 flex justify-between items-center">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {t('quiz.step', { current: step + 1, total: questions.length })}
              </span>
              <Button type="submit" variant="primary" size="md" disabled={isLoading}>
                {isLoading && step === questions.length - 1 ? (
                  <>
                    <Loader className="h-5 w-5 mr-3 animate-spin" />
                    {t('quiz.crafting')}
                  </>
                ) : (
                  <>
                    {step === questions.length - 1 ? t('quiz.generate') : t('quiz.next')}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PerfumeQuiz;
