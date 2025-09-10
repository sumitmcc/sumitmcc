// data/baking.ts
export interface Recipe {
  id: string;
  title: string;
  description?: string;
  image: string;
  cookTime?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  servings?: string;
  ingredients?: string[];
  instructions?: string[];
  tags?: string[];
  dateCreated?: string;
  tips?: string[];
  post?: string;
}

export interface BakingCategory {
  category: string;
  recipes: Recipe[];
}

export const bakingData: BakingCategory[] = [
    {
        category: "Blog",
        recipes: [
        ],
    },
  {
    category: "Cookies & Treats",
    recipes: [
      
    ],
  },
  {
    category: "Breads & Pastries",
    recipes: [
      
    ],
  },
];

export const allRecipes: Recipe[] = bakingData.flatMap(
  (category) => category.recipes
);
