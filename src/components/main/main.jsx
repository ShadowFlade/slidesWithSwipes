import React, { useState } from 'react';
import bg from './bg.png';
import './main.scss';
import Hedgehog from '../hedgehog/hedgehog';
export default function Main() {
  const [backgroundPic, setBackgroundPic] = useState(bg);
  return (
    <div
      className="main"
      style={{
        height: '500px',
        backgroundImage: `url(${backgroundPic})`,
      }}>
      <Hedgehog x={50} y={50}></Hedgehog>
    </div>
  );
}
