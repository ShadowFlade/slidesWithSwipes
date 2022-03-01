import React, { useEffect, useState, useRef } from 'react';
import Main from './components/main/main';
import MessageScreen from './components/message-screen/message-screen';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './nullstyle.css';
import './App.css';
import ProductScreen from './components/product-screen/product-screen';

export default function App() {
  const scroll = useRef();
  const app = useRef();
  const detectSwipe = (e) => {
    const start = {
      top: e.clientY,
      left: e.clientX,
    };
    const offsetLength = 50;
    let distanceSwiped = 0;
    const onPointerUp = () => {
      document.removeEventListener('pointermove', detectMove);
    };
    const detectMove = (e) => {
      distanceSwiped = Math.abs(Math.abs(start.left) - Math.abs(e.clientX));
      console.log('🚀 ~ detectMove ~ distanceSwiped', distanceSwiped);
      if (distanceSwiped > offsetLength && e.clientX < start.left) {
        scroll.current.scrollBy(app.current.clientWidth, 0);
        document.removeEventListener('pointermove', detectMove);
      } else if (distanceSwiped > offsetLength && e.clientX > start.left) {
        scroll.current.scrollBy(-app.current.clientWidth, 0);
        document.removeEventListener('pointermove', detectMove);
      }
    };

    document.addEventListener('pointermove', detectMove);
    document.addEventListener('pointerup', onPointerUp);
  };
  useEffect(() => {
    document.addEventListener('pointerdown', detectSwipe);
  }, []);
  const [background, setBackground] = useState();

  return (
    <div
      className="app"
      ref={app}
      style={{ background: `center / cover no-repeat url(${background})` }}>
      <Navbar></Navbar>
      <div className="app__inner" ref={scroll}>
        <div className="app__content">
          <Main setBackgroundPic={setBackground}></Main>
          <MessageScreen setBackgroundPic={setBackground}></MessageScreen>
          <ProductScreen setBackgroundPic={setBackground}></ProductScreen>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
