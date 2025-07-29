import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Top navbar section */}
      <div className="nav-links">
        <span className="nav-title">🎬 ReactFlix | Explore the world of React with our curated Movies!</span>
        <div className="nav-buttons">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Main content */}
      <div className="about-content">
        <h2>About ReactFlix</h2>
        <p>
          <strong>ReactFlix</strong> is a fun and interactive project created to help developers learn React through familiar and entertaining content — movies! Whether you're a beginner or brushing up on React fundamentals, ReactFlix is here to make your journey smooth and engaging.
        </p>

        <h3>🎯 What You'll Learn:</h3>
        <ul>
          <li>✅ React Components</li>
          <li>✅ CSS Styling in React</li>
          <li>✅ Dynamic Content Rendering</li>
          <li>✅ Props & State Management</li>
          <li>✅ React Router for Page Navigation</li>
          <li>✅ React Bootstrap Integration</li>
          <li>✅ Event Handling & Hooks</li>
        </ul>

        <h3>💡 Why Movies?</h3>
        <p>
          Movies are not just entertaining — they’re relatable. Using movie-themed components makes learning feel less like theory and more like a creative experience.
        </p>

        <h3>🚀 Future Plans</h3>
        <p>
          We aim to expand ReactFlix with dark mode, user login, more movie cards, sorting/filtering, and API integration (like TMDB) — all while teaching real-world React skills.
        </p>

        <div className="thanks-note">
          Thank you for visiting ReactFlix. Enjoy learning — one movie at a time! 🍿
        </div>
      </div>
    </div>
  );
}
