import React from 'react';
import { Leaf, Droplets, FlaskConical } from 'lucide-react';
import type { Ingredient } from '../types';
import IngredientsIllustration from './illustrations/IngredientsIllustration';

interface IngredientsProps {
  scrollY: number;
}

const ingredients: Ingredient[] = [
  {
    id: 1,
    category: 'Top Notes',
    name: 'Radiant Opening',
    description: 'Sicilian Bergamot, Amalfi Lemon, and Bulgarian Rose Petals for a bright, memorable opening.',
    icon: Leaf,
  },
  {
    id: 2,
    category: 'Heart Notes',
    name: 'Aromatic Heart',
    description: 'Jasmine from Grasse, Florentine Iris, and rare spices that define your fragrance\'s unique character.',
    icon: Droplets,
  },
  {
    id: 3,
    category: 'Base Notes',
    name: 'Profound Base',
    description: 'Cambodian Oud, Mystical Sandalwood, and Ambergris for an unforgettable, long-lasting trail.',
    icon: FlaskConical,
  },
];

const IngredientCard: React.FC<{ item: Ingredient }> = ({ item }) => (
  <div className="group h-full">
    <div className="h-full bg-black/30 p-8 rounded-3xl backdrop-blur-lg border border-white/10 transition-all duration-500 hover:bg-black/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
      <div className="flex items-center justify-between mb-6">
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-xl shadow-lg">
          <item.icon className="h-5 w-5 text-white" />
        </div>
        <span className="text-slate-400 font-light text-sm">{item.category}</span>
      </div>
      <h3 className="text-xl font-light text-white mb-4">{item.name}</h3>
      <p className="text-slate-300 leading-relaxed font-light text-sm">{item.description}</p>
    </div>
  </div>
);

const Ingredients: React.FC<IngredientsProps> = ({ scrollY }) => {
  return (
    <section id="ingredientes" className="relative py-24 sm:py-32 overflow-hidden bg-slate-900 text-white px-4">
      <IngredientsIllustration scrollY={scrollY} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-extralight mb-6 tracking-tighter leading-tight">
            Exceptional
            <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Ingredients
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            We select the purest and rarest ingredients from around the world to create unparalleled luxury fragrances.
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