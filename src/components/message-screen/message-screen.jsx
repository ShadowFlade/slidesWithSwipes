import React, { useEffect } from 'react';
import AnimatedElement from '../animated-element/animated-element';
import WindowWithCustomScrollbar from '../WindowWithCustomScrollbar/window-with-custom-scrollbar';
import sperm from '../animated-element/pink_sperm.png';
import { wobbleAnimation } from '../../animations/animations';
import bg from './bg2.png';

import './message-screen.scss';
export default function MessageScreen({ setBackgroundPic }) {
  useEffect(() => {
    setBackgroundPic(bg);
  }, []);
  return (
    <div className="message-screen">
      <div className="message-screen__inner">
        <div className="message-screen__header">
          <h2 className="message-screen__title">
            текст <br />
            сообщения
          </h2>
        </div>
        <WindowWithCustomScrollbar></WindowWithCustomScrollbar>
        <AnimatedElement
          x={-100}
          y={-500}
          src={sperm}
          alt="pink sperm"
          animation={wobbleAnimation}
          width={800}
          height={500}
          offset={25}
          style={{ transform: 'rotate(30deg)', zIndex: '1' }}></AnimatedElement>
        <AnimatedElement
          x={100}
          y={-750}
          src={sperm}
          alt="pink sperm"
          animation={wobbleAnimation}
          width={500}
          height={350}
          offset={25}
          style={{ transform: 'rotate(30deg)', zIndex: '1' }}></AnimatedElement>
        <AnimatedElement
          x={300}
          y={-800}
          src={sperm}
          alt="pink sperm"
          animation={wobbleAnimation}
          width={500}
          height={350}
          offset={25}
          style={{ transform: 'rotate(30deg)', zIndex: '1' }}></AnimatedElement>
        <AnimatedElement
          x={400}
          y={-400}
          src={sperm}
          alt="pink sperm"
          animation={wobbleAnimation}
          width={500}
          height={350}
          offset={25}
          style={{ transform: 'rotate(30deg)', zIndex: '1' }}></AnimatedElement>
        <AnimatedElement
          x={600}
          y={-500}
          src={sperm}
          alt="pink sperm"
          animation={wobbleAnimation}
          width={500}
          height={350}
          offset={25}
          style={{ transform: 'rotate(30deg)', zIndex: '1' }}></AnimatedElement>
      </div>
    </div>
  );
}
