import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <center>
      <div className="contact-page-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <h2>Contact Information</h2>
        
          <p>Email: foodelie@gmail.com.edu</p>
        </div>
        {!submitted ? (
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <center>
              <button type="submit">Submit</button></center>
            </form>
          </div>
        ) : (
          <div className="submission-confirmation">
            <p>Thank you for your message!</p>
          </div>
        )}
      </div>
    </center>
  );
};

export default Contact;