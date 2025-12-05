'use client';

import React, { useEffect, useRef, useState } from 'react';

const Experience: React.FC = () => {
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

  const experience = [
    {
      year: '2023 - Present',
      title: 'Full Stack Developer',
      company: 'Independent',
      description: 'Building dreams to life working across FullStack web development, mobile development, and cloud computing.',
      icon: '💻',
      color: '#6366f1',
    },
    {
      year: '2022',
      title: 'Blockchain Architect',
      company: 'Keynote Speaker',
      description: 'Delivered the Keynote Speech at the World Blockchain Summit 2022 at Atlantis, Dubai. Covered the future of NFTs with the largest publication in the Blockchain Industry.',
      icon: '⛓️',
      color: '#f472b6',
      links: [
        { label: 'Keynote Speech', url: 'https://www.linkedin.com/in/harimasoor/overlay/1635506473916/single-media-viewer/?profileId=ACoAABXavEYBo6_4ZGoEzyTQNKUMEV3wBaugC7g' },
        { label: 'Sponsored Webinar', url: 'https://www.linkedin.com/in/harimasoor/overlay/1635513493928/single-media-viewer/?profileId=ACoAABXavEYBo6_4ZGoEzyTQNKUMEV3wBaugC7g' },
      ],
    },
    {
      year: '2021',
      title: 'Cloud Security Engineer',
      company: 'Palo Alto Networks',
      description: 'Educated national stakeholders on cloud identity management, cloud workload firewalling, and IaC Security.',
      icon: '🔒',
      color: '#06b6d4',
    },
    {
      year: '2016 - 2020',
      title: 'Solutions Engineer',
      company: 'VMware',
      description: 'Delivered most viewed Carbon Black Threat Intelligence demo on Youtube. Worked with technical and non-technical stakeholders on defining requirements.',
      icon: '☁️',
      color: '#10b981',
      links: [
        { label: 'Carbon Black Demo', url: 'https://www.youtube.com/watch?v=5G2CCH6z-sY&t=136s' },
      ],
    },
  ];

  const education = [
    {
      year: '2025',
      title: 'MSCS',
      institution: 'Georgia Tech',
      description: 'Master of Science in Computer Science',
      icon: '🎓',
      color: '#f59e0b',
    },
    {
      year: '2023',
      title: 'Software Engineering',
      institution: 'App Academy',
      description: 'Graduated from App Academy\'s accelerated flagship Software Engineering track with 3% acceptance rate. Completed 1000+ hours of immersive full-stack development.',
      icon: '🚀',
      color: '#ec4899',
    },
    {
      year: '2010 - 2014',
      title: 'BS Industrial Engineering',
      institution: 'Georgia Tech',
      description: 'ISyE - Industrial and Systems Engineering',
      icon: '🐝',
      color: '#eab308',
    },
  ];

  const TimelineItem = ({ item, index, isLeft = true }: { item: typeof experience[0], index: number, isLeft?: boolean }) => (
    <div 
      style={{
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : `translateX(${isLeft ? '-30px' : '30px'})`,
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.1}s`,
      }}
    >
      {/* Timeline Dot */}
      <div style={{
        flexShrink: 0,
        width: '60px',
        height: '60px',
        borderRadius: '16px',
        background: `${item.color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        border: `2px solid ${item.color}30`,
        position: 'relative',
      }}>
        {item.icon}
        {/* Connecting Line */}
        {index < (isLeft ? experience : education).length - 1 && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: 'calc(2rem + 60px)',
            background: `linear-gradient(180deg, ${item.color}40 0%, transparent 100%)`,
          }} />
        )}
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        background: 'white',
        borderRadius: '20px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = `0 20px 40px ${item.color}20`;
        e.currentTarget.style.borderColor = item.color;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
      }}
      >
        <span style={{
          display: 'inline-block',
          padding: '4px 12px',
          background: `${item.color}15`,
          color: item.color,
          borderRadius: '50px',
          fontSize: '0.8rem',
          fontWeight: 600,
          marginBottom: '0.75rem',
        }}>
          {item.year}
        </span>
        <h4 style={{
          margin: '0 0 0.25rem 0',
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#0f172a',
        }}>
          {item.title}
        </h4>
        <p style={{
          margin: '0 0 0.75rem 0',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: item.color,
        }}>
          {'company' in item ? item.company : ('institution' in item ? item.institution : '')}
        </p>
        <p style={{
          margin: 0,
          fontSize: '0.95rem',
          color: '#64748b',
          lineHeight: 1.6,
        }}>
          {item.description}
        </p>
        
        {/* Links */}
        {'links' in item && item.links && (
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            marginTop: '1rem',
            flexWrap: 'wrap',
          }}>
            {item.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  background: `${item.color}10`,
                  color: item.color,
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = item.color;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = `${item.color}10`;
                  e.currentTarget.style.color = item.color;
                }}
              >
                <i className="icon-link" style={{ fontSize: '0.75rem' }}></i>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      style={{ 
        paddingTop: '100px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
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
            MY JOURNEY
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#0f172a',
            margin: 0,
          }}>
            Experience & Education
          </h2>
        </div>

        <div className="row">
          {/* Experience Column */}
          <div className="col-md-6" style={{ marginBottom: '2rem' }}>
            <h3 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '2rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
            }}>
              <span style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1rem',
              }}>
                💼
              </span>
              Work Experience
            </h3>
            {experience.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} isLeft={true} />
            ))}
          </div>

          {/* Education Column */}
          <div className="col-md-6">
            <h3 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '2rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
            }}>
              <span style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1rem',
              }}>
                🎓
              </span>
              Education
            </h3>
            {education.map((item, index) => (
              <TimelineItem key={index} item={item as typeof experience[0]} index={index} isLeft={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
