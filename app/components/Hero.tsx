'use client';

import React, { useEffect, useState } from 'react';
import GHImage from './GHImage';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const roles = [
    'Full-Stack Engineer',
    'Strategic Thinker', 
    'Proven Hacker',
    'Bug Hunter',
    'Problem Solver'
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home d-flex align-items-center" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        {/* Gradient Orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite reverse',
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float 12s ease-in-out infinite',
        }} />
        
        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* intro */}
        <div className="intro" style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          {/* Avatar with Glow Ring */}
          <div style={{
            position: 'relative',
            marginBottom: '2rem',
          }}>
            {/* Animated Ring */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1 0%, #f472b6 50%, #06b6d4 100%)',
              animation: 'rotate-border 3s linear infinite',
              opacity: 0.8,
            }} />
            <div style={{
              position: 'absolute',
              top: '-8px',
              left: '-8px',
              right: '-8px',
              bottom: '-8px',
              borderRadius: '50%',
              background: '#0f172a',
            }} />
            <GHImage 
              width="200" 
              height="200"
              src="/images/masoor.jpeg" 
              alt="Hari Masoor" 
              className="headshot" 
              style={{
                position: 'relative',
                margin: '0 auto',
                borderRadius: '50%',
                objectFit: 'cover',
                width: '200px',
                height: '200px',
                border: '4px solid #1e293b',
                zIndex: 1,
              }}
            />
            {/* Status Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '15px',
              right: '15px',
              width: '24px',
              height: '24px',
              background: '#10b981',
              borderRadius: '50%',
              border: '4px solid #0f172a',
              zIndex: 2,
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)',
            }} />
          </div>

          {/* Name with Gradient */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
          }}>
            Hari Masoor
          </h1>
          
          {/* Location Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}>
            <span style={{ fontSize: '1rem' }}>📍</span>
            <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>San Jose, CA</span>
          </div>

          {/* Animated Role */}
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              color: '#94a3b8', 
              fontSize: '1.1rem',
              display: 'block',
              marginBottom: '0.5rem',
            }}>
              I&apos;m a
            </span>
            <div style={{
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span 
                key={currentRole}
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #6366f1 0%, #f472b6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'fadeInUp 0.5s ease-out',
                }}
              >
                {roles[currentRole]}
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <ul className="social-icons light list-inline mb-0 mt-4" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            listStyle: 'none',
            padding: 0,
          }}>
            {[
              { href: 'mailto:harimasoor@gmail.com', icon: 'fa-envelope', color: '#f472b6' },
              { href: 'https://github.com/harivmasoor/', icon: 'fab fa-github', color: '#ffffff' },
              { href: 'https://www.linkedin.com/in/harimasoor/', icon: 'fab fa-linkedin', color: '#0077b5' },
              { href: 'https://angel.co/u/hari-masoor', icon: 'fab fa-angellist', color: '#000000' },
            ].map((social, index) => (
              <li key={index} className="list-inline-item">
                <a 
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '1.3rem',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1 0%, #f472b6 100%)';
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <i className={social.icon.includes('fab') ? social.icon : `fa ${social.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div style={{ marginTop: '2.5rem' }}>
            <a 
              href="#works"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: '#ffffff',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(99, 102, 241, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(99, 102, 241, 0.4)';
              }}
            >
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down" style={{ 
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        <a href="#about" className="mouse-wrapper" style={{ color: 'rgba(255,255,255,0.7)' }}>
          <span>Scroll Down</span>
          <span className="mouse" style={{ borderColor: 'rgba(255,255,255,0.5)' }}>
            <span className="wheel" style={{ background: 'rgba(255,255,255,0.8)' }}></span>
          </span>
        </a>
      </div>

      {/* Decorative Floating Elements */}
      <div className="parallax" data-relative-input="true" style={{ pointerEvents: 'none' }}>
        <svg width="60" height="60" data-depth="0.3" className="layer" style={{ position: 'absolute', top: '15%', left: '8%', opacity: 0.6 }} viewBox="0 0 60 60">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <circle cx="30" cy="30" r="25" fill="none" stroke="url(#grad1)" strokeWidth="2" />
        </svg>
        
        <svg width="40" height="40" data-depth="0.5" className="layer" style={{ position: 'absolute', top: '25%', right: '15%', opacity: 0.6 }} viewBox="0 0 40 40">
          <polygon points="20,5 35,35 5,35" fill="none" stroke="#f472b6" strokeWidth="2" />
        </svg>
        
        <svg width="30" height="30" data-depth="0.2" className="layer" style={{ position: 'absolute', bottom: '30%', left: '15%', opacity: 0.5 }} viewBox="0 0 30 30">
          <rect x="5" y="5" width="20" height="20" fill="none" stroke="#06b6d4" strokeWidth="2" transform="rotate(45 15 15)" />
        </svg>
        
        <svg width="50" height="50" data-depth="0.4" className="layer" style={{ position: 'absolute', bottom: '20%', right: '10%', opacity: 0.5 }} viewBox="0 0 50 50">
          <path d="M25 5 L45 25 L25 45 L5 25 Z" fill="none" stroke="#10b981" strokeWidth="2" />
        </svg>
        
        <div data-depth="0.6" className="layer" style={{ 
          position: 'absolute', 
          top: '60%', 
          left: '5%',
          width: '8px',
          height: '8px',
          background: '#f472b6',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(244, 114, 182, 0.6)',
        }} />
        
        <div data-depth="0.3" className="layer" style={{ 
          position: 'absolute', 
          top: '10%', 
          right: '25%',
          width: '6px',
          height: '6px',
          background: '#6366f1',
          borderRadius: '50%',
          boxShadow: '0 0 15px rgba(99, 102, 241, 0.6)',
        }} />
      </div>

      <style jsx>{`
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
