'use client';

import React, { useState, useEffect } from 'react';

interface GHImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

/**
 * A component that handles image paths for GitHub Pages
 * Use this instead of the standard img tag for all images
 */
export default function GHImage({ src, ...props }: GHImageProps) {
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

  return <img src={imageSrc} {...props} />;
} 