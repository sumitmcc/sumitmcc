// components/baking/BakingPage.tsx
'use client';

import { useState } from 'react';
import { BakingNav } from './BakingNav';
import { RecipeCard } from '../common/RecipeCard';
import { bakingData, allRecipes, Recipe } from '@/data/baking';

export function BakingPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getRecipesToShow = (): Recipe[] => {
    if (activeCategory === "all") {
      return allRecipes;
    }
    
    const category = bakingData.find(cat => cat.category === activeCategory);
    return category ? category.recipes : [];
  };

  const recipesToShow = getRecipesToShow();

  return (
    <section className="bg-transparent py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 mb-4">
            Baking Adventures
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Welcome to my kitchen! Here you&apos;ll find some of my favorite recipes that I love to bake. 
            The recipes are tweaked to include local ingredients and home equipments. Happy baking! 🧁
          </p>
        </header>
      </div>
      
      <BakingNav 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      <div className="max-w-7xl mx-auto px-4">
        {recipesToShow.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {recipesToShow.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No posts found in this category yet. Check back soon for more delicious treats!
            </p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <div className="bg-orange-50 dark:bg-gray-800 rounded-lg p-6 border border-orange-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
            💡 Baking Tips
          </h3>
          <p className="text-orange-700 dark:text-orange-400 text-sm">
            Always measure ingredients by weight when possible for best results. 
            Room temperature ingredients mix better. Don&apos;t open the oven door during the first 3/4 of baking time.
          </p>
        </div>
      </div>
    </section>
  );
}
