import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, BookOpen } from 'lucide-react';
import logoSelo from '../assets/LOGO SELO - NEGATIVA.png';

const Hero: React.FC = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = 'Estilo. Confiança. Tradição.';

  useEffect(() => {
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
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário na D\'Mens Barbearia.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    
    // Announce to screen readers
    if ((window as any).announceToScreenReader) {
      (window as any).announceToScreenReader('Redirecionando para WhatsApp para agendamento');
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dmens-blue via-blue-900 to-dmens-blue"
      role="banner"
      aria-label="Seção principal da D'Mens Barbearia"
    >
      {/* Background Video Effect */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dmens-blue/80 via-transparent to-dmens-blue/40" aria-hidden="true" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-dmens-orange rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          {/* Logo D'Mens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-8"
          >
            <img 
              src={logoSelo}
              alt="D'Mens Barbearia - Logo"
              className="h-20 md:h-24 lg:h-28 mx-auto object-contain"
            />
          </motion.div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6">
            <span className="block text-dmens-orange">
              {typingText}
              <span className="animate-pulse" aria-hidden="true">|</span>
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
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
          className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-20"
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
            className="group relative px-8 py-4 bg-dmens-orange text-white font-bold text-lg rounded-full overflow-hidden animate-pulse-orange focus:outline-none focus:ring-4 focus:ring-dmens-orange focus:ring-offset-2 focus:ring-offset-dmens-blue"
            aria-label="Agendar horário via WhatsApp"
          >
            <span className="relative z-10 flex items-center space-x-3">
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
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
            className="group px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:border-dmens-orange hover:text-dmens-orange transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-dmens-blue"
            aria-label="Navegar para seção de cursos"
          >
            <span className="flex items-center space-x-3">
              <BookOpen className="w-6 h-6" aria-hidden="true" />
              <span>Conhecer Cursos</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6, duration: 1 }}
          className="absolute -bottom-16 md:-bottom-20 left-1/2 transform -translate-x-1/2 z-10"
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
            className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-dmens-blue/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-dmens-orange focus:ring-offset-2 focus:ring-offset-dmens-blue"
          >
            <div className="w-1 h-3 bg-dmens-orange rounded-full mt-2 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;