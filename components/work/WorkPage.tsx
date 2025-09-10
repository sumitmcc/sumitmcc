// components/work/WorkPage.tsx
'use client';

import { WorkNav } from './WorkNav';
import { WorkCard } from '../common/WorkCard';
import { SkillsSection } from './SkillsSection';
import { useWorkContent } from '@/hooks/useWorkContent';

export function WorkPage() {
  const { activeCategory, currentItems, setActiveCategory } = useWorkContent();

  const renderContent = () => {
    if (activeCategory === 'skills') {
      return <SkillsSection />;
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 justify-center">
        {currentItems.map((item, index) => (
          <WorkCard 
            key={`${activeCategory}-${index}`} 
            {...item} 
          />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300">
            Work & Resume
          </h1>
        </header>
      </div>
      
      <WorkNav 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {renderContent()}
    </section>
  );
}
