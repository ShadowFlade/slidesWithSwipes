import React from 'react';
import './pro.scss';
export default function Pro({ src, alt, text, width, type }) {
  return (
    <div
      className="pro"
      style={{ width, paddingLeft: type === 'big' ? '37%' : '10%' }}>
      <div className="pro__inner">
        <div className="pro__pic">
          <img src={src} alt={alt} />
        </div>
        <p className="pro__text">{text}</p>
      </div>
    </div>
  );
}
