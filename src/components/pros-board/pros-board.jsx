import React from 'react';
import Pro from '../pro/pro';
import utensils from '../pro/icon1.png';
import calendar from '../pro/icon2.png';
import Button from '../button/button';
import './pros-board.scss';
export default function ProsBoard() {
  const text1 =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae unde maiores dolorum.';
  const text2 = 'A arcu cursus vitae';
  return (
    <div className="pros-board">
      <div className="pros-board__inner">
        <div className="pros-board__items">
          <div className="pros-board__item">
            <Pro
              width="27rem"
              src={utensils}
              text={text1}
              alt="utensils in blue color"
              type="big"></Pro>
          </div>
          <div className="pros-board__group">
            <div className="pros-board__item">
              <Pro
                width="17.5rem"
                src={calendar}
                alt="calendar in blue color"
                text={text2}
                type="small"></Pro>
            </div>
            <div className="pros-board__item">
              <Button element="plus" color="white" text="Подробнее"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
