import React, { useState } from 'react';
import '../components/_ContactForm.scss';

const ContactForm = (props) => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [focused, setFocused] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onFocus = (e) => {
    const { name } = e.target;
    setFocused((prev) => ({ ...prev, [name]: true }));
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setFocused((prev) => ({ ...prev, [name]: value.trim() !== '' }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setValues({ name: '', email: '', message: '' });
      setFocused({});
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="contact-form-container" {...props}>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-inner-container">
        <div className={`form-group ${focused.name ? 'focused' : ''}`}>
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            value={values.name}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required
          />
          <div className="form-border"></div>
        </div>
        
        <div className={`form-group ${focused.email ? 'focused' : ''}`}>
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={values.email}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required
          />
          <div className="form-border"></div>
        </div>
        
        <div className={`form-group ${focused.message ? 'focused' : ''}`}>
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="form-control"
            value={values.message}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required
          />
          <div className="form-border"></div>
        </div>
        
        </div>
        
        <button 
          type="submit" 
          className={`btn btn-primary btn-lg form-submit ${status}`} 
          disabled={status !== 'idle'}
        >
          {status === 'loading' && (
            <span className="spinner">
              <span className="spinner-dot"></span>
              <span className="spinner-dot"></span>
              <span className="spinner-dot"></span>
            </span>
          )}
          <span className="btn-text">
            {status === 'loading' ? 'Sending...' : 
             status === 'success' ? 'Message Sent!' : 
             'Send Message'}
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
