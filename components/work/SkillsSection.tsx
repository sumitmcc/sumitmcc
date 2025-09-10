// components/work/SkillsSection.tsx
'use client';

import { Badge, Card, Image, Text, Progress } from '@mantine/core';
import { skillsData, SkillCategory, Skill } from '@/data/skills';
import classes from './SkillsSection.module.css';

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const getLevelValue = (level: string): number => {
    switch (level) {
      case 'Expert': return 100;
      case 'Advanced': return 75;
      case 'Intermediate': return 60;
      case 'Beginner': return 35;
      default: return 0;
    }
  };

  const getLevelColor = (level: string): string => {
    switch (level) {
      case 'Expert': return 'green';
      case 'Advanced': return 'blue';
      case 'Intermediate': return 'yellow';
      case 'Beginner': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <Card className={`p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${classes.skillCard}`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={classes.skillIcon}>
          {skill.icon ? (
            <Image 
              src={skill.icon} 
              alt={skill.name} 
              className="w-full h-full object-contain"
              fit="contain"
            />
          ) : (
            <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                {skill.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <Text fw={600} className="text-gray-900 dark:text-gray-100 flex-1">
          {skill.name}
        </Text>
        <Badge 
          color={getLevelColor(skill.level)} 
          variant="light" 
          size="sm"
          className="flex-shrink-0"
        >
          {skill.level}
        </Badge>
      </div>
      
      <Progress 
        value={getLevelValue(skill.level)} 
        color={getLevelColor(skill.level)}
        size="sm" 
        className="mb-2"
      />
      
      {skill.description && (
        <Text size="sm" className="text-gray-600 dark:text-gray-400">
          {skill.description}
        </Text>
      )}
    </Card>
  );
}

interface SkillsCategoryProps {
  category: SkillCategory;
}

function SkillsCategorySection({ category }: SkillsCategoryProps) {
  return (
    <div className="mb-8">
      <Text size="xl" fw={700} className="mb-4 text-gray-900 dark:text-gray-100">
        {category.category}
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <Text size="2xl" fw={700} className="text-gray-900 dark:text-gray-100 mb-2">
          Technical Skills
        </Text>
        <Text size="lg" className="text-gray-600 dark:text-gray-400">
          Here are the technologies and tools I work with
        </Text>
      </div>
      
      {skillsData.map((category, index) => (
        <SkillsCategorySection key={index} category={category} />
      ))}
    </div>
  );
}
