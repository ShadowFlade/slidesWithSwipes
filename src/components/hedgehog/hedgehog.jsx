import React, { useEffect, useRef } from 'react';
import pic from './hedgehog.png';
export default function Hedgehog({ x, y }) {
  const hedgehog = useRef();
  const wobbleAnimation = {
    animation: [
      { transform: `translate(${x}px,${y}px)` },
      { transform: 'translate(-25px,-15px)' },
      { transform: `translate(${x}px,${y}px)` },
    ],

    options: {
      duration: 10000,
      iterations: Infinity,
    },
  };
  useEffect(() => {
    console.log(hedgehog);
    hedgehog.current.animate(
      wobbleAnimation.animation,
      wobbleAnimation.options
    );
  }, []);

  return (
    <div
      ref={hedgehog}
      className="hedgehog"
      style={{ position: 'absolute', top: `${y}px`, left: `${x}px` }}>
      <img
        src={pic}
        alt="blue molecule with thorns"
        className="hedgehog__pic"
      />
    </div>
  );
}
// .Layer_8 {
//   background-image: url("Layer 8.png");
//   position: absolute;
//   left: 1723px;
//   top: 401px;

//   z-index: 17;
// }
