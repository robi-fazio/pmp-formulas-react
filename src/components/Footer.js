// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Created by [Your Name] | Contact: [your.email@example.com]</p>
        <ul>
          <li><a href="https://www.pmi.org" target="_blank" rel="noopener noreferrer">PMI Official Site</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        <div className="adsense-placeholder">Footer AdSense Banner</div>
      </div>
    </footer>
  );
};

export default Footer;
