import React from 'react';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;