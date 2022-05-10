import React, { forwardRef, useState } from 'react';
import logo from './logo.png';
import './navbar.scss';
const Navbar = forwardRef((_, ref) => {
  const onClick = () => {
    console.log('click', ref);

    ref.current.children[0].scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={onClick}>
          <img className="navbar__logo-pic" src={logo} alt="logo and home button" />
        </div>
      </div>
    </nav>
  );
});
export default Navbar;
