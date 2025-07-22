
import React from 'react';

export interface Recipe {
  essentialOils: Record<string, number>;
  totalDrops: number;
}

export interface FragranceProfile {
  fragranceName: string;
  personalityTraits: string[];
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
  story: string;
  recipe: Recipe;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Ingredient {
  id: number;
  category: 'Top Notes' | 'Heart Notes' | 'Base Notes';
  name: string;
  description: string;
  icon: React.ElementType;
}