import React, { useEffect, useRef } from 'react';

export default function AnimatedElement({
  src,
  alt,
  animation,
  x,
  y,
  name,
  width,
  height,
  opacity,
  amplify,
}) {
  const element = useRef();
  useEffect(() => {
    const anime = animation(x, y, amplify);
    element.current.animate(anime.animation, anime.options);
  }, []);
  return (
    <div
      className="anime"
      style={{ width, height, position: 'absolute', top: y, left: x, opacity }}>
      <img ref={element} src={src} alt={alt} style={{ width: '100%' }} />
    </div>
  );
}
