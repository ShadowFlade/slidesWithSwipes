const wobbleAnimation = (x,y,amplify)=>{
  return {
    animation: [
      { transform: `translate(${x*amplify}px,${y*amplify}px)` },
      { transform: `translate(-${x*amplify}px,-${y*amplify}px)` },
      { transform: `translate(${x*amplify}px,${y*amplify}px)` },
    ],
  
    options: {
      duration: 10000,
      iterations: Infinity,
    },
  }
};

export {wobbleAnimation};