'use client';

import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ paddingTop: '30px', paddingBottom: '50px' }}>
      <div className="container">
        {/* section title */}
        <h2 className="section-title wow fadeInUp mb-5">Skills</h2>
        
        <div className="spacer" data-height="80"></div>
        
        <div className="text-center">
          <div className="row logos">
            {/* React + Redux */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#61DAFB', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fab fa-react"></i>
                </div>
                <p className="mt-2 mb-0">React + Redux</p>
              </div>
            </div>
            
            {/* Ruby on Rails */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#CC0000', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fas fa-gem"></i>
                </div>
                <p className="mt-2 mb-0">Ruby on Rails</p>
              </div>
            </div>
            
            {/* JavaScript */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#F7DF1E', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#333',
                  fontSize: '28px'
                }}>
                  <i className="fab fa-js"></i>
                </div>
                <p className="mt-2 mb-0">JavaScript</p>
              </div>
            </div>
            
            {/* MongoDB */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#4DB33D', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fas fa-database"></i>
                </div>
                <p className="mt-2 mb-0">MongoDB</p>
              </div>
            </div>
            
            {/* PostgreSQL */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#336791', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fas fa-database"></i>
                </div>
                <p className="mt-2 mb-0">PostgreSQL</p>
              </div>
            </div>
            
            {/* AWS */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#FF9900', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fab fa-aws"></i>
                </div>
                <p className="mt-2 mb-0">AWS</p>
              </div>
            </div>
            
            {/* GraphQL */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#E535AB', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fas fa-project-diagram"></i>
                </div>
                <p className="mt-2 mb-0">GraphQL</p>
              </div>
            </div>
            
            {/* HTML5 */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#E34F26', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fab fa-html5"></i>
                </div>
                <p className="mt-2 mb-0">HTML5</p>
              </div>
            </div>
            
            {/* Heroku */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#430098', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fas fa-cloud"></i>
                </div>
                <p className="mt-2 mb-0">Heroku</p>
              </div>
            </div>
            
            {/* Netlify */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#00C7B7', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fas fa-server"></i>
                </div>
                <p className="mt-2 mb-0">Netlify</p>
              </div>
            </div>
            
            {/* CSS3 */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#1572B6', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fab fa-css3-alt"></i>
                </div>
                <p className="mt-2 mb-0">CSS3</p>
              </div>
            </div>
            
            {/* UNIX */}
            <div className="col-md-3 col-6">
              <div className="tech-logo" style={{ padding: '15px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto', 
                  backgroundColor: '#333333', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px'
                }}>
                  <i className="fab fa-linux"></i>
                </div>
                <p className="mt-2 mb-0">UNIX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 