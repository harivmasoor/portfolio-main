'use client';

import React from 'react';
import Link from 'next/link';

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
              <img src="/images/signatureBlue.png" alt="Hari Masoor" />
            </Link>
          </div>
          
          {/* Podcast App Link - Mobile */}
          <div className="podcast-app-link d-inline-flex ml-auto">
            <a 
              href="https://app.harimasoor.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-default rounded-pill"
              style={{
                background: 'linear-gradient(to right, #FF4C60, #FF8F88)',
                color: 'white',
                fontWeight: 'bold',
                boxShadow: '0 5px 15px rgba(255, 76, 96, 0.4)',
                padding: '8px 20px',
                fontSize: '14px',
                border: 'none',
                marginRight: '15px',
                transition: 'all 0.3s ease'
              }}
            >
              Try My Podcast App!
            </a>
          </div>
        </div>
      </header>

      {/* Desktop header */}
      <header className="desktop-header-1 d-flex align-items-start flex-column">
        {/* logo image */}
        <div className="site-logo">
          <Link href="/">
            <img src="/images/signatureBlue.png" alt="Hari Masoor" />
          </Link>
        </div>
        
        {/* Podcast App Link - Desktop */}
        <div style={{ width: '100%', textAlign: 'center', margin: '20px 0' }}>
          <a 
            href="https://app.harimasoor.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-default rounded-pill"
            style={{
              background: 'linear-gradient(to right, #FF4C60, #FF8F88)',
              color: 'white',
              fontWeight: 'bold',
              boxShadow: '0 5px 15px rgba(255, 76, 96, 0.4)',
              padding: '10px 25px',
              fontSize: '15px',
              border: 'none',
              transition: 'all 0.3s ease',
              animation: 'pulse 2s infinite'
            }}
          >
            🎙️ Check Out My New Podcast App!
          </a>
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