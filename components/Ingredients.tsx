import React from 'react';
import { Leaf, Droplets, FlaskConical } from 'lucide-react';
import IngredientsIllustration from './illustrations/IngredientsIllustration';
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface IngredientsProps {
  scrollY: number;
}

// Define ingredients with translation keys
const ingredients = [
  {
    id: 1,
    categoryKey: 'ingredients.notes.top',
    nameKey: 'ingredients.items.item1.name',
    descriptionKey: 'ingredients.items.item1.description',
    icon: Leaf,
  },
  {
    id: 2,
    categoryKey: 'ingredients.notes.heart',
    nameKey: 'ingredients.items.item2.name',
    descriptionKey: 'ingredients.items.item2.description',
    icon: Droplets,
  },
  {
    id: 3,
    categoryKey: 'ingredients.notes.base',
    nameKey: 'ingredients.items.item3.name',
    descriptionKey: 'ingredients.items.item3.description',
    icon: FlaskConical,
  },
];

const IngredientCard: React.FC<{ item: { id: number; categoryKey: string; nameKey: string; descriptionKey: string; icon: any } }> = ({ item }) => {
  const { t } = useTranslation(); // Use the hook in the card component
  return (
  <div className="group h-full">
    <div className="h-full bg-black/30 p-8 rounded-3xl backdrop-blur-lg border border-white/10 transition-all duration-500 hover:bg-black/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
      <div className="flex items-center justify-between mb-6">
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-xl shadow-lg">
          <item.icon className="h-5 w-5 text-white" />
        </div>
        <span className="text-slate-400 font-light text-sm">{t(item.categoryKey)}</span>{/* Use translated category */}
      </div>
      <h3 className="text-xl font-light text-white mb-4">{t(item.nameKey)}</h3>{/* Use translated name */}
      <p className="text-slate-300 leading-relaxed font-light text-sm">{t(item.descriptionKey)}</p>{/* Use translated description */}
    </div>
  </div>
);
}

const Ingredients: React.FC<IngredientsProps> = ({ scrollY }) => {
  const { t } = useTranslation(); // Use the hook in the main component
  return (
    <section id="ingredientes" className="relative py-24 sm:py-32 overflow-hidden bg-slate-900 text-white px-4">
      <IngredientsIllustration scrollY={scrollY} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-extralight mb-6 tracking-tighter leading-tight">
            {t('ingredients.title_part1')}{/* Use translated title part 1 */}
            <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              {t('ingredients.title_part2')}{/* Use translated title part 2 */}
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            {t('ingredients.description')}{/* Use translated description */}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ingredients.map(item => (
            <IngredientCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;