import React from 'react';
import { motion } from 'framer-motion';
import { useTotem } from '../context/TotemContext';
import logoHorizontal from '../../assets/LOGO HORIZONTAL - NEGATIVA.png';

const WelcomeScreen: React.FC = () => {
  const { dispatch } = useTotem();

  const handleStartService = () => {
    dispatch({ type: 'SET_STEP', payload: 'services' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dmens-blue via-dmens-black to-dmens-blue flex flex-col items-center justify-center p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FE4C02' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="flex items-center justify-center">
            <img 
              src={logoHorizontal} 
              alt="D'Mens Barbearia" 
              className="h-32 md:h-48 lg:h-56 w-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6">
            BEM-VINDO AO
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-dmens-orange mb-8">
            TOTEM DE AUTOATENDIMENTO
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Use este totem para agendar seu atendimento de forma rápida e prática
          </p>
        </motion.div>

        {/* Start Button */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleStartService}
          className="group relative overflow-hidden bg-gradient-to-r from-dmens-orange to-orange-500 text-white px-16 py-8 rounded-2xl text-3xl md:text-4xl font-display font-bold shadow-2xl transition-all duration-300 hover:shadow-dmens-orange/25 border-2 border-dmens-orange"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-dmens-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex items-center justify-center space-x-4">
            <span>INICIAR ATENDIMENTO</span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl"
            >
              👆
            </motion.div>
          </div>
        </motion.button>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-gray-400 text-lg md:text-xl font-body"
        >
          <p>Toque na tela para começar</p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-dmens-orange/30 rounded-full" />
      <div className="absolute top-20 right-20 w-24 h-24 border-2 border-dmens-orange/20 rounded-full" />
      <div className="absolute bottom-10 left-20 w-40 h-40 border-2 border-dmens-orange/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-dmens-orange/25 rounded-full" />

      {/* Floating Animation Elements */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 right-1/4 text-6xl opacity-20"
      >
        ✂️
      </motion.div>

      <motion.div
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -5, 5, 0] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
        className="absolute bottom-1/3 left-1/4 text-5xl opacity-20"
      >
        🪒
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;