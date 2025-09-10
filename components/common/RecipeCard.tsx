// components/common/RecipeCard.tsx
'use client';

import { Badge, Card, Text, Spoiler, Group } from '@mantine/core';
import Image from 'next/image';
import { Recipe } from '@/data/baking';
import { cn } from '@/lib/utils';
import classes from './RecipeCard.module.css';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'Easy': return 'green';
      case 'Medium': return 'yellow';
      case 'Hard': return 'red';
      default: return 'gray';
    }
  };

  return (
    <Card 
      radius="md" 
      p="md" 
      className={cn(classes.card, "w-80 leading-relaxed mb-14 mx-auto")}
      bg="transparent"
    >
      {/* Recipe Image */}
      <Card.Section>
        <div className="relative">
          <Image 
            src={recipe.image} 
            alt={recipe.title}
            width={320}
            height={240}
            className="w-full h-60 object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          {/* Difficulty Badge Overlay */}
          {recipe.difficulty && <div className="absolute top-3 right-3">
            <Badge 
              color={getDifficultyColor(recipe.difficulty)} 
              variant="filled"
              size="sm"
            >
              {recipe.difficulty}
            </Badge>
          </div>}
        </div>
      </Card.Section>

      {/* Recipe Info */}
      <Card.Section className={classes.section} mt="md">
        <Text fw={700} size="lg" className="text-gray-900 dark:text-gray-100 mb-2">
          {recipe.title}
        </Text>
        
        {/* Recipe Meta Info */}
        <div className="flex flex-wrap gap-2 mb-3">
          {recipe.cookTime && (
            <Badge size="sm" variant="light" color="blue">
              ⏱️ {recipe.cookTime}
            </Badge>
          )}
          {recipe.servings && (
            <Badge size="sm" variant="light" color="orange">
              👥 {recipe.servings}
            </Badge>
          )}
        </div>

        {/* Description */}
        <Text size="sm" className="text-gray-600 dark:text-gray-400 mb-3">
          {recipe.description}
        </Text>

        {/* Tags */}
        {recipe.tags && recipe.tags.length > 0 && (
          <Group gap={5} mb="md">
            {recipe.tags.map((tag, index) => (
              <Badge key={index} size="xs" variant="outline" color="gray">
                #{tag}
              </Badge>
            ))}
          </Group>
        )}
      </Card.Section>

      {/* Expandable Recipe Content */}
      <Card.Section className={classes.section}>
        <Spoiler 
          maxHeight={0}
          showLabel={recipe.post? "Read": "Show Recipe"} 
          hideLabel={recipe.post? "Hide": "Hide Recipe"}
          className="text-gray-800 dark:text-gray-200"
        >
          <div className="space-y-4 pt-4">
            {/* Ingredients */}
            {recipe.ingredients && <div>
              <Text fw={600} size="md" className="text-gray-900 dark:text-gray-100 mb-2">
                Ingredients:
              </Text>
              <ul className="space-y-1 pl-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                    • {ingredient}
                  </li>
                ))}
              </ul>
            </div>}

            {/* Instructions */}
            {recipe.instructions && <div>
              <Text fw={600} size="md" className="text-gray-900 dark:text-gray-100 mb-2">
                Instructions:
              </Text>
              <ol className="space-y-2 pl-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {index + 1}.
                    </span>{' '}
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>}

            {recipe.tips && recipe.tips.length > 0 && (
                <div>
                    <Text fw={600} size="md" className="text-gray-900 dark:text-gray-100 mb-2">
                        Tips:
                    </Text>
                    <ol className="space-y-2 pl-4">
                        {recipe.tips.map((tip, index) => (
                            <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                                <span className="font-semibold text-blue-600 dark:text-blue-400">
                                    {index + 1}.
                                </span>{' '}
                                {tip}
                            </li>
                        ))}
                    </ol>
                </div>
            )}

            {recipe.post && (
              <div>
                <Text fw={500} size="md" className="text-gray-900 dark:text-gray-100 mb-2">
                    {recipe.post}
                </Text>
            </div>
            )}
          </div>
        </Spoiler>
      </Card.Section>
    </Card>
  );
}
