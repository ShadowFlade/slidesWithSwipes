import React from 'react';
import './button.scss';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as ArrowForward } from './arrow-forward.svg';

export default function Button({ element, text, color }) {
  //TODO need improvement
  return (
    <button className="button">
      <div className="button__center">
        <div className="button__inner">
          <span className="button__icon">
            {element === 'arrow' && (
              <ArrowForward fill={color} stroke={color}></ArrowForward>
            )}
            {element === 'plus' && <Plus fill={color} stroke={color}></Plus>}
          </span>
          <p className="button__text">{text}</p>
        </div>
      </div>
    </button>
  );
}
