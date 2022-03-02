import React from 'react';
import hedge from '../animated-element/hedgehog.png';
import halfHedge from '../animated-element/hedgehog.png';
import ball from '../animated-element/ball.png';
import stick from '../animated-element/stick.png';
import pinkSperm from '../animated-element/pink_sperm.png';
import AnimatedElement from '../animated-element/animated-element';
import { wobbleAnimation } from '../../animations/animations';
import Button from '../button/button';
import './main.scss';

export default function Main({ onClick }) {
  return (
    <div className="main">
      <div className="main__inner">
        <AnimatedElement
          x={-100}
          y={-10}
          src={stick}
          alt="blue molecule in form of a stick"
          animation={wobbleAnimation}
          width={100}
          height={80}
          offset={10}
          style={{ transform: 'rotate(15deg)' }}></AnimatedElement>
        <AnimatedElement
          x={700}
          y={-65}
          src={ball}
          alt="blue molecule in form of a ball"
          animation={wobbleAnimation}
          width={60}
          height={60}
          offset={25}></AnimatedElement>
        <AnimatedElement
          x={800}
          y={70}
          src={hedge}
          alt="blue molecule in form of a hedgehog"
          animation={wobbleAnimation}
          width={100}
          height={100}
          offset={25}></AnimatedElement>
        <AnimatedElement
          x={350}
          y={50}
          src={pinkSperm}
          alt="pink sperm"
          animation={wobbleAnimation}
          width={550}
          height={200}
          offset={25}></AnimatedElement>
        <AnimatedElement
          x={200}
          y={300}
          src={pinkSperm}
          alt="pink sperm"
          animation={wobbleAnimation}
          width={150}
          height={100}
          style={{ transform: 'rotate(170deg)' }}
          offset={100}></AnimatedElement>
        <AnimatedElement
          x={-50}
          y={350}
          src={ball}
          alt="blue molecule in form of a ball"
          animation={wobbleAnimation}
          width={80}
          height={80}
          offset={25}
          style={{ zIndex: '1' }}></AnimatedElement>
        <AnimatedElement
          x={650}
          y={580}
          src={halfHedge}
          alt="blue molecule in form of a ball"
          animation={wobbleAnimation}
          width={200}
          height={200}
          offset={25}></AnimatedElement>
        <AnimatedElement
          x={850}
          y={-80}
          src={ball}
          alt="blue molecule in form of a ball"
          animation={wobbleAnimation}
          width={40}
          height={40}
          offset={25}
          style={{ filter: 'blur(13px)' }}></AnimatedElement>
        <AnimatedElement
          x={250}
          y={550}
          src={ball}
          alt="blue molecule in form of a ball"
          animation={wobbleAnimation}
          width={35}
          height={35}
          offset={25}
          style={{ filter: 'blur(13px)' }}></AnimatedElement>
        <AnimatedElement
          x={300}
          y={0}
          src={pinkSperm}
          alt="pink sperm"
          animation={wobbleAnimation}
          width={600}
          height={600}
          offset={100}
          style={{
            transform: 'rotate(160deg)',
            filter: 'blur(8px)',
          }}></AnimatedElement>
        <div className="main__message">
          <div className="main__small-text">привет,</div>
          <p className="main__text">
            это <b>не</b> коммерческое задание
            <span className="main__button">
              <Button
                onClick={onClick}
                text="Что дальше?"
                color="white"
                element="arrow"></Button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
