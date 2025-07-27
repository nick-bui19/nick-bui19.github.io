import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Debug environment variables
    console.log('EmailJS Config:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    });

    if (form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');
        if (form.current) {
          form.current.reset();
        }
      }, (error) => {
        console.error('Email sending failed:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      
      <div className="contact-description">
        <p>
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development. 
          Feel free to reach out if you'd like to connect!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>I typically respond within 24 hours.</p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:nick.bui@vanderbilt.edu" className="contact-link">
                nick.bui@vanderbilt.edu
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn:</span>
              <a 
                href="https://linkedin.com/in/nick-bui19/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="from_name" className="form-label">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className="form-input"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="from_email" className="form-label">Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              className="form-input"
              placeholder="email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="form-input"
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="form-textarea"
              placeholder=""
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className="form-message success">
              Thank you! Your message has been sent successfully. I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-message error">
              Sorry, there was an error sending your message. Please try again or contact me directly via email.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;