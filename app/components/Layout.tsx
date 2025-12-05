'use client';

import React from 'react';
import Link from 'next/link';
import GHImage from './GHImage';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* Mobile header */}
      <header className="mobile-header-1">
        <div className="container">
          {/* menu icon */}
          <div className="menu-icon d-inline-flex mr-4">
            <button>
              <span></span>
            </button>
          </div>
          {/* logo image */}
          <div className="site-logo">
            <Link href="/">
              <GHImage src="/images/signatureBlue.png" alt="Hari Masoor" width={150} height={36} />
            </Link>
          </div>
          
        </div>
      </header>

      {/* Desktop header */}
      <header className="desktop-header-1 d-flex align-items-start flex-column">
        {/* logo image */}
        <div className="site-logo">
          <Link href="/">
            <GHImage src="/images/signatureBlue.png" alt="Hari Masoor" width={150} height={36} />
          </Link>
        </div>
        
        
        {/* main menu */}
        <nav>
          <ul className="vertical-menu scrollspy">
            <li className="active"><a href="#home"><i className="icon-home"></i>Home</a></li>
            <li><a href="#about"><i className="icon-user-following"></i>About</a></li>
            <li><a href="#skills"><i className="icon-briefcase"></i>Skills</a></li>
            <li><a href="#experience"><i className="icon-graduation"></i>Experience</a></li>
            <li><a href="#works"><i className="icon-layers"></i>Products</a></li>
            <li><a href="#contact"><i className="icon-bubbles"></i>Contact</a></li>
          </ul>
          <div className="spacer" data-height="40"></div>
        </nav>
        
        {/* site footer */}
        <div className="footer">
          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="mailto:harimasoor@gmail.com">
                <i className="fa fa-envelope"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/harivmasoor/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/harimasoor/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://angel.co/u/hari-masoor" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-angellist"></i>
              </a>
            </li>
          </ul>
          {/* copyright text */}
          <span className="copyright">© {new Date().getFullYear()} Hari Masoor</span>
        </div>
      </header>

      {/* Main content */}
      <main className="content">
        {children}
      </main>
    </>
  );
};

export default Layout;