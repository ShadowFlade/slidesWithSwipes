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
}) {
  const element = useRef();
  useEffect(() => {
    const anime = animation(x, y);
    element.current.animate(anime.animation, anime.options);
  }, []);
  return (
    <div
      className="anime"
      style={{ width, height, position: 'absolute', top: y, left: x }}>
      <img ref={element} src={src} alt={alt} style={{ width: '100%' }} />
    </div>
  );
}
