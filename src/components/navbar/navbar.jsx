import React, { useState } from 'react';
import logo from './logo.png';
import './navbar.scss';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <img
            className="navbar__logo-pic"
            src={logo}
            alt="logo and home button"
          />
        </div>
      </div>
    </nav>
  );
}
