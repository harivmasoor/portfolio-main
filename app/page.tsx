'use client';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useEffect } from "react";

export default function Home() {
  // Force-remove preloader after a timeout as a fallback
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Force-remove preloader after 2 seconds as a fallback
      // This ensures the site is visible even if there are jQuery issues
      const forceTimeout = setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.style.opacity = '0';
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 500);
        }
      }, 2000);
      
      return () => clearTimeout(forceTimeout);
    }
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
