import React, { useEffect, useState } from 'react';
import MessageWindow from '../message-window/message-window';
import bg from './bg3.png';
import product from './product.png';
import darkPinkBubble from './dark-pink-bubble.png';
import lightBlueBubble from './light-blue.png';
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
              x={50}
              y={150}
              src={darkPinkBubble}
              alt="dark pink bubble"
              animation={wobbleAnimation}
              width={30}
              height={30}
              offset={20}
              style={{ zIndex: '2' }}></AnimatedElement>
            <AnimatedElement
              x={50}
              y={10}
              src={lightBlueBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '4' }}></AnimatedElement>
            <AnimatedElement
              x={50}
              y={200}
              src={lightBlueBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '4' }}></AnimatedElement>
            <AnimatedElement
              x={100}
              y={250}
              src={lightBlueBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '4' }}></AnimatedElement>
            <AnimatedElement
              x={50}
              y={300}
              src={lightBlueBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '5' }}></AnimatedElement>
            <AnimatedElement
              x={35}
              y={265}
              src={darkPinkBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '5' }}></AnimatedElement>
            <AnimatedElement
              x={0}
              y={120}
              src={darkPinkBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '5' }}></AnimatedElement>
          </div>
          <MessageWindow items={items}></MessageWindow>
        </div>
      </div>
    </div>
  );
}
