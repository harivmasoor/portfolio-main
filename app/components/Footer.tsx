'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: 'https://github.com/harivmasoor/', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/harimasoor/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { href: 'https://angel.co/u/hari-masoor', icon: 'fab fa-angellist', label: 'AngelList' },
    { href: 'mailto:harimasoor@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#works', label: 'Projects' },
  ];

  return (
    <footer id="contact" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Decoration */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(244, 114, 182, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      {/* Main Footer Content */}
      <div style={{
        padding: '80px 0 40px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container">
          <div className="row">
            {/* Brand Section */}
            <div className="col-md-4" style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Hari Masoor
              </h3>
              <p style={{
                color: '#94a3b8',
                fontSize: '1rem',
                marginBottom: '1.5rem',
                maxWidth: '280px',
              }}>
                Full-Stack Software Engineer passionate about building products that make a difference.
              </p>
              
              {/* Social Icons */}
              <div style={{
                display: 'flex',
                gap: '12px',
              }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    aria-label={social.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#94a3b8',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1 0%, #f472b6 100%)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4" style={{ marginBottom: '2rem' }}>
              <h4 style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
              }}>
                Quick Links
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                {quickLinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: '0.75rem' }}>
                    <a
                      href={link.href}
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#6366f1';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#94a3b8';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#6366f1',
                        opacity: 0.5,
                      }} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4" style={{ marginBottom: '2rem' }}>
              <h4 style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
              }}>
                Get in Touch
              </h4>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#94a3b8',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(99, 102, 241, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6366f1',
                  }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <span>San Jose, CA</span>
                </div>
                
                <a 
                  href="mailto:harimasoor@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#6366f1';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(244, 114, 182, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f472b6',
                  }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <span>harimasoor@gmail.com</span>
                </a>
              </div>

              {/* CTA Button */}
              <a
                href="mailto:harimasoor@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '1rem',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(99, 102, 241, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.3)';
                }}
              >
                Let&apos;s Connect
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '20px 0',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <p style={{
              margin: 0,
              color: '#64748b',
              fontSize: '0.9rem',
            }}>
              © {currentYear} <span style={{ 
                background: 'linear-gradient(135deg, #6366f1 0%, #f472b6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600,
              }}>Hari Masoor</span>. All Rights Reserved.
            </p>
            <p style={{
              margin: 0,
              color: '#64748b',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              Built with <span style={{ color: '#ef4444' }}>♥</span> using Next.js & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
