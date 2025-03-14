'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top" style={{
        background: 'linear-gradient(135deg, #6C6CE5 0%, #FF4C60 100%)',
        paddingTop: '60px',
        paddingBottom: '30px',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        boxShadow: '0 -5px 20px rgba(0, 0, 0, 0.1)',
        borderTopLeftRadius: '50px',
        borderTopRightRadius: '0',
      }}>
        {/* Animated background elements */}
        <div className="animated-shapes">
          <div className="shape" style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            animation: 'floatAnimation 8s infinite ease-in-out'
          }}></div>
          <div className="shape" style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            animation: 'floatAnimation 10s infinite ease-in-out'
          }}></div>
          <div className="shape" style={{
            position: 'absolute',
            bottom: '20%',
            left: '20%',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            animation: 'floatAnimation 7s infinite ease-in-out'
          }}></div>
          <style jsx>{`
            @keyframes floatAnimation {
              0% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(10deg); }
              100% { transform: translateY(0) rotate(0deg); }
            }
          `}</style>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-brand mb-4">
                <h3 style={{ fontWeight: '700', letterSpacing: '1px' }}>Hari Masoor</h3>
                <p className="mb-3">Full-Stack Software Engineer</p>
                <div className="footer-social">
                  <a href="https://github.com/harivmasoor/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      width: '40px',
                      height: '40px',
                      lineHeight: '40px',
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '50%',
                      margin: '0 8px 0 0',
                      transition: 'all 0.3s ease',
                      color: 'white'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#6C6CE5';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/harimasoor/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      width: '40px',
                      height: '40px',
                      lineHeight: '40px',
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '50%',
                      margin: '0 8px',
                      transition: 'all 0.3s ease',
                      color: 'white'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#6C6CE5';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://angel.co/u/hari-masoor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      width: '40px',
                      height: '40px',
                      lineHeight: '40px',
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '50%',
                      margin: '0 8px',
                      transition: 'all 0.3s ease',
                      color: 'white'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#6C6CE5';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="fab fa-angellist"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="footer-links mb-4">
                <h4 style={{ fontWeight: '600', marginBottom: '20px' }}>Quick Links</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#home" style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.opacity = '0.8';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.opacity = '1';
                    }}
                    >
                      <i className="fas fa-chevron-right" style={{ marginRight: '8px', fontSize: '12px' }}></i> Home
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#about" style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.opacity = '0.8';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.opacity = '1';
                    }}
                    >
                      <i className="fas fa-chevron-right" style={{ marginRight: '8px', fontSize: '12px' }}></i> About
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#skills" style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.opacity = '0.8';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.opacity = '1';
                    }}
                    >
                      <i className="fas fa-chevron-right" style={{ marginRight: '8px', fontSize: '12px' }}></i> Skills
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#works" style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.opacity = '0.8';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.opacity = '1';
                    }}
                    >
                      <i className="fas fa-chevron-right" style={{ marginRight: '8px', fontSize: '12px' }}></i> Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="footer-contact mb-4">
                <h4 style={{ fontWeight: '600', marginBottom: '20px' }}>Contact Info</h4>
                <p style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '15px', minWidth: '20px' }}></i>
                  San Jose, CA
                </p>
                <p style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <i className="fas fa-envelope" style={{ marginRight: '15px', minWidth: '20px' }}></i>
                  <a href="mailto:harimasoor@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
                    harimasoor@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom" style={{
        background: '#191a1e',
        padding: '20px 0',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '14px'
      }}>
        <div className="container">
          <p className="mb-0">
            © {currentYear} <span style={{ color: '#FF4C60', fontWeight: '600' }}>Hari Masoor</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 