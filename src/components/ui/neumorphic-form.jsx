import React, { useState } from 'react';

const NeumorphicForm = ({ isDarkMode, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <form className={`neumorphic-form ${isDarkMode ? 'dark' : ''}`} onSubmit={handleSubmit}>
      <div className="title">
        Get in Touch,<br />
        <span>let's start a conversation</span>
      </div>
      
      {submitStatus === 'success' && (
        <div className="success-message">
          Thank you for your message! We'll get back to you within 24 hours.
        </div>
      )}

      <input 
        className="input" 
        name="name" 
        placeholder="Your Name" 
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <input 
        className="input" 
        name="email" 
        placeholder="Email Address" 
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <input 
        className="input" 
        name="subject" 
        placeholder="Subject" 
        type="text"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      
      <textarea 
        className="input textarea" 
        name="message" 
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        required
      />

      <div className="login-with">
        <div className="button-log">
          <b>📧</b>
        </div>
        <div className="button-log">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </div>
        <div className="button-log">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
      </div>
      
      <button 
        className="button-confirm" 
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  );
};

export default NeumorphicForm;
