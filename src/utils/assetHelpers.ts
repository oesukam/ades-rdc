/**
 * Asset Helper Utilities
 *
 * Provides helper functions for loading and optimizing assets
 */

/**
 * Get the correct asset path for images
 * @param path - Relative path from assets/images/
 * @returns Full import path
 */
export function getImagePath(path: string): string {
  return new URL(`../assets/images/${path}`, import.meta.url).href;
}

/**
 * Get logo asset
 * @param name - Logo filename (without path)
 * @returns Logo URL
 */
export function getLogo(name: string = 'ades-logo.png'): string {
  return getImagePath(`logos/${name}`);
}

/**
 * Get hero image
 * @param name - Hero image filename
 * @returns Hero image URL
 */
export function getHeroImage(name: string): string {
  return getImagePath(`heroes/${name}`);
}

/**
 * Get project image
 * @param name - Project image filename
 * @returns Project image URL
 */
export function getProjectImage(name: string): string {
  return getImagePath(`projects/${name}`);
}

/**
 * Get team member photo
 * @param name - Team member photo filename
 * @returns Team photo URL
 */
export function getTeamPhoto(name: string): string {
  return getImagePath(`team/${name}`);
}

/**
 * Get gallery image
 * @param name - Gallery image filename
 * @returns Gallery image URL
 */
export function getGalleryImage(name: string): string {
  return getImagePath(`gallery/${name}`);
}

/**
 * Get icon
 * @param name - Icon filename
 * @returns Icon URL
 */
export function getIcon(name: string): string {
  return getImagePath(`icons/${name}`);
}

/**
 * Generate responsive image srcset
 * For use with responsive images
 * @param basePath - Base path to the image (without size suffix)
 * @param sizes - Array of sizes available
 * @returns srcset string
 */
export function getResponsiveSrcSet(
  basePath: string,
  sizes: number[] = [320, 640, 768, 1024, 1280, 1536]
): string {
  return sizes
    .map((size) => {
      const ext = basePath.split('.').pop();
      const base = basePath.replace(`.${ext}`, '');
      return `${base}-${size}w.${ext} ${size}w`;
    })
    .join(', ');
}

/**
 * Preload critical images
 * Call this function to preload important images
 * @param images - Array of image paths to preload
 */
export function preloadImages(images: string[]): void {
  if (typeof window === 'undefined') return;

  images.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

/**
 * Lazy load image with intersection observer
 * @param img - Image element
 * @param src - Source URL
 */
export function lazyLoadImage(img: HTMLImageElement, src: string): void {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.src = src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    observer.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    img.src = src;
  }
}

/**
 * Get optimized image format
 * Returns WebP if supported, otherwise fallback to original format
 * @param imagePath - Original image path
 * @returns Optimized image path
 */
export function getOptimizedImage(imagePath: string): string {
  // Check if browser supports WebP
  if (typeof window !== 'undefined') {
    const canvas = document.createElement('canvas');
    if (canvas.getContext && canvas.getContext('2d')) {
      const isWebPSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      if (isWebPSupported) {
        const ext = imagePath.split('.').pop();
        return imagePath.replace(`.${ext}`, '.webp');
      }
    }
  }
  return imagePath;
}

/**
 * Asset paths configuration
 * Centralized configuration for asset paths
 */
export const ASSET_PATHS = {
  logos: 'logos',
  heroes: 'heroes',
  projects: 'projects',
  team: 'team',
  gallery: 'gallery',
  icons: 'icons',
} as const;

/**
 * Default placeholder image
 */
export const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="20" fill="%23999"%3ELoading...%3C/text%3E%3C/svg%3E';

/**
 * Image size presets for common use cases
 */
export const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 300, height: 300 },
  medium: { width: 600, height: 600 },
  large: { width: 1200, height: 900 },
  hero: { width: 1920, height: 1080 },
} as const;
