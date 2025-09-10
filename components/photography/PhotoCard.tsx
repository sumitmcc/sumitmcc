// components/photography/PhotoCard.tsx
'use client';

import { Card, Text, Badge, Group } from '@mantine/core';
import { useState } from 'react';
import Image from 'next/image';
import { Photo } from '@/lib/types';
import classes from './PhotoCard.module.css';

interface PhotoCardProps {
  photo: Photo;
  onClick: (photo: Photo, currentIndex?: number) => void;
}

export function PhotoCard({ photo, onClick }: PhotoCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isCarousel = photo.media_type === 'CAROUSEL_ALBUM' && photo.carousel_media && photo.carousel_media.length > 1;
  const currentPhoto = isCarousel ? photo.carousel_media![currentIndex] : photo;
  const totalImages = isCarousel ? photo.carousel_media!.length : 1;

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const handleCardClick = () => {
    // Pass the current photo and index
    onClick(photo, currentIndex);
  };

  return (
    <Card 
      radius="md" 
      p="md" 
      className={`${classes.card} w-80 leading-relaxed mb-14 mx-auto cursor-pointer`}
      bg="transparent"
      onClick={handleCardClick}
    >
      <Card.Section>
        <div className="relative">
          <Image
            src={currentPhoto.url}
            alt={photo.caption || 'Instagram photo'}
            width={320}
            height={240}
            className="w-full h-60 object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          
          {/* Carousel Controls */}
          {isCarousel && (
            <>
              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all"
                disabled={totalImages <= 1}
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all"
                disabled={totalImages <= 1}
              >
                ›
              </button>
              
              {/* Carousel Indicator */}
              <div className="absolute top-3 left-3">
                <Badge size="xs" variant="filled" color="dark">
                  📷 {currentIndex + 1}/{totalImages}
                </Badge>
              </div>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                {Array.from({ length: totalImages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        {/* Location or Date Badge */}
        <Group justify="space-between" mb="xs">
          {photo.alt_text ? (
            <Badge size="sm" variant="light" color="green">
              {photo.alt_text}
            </Badge>
          ) : (
            <Badge size="sm" variant="light" color="blue">
              {formatDate(photo.timestamp)}
            </Badge>
          )}
          {/* If we have location, show date as secondary badge */}
          {photo.alt_text && (
            <Badge size="sm" variant="light" color="gray">
              {formatDate(photo.timestamp)}
            </Badge>
          )}
        </Group>

        {/* Caption */}
        {photo.caption && (
          <Text size="sm" className="text-gray-600 dark:text-gray-400 mb-3" lineClamp={3}>
            {photo.caption}
          </Text>
        )}

        {/* Tags */}
        {photo.tags && photo.tags.length > 0 && (
          <Group gap={5}>
            {photo.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} size="xs" variant="outline" color="gray">
                #{tag}
              </Badge>
            ))}
            {photo.tags.length > 3 && (
              <Badge size="xs" variant="outline" color="gray">
                +{photo.tags.length - 3}
              </Badge>
            )}
          </Group>
        )}
      </Card.Section>
    </Card>
  );
}