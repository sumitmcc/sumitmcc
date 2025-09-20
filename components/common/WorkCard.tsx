// components/common/WorkCard.tsx
'use client';

import { Badge, Card, Group, Image, Text, Spoiler } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { BaseItem } from '@/lib/types';
import { formatDuration } from '@/lib/utils';
import { SkillIcon } from './SkillIcon';
import classes from './WorkCard.module.css';

interface WorkCardProps extends BaseItem {
  current?: boolean;
}

export function WorkCard(props: WorkCardProps) {
  const { icon, title, description, subtitle, duration, location, skills, current } = props;
  
  const features = skills?.map((badge, index) => (
    <Badge 
      variant="light" 
      key={index} 
      leftSection={
        <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SkillIcon skillName={badge} size={20} />
        </div>
      }
    >
      {badge}
    </Badge>
  ));

  const formattedDuration = duration ? formatDuration(duration) : undefined;

  return (
    <Card 
      radius="md" 
      p="md" 
      className={`${classes.card} w-80 leading-relaxed mb-14 mx-auto`} 
      bg="transparent"
    >
      <Card.Section>
        {icon && (
          <Image 
            src={icon} 
            alt={title} 
            height={180} 
            className='lg:w-80 bg-transparent lg:h-80' 
          />
        )}
      </Card.Section>

      <Card.Section className={`${classes.section}`} mt="md">
        <Text fz="lg" fw={800} className='text-gray-900 dark:text-gray-100'>
          {title}
        </Text>
        
        <div className="flex gap-2 mb-4">
          {location && (
            <Badge size="sm" variant="light" className='dark:text-cyan-200'>
              {location}
            </Badge>
          )}
          {current && (
            <Badge color='pink'>
              Present
            </Badge>
          )}
        </div>

        <Text fz="md" fw={550} className='text-gray-800 dark:text-gray-200'>
          {subtitle}
        </Text>
        
        {formattedDuration && (
          <Text fz="sm" fw={550} className='text-gray-800 dark:text-gray-200'>
            {formattedDuration}
          </Text>
        )}

        {description && (
          <Spoiler
            maxHeight={130}
            showLabel={
              <span className={classes.spoilerButton}>
                Show more <IconChevronDown size={14} stroke={1.8} />
              </span>
            }
            hideLabel={
              <span className={classes.spoilerButton}>
                Show less <IconChevronUp size={14} stroke={1.8} />
              </span>
            }
            className="mt-3"
            transitionDuration={180}
          >
            <Text fz="sm" className='text-gray-800 dark:text-gray-200 leading-relaxed'>
              {description}
            </Text>
          </Spoiler>
        )}
      </Card.Section>

      {skills && skills.length > 0 && (
        <Card.Section className={classes.section}>
          <Text mt="md" className={`${classes.label} dark:text-cyan-200`}>
            Key Skills
          </Text>
          <Group gap={7} mt={5}>
            {features}
          </Group>
        </Card.Section>
      )}
    </Card>
  );
}
