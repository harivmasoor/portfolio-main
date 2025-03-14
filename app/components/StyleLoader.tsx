'use client';

import React, { useEffect } from 'react';

// This component will dynamically load stylesheets after determining if we're on GitHub Pages
export default function StyleLoader() {
  useEffect(() => {
    // Check for a base element first (which our inline script might have added)
    const baseElement = document.querySelector('base');
    let basePath = '';
    
    if (baseElement && baseElement.href) {
      // Extract just the path portion from the base href
      const baseUrl = new URL(baseElement.href);
      basePath = baseUrl.pathname.endsWith('/') 
        ? baseUrl.pathname.slice(0, -1) // Remove trailing slash
        : baseUrl.pathname;
      console.log(`Using base element with path: ${basePath}`);
    } else {
      // Fallback to hostname check
      basePath = window.location.hostname.includes('github.io') ? '/portfolio-main' : '';
      console.log(`No base element found, using hostname detection: ${basePath}`);
    }
    
    // Add stylesheets dynamically
    const stylesheets = [
      '/css/style.css',
      '/css/all.min.css',
      '/css/simple-line-icons.css',
      '/css/bootstrap.min.css',
      '/css/magnific-popup.css',
      '/css/animate.css'
    ];
    
    // Add all stylesheets dynamically
    stylesheets.forEach(stylesheet => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${basePath}${stylesheet}`;
      document.head.appendChild(link);
      console.log(`Added stylesheet: ${link.href}`);
    });
    
    // Load scripts dynamically
    const scripts = [
      { src: '/js/jquery-1.12.3.min.js', async: false },
      { src: '/js/jquery.appear.min.js', async: true },
      { src: '/js/bootstrap.min.js', async: true },
      { src: '/js/jquery.magnific-popup.min.js', async: true },
      { src: '/js/preloader.js', async: true }
    ];
    
    scripts.forEach(scriptInfo => {
      const script = document.createElement('script');
      script.src = `${basePath}${scriptInfo.src}`;
      script.async = scriptInfo.async;
      document.body.appendChild(script);
      console.log(`Added script: ${script.src}`);
    });
    
    // Fix all image paths in the DOM
    const fixImagePaths = () => {
      // Target all img tags with src that starts with /
      const images = document.querySelectorAll('img[src^="/"]');
      
      images.forEach(img => {
        const originalSrc = img.getAttribute('src');
        if (originalSrc && originalSrc.startsWith('/') && !originalSrc.startsWith(`${basePath}/`)) {
          const newSrc = `${basePath}${originalSrc}`;
          img.setAttribute('src', newSrc);
          console.log(`Fixed image path: ${originalSrc} → ${newSrc}`);
        }
      });
    };
    
    // Run once immediately
    fixImagePaths();
    
    // Also run after the DOM is fully loaded
    window.addEventListener('load', fixImagePaths);
    
    // Clean up
    return () => {
      window.removeEventListener('load', fixImagePaths);
    };
    
  }, []);

  return null; // This component doesn't render anything
} 