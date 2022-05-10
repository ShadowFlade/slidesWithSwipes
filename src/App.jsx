import React, { useEffect, useState, useRef, useContext } from 'react';
import Main from './components/main/main';
import MessageScreen from './components/message-screen/message-screen';
import ProductScreen from './components/product-screen/product-screen';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AppContext from './context';
import './nullstyle.css';
import './App.scss';

export default function App() {
  const scroll = useRef();
  const app = useRef();
  const appContent = useRef();
  const slide = ({ scroll, app, forward }) => {
    scroll.current.scrollBy({
      left: forward ? app.current.clientWidth : -app.current.clientWidth,
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
      app.current.onpointermove = null;
    };
    const detectMove = (e) => {
      e.preventDefault();
      distanceSwiped = Math.abs(Math.abs(start.left) - Math.abs(e.clientX));
      if (distanceSwiped > distanceToCoveToSwipe && e.clientX < start.left) {
        slide({ scroll, app, forward: true });

        app.current.onpointermove = null;
      } else if (distanceSwiped > distanceToCoveToSwipe && e.clientX > start.left) {
        slide({ scroll, app, forward: false });

        app.current.onpointermove = null;
      }
    };

    app.current.onpointermove = detectMove;
    app.current.onpointerup = onPointerUp;
  };
  useEffect(() => {
    app.current.onpointerdown = detectSwipe;
    app.current.ontouchmove =
      ((e) => {
        e.preventDefault();
      },
      { passive: false });
  }, []);
  const [background, setBackground] = useState();

  return (
    <div className="app" ref={app}>
      <AppContext.Provider value={app}>
        <div className="app__inner" ref={scroll}>
          <Navbar ref={appContent}></Navbar>
          <div className="app__content" ref={appContent}>
            <Main
              slide={slide.bind(this, { app, scroll, forward: true })}
              setBackgroundPic={setBackground}
            ></Main>
            <MessageScreen
              setBackgroundPic={setBackground}
              style={{ width: '100vw' }}
            ></MessageScreen>
            <ProductScreen setBackgroundPic={setBackground}></ProductScreen>
          </div>
          <Footer></Footer>
        </div>
      </AppContext.Provider>
    </div>
  );
}
