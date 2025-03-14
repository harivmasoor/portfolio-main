'use client';

import React from 'react';
import GHImage from './GHImage';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" style={{ paddingBottom: '50px', marginBottom: '50px' }}>
      <div className="container">
        {/* section title */}
        <h2 className="section-title wow fadeInUp mb-5">About Me</h2>

        <div className="spacer" data-height="60"></div>
        
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              {/* avatar image */}
              <GHImage 
                className="headshot" 
                width={150}
                height={150}
                src="/images/masoor.jpeg" 
                alt="Hari Masoor"
                style={{ 
                  borderRadius: '8px', 
                  boxShadow: '0 3px 12px rgba(0, 0, 0, 0.1)', 
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  // @ts-ignore - TypeScript doesn't know about style on HTMLImageElement
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseOut={(e) => {
                  // @ts-ignore
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="col">
                <div className="row-md-6">
                  {/* about text */}
                  <p className="mb-4">
                    My experiences range from customer service and troubleshooting…to technically validating 8 figure deals and delivering global keynotes at the largest conferences in the world. Whatever the task - I am confident I have skills to accomplish it. I am currently seeking to apply my unique skill set to fullstack positions.
                  </p>
                  <div className="spacer" data-height="20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row end */}

        <div className="spacer" data-height="120"></div>

        {/* GitHub garden in a separate row with its own container */}
        <div className="row">
          <div className="col-12">
            <div className="rounded bg-white shadow-dark padding-30" style={{ marginBottom: '60px' }}>
              <h3 className="mb-4">GitHub Contributions</h3>
              <a 
                href="https://github.com/harivmasoor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-garden-link"
                title="View on GitHub: harivmasoor"
              >
                <Image 
                  src="https://ghchart.rshah.org/harivmasoor" 
                  alt="Github Garden for harivmasoor"
                  width={1000}
                  height={150}
                  unoptimized
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    // @ts-ignore
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    // @ts-ignore
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    // @ts-ignore
                    e.currentTarget.style.transform = 'translateY(0)';
                    // @ts-ignore
                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="spacer" data-height="100"></div>
        
        {/* Stats in its own section with proper spacing */}
        <div className="row">
          <div className="col-12">
            <h3 className="mb-5">Facts & Statistics</h3>
            <div className="row stats stats-main">
              <div className="col-sm-4">
                {/* fact item */}
                <div className="fact-item" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}> 
                  <span className="icon icon-fire"></span>
                  <div className="details">
                    <div className="row-counts">
                      <h3 className="mb-0 mt-0 number min"><em className="count">4</em></h3>
                      <div className="row-counts t-85">
                        <h3 className="mb-0 mt-0 number">.</h3>
                        <h3 className="mb-0 mt-0 number wow fadeIn slower"><em className="count">5</em></h3>
                      </div>
                    </div>
                    <p className="mb-0">Projects Deployed in 2023</p>
                  </div>
                </div>
                <div className="spacer d-md-none d-lg-none" data-height="30"></div>
              </div>

              <div className="col-sm-4">
                {/* fact item */}
                <div className="fact-item" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}> 
                  <span className="icon icon-social-github"></span>
                  <div className="details">
                    <h3 className="mb-0 mt-0 number"><em className="count" id="contributions">980</em></h3>
                    <p className="mb-0">GitHub Contributions</p>
                  </div>
                </div>
                <div className="spacer d-md-none d-lg-none" data-height="30"></div>
              </div>

              <div className="col-sm-4">
                {/* fact item */}
                <div className="fact-item" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <span className="icon icon-layers"></span>
                  <div className="details">
                    <h3 className="mb-0 mt-0 number"><em className="count">28</em></h3>
                    <p className="mb-0">Technologies</p>
                  </div>
                </div>
                <div className="spacer d-md-none d-lg-none" data-height="30"></div>
              </div>

              <div className="col-sm-4">
                {/* fact item */}
                <div className="fact-item" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <span className="icon icon-energy"></span>
                  <div className="details">
                    <h3 className="mb-0 mt-0 number"><em className="count">10</em></h3>
                    <p id="tech-mking" className="mb-0">Years in Technology</p>
                  </div>
                </div>
                <div className="spacer d-md-none d-lg-none" data-height="30"></div>
              </div>
              
              <div className="col-sm-4">
                {/* fact item */}
                <div className="fact-item" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <span className="icon icon-wrench"></span>
                  <div className="details">
                    <h3 className="mb-0 mt-0 number"><em className="count">2</em></h3>
                    <p id="tech-mking" className="mb-0">Years as a Full-Stack Developer</p>
                  </div>
                </div>
                <div className="spacer d-md-none d-lg-none" data-height="30"></div>
              </div>
              
              <div className="col-sm-4">
                {/* fact item SPACER */}
                <div className="fact-item invisible">
                  <div className="details"></div>
                  <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 