/**
 * Image optimization utilities
 */

/**
 * Optimize Unsplash image URL for better performance
 * @param url - Original Unsplash URL
 * @param width - Target width (default: 800)
 * @param quality - Image quality 1-100 (default: 80)
 * @returns Optimized URL with WebP format and responsive sizing
 */
export function optimizeUnsplashUrl(
  url: string,
  width: number = 800,
  quality: number = 80
): string {
  try {
    const urlObj = new URL(url);

    // Update or add optimization parameters
    urlObj.searchParams.set('auto', 'format'); // Auto-select best format
    urlObj.searchParams.set('fit', 'max'); // Fit within dimensions
    urlObj.searchParams.set('w', width.toString()); // Width
    urlObj.searchParams.set('q', quality.toString()); // Quality
    urlObj.searchParams.set('fm', 'webp'); // Force WebP format

    return urlObj.toString();
  } catch {
    // If URL parsing fails, return original
    return url;
  }
}

/**
 * Generate srcset for responsive images from Unsplash
 * @param url - Original Unsplash URL
 * @param widths - Array of widths for responsive images (default: [400, 800, 1200])
 * @returns srcset string for img tag
 */
export function generateUnsplashSrcSet(
  url: string,
  widths: number[] = [400, 800, 1200]
): string {
  return widths
    .map((width) => `${optimizeUnsplashUrl(url, width)} ${width}w`)
    .join(', ');
}

/**
 * Get optimized sizes attribute for responsive images
 * @param maxWidth - Maximum width in viewport (e.g., '100vw', '50vw')
 * @returns sizes string for img tag
 */
export function getImageSizes(maxWidth: string = '100vw'): string {
  return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${maxWidth}`;
}
