// components/work/WorkPage.tsx
'use client';

import { useState, useMemo } from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import { WorkNav } from './WorkNav';
import { WorkCard } from '../common/WorkCard';
import { SkillsSection } from './SkillsSection';
import { useWorkContent } from '@/hooks/useWorkContent';
import { ContentCategory } from '@/lib/types';

export function WorkPage() {
  const { activeCategory, currentItems, setActiveCategory } = useWorkContent();
  const [searchQuery, setSearchQuery] = useState('');

  // Clear search when category changes
  const handleCategoryChange = (category: ContentCategory) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  // Filter items based on search query (only for projects)
  const filteredItems = useMemo(() => {
    if (activeCategory !== 'projects' || !searchQuery.trim()) {
      return currentItems;
    }

    const query = searchQuery.toLowerCase().trim();
    return currentItems.filter(item => {
      // Search in skills
      const skillsMatch = item.skills?.some(skill => 
        skill.toLowerCase().includes(query)
      );
      
      // Search in title and description as fallback
      const titleMatch = item.title.toLowerCase().includes(query);
      const descriptionMatch = item.description?.toLowerCase().includes(query);
      
      return skillsMatch || titleMatch || descriptionMatch;
    });
  }, [currentItems, searchQuery, activeCategory]);

  const renderContent = () => {
    if (activeCategory === 'skills') {
      return <SkillsSection />;
    }

    const itemsToShow = filteredItems;

    return (
      <div className="max-w-7xl mx-auto px-4">
        {/* Search Bar - Only show for projects */}
        {activeCategory === 'projects' && (
          <div className="mb-8 max-w-md mx-auto">
            <TextInput
              placeholder="Search projects by skills (e.g., React, Python, Kubernetes)"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.currentTarget.value)}
              leftSection={<IconSearch size={16} />}
              rightSection={
                searchQuery && (
                  <IconX 
                    size={16} 
                    className="cursor-pointer hover:text-red-500 transition-colors" 
                    onClick={() => setSearchQuery('')}
                  />
                )
              }
              styles={{
                input: {
                  borderRadius: '8px',
                  border: '1px solid var(--mantine-color-gray-3)',
                  '&:focus': {
                    borderColor: 'var(--mantine-color-blue-5)',
                  },
                  '&::placeholder': {
                    color: 'var(--mantine-color-gray-5)',
                  }
                }
              }}
              className="w-full"
            />
            {searchQuery && (
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                {itemsToShow.length} project{itemsToShow.length !== 1 ? 's' : ''} found
              </div>
            )}
          </div>
        )}

        {/* Results */}
        {itemsToShow.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {itemsToShow.map((item, index) => (
              <WorkCard 
                key={`${activeCategory}-${index}`} 
                {...item} 
              />
            ))}
          </div>
        ) : activeCategory === 'projects' && searchQuery ? (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400">
              <IconSearch size={48} className="mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No projects found</h3>
              <p className="text-sm">
                Try searching for different skills or{' '}
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  clear the search
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {itemsToShow.map((item, index) => (
              <WorkCard 
                key={`${activeCategory}-${index}`} 
                {...item} 
              />
            ))}
          </div>
        )}
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
        setActiveCategory={handleCategoryChange} 
      />

      {renderContent()}
    </section>
  );
}
