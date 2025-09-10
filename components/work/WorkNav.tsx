// components/work/WorkNav.tsx
'use client';

import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SlBriefcase, SlGraduation } from 'react-icons/sl';
import { VscTools } from 'react-icons/vsc';
import { ContentCategory } from '@/lib/types';

interface WorkNavProps {
  activeCategory: ContentCategory;
  setActiveCategory: (category: ContentCategory) => void;
}

export function WorkNav({ activeCategory, setActiveCategory }: WorkNavProps) {
  const categories = [
    { id: "work" as ContentCategory, label: "Work", icon: <SlBriefcase size={30} /> },
    { id: "education" as ContentCategory, label: "Education", icon: <SlGraduation size={30} /> },
    { id: "projects" as ContentCategory, label: "Projects", icon: <AiOutlineFundProjectionScreen size={30} /> },
    { id: "skills" as ContentCategory, label: "Skills", icon: <VscTools size={30} /> },
  ];

  return (
    <div className="flex lg:gap-8 gap-4 overflow-x-auto px-4 mb-8 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`icon flex flex-col items-center gap-1 p-2 transition-colors ${
            activeCategory === category.id
              ? " text-gray-900 border-b-2 border-gray-900 dark:border-gray-200 font-semibold dark:text-gray-100"
              : "text-gray-500 hover:border-b-2 hover:border-gray-900 dark:hover:border-gray-200"
          }`}
        >
          <div className={`text-sm font-extralight icon`}>{category.icon}</div>
          <span className={`text-sm`}>{category.label}</span>
        </button>
      ))}
    </div>
  );
}
