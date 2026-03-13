import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageLightbox } from '../components/ImageLightbox';
import { SEO } from '../components/SEO';
import { galleryImages, getAllProjects, projectNames } from '../data/galleryData';

export function Gallery() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allProjects = getAllProjects();

  const filters = [
    { value: 'all', label: t('gallery.filter.all') },
    ...allProjects.map((projectId) => ({
      value: projectId,
      label: projectNames[projectId]?.[language] || projectId,
    })),
  ];

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.project === filter);

  // Group images by project for display
  const groupedImages = filteredImages.reduce((acc, image) => {
    if (!acc[image.project]) {
      acc[image.project] = [];
    }
    acc[image.project].push(image);
    return acc;
  }, {} as Record<string, typeof galleryImages>);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={t('gallery.title')}
        description={t('gallery.subtitle')}
        keywords={t('seo.keywords.gallery')}
        url="/gallery"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0033A0] to-[#8B1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gray-100">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterOption) => (
              <button
                key={filterOption.value}
                onClick={() => setFilter(filterOption.value)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === filterOption.value
                    ? 'bg-[#0033A0] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Grouped by Project */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {Object.entries(groupedImages).map(([projectId, projectImages]) => (
            <div key={projectId}>
              {/* Project Header */}
              <h2 className="text-3xl mb-8 text-gray-900">
                {projectNames[projectId]?.[language] || projectId}
              </h2>

              {/* Project Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((image, index) => {
                  const globalIndex = filteredImages.findIndex(
                    (img) => img.url === image.url
                  );
                  return (
                    <div
                      key={index}
                      onClick={() => openLightbox(globalIndex)}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white text-lg font-semibold mb-1">
                            {image.title}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  );
}
