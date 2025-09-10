// components/common/SkillIcon.tsx
'use client';

import { Image } from '@mantine/core';
import { 
  IconBrandGolang, 
  IconBrandDocker, 
  IconAlertHexagon, 
  IconBrandAnsible, 
  IconMessageUser, 
  IconUsers, 
  IconApi, 
  IconBrandNextjs,
  IconBrandReact
} from '@tabler/icons-react';
import { getSkillConfig } from '@/data/skillsConfig';

interface SkillIconProps {
  skillName: string;
  size?: number;
  className?: string;
}

const tablerIcons = {
  IconBrandGolang,
  IconBrandDocker,
  IconAlertHexagon,
  IconBrandAnsible,
  IconMessageUser,
  IconUsers,
  IconApi,
  IconBrandNextjs,
  IconBrandReact,
};

export function SkillIcon({ skillName, size = 20, className }: SkillIconProps) {
  const config = getSkillConfig(skillName);
  
  if (!config) {
    // Fallback: create a simple placeholder icon with consistent size
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded text-gray-600 dark:text-gray-300 ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.6 }}
      >
        {skillName.charAt(0).toUpperCase()}
      </div>
    );
  }

  if (config.iconType === 'tabler' && config.tablerIcon) {
    const IconComponent = tablerIcons[config.tablerIcon as keyof typeof tablerIcons];
    if (IconComponent) {
      return (
        <IconComponent 
          size={size} 
          color={config.color} 
          className={className}
        />
      );
    }
  }

  if (config.svgPath) {
    return (
      <Image 
        height={size} 
        width={size} 
        alt={config.name} 
        src={config.svgPath}
        className={className}
        style={{ width: size, height: size }}
      />
    );
  }

  // Final fallback
  return (
    <div 
      className={`flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded text-gray-600 dark:text-gray-300 ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.6 }}
    >
      {skillName.charAt(0).toUpperCase()}
    </div>
  );
}
