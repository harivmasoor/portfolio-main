'use client';

import React, { useState, useEffect } from 'react';

// Add global jQuery type declaration
declare global {
  interface Window {
    jQuery: any;
  }
}

const Projects: React.FC = () => {
  // State to track the current filter
  const [activeFilter, setActiveFilter] = useState('*');
  
  // Handle filter click
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  
  // Function to check if a project should be visible based on current filter
  const isVisible = (projectClasses: string) => {
    if (activeFilter === '*') return true;
    return projectClasses.includes(activeFilter);
  };

  // Handle mobile filter change
  const handleMobileFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveFilter(e.target.value);
  };

  // We would need to initialize the portfolio filters with JavaScript after the component mounts
  useEffect(() => {
    // Initialize Magnific Popup for project detail modals
    if (typeof window !== 'undefined') {
      // Wait for jQuery and Magnific Popup to load
      const checkJQuery = setInterval(() => {
        if (window.jQuery) {
          clearInterval(checkJQuery);
          const $ = window.jQuery;
          
          // Initialize Magnific Popup for project links
          $('.work-content').magnificPopup({
            type: 'inline',
            preloader: true,
            mainClass: 'mfp-fade',
            closeBtnInside: true,
            fixedContentPos: true,
            gallery: {
              enabled: true
            }
          });
          
          console.log('Magnific Popup initialized');
        }
      }, 500);
      
      return () => clearInterval(checkJQuery);
    }
  }, []);

  // Styles for consistent project box sizing
  const portfolioItemStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
  };

  const thumbStyle = {
    position: 'relative' as 'relative',
    overflow: 'hidden' as 'hidden',
    height: '250px', // Fixed height for all thumbnails
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as 'cover',
    objectPosition: 'center top' as 'center top',
  };

  const gridItemStyle = {
    marginBottom: '30px',
    height: '400px', // Fixed height for all project boxes
  };

  return (
    <section id="works" style={{ paddingTop: '30px', paddingBottom: '50px' }}>
      <div className="container">
        {/* section title */}
        <h2 className="section-title wow fadeInUp mb-5">Products</h2>

        <div className="spacer" data-height="80"></div>

        {/* portfolio filter (desktop) */}
        <ul className="portfolio-filter list-inline wow fadeInUp">
          <li 
            className={`list-inline-item ${activeFilter === '*' ? 'current' : ''}`} 
            onClick={() => handleFilterClick('*')}
          >
            All Products
          </li>
          <li 
            className={`list-inline-item ${activeFilter === 'mern' ? 'current' : ''}`} 
            onClick={() => handleFilterClick('mern')}
          >
            MERN Stack
          </li>
          <li 
            className={`list-inline-item ${activeFilter === 'fullstack' ? 'current' : ''}`} 
            onClick={() => handleFilterClick('fullstack')}
          >
            Full-Stack
          </li>
          <li 
            className={`list-inline-item ${activeFilter === 'rails' ? 'current' : ''}`} 
            onClick={() => handleFilterClick('rails')}
          >
            Ruby on Rails
          </li>
          <li 
            className={`list-inline-item ${activeFilter === 'js' ? 'current' : ''}`} 
            onClick={() => handleFilterClick('js')}
          >
            Vanilla JavaScript
          </li>
          <li 
            className={`list-inline-item ${activeFilter === 'react' ? 'current' : ''}`} 
            onClick={() => handleFilterClick('react')}
          >
            React.js
          </li>
          <li 
            className={`list-inline-item ${activeFilter === 'ios' ? 'current' : ''}`} 
            onClick={() => handleFilterClick('ios')}
          >
            iOS
          </li>
        </ul>
        
        {/* portfolio filter (mobile) */}
        <div className="select-wrapper d-block d-lg-none">
          <select 
            onChange={handleMobileFilterChange}
            className="portfolio-filter-mobile"
          >
            <option value="*">All Products</option>
            <option value="mern">MERN Stack</option>
            <option value="fullstack">Full-Stack</option>
            <option value="rails">Ruby on Rails</option>
            <option value="js">Vanilla JavaScript</option>
            <option value="react">React.js</option>
            <option value="ios">iOS</option>
          </select>
        </div>
        
        <div className="spacer" data-height="40"></div>
        
        {/* portfolio wrapper */}
        <div className="row portfolio-wrapper">
          {/* BudgetBuddy Project */}
          <div 
            className="col-md-4 col-sm-6 grid-item mern fullstack react"
            style={{ 
              display: isVisible('mern fullstack react') ? 'block' : 'none',
              ...gridItemStyle
            }}
          >
            <a href="#codemark-dialog" className="work-content" style={{ height: '100%' }}>
              <div className="portfolio-item rounded shadow-dark" style={portfolioItemStyle}>
                <div className="details">
                  <span className="term">MERN Stack</span>
                  <h4 className="title">BudgetBuddy</h4>
                  <span className="view-details-button">
                    View project details
                    <i className="small icon-arrow-right"></i>
                  </span>
                </div>
                <div className="thumb" style={thumbStyle}>
                  <img 
                    src="/images/projects/BudgetBuddy1.gif" 
                    alt="MERN Stack CodeMark Project" 
                    style={imgStyle}
                  />
                  <div className="mask"></div>
                </div>
              </div>
            </a>
            <div id="codemark-dialog" className="white-popup zoom-anim-dialog mfp-hide">
              <h1>BudgetBuddy</h1>
              <h5>React.js, Redux, MongoDB, Express, Mongoose, Node.js, Webpack, HTML5, CSS3</h5>
              <div style={{ padding: '50.05% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://player.vimeo.com/video/862216049?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  title="BudgetBuddy"
                />
              </div>
              <h3>Smart notes for code</h3>
              <p>Led 4 Fullstack developers to create a Finance Application that allows the user to view their income streams and daily expenses. BudgetBuddy cleverly allows the user to set budgets for popular expense categories and create savings goals for big events and life decisions</p>
              <img src="/images/projects/BudgetBuddyImage.png" alt="CodeMark Desktop Mockup" />
              <div className="spacer" data-height="64"></div>
              <img className="inline-mockup-img" src="/images/projects/BudgetBuddyMobile.jpeg" alt="CodeMark Mobile Mockup" />
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

          {/* LocalVoices Project */}
          <div 
            className="col-md-4 col-sm-6 grid-item rails fullstack react"
            style={{ 
              display: isVisible('rails fullstack react') ? 'block' : 'none',
              ...gridItemStyle
            }}
          >
            <a href="#fsp-5000px-dialog" className="work-content" style={{ height: '100%' }}>
              <div className="portfolio-item rounded shadow-dark" style={portfolioItemStyle}>
                <div className="details">
                  <span className="term">Full-Stack</span>
                  <h4 className="title">LocalVoices</h4>
                  <span className="view-details-button">
                    View project details
                    <i className="small icon-arrow-right"></i>
                  </span>
                </div>
                <div className="thumb" style={thumbStyle}>
                  <img 
                    src="/images/projects/localVoices.gif" 
                    alt="Full-Stack 5000px Project" 
                    style={imgStyle}
                  />
                  <div className="mask"></div>
                </div>
              </div>
            </a>
            <div id="fsp-5000px-dialog" className="white-popup zoom-anim-dialog mfp-hide">
              <h1>LocalVoices</h1>
              <h5>
                Ruby on Rails, PostgreSQL, React.js, Redux, JavaScript ES6, Webpack, HTML5, CSS3
              </h5>
              <p>
                A Nextdoor clone focused on connecting neighbors to discuss community issues
              </p>
              <img src="/images/projects/localVoices.gif" alt="LocalVoices Mockup" />
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

          {/* Podify Project */}
          <div 
            className="col-md-4 col-sm-6 grid-item mern react fullstack"
            style={{ 
              display: isVisible('mern react fullstack') ? 'block' : 'none',
              ...gridItemStyle
            }}
          >
            <a href="#podify-dialog" className="work-content" style={{ height: '100%' }}>
              <div className="portfolio-item rounded shadow-dark" style={portfolioItemStyle}>
                <div className="details">
                  <span className="term">MERN Stack</span>
                  <h4 className="title">Podify</h4>
                  <span className="view-details-button">
                    View project details
                    <i className="small icon-arrow-right"></i>
                  </span>
                </div>
                <div className="thumb" style={thumbStyle}>
                  <img 
                    src="/images/projects/podify.gif" 
                    alt="Podify Project" 
                    style={imgStyle}
                  />
                  <div className="mask"></div>
                </div>
              </div>
            </a>
            <div id="podify-dialog" className="white-popup zoom-anim-dialog mfp-hide">
              <h1>Podify</h1>
              <h5>React.js, MongoDB, Express, Node.js, AWS S3, HTML5, CSS3</h5>
              <img src="/images/projects/Podify.png" alt="Podify Screenshot" />
              <h3>Podcast Streaming Platform</h3>
              <p>
                A podcast streaming platform that allows users to discover, listen to, and subscribe to their favorite podcasts.
                The application provides a seamless user experience with features like podcast discovery, streaming, and personalized recommendations.
              </p>
              <h3>Features</h3>
              <ul className="project-bullets">
                <li>
                  Built a responsive audio player with playback controls using React's audio API
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

          {/* HabitCrusher Project */}
          <div 
            className="col-md-4 col-sm-6 grid-item react js"
            style={{ 
              display: isVisible('react js') ? 'block' : 'none',
              ...gridItemStyle
            }}
          >
            <a href="#habitcrusher-dialog" className="work-content" style={{ height: '100%' }}>
              <div className="portfolio-item rounded shadow-dark" style={portfolioItemStyle}>
                <div className="details">
                  <span className="term">React.js</span>
                  <h4 className="title">HabitCrusher</h4>
                  <span className="view-details-button">
                    View project details
                    <i className="small icon-arrow-right"></i>
                  </span>
                </div>
                <div className="thumb" style={thumbStyle}>
                  <img 
                    src="/images/projects/HabitCrusher.gif" 
                    alt="HabitCrusher Project" 
                    style={imgStyle}
                  />
                  <div className="mask"></div>
                </div>
              </div>
            </a>
            <div id="habitcrusher-dialog" className="white-popup zoom-anim-dialog mfp-hide">
              <h1>HabitCrusher</h1>
              <h5>React.js, Redux, LocalStorage, HTML5, CSS3, Chart.js</h5>
              <img src="/images/projects/HabitCrusher.jpeg" alt="HabitCrusher Screenshot" />
              <h3>Habit Tracking Application</h3>
              <p>
                A powerful habit tracking application designed to help users build positive habits and break negative ones.
                The application provides visual feedback and statistics to keep users motivated on their journey.
              </p>
              <h3>Features</h3>
              <ul className="project-bullets">
                <li>
                  Developed an intuitive interface for tracking daily habits with streak counters
                </li>
                <li>
                  Created interactive progress charts using Chart.js to visualize habit development
                </li>
                <li>
                  Implemented a notification system to remind users of their daily habits
                </li>
                <li>
                  Built a local storage solution for offline functionality and data persistence
                </li>
                <li>
                  Designed a responsive layout that works seamlessly across desktop and mobile devices
                </li>
              </ul>
              <a href="https://github.com/harivmasoor/HabitCrusher" className="btn btn-default" target="_blank">GitHub Repo</a>
            </div>
          </div>

          {/* MinorityReport Project */}
          <div 
            className="col-md-4 col-sm-6 grid-item js fullstack"
            style={{ 
              display: isVisible('js fullstack') ? 'block' : 'none',
              ...gridItemStyle
            }}
          >
            <a href="#minorityreport-dialog" className="work-content" style={{ height: '100%' }}>
              <div className="portfolio-item rounded shadow-dark" style={portfolioItemStyle}>
                <div className="details">
                  <span className="term">Data Visualization</span>
                  <h4 className="title">MinorityReport</h4>
                  <span className="view-details-button">
                    View project details
                    <i className="small icon-arrow-right"></i>
                  </span>
                </div>
                <div className="thumb" style={thumbStyle}>
                  <img 
                    src="/images/projects/minorityReport.gif" 
                    alt="MinorityReport Project" 
                    style={imgStyle}
                  />
                  <div className="mask"></div>
                </div>
              </div>
            </a>
            <div id="minorityreport-dialog" className="white-popup zoom-anim-dialog mfp-hide">
              <h1>MinorityReport</h1>
              <h5>JavaScript, D3.js, HTML5, CSS3, Express, Node.js</h5>
              <img src="/images/projects/MinorityReport.png" alt="MinorityReport Screenshot" />
              <h3>Data Visualization Dashboard</h3>
              <p>
                An interactive data visualization dashboard that presents demographic and social data in an accessible and engaging format.
                The project aims to highlight important social patterns and enable data-driven decision making.
              </p>
              <h3>Features</h3>
              <ul className="project-bullets">
                <li>
                  Created interactive and responsive data visualizations using D3.js
                </li>
                <li>
                  Implemented advanced filtering and comparison tools for data analysis
                </li>
                <li>
                  Built an API to fetch and process complex statistical datasets
                </li>
                <li>
                  Designed intuitive controls for exploring multi-dimensional data
                </li>
                <li>
                  Developed exportable reports for sharing insights and findings
                </li>
              </ul>
              <a href="https://github.com/harivmasoor/MinorityReport" className="btn btn-default" target="_blank">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 