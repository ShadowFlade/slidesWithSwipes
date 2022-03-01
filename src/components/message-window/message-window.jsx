import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { ReactComponent as CloseButton } from './btn_close.svg';
import { ReactComponent as ArrowBack } from './arrow_back.svg';
import { ReactComponent as ArrowForward } from './arrow_forward.svg';
import './message-window.scss';
import MessageList from '../message-list/message-list';
export default function MessageWindow({ items, setIsOpen }) {
  const [dotes, setDots] = useState([]);
  const [activeDot, setActiveDot] = useState(0);
  const closeModal = () => {
    document.body.removeChild(document.getElementsByClassName('shadow')[0]);
    setIsOpen(false);
  };
  const isVisible = (element) => {
    if (element.offsetLeft > element.offsetWidth) {
      return false;
    } else {
      return true;
    }
  };
  useEffect(() => {
    const dotesDivs = Array.from(
      document.getElementsByClassName('message-window__dot')
    );
    setDots(dotesDivs);
  }, []);
  const lists = useRef();
  const parent = useRef();
  const [width, setWidth] = useState(0);
  const [result, setResult] = useState([
    [
      { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
      { text: 'Lorem ipsum dolor sit amet.' },
      { text: 'Lorem ipsum dolor sit amet.' },
    ],
    [
      { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
      { text: 'Lorem ipsum dolor sit amet.' },
      { text: 'Lorem ipsum dolor sit amet.' },
    ],
  ]);
  const onArrowClickBack = (element) => {
    const item = document.getElementsByClassName('message-window__list')[0];
    parent.current.scrollBy({
      left: -item.offsetWidth,
      behavior: 'smooth',
    });

    setActiveDot(activeDot - 1);
    dotes[activeDot - 1].classList.add('active');
    dotes[activeDot].classList.remove('active');
  };
  const onArrowClickForward = () => {
    const item = document.getElementsByClassName('message-window__list')[0];
    parent.current.scrollBy({
      left: item.offsetWidth,
      behavior: 'smooth',
    });

    setActiveDot(activeDot + 1);
    dotes[activeDot + 1].classList.add('active');
    dotes[activeDot].classList.remove('active');
  };
  return (
    <div className="message-window">
      <div className="product-screen__header" style={{ paddingLeft: '0' }}>
        <h2>Преимущества</h2>
        <h1 className="product-screen__title">
          brend<b>xy</b>
        </h1>
      </div>
      <CloseButton
        onClick={closeModal}
        className="message-window__close-button"></CloseButton>
      <div className="message-window__inner">
        <div className="message-window__content" ref={parent}>
          <div
            className="message-window__lists"
            ref={lists}
            style={{ width: `${width}%` }}>
            <MessageList
              items={result}
              numberOfElementsOnPage={3}
              width={width}
              setWidth={setWidth}></MessageList>
          </div>
        </div>
        <div className="message-window__pagination">
          <ArrowBack
            onClick={(e) => onArrowClickBack(e.currentTarget)}
            className="message-window__arrow message-window__arrow--back"></ArrowBack>
          <div className="message-window__dotes">
            <div className="message-window__dot active"></div>
            <div className="message-window__dot"></div>
          </div>
          <ArrowForward
            onClick={onArrowClickForward}
            className="message-window__arrow message-window__arrow--forward"></ArrowForward>
        </div>
      </div>
    </div>
  );
}
