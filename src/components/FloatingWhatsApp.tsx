import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after 3 seconds
      setTimeout(() => setShowTooltip(true), 3000);
      // Hide tooltip after 8 seconds
      setTimeout(() => setShowTooltip(false), 8000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações sobre a D\'Mens Barbearia.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* WhatsApp Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(37, 211, 102, 0.7)',
                '0 0 0 10px rgba(37, 211, 102, 0)',
                '0 0 0 0 rgba(37, 211, 102, 0)'
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300"
          >
            <MessageCircle className="w-8 h-8 text-white" />
            
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </motion.button>

          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                className="absolute right-20 bottom-0 mb-2"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 max-w-xs relative border border-gray-200">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-3 h-3 text-gray-600" />
                  </button>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
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