export const playSound = () => {
    const audio = new Audio('../../beep.mp3'); 
    audio.play().catch((error) => {
      console.error('Failed to play sound:', error);
    });
  };