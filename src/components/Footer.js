import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PM Formula Calculator</h3>
          <p>Professional Project Management Formulas at your fingertips</p>
        </div>
        
        <div className="footer-section">
          <h4>Recommended Resources</h4>
          <ul>
            <li><a href="https://www.pmi.org" target="_blank" rel="noopener noreferrer">PMI.org</a></li>
            <li><a href="https://www.pmi.org/certifications/project-management-pmp" target="_blank" rel="noopener noreferrer">PMP Certification</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>About</h4>
          <p>This tool helps PMP candidates and project managers calculate essential project management formulas quickly and accurately.</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Project Management Formula Calculator. All rights reserved.</p>
        <p>Educational purposes only. Not affiliated with PMI or other organizations.</p>
      </div>
    </footer>
  );
}

export default Footer;
