import React, { useEffect, useState, useRef } from 'react';
import Main from './components/main/main';
import MessageScreen from './components/message-screen/message-screen';
import ProductScreen from './components/product-screen/product-screen';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './nullstyle.css';
import './App.scss';

export default function App() {
  const scroll = useRef();
  const app = useRef();
  const slide = ({ scroll, width }) => {
    scroll.scrollBy({
      left: width,
      behavior: 'smooth',
    });
  };
  const detectSwipe = (e) => {
    e.preventDefault();
    const start = {
      top: e.clientY,
      left: e.clientX,
    };
    const distanceToCoveToSwipe = 50;
    let distanceSwiped = 0;
    const onPointerUp = () => {
      document.removeEventListener('pointermove', detectMove, {
        passive: false,
      });
    };

    const detectMove = (e) => {
      e.preventDefault();
      distanceSwiped = Math.abs(Math.abs(start.left) - Math.abs(e.clientX));
      if (distanceSwiped > distanceToCoveToSwipe && e.clientX < start.left) {
        slide({ width: app.current.clientWidth, scroll: scroll.current });
        document.removeEventListener('pointermove', detectMove);
      } else if (
        distanceSwiped > distanceToCoveToSwipe &&
        e.clientX > start.left
      ) {
        slide({ width: -app.current.clientWidth, scroll: scroll.current });

        document.removeEventListener('pointermove', detectMove);
      }
    };

    document.addEventListener('pointermove', detectMove);
    document.addEventListener('pointerup', onPointerUp);
  };
  useEffect(() => {
    document.addEventListener('pointerdown', detectSwipe, { passive: false });
    document.addEventListener(
      'touchmove',
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
  }, []);
  const [background, setBackground] = useState();

  return (
    <div className="app" ref={app}>
      <div className="app__inner" ref={scroll}>
        <Navbar></Navbar>
        <div className="app__content">
          <Main
            onClick={slide.bind(this, {
              width: app.current.clientWidth,
              scroll: scroll.current,
            })}
            setBackgroundPic={setBackground}></Main>
          <MessageScreen
            setBackgroundPic={setBackground}
            style={{ width: '100vw' }}></MessageScreen>
          <ProductScreen setBackgroundPic={setBackground}></ProductScreen>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
