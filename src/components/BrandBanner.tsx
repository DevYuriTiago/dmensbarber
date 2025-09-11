import React from 'react';
import { motion } from 'framer-motion';

const BrandBanner: React.FC = () => {
  // Array com múltiplas repetições da logo para o efeito infinito verdadeiro
  const repeatedLogos = Array(50).fill(null).map((_, index) => (
    <div key={index} className="flex items-center whitespace-nowrap flex-shrink-0">
      <img
        src="/LOGO - VERTICAL - MONOCROMÁTICO PRETO.png"
        alt="D'Mens Barbearia"
        className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto opacity-90 flex-shrink-0"
      />
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 w-1 h-1 bg-white/40 rounded-full flex-shrink-0" />
    </div>
  ));

  return (
    <section className="relative overflow-hidden bg-dmens-orange py-2 sm:py-3 md:py-4">
      {/* Sutil gradiente de brilho */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Container do banner com movimento infinito contínuo */}
      <div className="relative">
        <motion.div
          className="flex items-center"
          animate={{
            x: [0, -3000] // Movimento amplo para cobrir toda a largura
          }}
          transition={{
            duration: 60, // Velocidade mais lenta para melhor visualização
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{
            width: "max-content" // Garante que o conteúdo não seja cortado
          }}
        >
          {repeatedLogos}
        </motion.div>
      </div>

      {/* Gradientes fade delicados nas bordas - responsivos */}
      <div className="absolute left-0 top-0 w-4 sm:w-6 md:w-8 lg:w-12 h-full bg-gradient-to-r from-dmens-orange to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 w-4 sm:w-6 md:w-8 lg:w-12 h-full bg-gradient-to-l from-dmens-orange to-transparent pointer-events-none z-10" />
      
      {/* Linha sutil superior para definição */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />
    </section>
  );
};

export default BrandBanner;
