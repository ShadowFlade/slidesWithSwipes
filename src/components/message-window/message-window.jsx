import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ReactComponent as CloseButton } from './btn_close.svg';
import { ReactComponent as ArrowBack } from './arrow_back.svg';
import { ReactComponent as ArrowForward } from './arrow_forward.svg';
import './message-window.scss';
import MessageList from '../message-list/message-list';
const MessageWindow = forwardRef(({ items, setIsOpen, header, title, shadow }, ref) => {
  const [dotes, setDots] = useState([]);
  const [activeDot, setActiveDot] = useState(0);
  const messageList = useRef();
  const closeModal = () => {
    shadow.current.classList.remove('shadow--active');
    ref.current.classList.remove('message-window--active');
    setIsOpen(false);
  };
  const dotesDIV = useRef();
  const isVisible = (element) => {
    if (element.offsetLeft > element.offsetWidth) {
      return false;
    } else {
      return true;
    }
  };
  useEffect(() => {
    setDots(dotesDIV.current.children);
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
  const onArrowClickBack = () => {
    parent.current.scrollBy({
      left: -messageList.offsetWidth,
      behavior: 'smooth',
    });

    setActiveDot(activeDot - 1);
    dotes[activeDot - 1].classList.add('active');
    dotes[activeDot].classList.remove('active');
  };
  const onArrowClickForward = () => {
    parent.current.scrollBy({
      left: messageList.offsetWidth,
      behavior: 'smooth',
    });

    setActiveDot(activeDot + 1);
    dotes[activeDot + 1].classList.add('active');
    dotes[activeDot].classList.remove('active');
  };
  return (
    <div className="message-window" ref={ref}>
      <div className="message-window__header" style={{ paddingLeft: '0' }}>
        <h2>{header}</h2>
        <h1 className="message-window__title">
          brend<b>{title}</b>
        </h1>
      </div>
      <CloseButton
        onClick={closeModal}
        className="message-window__close-button"
        width="30px"
        height="30px"
      ></CloseButton>
      <div className="message-window__inner">
        <div className="message-window__content" ref={parent}>
          <div className="message-window__lists" ref={lists} style={{ width: `${width}%` }}>
            <MessageList
              items={result}
              numberOfElementsOnPage={3}
              width={width}
              setWidth={setWidth}
              ref={messageList}
            ></MessageList>
          </div>
        </div>
        <div className="message-window__pagination">
          <ArrowBack
            onClick={(e) => onArrowClickBack(e.currentTarget)}
            className="message-window__arrow message-window__arrow--back"
          ></ArrowBack>
          <div className="message-window__dotes" ref={dotesDIV}>
            <div className="message-window__dot active"></div>
            <div className="message-window__dot"></div>
          </div>
          <ArrowForward
            onClick={onArrowClickForward}
            className="message-window__arrow message-window__arrow--forward"
          ></ArrowForward>
        </div>
      </div>
    </div>
  );
});
export default MessageWindow;
