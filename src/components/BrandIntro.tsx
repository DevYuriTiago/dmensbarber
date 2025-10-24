import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './BrandIntro.css';

interface BrandIntroProps {
  onComplete?: () => void;
}

const BrandIntro: React.FC<BrandIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDiagonalOpen, setIsDiagonalOpen] = useState(false);
  const [showDivision, setShowDivision] = useState(false);
  const [lastFrameImage, setLastFrameImage] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // TEMPORÁRIO: Limpar sessionStorage para sempre mostrar o vídeo (COMENTAR ANTES DO DEPLOY!)
    sessionStorage.removeItem('brandIntroPlayed');
    
    // Verificar se já foi reproduzido nesta sessão
    const introPlayed = sessionStorage.getItem('brandIntroPlayed');
    
    if (introPlayed === 'true') {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }
  }, [onComplete]);

  const captureLastFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (video && canvas) {
      // Configurar canvas com as dimensões do vídeo
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Desenhar o frame atual do vídeo no canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Converter canvas para imagem base64
        const imageData = canvas.toDataURL('image/png');
        setLastFrameImage(imageData);
        
        console.log('Último frame capturado!');
      }
    }
  };

  const handleVideoEnd = () => {
    console.log('Vídeo terminou - capturando último frame');
    
    // Capturar o último frame do vídeo
    captureLastFrame();
    
    // Mostrar as divs com o último frame
    setShowDivision(true);
    
    // Pequena pausa no último frame antes de abrir
    setTimeout(() => {
      console.log('Iniciando abertura diagonal');
      sessionStorage.setItem('brandIntroPlayed', 'true');
      setIsDiagonalOpen(true);
      
      // Remove tudo após a animação
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
        document.body.style.overflow = 'auto';
      }, 1600);
    }, 300); // Pausa de 300ms no último frame
  };

  const handleSkip = () => {
    console.log('Skip clicado');
    captureLastFrame();
    sessionStorage.setItem('brandIntroPlayed', 'true');
    setShowDivision(true);
    setIsDiagonalOpen(true);
    
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
      document.body.style.overflow = 'auto';
    }, 1600);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Canvas oculto para capturar o último frame */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Vídeo único - sempre tocando */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: showDivision ? -1 : 9998,
          opacity: showDivision ? 0 : 1
        }}
      >
        <source src="/Brand_Intro_Video_Generation.mp4" type="video/mp4" />
      </video>

      {/* Divisão visual com imagem estática do último frame */}
      {showDivision && lastFrameImage && (
        <>
          {/* Parte Superior (triângulo) */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 9998,
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              transform: isDiagonalOpen ? 'translate(-110%, -110%) rotate(-3deg)' : 'translate(0, 0) rotate(0deg)',
              transition: 'transform 1.5s cubic-bezier(0.77, 0, 0.175, 1)',
              willChange: 'transform',
              backgroundImage: `url(${lastFrameImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Parte Inferior (triângulo) */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 9998,
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
              transform: isDiagonalOpen ? 'translate(110%, 110%) rotate(3deg)' : 'translate(0, 0) rotate(0deg)',
              transition: 'transform 1.5s cubic-bezier(0.77, 0, 0.175, 1)',
              willChange: 'transform',
              backgroundImage: `url(${lastFrameImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </>
      )}

      {/* Botão Skip */}
      {!isDiagonalOpen && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={handleSkip}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 9999,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontWeight: 600,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Pular Introdução
        </motion.button>
      )}
    </>
  );
};

export default BrandIntro;
