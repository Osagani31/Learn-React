import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Top navbar section */}
      <div className="nav-links">
        <span className="nav-title">🎬 ReactFlix | Explore the world of React with our curated Movies!</span>
        <div className="nav-buttons">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      {/* Contact content */}
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>If you have any questions, feedback, or collaboration ideas, we’d love to hear from you!</p>

        <div className="contact-section">
          <h3>📧 Email</h3>
          <p>reactflix.support@example.com</p>
        </div>

        <div className="contact-section">
          <h3>🌐 Website</h3>
          <p>www.reactflix-learn.dev</p>
        </div>

        <div className="contact-section">
          <h3>📍 Location</h3>
          <p>Colombo, Sri Lanka</p>
        </div>

        <div className="contact-section">
          <h3>💬 Social Media</h3>
          <ul>
            <li>🌐 Instagram: @reactflix.learn</li>
            <li>🌐 GitHub: github.com/reactflix</li>
            <li>🌐 LinkedIn: linkedin.com/company/reactflix</li>
          </ul>
        </div>

        <div className="thanks-note">
          We're here to support your React journey. Keep exploring and happy coding! 🚀
        </div>
      </div>
    </div>
  );
}
