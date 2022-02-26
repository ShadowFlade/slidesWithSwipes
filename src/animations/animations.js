const wobbleAnimation = (x,y)=>{
  return {
    animation: [
      { transform: `translate(${x}px,${y}px)` },
      { transform: 'translate(-25px,-15px)' },
      { transform: `translate(${x}px,${y}px)` },
    ],
  
    options: {
      duration: 10000,
      iterations: Infinity,
    },
  }
};

export {wobbleAnimation};