import React, { useEffect, useState } from 'react';
import MessageWindow from '../message-window/message-window';
import bg from './bg3.png';
import product from './product.png';
import darkPinkBubble from './dark-pink-bubble.png';
import lightBlueBubble from './dark-pink-bubble.png';
import AnimatedElement from '../animated-element/animated-element';
import { wobbleAnimation } from '../../animations/animations';
// import bubble from './dark-pink-bubble.png';

// import DarkPinkBubble from './dark-pink-bubble.png';

import './product-screen.scss';

export default function ProductScreen({ setBackgroundPic }) {
  useEffect(() => {
    setBackgroundPic(bg);
  });
  const [items, setItems] = useState([
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { text: 'Lorem ipsum dolor sit amet.' },
    { text: 'Lorem ipsum dolor sit amet.' },
  ]);
  return (
    <div className="product-screen">
      <div className="product-screen__content">
        <div className="product-screen__message-window">
          <div className="product-screen__product">
            <img src={product} alt="seems like a bottle of soup" />
            <AnimatedElement
              x={0}
              y={0}
              src={darkPinkBubble}
              alt="dark pink bubble"
              animation={wobbleAnimation}
              width={100}
              height={80}
              offset={20}></AnimatedElement>
            {/* <AnimatedElement></AnimatedElement>
<AnimatedElement></AnimatedElement> */}
          </div>
          <MessageWindow items={items}></MessageWindow>
        </div>
      </div>
    </div>
  );
}
