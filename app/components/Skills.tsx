'use client';

import React, { useEffect, useRef, useState } from 'react';

const Skills: React.FC = () => {
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

  const skills = [
    { name: 'React + Redux', icon: 'fab fa-react', color: '#61DAFB', bgGradient: 'linear-gradient(135deg, #61DAFB 0%, #00d4ff 100%)' },
    { name: 'Ruby on Rails', icon: 'fas fa-gem', color: '#CC0000', bgGradient: 'linear-gradient(135deg, #CC0000 0%, #ff4444 100%)' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E', bgGradient: 'linear-gradient(135deg, #F7DF1E 0%, #ffed4a 100%)' },
    { name: 'TypeScript', icon: 'fas fa-code', color: '#3178C6', bgGradient: 'linear-gradient(135deg, #3178C6 0%, #4d9fff 100%)' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', bgGradient: 'linear-gradient(135deg, #339933 0%, #5cb85c 100%)' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB', bgGradient: 'linear-gradient(135deg, #3776AB 0%, #ffd43b 100%)' },
    { name: 'MongoDB', icon: 'fas fa-database', color: '#4DB33D', bgGradient: 'linear-gradient(135deg, #4DB33D 0%, #6ed56e 100%)' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791', bgGradient: 'linear-gradient(135deg, #336791 0%, #4a8fc7 100%)' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900', bgGradient: 'linear-gradient(135deg, #FF9900 0%, #ffb84d 100%)' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED', bgGradient: 'linear-gradient(135deg, #2496ED 0%, #4db8ff 100%)' },
    { name: 'GraphQL', icon: 'fas fa-project-diagram', color: '#E535AB', bgGradient: 'linear-gradient(135deg, #E535AB 0%, #ff6fd8 100%)' },
    { name: 'Next.js', icon: 'fas fa-forward', color: '#000000', bgGradient: 'linear-gradient(135deg, #000000 0%, #333333 100%)' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      style={{ 
        paddingTop: '100px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 60%)',
        borderRadius: '50%',
        pointerEvents: 'none',
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
        backgroundSize: '60px 60px',
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
            background: 'rgba(99, 102, 241, 0.2)',
            borderRadius: '50px',
            color: '#818cf8',
            fontWeight: 600,
            fontSize: '0.9rem',
            marginBottom: '1rem',
            letterSpacing: '0.5px',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}>
            WHAT I WORK WITH
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0,
          }}>
            Skills & Technologies
          </h2>
          <p style={{
            color: '#94a3b8',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '1rem auto 0',
          }}>
            A toolkit refined through years of building products and solving complex problems
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1.5rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '20px',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${0.1 + index * 0.05}s`,
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = skill.color;
                e.currentTarget.style.boxShadow = `0 20px 40px ${skill.color}30`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon Container */}
              <div style={{
                width: '70px',
                height: '70px',
                margin: '0 auto 1rem',
                borderRadius: '18px',
                background: `${skill.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}>
                <i 
                  className={skill.icon} 
                  style={{ 
                    fontSize: '2rem',
                    color: skill.color,
                    transition: 'all 0.3s ease',
                  }}
                ></i>
              </div>
              
              {/* Skill Name */}
              <p style={{
                margin: 0,
                fontWeight: 600,
                color: '#e2e8f0',
                fontSize: '0.95rem',
              }}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Skills Text */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s',
        }}>
          <p style={{
            color: '#64748b',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            Also experienced with: 
            {['Git', 'REST APIs', 'CI/CD', 'Agile', 'TDD', 'Heroku', 'Netlify', 'HTML5/CSS3'].map((item, i) => (
              <span key={i} style={{
                padding: '4px 12px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                fontSize: '0.85rem',
                color: '#94a3b8',
              }}>
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
