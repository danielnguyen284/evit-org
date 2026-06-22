import React from 'react';

interface ResponsiveHeroImageProps {
  desktopSrc: string;
  mobileSrc?: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  preload?: boolean;
}

export function getMobileHeroSrc(src: string) {
  return src.replace(/\.(png|jpe?g|webp)$/i, '-mobile.webp');
}

export function normalizeHeroSrc(src: string) {
  return src.replace(/\.(png|jpe?g)$/i, '.webp');
}

export default function ResponsiveHeroImage({
  desktopSrc,
  mobileSrc = getMobileHeroSrc(desktopSrc),
  alt,
  className = 'object-cover object-center',
  objectPosition,
  preload = true,
}: ResponsiveHeroImageProps) {
  return (
    <>
      {preload && (
        <>
          <link rel="preload" as="image" href={mobileSrc} media="(max-width: 767px)" />
          <link rel="preload" as="image" href={desktopSrc} media="(min-width: 768px)" />
        </>
      )}
      <picture className="absolute inset-0 block h-full w-full">
        <source media="(max-width: 767px)" srcSet={mobileSrc} />
        <img
          src={desktopSrc}
          alt={alt}
          className={`h-full w-full ${className}`}
          style={objectPosition ? { objectPosition } : undefined}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    </>
  );
}
