// This script will be included inline in the HTML to fix GitHub Pages paths
(function() {
  // Check if we're on GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    // Create and append a base element to ensure all relative URLs resolve correctly
    var base = document.createElement('base');
    base.href = '/portfolio-main/';
    document.head.prepend(base);
    
    console.log('GitHub Pages detected, base URL set to: /portfolio-main/');
    
    // Add a meta tag for debugging
    var meta = document.createElement('meta');
    meta.name = 'github-pages-fix';
    meta.content = 'true';
    document.head.appendChild(meta);
  }
})(); 