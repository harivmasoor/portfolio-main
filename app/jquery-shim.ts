// This file helps with jQuery compatibility in Next.js
// It's a workaround for jQuery dependencies in a React environment

import { useEffect } from 'react';
import handlePreloader from './preloader';

// Define a type for jQuery
type JQuery = {
  (selector: string | Element): {
    length: number;
    Morphext: (options: {
      animation: string;
      separator: string;
      speed: number;
      complete: () => void;
    }) => void;
    on: (event: string, callback: (e?: Event) => void) => void;
    toggleClass: (className: string) => void;
    closest: (selector: string) => { length: number };
    removeClass: (className: string) => void;
  };
  fn?: {
    scrollspy?: unknown;
  };
};

// Augment the Window interface
declare global {
  interface Window {
    jQuery: JQuery;
  }
}

export function useJQuery() {
  useEffect(() => {
    // Handle preloader first - this doesn't need jQuery
    const preloaderCleanup = handlePreloader();
    
    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      // Wait for jQuery to be available
      const jQueryInterval = setInterval(() => {
        if (window.jQuery) {
          const $ = window.jQuery;
          // jQuery is loaded, clear the interval
          clearInterval(jQueryInterval);
          
          console.log('jQuery is initialized and ready to use');
          
          try {
            // Initialize text rotation
            if ($('.text-rotating').length) {
              try {
                $('.text-rotating').Morphext({
                  animation: "bounceIn",
                  separator: ",",
                  speed: 4000,
                  complete: function () {}
                });
              } catch (e) {
                console.error('Error initializing Morphext:', e);
              }
            }
            
            // COMPLETELY REVISED SMOOTH SCROLLING
            // Replace jQuery-based smooth scrolling with native JS implementation
            document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the href attribute
                const href = this.getAttribute('href');
                if (!href) return;
                
                // Find the target element
                const targetElement = document.querySelector(href);
                if (!targetElement) {
                  console.warn(`Target element ${href} not found`);
                  return;
                }
                
                // Scroll to the element with smooth behavior
                try {
                  // Use native smooth scrolling
                  targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                } catch (error) {
                  console.error('Error during smooth scroll:', error);
                }
              });
            });
            
            // Menu toggle
            $('.menu-icon button').on('click', function() {
              $('body').toggleClass('mobile-menu-visible');
            });
            
            // Click outside of mobile menu to close
            $(document).on('click', function(e: Event) {
              if (!$(e.target as Element).closest('.desktop-header-1, .mobile-header-1 .menu-icon').length) {
                $('body').removeClass('mobile-menu-visible');
              }
            });
            
            // Add scroll event listener for our custom scrollspy
            window.addEventListener('scroll', () => {
              let current = '';
              
              const sections = document.querySelectorAll('section[id]');
              const navItems = document.querySelectorAll('.scrollspy li');
              
              sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                // We're not using sectionHeight, so no need to calculate it
                
                if (window.scrollY >= sectionTop - 200) {
                  current = section.getAttribute('id') || '';
                }
              });
              
              navItems.forEach((li) => {
                li.classList.remove('active');
                const anchor = li.querySelector('a');
                if (anchor && anchor.getAttribute('href') === `#${current}`) {
                  li.classList.add('active');
                }
              });
            });
          } catch (error) {
            console.error('Error during jQuery initialization:', error);
          }
        }
      }, 100);
      
      // Clean up interval and event handlers
      return () => {
        clearInterval(jQueryInterval);
        if (preloaderCleanup) preloaderCleanup();
      };
    }
  }, []);
}

export default useJQuery; 