import React, { useState } from 'react';
import bg from './bg.png';
import ball from '../../pics/ball.png';
import './main.scss';
import hedge from '../../pics/hedgehog.png';
import AnimatedElement from '../animated-element/animatedElement';
import { wobbleAnimation } from '../../animations/animations';
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
        name="ball"></AnimatedElement>
      <AnimatedElement
        x={10}
        y={20}
        src={hedge}
        alt="blue molecule in form of a hedgehog"
        animation={wobbleAnimation}
        width={250}
        height={100}
        name="ball"></AnimatedElement>
    </div>
  );
}
