import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Your Portfolio</h1>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
