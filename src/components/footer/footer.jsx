import React from 'react';
import logo from './company-logo.png';
import './footer.scss';
export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="company logo" />
    </footer>
  );
}
