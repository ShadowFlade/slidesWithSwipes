const wobbleAnimation = (x,y,offset=0)=>{
  return {
    animation: [
      { transform: `translate(${x}px,${y}px)` },
      { transform: `translate(${x +offset}px,${y +offset}px)` },
      { transform: `translate(${x}px,${y}px)` },
    ],
  
    options: {
      duration: 10000,
      iterations: Infinity,
    },
  }
};

export {wobbleAnimation};
