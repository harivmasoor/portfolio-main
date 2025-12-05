'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../utils/paths';

const Projects: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
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

  const openProjectModal = (modalId: string) => {
    setOpenModal(modalId);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setOpenModal(null);
    document.body.style.overflow = 'auto';
  };

  const projects = [
    {
      id: 'realtalk',
      title: 'RealTalk',
      category: 'AI & Voice',
      image: 'https://img.youtube.com/vi/LAM_2Pj_iQU/maxresdefault.jpg',
      color: '#8b5cf6',
      description: 'AI-Powered Podcast Platform',
      tech: 'Azure, FastAPI, Next.js, OpenAI, PostgreSQL',
      fullDescription: 'An innovative AI-powered podcasting platform where users can have real-time voice conversations with intelligent digital avatars. Built with cutting-edge AI technologies and modern cloud infrastructure for seamless, natural interactions.',
      bullets: [
        'Architected full-stack application using Azure services (Web Apps, Container Registry, Blob Storage, AI Foundry)',
        'Integrated OpenAI models with Responses API and Perplexity API for intelligent conversations',
        'Built modern RAG pipelines for context-aware responses and knowledge retrieval',
        'Implemented voice integration for natural, real-time conversations with AI avatars',
        'Set up Arize AI telemetry for monitoring and observability',
        'Developed OAuth authentication with Google and LinkedIn integration',
        'Created CI/CD pipelines with Docker containerization for seamless deployments',
      ],
      github: 'https://github.com/harivmasoor/RealTalk',
      youtube: 'https://www.youtube.com/watch?v=LAM_2Pj_iQU',
      fullTech: 'Azure (Web Apps, Container Registry, Blob Storage, AI Foundry), PostgreSQL, FastAPI, Docker, CI/CD, Python, OpenAI, Perplexity API, Voice Integration, RAG Pipelines, Arize AI, OAuth, Next.js, TypeScript, Tailwind CSS',
    },
    {
      id: 'budgetbuddy',
      title: 'BudgetBuddy',
      category: 'MERN Stack',
      image: '/images/projects/BudgetBuddy1.gif',
      color: '#6366f1',
      description: 'Smart Finance Application',
      tech: 'React.js, Redux, MongoDB, Express, Node.js',
      fullDescription: 'Led 4 Fullstack developers to create a Finance Application that allows the user to view their income streams and daily expenses. BudgetBuddy cleverly allows the user to set budgets for popular expense categories and create savings goals for big events and life decisions.',
      bullets: [
        'Led a team of 3 engineers utilizing the feature branch workflow minimizing potential merge conflicts',
        'Held daily standup meetings to review progress on assigned tasks and adjust MVP features',
        'Acted as a product manager and planned the future product roadmap',
        'Utilized the React Context API to manage state and reduce prop drilling',
      ],
      github: 'https://github.com/harivmasoor/BudgetBuddy',
      detailImage: '/images/projects/BudgetBuddyImage.png',
    },
    {
      id: 'localvoices',
      title: 'LocalVoices',
      category: 'Full-Stack',
      image: '/images/projects/localVoices.gif',
      color: '#f472b6',
      description: 'Community Platform',
      tech: 'Ruby on Rails, PostgreSQL, React.js, Redux',
      fullDescription: 'A Nextdoor clone focused on connecting neighbors to discuss community issues.',
      bullets: [
        'Architected a user-authentication flow offering secure front-end to back-end experience',
        'Built a backend RESTful API serving data in a normalized, efficient manner',
        'Integrated React framework with Rails backend for smooth component lifecycle',
        'Utilized AWS S3 for cloud storage and Rails Active Storage for dynamic assets',
      ],
      github: 'https://github.com/harivmasoor/localVoices',
    },
    {
      id: 'podify',
      title: 'Podify',
      category: 'Fullstack',
      image: '/images/projects/podify.gif',
      color: '#06b6d4',
      description: 'Podcast Streaming Platform',
      tech: 'React.js, MongoDB, Express, Node.js, AWS S3',
      fullDescription: 'A podcast streaming platform that allows users to discover, listen to, and subscribe to their favorite podcasts with a seamless user experience.',
      bullets: [
        'Built a responsive audio player with playback controls using React audio API',
        'Implemented podcast discovery with advanced search and filtering capabilities',
        'Created a secure authentication system with JWT-based user sessions',
        'Developed cloud-based audio hosting and streaming service using AWS S3',
      ],
      github: 'https://github.com/harivmasoor/Podify',
    },
    {
      id: 'habitcrusher',
      title: 'HabitCrusher',
      category: 'iOS',
      image: '/images/projects/HabitCrusher.gif',
      color: '#10b981',
      description: 'Habit Tracking App',
      tech: 'Swift, UIKit, Core Data, Firebase',
      fullDescription: 'A powerful iOS habit tracking application designed to help users build positive habits and break negative ones with visual feedback and statistics.',
      bullets: [
        'Developed intuitive iOS interface for tracking daily habits with streak counters',
        'Created interactive progress charts to visualize habit development',
        'Implemented iOS notifications to remind users of their daily habits',
        'Built with Core Data for offline functionality and data persistence',
      ],
      github: 'https://github.com/harivmasoor/HabitCrusher',
    },
    {
      id: 'minorityreport',
      title: 'MinorityReport',
      category: 'Data & AI',
      image: '/images/projects/minorityReport.gif',
      color: '#f59e0b',
      description: 'BI Analytics Platform',
      tech: 'Python, NLP, Machine Learning, D3.js, React',
      fullDescription: 'An advanced analytics platform that leverages Natural Language Processing and AI to transform raw data into actionable business intelligence.',
      bullets: [
        'Developed NLP algorithms to extract insights from unstructured text data',
        'Implemented AI-driven predictive analytics for trend forecasting',
        'Built interactive and responsive data visualizations using D3.js',
        'Created customizable dashboard for exploring multi-dimensional data',
      ],
      github: 'https://github.com/harivmasoor/MinorityReport',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="works" 
      style={{ 
        paddingTop: '100px',
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
      }}
    >
      {/* Background Decoration */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

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
            MY WORK
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#0f172a',
            margin: 0,
          }}>
            Featured Projects
          </h2>
          <p style={{
            color: '#64748b',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '1rem auto 0',
          }}>
            A selection of projects that showcase my skills and passion for building great products
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem',
        }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project.id)}
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${0.1 + index * 0.1}s`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 30px 60px ${project.color}25`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
              }}
            >
              {/* Image */}
              <div style={{
                height: '220px',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url('${project.image.startsWith('http') ? project.image : getAssetPath(project.image)}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                />
                {/* Category Badge */}
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  padding: '6px 14px',
                  background: project.color,
                  color: 'white',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}>
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#0f172a',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  margin: '0 0 1rem 0',
                  fontSize: '0.95rem',
                  color: '#64748b',
                }}>
                  {project.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span style={{
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                  }}>
                    {project.tech.split(',').slice(0, 3).join(' • ')}
                  </span>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: project.color,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                  }}>
                    View Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
          onClick={closeModal}
        >
          <div 
            style={{
              background: 'white',
              borderRadius: '24px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              animation: 'scaleIn 0.3s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(0, 0, 0, 0.1)',
                color: '#64748b',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#ef4444';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.color = '#64748b';
              }}
            >
              ×
            </button>

            {projects.filter(p => p.id === openModal).map(project => (
              <div key={project.id}>
                {/* Modal Image */}
                <div style={{
                  height: '300px',
                  backgroundImage: `url('${project.image.startsWith('http') ? project.image : getAssetPath(project.image)}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px 24px 0 0',
                  position: 'relative',
                }}>
                  {'youtube' in project && project.youtube && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '80px',
                      height: '80px',
                      background: 'rgba(255, 0, 0, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                    }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Modal Content */}
                <div style={{ padding: '2rem' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    background: `${project.color}15`,
                    color: project.color,
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                  }}>
                    {project.category}
                  </span>
                  
                  <h2 style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#0f172a',
                  }}>
                    {project.title}
                  </h2>
                  
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem',
                  }}>
                    {'fullTech' in project ? project.fullTech : project.tech}
                  </p>

                  <p style={{
                    color: '#475569',
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                  }}>
                    {project.fullDescription}
                  </p>

                  {/* Detail Image if exists */}
                  {'detailImage' in project && project.detailImage && (
                    <div style={{
                      marginBottom: '1.5rem',
                      borderRadius: '12px',
                      overflow: 'hidden',
                    }}>
                      <img 
                        src={getAssetPath(project.detailImage)}
                        alt={project.title}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  )}

                  <h4 style={{
                    margin: '0 0 1rem 0',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#0f172a',
                  }}>
                    Key Features
                  </h4>

                  <ul style={{
                    margin: '0 0 2rem 0',
                    padding: 0,
                    listStyle: 'none',
                  }}>
                    {project.bullets.map((bullet, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: '0.75rem',
                        color: '#475569',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}>
                        <span style={{
                          flexShrink: 0,
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: project.color,
                          marginTop: '8px',
                        }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {'youtube' in project && project.youtube && (
                      <a 
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '14px 28px',
                          background: '#FF0000',
                          color: 'white',
                          borderRadius: '50px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          boxShadow: '0 10px 30px rgba(255, 0, 0, 0.4)',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 0, 0, 0.5)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 0, 0, 0.4)';
                        }}
                      >
                        <i className="fab fa-youtube"></i>
                        Watch Demo
                      </a>
                    )}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '14px 28px',
                        background: project.color,
                        color: 'white',
                        borderRadius: '50px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        boxShadow: `0 10px 30px ${project.color}40`,
                        transition: 'all 0.3s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = `0 15px 40px ${project.color}50`;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = `0 10px 30px ${project.color}40`;
                      }}
                    >
                      <i className="fab fa-github"></i>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
