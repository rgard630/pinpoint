import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Your Portfolio</p>
        {/* Add links to social profiles or other relevant information */}
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {/* Add more social links or information */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
