// hooks/useWorkContent.ts
import { useState, useCallback } from "react";
import { ContentCategory } from "@/lib/types";
import { content } from "@/data/content";

export function useWorkContent() {
  const [activeCategory, setActiveCategory] = useState<ContentCategory>("work");

  const handleCategoryChange = useCallback((category: ContentCategory) => {
    setActiveCategory(category);
  }, []);

  const currentItems = content[activeCategory] || [];

  return {
    activeCategory,
    currentItems,
    setActiveCategory: handleCategoryChange,
    allContent: content,
  };
}
