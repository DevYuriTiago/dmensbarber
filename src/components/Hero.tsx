import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logoSelo from '../assets/LOGO SELO - NEGATIVA.png';
import chatIcon from '../assets/chat.png';
import livroIcon from '../assets/livro.png';
import ativo4 from '/Ativo 4.png';

interface HeroProps {
  startAnimations?: boolean;
}

const Hero: React.FC<HeroProps> = ({ startAnimations = true }) => {
  const [typingText, setTypingText] = useState('');
  const fullText = 'Estilo. Confiança. Tradição.';

  useEffect(() => {
    if (!startAnimations) return; // Não anima se não deve começar
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [startAnimations]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Vim pelo site da D\'Mens Barbearia e gostaria de agendar um horário.');
    window.open(`https://wa.me/5581987979894?text=${message}`, '_blank');
    
    // Announce to screen readers
    if ((window as any).announceToScreenReader) {
      (window as any).announceToScreenReader('Redirecionando para WhatsApp para agendamento');
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: startAnimations ? 1 : 0 }}
      transition={{ duration: 1, delay: startAnimations ? 0.5 : 0 }}
      style={{ pointerEvents: startAnimations ? 'auto' : 'none' }}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-dmens-blue to-blue-900"
      role="banner"
      aria-label="Seção principal da D'Mens Barbearia"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dmens-blue via-transparent to-dmens-blue" />
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FE4C02' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            className="absolute w-4 h-4 bg-dmens-orange/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Decorative Ativo4 Elements - Blurred in foreground */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Ativo4 - Esquerda Superior */}
        <motion.img
          src={ativo4}
          alt=""
          initial={{ opacity: 0, x: -100, rotate: -15 }}
          animate={{ 
            opacity: 0.4,
            x: 0,
            rotate: -10,
            y: [0, 20, 0]
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 1 },
            rotate: { duration: 1 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -left-20 top-40 w-48 md:w-64 lg:w-80 opacity-40"
          style={{ filter: 'blur(2px)' }}
        />

        {/* Ativo4 - Direita Meio */}
        <motion.img
          src={ativo4}
          alt=""
          initial={{ opacity: 0, x: 100, rotate: 15 }}
          animate={{ 
            opacity: 0.3,
            x: 0,
            rotate: 20,
            y: [0, -30, 0]
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.3 },
            x: { duration: 1.2, delay: 0.3 },
            rotate: { duration: 1.2, delay: 0.3 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          className="absolute -right-16 top-1/3 w-40 md:w-56 lg:w-72 opacity-30"
          style={{ filter: 'blur(3px)' }}
        />

        {/* Ativo4 - Esquerda Inferior */}
        <motion.img
          src={ativo4}
          alt=""
          initial={{ opacity: 0, x: -100, rotate: 25 }}
          animate={{ 
            opacity: 0.35,
            x: 0,
            rotate: 15,
            y: [0, 25, 0]
          }}
          transition={{
            opacity: { duration: 1.5, delay: 0.6 },
            x: { duration: 1.5, delay: 0.6 },
            rotate: { duration: 1.5, delay: 0.6 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute -left-24 bottom-32 w-52 md:w-72 lg:w-96 opacity-35"
          style={{ filter: 'blur(4px)' }}
        />

        {/* Ativo4 - Direita Inferior (Mobile hidden) */}
        <motion.img
          src={ativo4}
          alt=""
          initial={{ opacity: 0, x: 100, rotate: -20 }}
          animate={{ 
            opacity: 0.25,
            x: 0,
            rotate: -15,
            y: [0, -20, 0]
          }}
          transition={{
            opacity: { duration: 1.8, delay: 0.9 },
            x: { duration: 1.8, delay: 0.9 },
            rotate: { duration: 1.8, delay: 0.9 },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
          }}
          className="hidden md:block absolute -right-20 bottom-20 w-36 md:w-48 lg:w-64 opacity-25"
          style={{ filter: 'blur(5px)' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 md:mb-8"
        >
          {/* Logo D'Mens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-6 md:mb-8"
          >
            <img 
              src={logoSelo}
              alt="D'Mens Barbearia - Logo"
              className="h-20 md:h-24 lg:h-28 mx-auto object-contain"
            />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-3 md:mb-4 px-2">
            <span className="block text-dmens-orange">
              {typingText}
              <span className="animate-pulse" aria-hidden="true">|</span>
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4"
          >
            Transforme seu visual com nossos serviços premium ou inicie sua carreira 
            com nossos cursos profissionalizantes de excelência.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch md:items-center relative z-20 px-4 max-w-2xl mx-auto mt-6 md:mt-8"
          role="group"
          aria-label="Ações principais"
        >
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(254, 76, 2, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-dmens-orange text-white font-bold text-base md:text-lg rounded-full overflow-hidden animate-pulse-orange focus:outline-none focus:ring-4 focus:ring-dmens-orange focus:ring-offset-2 focus:ring-offset-dmens-blue"
            aria-label="Agendar horário via WhatsApp"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2 md:space-x-3">
              <img 
                src={chatIcon} 
                alt="Chat" 
                className="w-5 h-5 md:w-6 md:h-6" 
                style={{ filter: 'brightness(0) invert(1)' }}
                aria-hidden="true" 
              />
              <span>Agendar Agora</span>
            </span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ 
              scale: 1.05,
              borderColor: '#FE4C02',
              color: '#FE4C02'
            }}
            whileTap={{ scale: 0.95 }}
            className="group w-full md:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-bold text-base md:text-lg rounded-full hover:border-dmens-orange hover:text-dmens-orange transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmens-blue"
            aria-label="Navegar para seção de cursos"
          >
            <span className="flex items-center justify-center space-x-2 md:space-x-3">
              <img 
                src={livroIcon} 
                alt="Livro" 
                className="w-5 h-5 md:w-6 md:h-6" 
                style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)' }}
                aria-hidden="true" 
              />
              <span>Conhecer Cursos</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6, duration: 1 }}
          className="mt-12 md:mt-16"
          role="button"
          tabIndex={0}
          aria-label="Rolar para baixo para ver mais conteúdo"
          onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-7 h-11 border-2 border-white/80 rounded-full flex justify-center bg-dmens-blue/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-dmens-orange focus:ring-offset-2 focus:ring-offset-dmens-blue shadow-lg mx-auto"
          >
            <div className="w-1.5 h-3 bg-dmens-orange rounded-full mt-2 animate-bounce shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;