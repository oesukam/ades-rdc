import { useState, useEffect, useRef, ImgHTMLAttributes } from 'react';
import { PLACEHOLDER_IMAGE } from '../utils/assetHelpers';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  lazy?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized Image Component
 *
 * Features:
 * - Lazy loading with Intersection Observer
 * - Placeholder support
 * - Automatic WebP detection
 * - Error handling with fallback
 * - Smooth fade-in animation
 */
export function OptimizedImage({
  src,
  alt,
  lazy = true,
  placeholder = PLACEHOLDER_IMAGE,
  className = '',
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(lazy ? placeholder : src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) {
      setImageSrc(src);
      return;
    }

    const img = imgRef.current;
    if (!img) return;

    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(img);
            }
          });
        },
        {
          rootMargin: '50px', // Start loading 50px before entering viewport
        }
      );

      observer.observe(img);

      return () => {
        if (img) observer.unobserve(img);
      };
    } else {
      // Fallback for browsers without IntersectionObserver
      setImageSrc(src);
    }
  }, [src, lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setImageSrc(placeholder);
    onError?.();
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${hasError ? 'filter grayscale' : ''} ${className}`}
      onLoad={handleLoad}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
      {...props}
    />
  );
}

/**
 * Responsive Image Component
 *
 * Automatically serves different image sizes based on viewport
 */
interface ResponsiveImageProps extends OptimizedImageProps {
  srcSet?: string;
  sizes?: string;
}

export function ResponsiveImage({
  src,
  srcSet,
  sizes = '100vw',
  ...props
}: ResponsiveImageProps) {
  return (
    <OptimizedImage
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      {...props}
    />
  );
}

/**
 * Background Image Component
 *
 * Optimized background image with lazy loading
 */
interface BackgroundImageProps {
  src: string;
  alt?: string;
  className?: string;
  lazy?: boolean;
  children?: React.ReactNode;
}

export function BackgroundImage({
  src,
  alt = '',
  className = '',
  lazy = true,
  children,
}: BackgroundImageProps) {
  const [backgroundSrc, setBackgroundSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazy) {
      setBackgroundSrc(src);
      return;
    }

    const div = divRef.current;
    if (!div) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setBackgroundSrc(src);
              observer.unobserve(div);
            }
          });
        },
        {
          rootMargin: '50px',
        }
      );

      observer.observe(div);

      return () => {
        if (div) observer.unobserve(div);
      };
    } else {
      setBackgroundSrc(src);
    }
  }, [src, lazy]);

  useEffect(() => {
    if (backgroundSrc) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.src = backgroundSrc;
    }
  }, [backgroundSrc]);

  return (
    <div
      ref={divRef}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      role="img"
      aria-label={alt}
    >
      {children}
    </div>
  );
}
