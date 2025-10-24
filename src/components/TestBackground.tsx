import React from 'react';

const TestBackground: React.FC = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        // ATIVO6 REMOVIDO TEMPORARIAMENTE
        // backgroundImage: 'url(/ativo6.png)',
        backgroundImage: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        opacity: 0.6
      }}
    />
  );
};

export default TestBackground;
