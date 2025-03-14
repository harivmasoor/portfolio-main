'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would handle the form submission to Netlify or another service
      // For now, we're just simulating a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      // Clear the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <h3 className="wow fadeInUp">Get in Touch</h3>
              <p className="wow fadeInUp mb-4">Available for freelance projects and full-time positions.</p>
              
              {/* Contact details */}
              <div className="contact-detail">
                <div className="contact-item mb-4">
                  <i className="icon-envelope mr-2"></i>
                  <a href="mailto:harimasoor@gmail.com" style={{ 
                    transition: 'color 0.3s ease',
                    fontSize: '16px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#ff4c60'}
                  onMouseOut={(e) => e.currentTarget.style.color = ''}
                  >harimasoor@gmail.com</a>
                </div>
                
                {/* Social media links */}
                <div className="social-icons" style={{ marginTop: '20px' }}>
                  <a href="https://github.com/harivmasoor/" target="_blank" rel="noopener noreferrer" 
                    style={{ 
                      margin: '0 10px 0 0',
                      transition: 'transform 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/harimasoor/" target="_blank" rel="noopener noreferrer"
                    style={{ 
                      margin: '0 10px',
                      transition: 'transform 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a href="https://angel.co/u/hari-masoor" target="_blank" rel="noopener noreferrer"
                    style={{ 
                      margin: '0 10px',
                      transition: 'transform 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <i className="fab fa-angellist fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <h3 className="wow fadeInUp mb-4">Send a Message</h3>
            {/* Contact Form */}
            <form 
              id="contact-form" 
              name="contact-form" 
              className="contact-form mt-4" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <div className="messages mb-4">
                {isSubmitted && (
                  <div className="alert alert-success">
                    Your message has been sent. Thank you!
                  </div>
                )}
              </div>
              
              <div className="row">
                <div className="column col-md-6">
                  {/* Name input */}
                  <div className="form-group mb-4">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name" 
                      id="name" 
                      placeholder="Your name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        borderRadius: '8px',
                        padding: '12px 15px',
                        transition: 'box-shadow 0.3s ease'
                      }}
                      onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 3px rgba(108, 108, 229, 0.15)'}
                      onBlur={(e) => e.currentTarget.style.boxShadow = ''}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                
                <div className="column col-md-6">
                  {/* Email input */}
                  <div className="form-group mb-4">
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      placeholder="Email address" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        borderRadius: '8px',
                        padding: '12px 15px',
                        transition: 'box-shadow 0.3s ease'
                      }}
                      onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 3px rgba(108, 108, 229, 0.15)'}
                      onBlur={(e) => e.currentTarget.style.boxShadow = ''}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="column col-md-12">
                  {/* Subject input */}
                  <div className="form-group mb-4">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      name="subject" 
                      placeholder="Subject" 
                      required 
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        borderRadius: '8px',
                        padding: '12px 15px',
                        transition: 'box-shadow 0.3s ease'
                      }}
                      onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 3px rgba(108, 108, 229, 0.15)'}
                      onBlur={(e) => e.currentTarget.style.boxShadow = ''}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
          
                <div className="column col-md-12">
                  {/* Message textarea */}
                  <div className="form-group mb-4">
                    <textarea 
                      name="message" 
                      id="message" 
                      className="form-control" 
                      rows={5} 
                      placeholder="Message" 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        borderRadius: '8px',
                        padding: '12px 15px',
                        transition: 'box-shadow 0.3s ease'
                      }}
                      onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 3px rgba(108, 108, 229, 0.15)'}
                      onBlur={(e) => e.currentTarget.style.boxShadow = ''}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                name="submit" 
                id="submit" 
                value="Submit" 
                className="btn btn-default"
                disabled={isSubmitting}
                style={{
                  padding: '12px 30px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Honeypot Field */}
              <div className="hidden">
                <label htmlFor="bot-field">Bot field:
                  <input type="text" name="bot-field" />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="spacer" data-height="96"></div>
    </section>
  );
};

export default Contact; 