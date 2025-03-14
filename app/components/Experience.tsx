'use client';

import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ paddingTop: '30px', paddingBottom: '50px' }}>
      <div className="container">
        {/* section title */}
        <h2 className="section-title wow fadeInUp mb-5">Experience</h2>

        <div className="spacer" data-height="80"></div>
        
        <div className="row">
          <div className="col-md-6">
            {/* timeline wrapper */}
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {/* timeline item */}
              <div className="timeline-container wow fadeInUp">
                <div className="content">
                  <span className="time">2023</span>
                  <h3 className="title">Full Stack Developer</h3>
                  <p>
                    Building dreams to life working across FullStack web development, mobile development, and cloud computing.
                  </p>
                </div>
              </div>

              {/* timeline item */}
              <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                <div className="content">
                  <span className="time">2022</span>
                  <h3 className="title">Blockchain Architect</h3>
                  <p>Delivered the Keynote Speech at the World Blockchain Summit 2022 at Atlantis, Dubai. Covered the future of NFTs with the largest publication in the Blockchain Industry. </p>
                  <div className="spacer" data-height="15"></div>
                  <span className="icon icon-link"></span>
                  <a href="https://www.linkedin.com/in/harimasoor/overlay/1635506473916/single-media-viewer/?profileId=ACoAABXavEYBo6_4ZGoEzyTQNKUMEV3wBaugC7g" target="_blank" rel="noopener noreferrer">
                    Keynote Speech
                  </a>
                  <div className="spacer" data-height="15"></div>
                  <span className="icon icon-link"></span>
                  <a href="https://www.linkedin.com/in/harimasoor/overlay/1635513493928/single-media-viewer/?profileId=ACoAABXavEYBo6_4ZGoEzyTQNKUMEV3wBaugC7g" target="_blank" rel="noopener noreferrer">
                    Sponsored Webinar
                  </a>
                </div>
              </div>

              {/* timeline item */}
              <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                <div className="content">
                  <span className="time">2021</span>
                  <h3 className="title">Palo Alto Networks</h3>
                  <p>Educated national stakeholders on cloud identity management, cloud workload firewalling, and IaC Security</p>
                </div>
              </div>

              {/* timeline item */}
              <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                <div className="content">
                  <span className="time">2016-2020</span>
                  <h3 className="title">VMware</h3>
                  <p>Delivered most viewed Carbon Black Threat Intelligence demo on Youtube. Worked with technical and non technical stakeholder on definining requirements.</p>
                  <div className="spacer" data-height="15"></div>
                  <span className="icon icon-link"></span>
                  <a href="https://www.youtube.com/watch?v=5G2CCH6z-sY&t=136s" target="_blank" rel="noopener noreferrer">
                    Carbon Black Threat Intelligence Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            {/* timeline wrapper */}
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {/* timeline item */}
              <div className="timeline-container wow fadeInUp">
                <div className="content">
                  <span className="time">2023</span>
                  <h3 className="title">App Academy Open</h3>
                  <p>Graduated from App Academy&apos;s accelerated flagship Software Engineering track, focusing on full-stack development with a 3% acceptance rate. Completed 1000+ hours of immersive full-stack development curriculum.</p>
                </div>
              </div>

              {/* timeline item */}
              <div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
                <div className="content">
                  <span className="time">2022</span>
                  <h3 className="title">Harvard Cybersecurity</h3>
                  <p>Certification in Cybersecurity from Harvard focusing on cryptography, operating system security, and the CIA triad.</p>
                </div>
              </div>

              {/* timeline item */}
              <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                <div className="content">
                  <span className="time">2019</span>
                  <h3 className="title">University of California, Berkeley</h3>
                  <p>Extension student with coursework in the Computer Science dept focusing on Data Science, Machine Learning, and Computer Networking</p>
                </div>
              </div>

              {/* timeline item */}
              <div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
                <div className="content">
                  <span className="time">2010-2014</span>
                  <h3 className="title">University of California, Santa Cruz</h3>
                  <p>B.S. Chemistry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 