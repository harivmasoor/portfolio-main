'use client';

import React, { useEffect, useRef, useState } from 'react';
import GHImage from './GHImage';
import Image from 'next/image';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: 'icon-fire', number: '5', label: 'Projects Deployed', color: '#f472b6' },
    { icon: 'icon-social-github', number: '980', label: 'GitHub Contributions', color: '#6366f1' },
    { icon: 'icon-layers', number: '28', label: 'Technologies', color: '#06b6d4' },
    { icon: 'icon-energy', number: '10', label: 'Years in Technology', color: '#10b981' },
    { icon: 'icon-wrench', number: '2', label: 'Years Full-Stack Dev', color: '#f59e0b' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      style={{ 
        paddingTop: '100px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <span style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(244, 114, 182, 0.1) 100%)',
            borderRadius: '50px',
            color: '#6366f1',
            fontWeight: 600,
            fontSize: '0.9rem',
            marginBottom: '1rem',
            letterSpacing: '0.5px',
          }}>
            GET TO KNOW ME
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#0f172a',
            margin: 0,
          }}>
            About Me
          </h2>
        </div>

        {/* About Content */}
        <div className="row" style={{ alignItems: 'center', marginBottom: '4rem' }}>
          <div className="col-md-4" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          }}>
            <div style={{
              position: 'relative',
              display: 'inline-block',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}>
              {/* Decorative Frame */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: 'calc(50% - 90px)',
                width: '180px',
                height: '180px',
                border: '3px solid transparent',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #6366f1 0%, #f472b6 100%) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                transform: 'rotate(6deg)',
              }} />
              <GHImage 
                className="headshot" 
                width={160}
                height={160}
                src="/images/masoor.jpeg" 
                alt="Hari Masoor"
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 1,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) rotate(-3deg)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(99, 102, 241, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
              />
            </div>
          </div>

          <div className="col-md-8" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
          }}>
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Accent Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, #6366f1 0%, #f472b6 50%, #06b6d4 100%)',
              }} />
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#475569',
                margin: 0,
              }}>
                My experiences range from customer service and troubleshooting to <strong style={{ color: '#6366f1' }}>technically validating 8-figure deals</strong> and delivering <strong style={{ color: '#f472b6' }}>global keynotes at the largest conferences in the world</strong>. Whatever the task - I am confident I have the skills to accomplish it. I am currently seeking to apply my unique skill set to fullstack positions.
              </p>
              
              {/* Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '1.5rem',
              }}>
                {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented'].map((tag, i) => (
                  <span key={i} style={{
                    padding: '6px 16px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(244, 114, 182, 0.1) 100%)',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: '#6366f1',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Contributions */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          marginBottom: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '1.5rem',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <i className="fab fa-github" style={{ color: 'white', fontSize: '1.5rem' }}></i>
            </div>
            <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.5rem' }}>GitHub Contributions</h3>
          </div>
          <a 
            href="https://github.com/harivmasoor" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'block' }}
          >
            <Image 
              src="https://ghchart.rshah.org/6366f1/harivmasoor" 
              alt="Github Garden for harivmasoor"
              width={1000}
              height={150}
              unoptimized
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </a>
        </div>

        {/* Stats Grid */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            Facts & Statistics
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${0.6 + index * 0.1}s`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}25`;
                  e.currentTarget.style.borderColor = stat.color;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: `${stat.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span className={stat.icon} style={{ 
                    fontSize: '1.75rem',
                    color: stat.color,
                  }}></span>
                </div>
                <div>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: '2rem', 
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1,
                  }}>
                    {stat.number}
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.9rem', 
                    color: '#64748b',
                    marginTop: '4px',
                  }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
