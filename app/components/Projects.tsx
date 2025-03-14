'use client';

import React, { useState } from 'react';
import { getAssetPath } from '../utils/paths';

const Projects: React.FC = () => {
  // State to track which modal is open (if any)
  const [openModal, setOpenModal] = useState<string | null>(null);
  
  // Open a modal
  const openProjectModal = (modalId: string) => {
    setOpenModal(modalId);
  };
  
  // Close any open modal
  const closeModal = () => {
    setOpenModal(null);
  };

  // Basic styles for the project boxes
  const gridItemStyle = {
    marginBottom: '30px',
    height: '400px',
    display: 'block',
    padding: '15px',
    backgroundColor: 'transparent'
  };

  const portfolioItemStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    padding: '15px',
    position: 'relative' as const
  };

  const thumbStyle = {
    position: 'relative' as const,
    overflow: 'hidden' as const,
    height: '220px',
    backgroundColor: 'transparent',
    marginBottom: '15px',
    borderRadius: '8px'
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    objectPosition: 'center top' as const,
  };

  const detailsStyle = {
    padding: '15px',
    textAlign: 'center' as const,
    backgroundColor: 'transparent',
    marginTop: 'auto',
    minHeight: '120px'
  };

  const titleStyle = {
    fontSize: '22px',
    fontWeight: 'bold' as const,
    color: '#0066cc',
    marginBottom: '10px'
  };

  const termStyle = {
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: '#0066cc',
    color: 'white',
    borderRadius: '4px',
    marginBottom: '10px',
    fontSize: '16px'
  };

  const viewButtonStyle = {
    display: 'block',
    marginTop: '10px',
    color: '#0066cc',
    fontWeight: 'bold' as const
  };
  
  // Modal styles
  const modalOverlayStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  };
  
  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto' as const,
    position: 'relative' as const
  };
  
  const closeButtonStyle = {
    position: 'absolute' as const,
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#333'
  };

  return (
    <section id="works" style={{ paddingTop: '30px', paddingBottom: '50px' }}>
      <div className="container">
        {/* section title */}
        <h2 className="section-title mb-5" style={{fontSize: '32px', color: '#0066cc', textAlign: 'center', marginBottom: '30px'}}>Products</h2>
        
        <div className="spacer" data-height="40"></div>
        
        {/* portfolio wrapper */}
        <div className="row">
          {/* BudgetBuddy Project */}
          <div 
            className="col-md-4 col-sm-6"
            style={gridItemStyle}
          >
            <div
              onClick={() => openProjectModal('budgetbuddy')}
              style={{ height: '100%', cursor: 'pointer' }}
            >
              <div className="portfolio-item rounded shadow-dark" style={portfolioItemStyle}>
                <div className="thumb" style={thumbStyle}>
                  <div style={{
                    ...imgStyle,
                    backgroundImage: `url('${getAssetPath('/images/projects/BudgetBuddy1.gif')}')`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                  }}>
                    {/* Text fallback in case image doesn't load - only show on error */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'none', /* Only display this on image load error */
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '10px',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      textAlign: 'center'
                    }}>
                      BudgetBuddy - MERN Stack Project
                    </div>
                  </div>
                </div>
                <div className="details" style={detailsStyle}>
                  <span className="term" style={termStyle}>MERN Stack</span>
                  <h4 className="title" style={titleStyle}>BudgetBuddy</h4>
                  <span className="view-details-button" style={viewButtonStyle}>
                    View project details
                    <i className="small icon-arrow-right" style={{marginLeft: '5px'}}></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* LocalVoices Project */}
          <div 
            className="col-md-4 col-sm-6"
            style={gridItemStyle}
          >
            <div
              onClick={() => openProjectModal('localvoices')}
              style={{ height: '100%', cursor: 'pointer' }}
            >
              <div className="portfolio-item rounded shadow-dark" style={portfolioItemStyle}>
                <div className="thumb" style={thumbStyle}>
                  <div style={{
                    ...imgStyle,
                    backgroundImage: `url('${getAssetPath('/images/projects/localVoices.gif')}')`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                  }}>
                    {/* Text fallback in case image doesn't load - only show on error */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'none', /* Only display this on image load error */
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '10px',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      textAlign: 'center'
                    }}>
                      LocalVoices - Ruby on Rails Project
                    </div>
                  </div>
                </div>
                <div className="details" style={detailsStyle}>
                  <span className="term" style={termStyle}>Full-Stack</span>
                  <h4 className="title" style={titleStyle}>LocalVoices</h4>
                  <span className="view-details-button" style={viewButtonStyle}>
                    View project details
                    <i className="small icon-arrow-right" style={{marginLeft: '5px'}}></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Podify Project */}
          <div 
            className="col-md-4 col-sm-6"
            style={gridItemStyle}
          >
            <div
              onClick={() => openProjectModal('podify')}
              style={{ height: '100%', cursor: 'pointer' }}
            >
              <div className="portfolio-item rounded shadow-dark" style={portfolioItemStyle}>
                <div className="thumb" style={thumbStyle}>
                  <div style={{
                    ...imgStyle,
                    backgroundImage: `url('${getAssetPath('/images/projects/podify.gif')}')`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                  }}>
                    {/* Text fallback in case image doesn't load - only show on error */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'none', /* Only display this on image load error */
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '10px',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      textAlign: 'center'
                    }}>
                      Podify - Podcast Streaming Platform
                    </div>
                  </div>
                </div>
                <div className="details" style={detailsStyle}>
                  <span className="term" style={termStyle}>Fullstack</span>
                  <h4 className="title" style={titleStyle}>Podify</h4>
                  <span className="view-details-button" style={viewButtonStyle}>
                    View project details
                    <i className="small icon-arrow-right" style={{marginLeft: '5px'}}></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* HabitCrusher Project */}
          <div 
            className="col-md-4 col-sm-6"
            style={gridItemStyle}
          >
            <div
              onClick={() => openProjectModal('habitcrusher')}
              style={{ height: '100%', cursor: 'pointer' }}
            >
              <div className="portfolio-item rounded shadow-dark" style={portfolioItemStyle}>
                <div className="thumb" style={thumbStyle}>
                  <div style={{
                    ...imgStyle,
                    backgroundImage: `url('${getAssetPath('/images/projects/HabitCrusher.gif')}')`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                  }}>
                    {/* Text fallback in case image doesn't load - only show on error */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'none', /* Only display this on image load error */
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '10px',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      textAlign: 'center'
                    }}>
                      HabitCrusher - Habit Tracking App
                    </div>
                  </div>
                </div>
                <div className="details" style={detailsStyle}>
                  <span className="term" style={termStyle}>iOS</span>
                  <h4 className="title" style={titleStyle}>HabitCrusher</h4>
                  <span className="view-details-button" style={viewButtonStyle}>
                    View project details
                    <i className="small icon-arrow-right" style={{marginLeft: '5px'}}></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MinorityReport Project */}
          <div 
            className="col-md-4 col-sm-6"
            style={gridItemStyle}
          >
            <div
              onClick={() => openProjectModal('minorityreport')}
              style={{ height: '100%', cursor: 'pointer' }}
            >
              <div className="portfolio-item rounded shadow-dark" style={portfolioItemStyle}>
                <div className="thumb" style={thumbStyle}>
                  <div style={{
                    ...imgStyle,
                    backgroundImage: `url('${getAssetPath('/images/projects/minorityReport.gif')}')`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                  }}>
                    {/* Text fallback in case image doesn't load - only show on error */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'none', /* Only display this on image load error */
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '10px',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      textAlign: 'center'
                    }}>
                      MinorityReport - Data Visualization
                    </div>
                  </div>
                </div>
                <div className="details" style={detailsStyle}>
                  <span className="term" style={termStyle}>Data & AI Analytics</span>
                  <h4 className="title" style={titleStyle}>MinorityReport</h4>
                  <span className="view-details-button" style={viewButtonStyle}>
                    View project details
                    <i className="small icon-arrow-right" style={{marginLeft: '5px'}}></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for BudgetBuddy */}
      {openModal === 'budgetbuddy' && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <button style={closeButtonStyle} onClick={closeModal}>&times;</button>
            <h1>BudgetBuddy</h1>
            <h5>React.js, Redux, MongoDB, Express, Mongoose, Node.js, Webpack, HTML5, CSS3</h5>
            <div style={{ padding: '30px 0', position: 'relative' }}>
              <img 
                src={getAssetPath('/images/projects/BudgetBuddy1.gif')} 
                alt="BudgetBuddy"
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
            <h3>Smart Finance Application</h3>
            <p>Led 4 Fullstack developers to create a Finance Application that allows the user to view their income streams and daily expenses. BudgetBuddy cleverly allows the user to set budgets for popular expense categories and create savings goals for big events and life decisions</p>
            <div style={{
              width: '100%',
              height: '300px',
              backgroundImage: `url('${getAssetPath('/images/projects/BudgetBuddyImage.png')}')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              margin: '20px 0'
            }}></div>
            <ul className="project-bullets">
              <li>
                Led a team of 3 engineers utilizing the feature branch workflow minimizing potential merge conflicts
              </li>
              <li>
                Held daily standup meetings to review progress on assigned tasks, update the project wiki with our progress, and adjust our MVP features based on new findings and experience 
              </li>
              <li>
                Acted as a product manager and planned the future product roadmap 
              </li>
              <li>
                Utilized the React Context API to manage the state of the application and reduce the number of props passed down to child components
              </li>
            </ul>
            <a href="https://github.com/harivmasoor/BudgetBuddy" className="btn btn-default" target="_blank">GitHub Repo</a>
          </div>
        </div>
      )}

      {/* Modal for LocalVoices */}
      {openModal === 'localvoices' && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <button style={closeButtonStyle} onClick={closeModal}>&times;</button>
            <h1>LocalVoices</h1>
            <h5>Ruby on Rails, PostgreSQL, React.js, Redux, JavaScript ES6, Webpack, HTML5, CSS3</h5>
            <div style={{ padding: '30px 0', position: 'relative' }}>
              <img 
                src={getAssetPath('/images/projects/localVoices.gif')} 
                alt="LocalVoices"
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
            <p>A Nextdoor clone focused on connecting neighbors to discuss community issues</p>
            <h3>Features</h3>
            <ul className="project-bullets">
              <li>
                Architected a user-authentication flow offering a secure front-end to back-end user-authentication experience
              </li>
              <li>
                Built a backend RESTful API that serves data in a normalized, efficient manner, which significantly optimizes frontend performance
              </li>
              <li>
                Integrated the React framework with a Rails backend, enabling a smooth component lifecycle while maintaining readability
              </li>
              <li>
                Utilized AWS S3 for cloud storage, Rails Active Storage for easy-to-manage dynamic assets, and efficient file-upload methods
              </li>
              <li>
                Skillfully configured Active Record database queries using eager loading to avoid repetitive database queries
              </li>
            </ul>
            <a href="https://github.com/harivmasoor/localVoices" className="btn btn-default" target="_blank">GitHub Repo</a>
          </div>
        </div>
      )}

      {/* Modal for Podify */}
      {openModal === 'podify' && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <button style={closeButtonStyle} onClick={closeModal}>&times;</button>
            <h1>Podify</h1>
            <h5>React.js, MongoDB, Express, Node.js, AWS S3, HTML5, CSS3</h5>
            <div style={{ padding: '30px 0', position: 'relative' }}>
              <img 
                src={getAssetPath('/images/projects/podify.gif')} 
                alt="Podify"
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
            <h3>Fullstack Podcast Streaming Platform</h3>
            <p>
              A podcast streaming platform that allows users to discover, listen to, and subscribe to their favorite podcasts.
              The application provides a seamless user experience with features like podcast discovery, streaming, and personalized recommendations.
            </p>
            <h3>Features</h3>
            <ul className="project-bullets">
              <li>
                Built a responsive audio player with playback controls using React&apos;s audio API
              </li>
              <li>
                Implemented podcast discovery with advanced search and filtering capabilities
              </li>
              <li>
                Created a secure authentication system with JWT-based user sessions
              </li>
              <li>
                Developed a cloud-based audio hosting and streaming service using AWS S3
              </li>
              <li>
                Constructed a recommendation engine based on user listening history and preferences
              </li>
            </ul>
            <a href="https://github.com/harivmasoor/Podify" className="btn btn-default" target="_blank">GitHub Repo</a>
          </div>
        </div>
      )}

      {/* Modal for HabitCrusher */}
      {openModal === 'habitcrusher' && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <button style={closeButtonStyle} onClick={closeModal}>&times;</button>
            <h1>HabitCrusher</h1>
            <h5>Swift, UIKit, Core Data, iOS SDK, Firebase</h5>
            <div style={{ padding: '30px 0', position: 'relative' }}>
              <img 
                src={getAssetPath('/images/projects/HabitCrusher.gif')} 
                alt="HabitCrusher"
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
            <h3>iOS Habit Tracking Application</h3>
            <p>
              A powerful iOS habit tracking application designed to help users build positive habits and break negative ones.
              The application provides visual feedback and statistics to keep users motivated on their journey.
            </p>
            <h3>Features</h3>
            <ul className="project-bullets">
              <li>
                Developed an intuitive iOS interface for tracking daily habits with streak counters
              </li>
              <li>
                Created interactive progress charts to visualize habit development
              </li>
              <li>
                Implemented iOS notifications to remind users of their daily habits
              </li>
              <li>
                Built with Core Data for offline functionality and data persistence
              </li>
              <li>
                Designed a responsive layout that works seamlessly across iPhone and iPad devices
              </li>
            </ul>
            <a href="https://github.com/harivmasoor/HabitCrusher" className="btn btn-default" target="_blank">GitHub Repo</a>
          </div>
        </div>
      )}

      {/* Modal for MinorityReport */}
      {openModal === 'minorityreport' && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <button style={closeButtonStyle} onClick={closeModal}>&times;</button>
            <h1>MinorityReport</h1>
            <h5>Python, NLP, Machine Learning, D3.js, React, Node.js</h5>
            <div style={{ padding: '30px 0', position: 'relative' }}>
              <img 
                src={getAssetPath('/images/projects/minorityReport.gif')} 
                alt="MinorityReport"
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
            <h3>Data and BI Analytics through NLP and AI</h3>
            <p>
              An advanced analytics platform that leverages Natural Language Processing and AI to transform raw demographic 
              and social data into actionable business intelligence. The system analyzes patterns, predicts trends, and 
              presents findings through intuitive visualizations.
            </p>
            <h3>Features</h3>
            <ul className="project-bullets">
              <li>
                Developed NLP algorithms to extract insights from unstructured text data
              </li>
              <li>
                Implemented AI-driven predictive analytics for trend forecasting
              </li>
              <li>
                Built interactive and responsive data visualizations using D3.js
              </li>
              <li>
                Created a customizable dashboard for exploring multi-dimensional data
              </li>
              <li>
                Designed an API system that integrates with various data sources for comprehensive analysis
              </li>
            </ul>
            <a href="https://github.com/harivmasoor/MinorityReport" className="btn btn-default" target="_blank">GitHub Repo</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 