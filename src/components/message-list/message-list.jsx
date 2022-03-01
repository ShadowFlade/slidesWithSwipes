import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './message-list.scss';
export default function MessageList({
  items,
  numberOfElementsOnPage,
  width,
  setWidth,
}) {
  let id = 0;
  useEffect(() => {
    setWidth(width + 100 * items.length);
  }, []);

  return (
    <>
      {items.map((list) => {
        return (
          <ul className="message-window__list" key={uuid()}>
            {list.map((item) => {
              id++;
              return (
                <li className="message-window__item" key={uuid()}>
                  <div className="message-window__number">0{id}</div>
                  <div className="message-window__text">{item.text}</div>
                </li>
              );
            })}
          </ul>
        );
      })}
    </>
  );
}
