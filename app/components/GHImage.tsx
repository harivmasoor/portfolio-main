'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface GHImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * A component that handles image paths for GitHub Pages
 * Use this instead of the standard img tag for all images
 */
export default function GHImage({ src, alt, ...props }: GHImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if we're on GitHub Pages
      const isGitHubPages = window.location.hostname.includes('github.io');
      
      // If we are on GitHub Pages, prepend the repo name to the path
      if (isGitHubPages && src.startsWith('/')) {
        setImageSrc(`/portfolio-main${src}`);
      }
    }
  }, [src]);

  // Using unoptimized Image component for static exports
  return (
    <Image 
      src={imageSrc} 
      alt={alt} 
      unoptimized 
      {...props} 
      width={props.width ? Number(props.width) : 100}
      height={props.height ? Number(props.height) : 100}
    />
  );
} 