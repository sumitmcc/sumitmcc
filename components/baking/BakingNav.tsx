// components/baking/BakingNav.tsx
'use client';

import React from 'react';
import { GiCookie, GiBread, GiRead } from 'react-icons/gi';
import { IoRestaurant } from 'react-icons/io5';

interface BakingNavProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export function BakingNav({ activeCategory, setActiveCategory }: BakingNavProps) {
  const categories = [
    { id: "all", label: "All Posts", icon: <IoRestaurant size={30} /> },
    { id: "Blog", label: "Blog", icon: <GiRead size={30} /> },
    { id: "Cookies & Treats", label: "Cookies & Treats", icon: <GiCookie size={30} /> },
    { id: "Breads & Pastries", label: "Breads & Pastries", icon: <GiBread size={30} /> },
  ];

  return (
    <div className="flex lg:gap-8 gap-4 overflow-x-auto px-4 mb-8 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`icon flex flex-col items-center gap-1 p-2 transition-colors min-w-max ${
            activeCategory === category.id
              ? "text-orange-600 border-b-2 border-orange-600 dark:border-orange-400 font-semibold dark:text-orange-400"
              : "text-gray-500 hover:border-b-2 hover:border-orange-600 dark:hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400"
          }`}
        >
          <div className="text-sm font-extralight icon">{category.icon}</div>
          <span className="text-sm text-center">{category.label}</span>
        </button>
      ))}
    </div>
  );
}
