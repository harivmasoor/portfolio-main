'use client';

import { useEffect } from 'react';

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
      '/css/animate.css',
      '/css/slick.css'
    ];
    
    // Add all stylesheets dynamically
    stylesheets.forEach(stylesheet => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${basePath}${stylesheet}`;
      document.head.appendChild(link);
      console.log(`Added stylesheet: ${link.href}`);
    });
    
    // Load scripts dynamically in the correct order
    const loadScriptsSequentially = async () => {
      const scriptSources = [
        '/js/jquery-1.12.3.min.js',         // jQuery must be first
        '/js/bootstrap.min.js',             // Bootstrap depends on jQuery
        '/js/imagesloaded.pkgd.min.js',     // For proper image loading - should be early
        '/js/jquery.magnific-popup.min.js', // For project popups
        '/js/isotope.pkgd.min.js',          // For filtering
        '/js/jquery.counterup.min.js',      // For counter animations
        '/js/jquery.waypoints.min.js',      // Required by counterup
        '/js/morphext.min.js',              // For text rotation
        '/js/parallax.min.js',              // For parallax effects
        '/js/infinite-scroll.min.js',       // For infinite scrolling
        '/js/wow.min.js',                   // For animations
        '/js/slick.min.js',                 // For sliders
        '/js/preloader.js',                 // For preloader
        '/js/custom.js'                     // Must be last - our custom code
      ];
      
      for (const src of scriptSources) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = `${basePath}${src}`;
          script.async = false;
          script.onload = resolve;
          script.onerror = (e) => {
            console.warn(`Failed to load script: ${src}`, e);
            // Resolve anyway to continue loading other scripts
            resolve(e);
          };
          document.body.appendChild(script);
          console.log(`Added script: ${script.src}`);
        }).catch(error => {
          console.error(`Failed to load script: ${src}`, error);
        });
      }
      
      // Add a small delay after loading all scripts to ensure they're properly initialized
      setTimeout(() => {
        console.log('Initializing custom scripts after delay');
        if (window.jQuery) {
          try {
            // Fix any scripts that failed to initialize automatically
            const $ = window.jQuery;
            
            // Manually initialize components if needed
            if ($('.portfolio-wrapper').length && $.fn.isotope) {
              $('.portfolio-wrapper').isotope({
                itemSelector: '.grid-item',
                layoutMode: 'fitRows'
              });
              console.log('Manually initialized Isotope');
            }
            
            // Fix all image backgrounds to use basePath
            $('[style*="background-image"]').each(function() {
              const $this = $(this);
              const style = $this.attr('style') || '';
              if (style.includes('url(\'/')) {
                const newStyle = style.replace(/url\('\/([^']*)'\)/g, `url('${basePath}/$1')`);
                $this.attr('style', newStyle);
              }
            });
            
          } catch (e) {
            console.error('Error during manual initialization:', e);
          }
        }
      }, 1000);
      
      console.log('All scripts loaded sequentially');
    };
    
    loadScriptsSequentially();
    
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