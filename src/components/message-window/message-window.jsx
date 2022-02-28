import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { ReactComponent as CloseButton } from './btn_close.svg';
import { ReactComponent as ArrowBack } from './arrow_back.svg';
import { ReactComponent as ArrowForward } from './arrow_forward.svg';

import './message-window.scss';
export default function MessageWindow({ items }) {
  return (
    <div className="message-window">
      <CloseButton className="message-window__close-button"></CloseButton>
      <div className="message-window__inner">
        <div className="message-window__content">
          <ul className="message-window__list">
            {items.map((item, id) => {
              return (
                <li className="message-window__item" key={uuid()}>
                  <div className="message-window__number">0{id}</div>
                  <div className="message-window__text">{item.text}</div>
                </li>
              );
            })}
          </ul>
          <div className="message-window__pagination">
            <ArrowBack className="message-window__arrow message-window__arrow--back"></ArrowBack>
            <div className="message-window__dotes">
              <div className="message-window__dot"></div>
              <div className="message-window__dot"></div>
            </div>
            <ArrowForward className="message-window__arrow message-window__arrow--forward"></ArrowForward>
          </div>
        </div>
      </div>
    </div>
  );
}
