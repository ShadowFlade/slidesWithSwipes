import React, { useState } from 'react';
import logo from './logo.png';
import './navbar.scss';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    const slider = Array.from(
      document.getElementsByClassName('app__content')
    )[0];
    slider.children[0].scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={onClick}>
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
