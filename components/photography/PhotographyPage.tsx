// components/photography/PhotographyPage.tsx
'use client';

import { useState, useEffect } from 'react';
import { Modal, Text, Button, Group, Badge } from '@mantine/core';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import Image from 'next/image';
import { PhotoCard } from './PhotoCard';
import { Photo } from '@/lib/types';
import { transformInstagramMedia } from '@/data/photography';

export function PhotographyPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInstagramPhotos();
  }, []);

  const fetchInstagramPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/instagram');
      
      if (!response.ok) {
        throw new Error('Failed to fetch photos');
      }
      
      const data = await response.json();
      const transformedPhotos = transformInstagramMedia(data.photos);
      setPhotos(transformedPhotos);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load photos');
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoClick = (photo: Photo, currentIndex: number = 0) => {
    setSelectedPhoto(photo);
    setModalImageIndex(currentIndex);
    open();
  };

  // Keyboard navigation for carousel in modal
  const isCarouselModal = selectedPhoto?.media_type === 'CAROUSEL_ALBUM' && selectedPhoto?.carousel_media;
  const maxIndex = isCarouselModal ? selectedPhoto.carousel_media!.length - 1 : 0;

  useHotkeys([
    ['ArrowLeft', () => {
      if (isCarouselModal && opened) {
        setModalImageIndex(prev => prev === 0 ? maxIndex : prev - 1);
      }
    }],
    ['ArrowRight', () => {
      if (isCarouselModal && opened) {
        setModalImageIndex(prev => prev === maxIndex ? 0 : prev + 1);
      }
    }],
  ]);

  if (loading) {
    return (
      <section className="bg-transparent py-8 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-pulse">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 mb-8">
              Loading Photography...
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-200 dark:bg-gray-700 aspect-square rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-transparent py-8 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 mb-8">
            Photography
          </h1>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <Text className="text-red-700 dark:text-red-400">
              {error}
            </Text>
            <Button 
              onClick={fetchInstagramPhotos} 
              className="mt-4"
              variant="light"
            >
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-transparent py-8 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 mb-4">
              Photography
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Capturing moments through my lens. Follow my photography journey on Instagram.
            </p>
          </header>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onClick={(clickedPhoto, clickedIndex) => handlePhotoClick(clickedPhoto, clickedIndex)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        centered
        padding="xl"
        radius="md"
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {selectedPhoto && (
          <div className="space-y-6">
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <Text size="lg" fw={600} className="text-gray-900 dark:text-gray-100 mb-2">
                  {selectedPhoto.alt_text ? 
                    (selectedPhoto.alt_text.length > 80 ? 
                      `${selectedPhoto.alt_text.substring(0, 80)}...` : 
                      selectedPhoto.alt_text
                    ) : 'Instagram Photo'
                  }
                </Text>
                {/* Carousel indicator in header */}
                {selectedPhoto.media_type === 'CAROUSEL_ALBUM' && selectedPhoto.carousel_media && (
                  <Badge size="sm" variant="light" color="blue">
                    📷 {modalImageIndex + 1}/{selectedPhoto.carousel_media.length}
                  </Badge>
                )}
              </div>
              <Button variant="subtle" size="sm" onClick={close} className="ml-4">
                ✕
              </Button>
            </div>

            {/* Image Container */}
            <div className="relative bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative w-full" style={{ aspectRatio: '4/3', maxHeight: '70vh' }}>
                <Image
                  src={
                    selectedPhoto.media_type === 'CAROUSEL_ALBUM' && selectedPhoto.carousel_media
                      ? selectedPhoto.carousel_media[modalImageIndex]?.url || selectedPhoto.url
                      : selectedPhoto.url
                  }
                  alt={selectedPhoto.caption || 'Photo'}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 95vw, 80vw"
                  priority
                />
                
                {/* Modal Carousel Controls */}
                {selectedPhoto.media_type === 'CAROUSEL_ALBUM' && selectedPhoto.carousel_media && selectedPhoto.carousel_media.length > 1 && (
                  <>
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => setModalImageIndex(prev => 
                        prev === 0 ? selectedPhoto.carousel_media!.length - 1 : prev - 1
                      )}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all text-xl font-bold"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setModalImageIndex(prev => 
                        prev === selectedPhoto.carousel_media!.length - 1 ? 0 : prev + 1
                      )}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all text-xl font-bold"
                    >
                      ›
                    </button>
                    
                    {/* Dots Navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {selectedPhoto.carousel_media.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setModalImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === modalImageIndex 
                              ? 'bg-white shadow-lg scale-110' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Full Caption */}
            {selectedPhoto.caption && selectedPhoto.caption.length > 80 && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <Text size="sm" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedPhoto.caption}
                </Text>
              </div>
            )}

            {/* Tags */}
            {selectedPhoto.tags && selectedPhoto.tags.length > 0 && (
              <div>
                <Text size="sm" fw={500} className="text-gray-600 dark:text-gray-400 mb-2">
                  Tags:
                </Text>
                <Group gap={6}>
                  {selectedPhoto.tags.map((tag, index) => (
                    <Badge key={index} size="sm" variant="outline" color="gray">
                      #{tag}
                    </Badge>
                  ))}
                </Group>
              </div>
            )}

            {/* Footer Actions */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-3">
                <Button
                  component="a"
                  href={selectedPhoto.permalink}
                  target="_blank"
                  variant="filled"
                  size="sm"
                  leftSection="📱"
                >
                  View on Instagram
                </Button>
                <Button
                  variant="light"
                  size="sm"
                  leftSection="📥"
                  onClick={() => window.open(selectedPhoto.url, '_blank')}
                >
                  View Full Size
                </Button>
              </div>
              <Text size="xs" className="text-gray-500">
                Click outside to close
              </Text>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}