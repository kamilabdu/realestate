import React, { useState } from 'react';
import './ContactMe.css';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission handling here
    // You can integrate the backend logic later to handle email sending

    // Reset form fields and set submitted to true
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div className="contact-me-container">
      <div className="contact-form">
        <h2>Contact Me</h2>
        {submitted ? (
          <p>Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <div className="personal-info">
        <img src="https://drive.google.com/uc?id=10tSgP3xjxs7EVhaRwU_gal-xLVFGzGsJ" alt="My Photo" />
        <div className="about-me">
          
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
