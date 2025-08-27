import React from 'react';
import ativo6Background from '../assets/Ativo 6.png';

interface BackgroundPatternProps {
  opacity?: number;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ 
  opacity = 0.6
}) => {
  return (
    <div 
      className="background-pattern-fixed"
      style={{
        backgroundImage: `url(${ativo6Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        opacity: opacity
      }}
    />
  );
};

export default BackgroundPattern;
