import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import dmensSymbol from '../assets/LOGO - SÍMBOLO - PADRÃO.png';
import chatIcon from '../assets/chat.png';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChatBox, setShowChatBox] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações sobre a D\'Mens Barbearia.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    
    // Announce to screen readers
    if ((window as any).announceToScreenReader) {
      (window as any).announceToScreenReader('Abrindo WhatsApp em nova aba para conversar com a D\'Mens Barbearia');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
        >
          {/* WhatsApp Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setShowChatBox(true)}
            onMouseLeave={() => setShowChatBox(false)}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(254, 76, 2, 0.7)',
                '0 0 0 10px rgba(254, 76, 2, 0)',
                '0 0 0 0 rgba(254, 76, 2, 0)'
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative w-14 h-14 md:w-16 md:h-16 bg-dmens-orange hover:bg-orange-600 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-dmens-orange/25 focus:ring-offset-2"
            aria-label="Conversar no WhatsApp"
            title="Clique para falar conosco no WhatsApp"
          >
            <img 
              src={chatIcon} 
              alt="Chat" 
              className="w-7 h-7 md:w-8 md:h-8" 
              style={{ filter: 'brightness(0) invert(1)' }}
              aria-hidden="true" 
            />
            
            {/* Notification Badge */}
            <div 
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
              aria-label="1 nova mensagem"
            >
              <span className="text-white text-xs font-bold" aria-hidden="true">1</span>
            </div>
          </motion.button>

          {/* Chat Box - aparece apenas no hover e em telas maiores */}
          <AnimatePresence>
            {showChatBox && (
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                className="hidden md:block absolute right-20 bottom-0 mb-2"
                onMouseEnter={() => setShowChatBox(true)}
                onMouseLeave={() => setShowChatBox(false)}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 max-w-xs relative border border-gray-200">
                  <button
                    onClick={() => setShowChatBox(false)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-3 h-3 text-dmens-orange" />
                  </button>
                  
                  <div className="flex items-start space-x-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-dmens-blue"
                    >
                      <img 
                        src={dmensSymbol} 
                        alt="D'Mens Símbolo" 
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">D'Mens Barbearia</h4>
                      <p className="text-gray-600 text-xs mt-1">
                        Olá! 👋 Posso ajudar você com agendamentos ou informações sobre nossos cursos?
                      </p>
                      <p className="text-gray-400 text-xs mt-2">
                        Resposta em poucos minutos
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow pointing to button */}
                  <div className="absolute right-0 bottom-4 transform translate-x-1/2">
                    <div className="w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;