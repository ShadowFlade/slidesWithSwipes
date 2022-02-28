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
  style,
  offset,
}) {
  const element = useRef();
  useEffect(() => {
    const anime = animation(x, y, offset);
    element.current.animate(anime.animation, anime.options);
  }, []);
  return (
    <div
      className="anime"
      style={{
        ...style,
        width,
        height,
        position: 'absolute',
        opacity,
        x,
        y,
      }}>
      <img ref={element} src={src} alt={alt} style={{ width: '100%' }} />
    </div>
  );
}
