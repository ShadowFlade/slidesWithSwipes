import React, { useEffect, useState } from 'react';
import Main from './components/main/main';
import MessageScreen from './components/message-screen/message-screen';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './nullstyle.css';
import './App.css';
import bg from './components/main/bg.png';
import ProductScreen from './components/product-screen/product-screen';

export default function App() {
  const [background, setBackground] = useState();

  return (
    <div
      className="app"
      style={{ background: `center / cover no-repeat url(${background})` }}>
      <Navbar></Navbar>
      {/* <Main setBackgroundPic={setBackground}></Main> */}
      {/* <MessageScreen setBackgroundPic={setBackground}></MessageScreen> */}
      <ProductScreen setBackgroundPic={setBackground}></ProductScreen>
      <Footer></Footer>
    </div>
  );
}
