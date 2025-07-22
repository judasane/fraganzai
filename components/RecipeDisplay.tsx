import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FlaskConical, Droplet } from 'lucide-react';
import type { Recipe } from '../types';
import Badge from './ui/Badge';

interface RecipeDisplayProps {
  recipe: Recipe;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
    >
      <h4 className="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-4">
        <FlaskConical className="h-5 w-5 text-slate-500" />
        {t('recipe.title')}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
        {t('recipe.description')}
      </p>
      <div className="space-y-3">
        {Object.entries(recipe.essentialOils).map(([oil, drops]) => (
          <div key={oil} className="flex items-center justify-between p-3 bg-white dark:bg-slate-700/50 rounded-lg">
            <span className="font-medium text-slate-800 dark:text-slate-200">{t(`oils.${oil}`, oil)}</span>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Droplet className="h-4 w-4 text-emerald-500" />
              <span>{t('recipe.drops', { count: drops })}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Badge variant="note">{t('recipe.total_drops', { count: recipe.totalDrops })}</Badge>
      </div>
    </motion.div>
  );
};

export default RecipeDisplay;
