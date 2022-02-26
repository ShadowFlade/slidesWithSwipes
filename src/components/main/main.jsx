import React, { useState } from 'react';
import hedge from '../../pics/hedgehog.png';
import ball from '../../pics/ball.png';
import stick from '../../pics/stick.png';
import pinkSperm from '../../pics/pink_sperm.png';
import AnimatedElement from '../animated-element/animatedElement';
import { wobbleAnimation } from '../../animations/animations';
import bg from './bg.png';
import './main.scss';

export default function Main() {
  const [backgroundPic, setBackgroundPic] = useState(bg);
  return (
    <div
      className="main"
      style={{
        height: '500px',
        backgroundImage: `url(${backgroundPic})`,
      }}>
      <AnimatedElement
        x={100}
        y={70}
        src={ball}
        alt="blue molecule in form of a ball"
        animation={wobbleAnimation}
        width={80}
        height={80}
        amplify={1}></AnimatedElement>
      <AnimatedElement
        x={10}
        y={150}
        src={hedge}
        alt="blue molecule in form of a hedgehog"
        animation={wobbleAnimation}
        width={150}
        height={100}
        amplify={1}></AnimatedElement>
      <AnimatedElement
        x={0}
        y={250}
        src={stick}
        alt="blue molecule in form of a stick"
        animation={wobbleAnimation}
        width={150}
        height={50}
        amplify={1}></AnimatedElement>
      <AnimatedElement
        x={250}
        y={250}
        src={pinkSperm}
        alt="pink sperm"
        animation={wobbleAnimation}
        width={150}
        height={100}
        amplify={0.12}></AnimatedElement>
    </div>
  );
}
