// This file handles the preloader animation and removal

export function handlePreloader() {
  if (typeof window !== 'undefined') {
    // Wait for window load or check if already loaded
    const loadHandler = () => {
      // Hide preloader after a small delay to ensure all content is visible
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.style.opacity = '0';
          // Remove from DOM after fade out
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 500);
        }
      }, 300);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      loadHandler();
    } else {
      window.addEventListener('load', loadHandler);
      // Clean up
      return () => window.removeEventListener('load', loadHandler);
    }
  }
}

export default handlePreloader; 