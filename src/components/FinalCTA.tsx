import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import chatIcon from '../assets/chat.png';
import livroIcon from '../assets/livro.png';

const FinalCTA: React.FC = () => {
  const handleWhatsApp = (type: 'service' | 'course') => {
    const messages = {
      service: 'Olá! Quero agendar um horário na D\'Mens Barbearia. Qual a disponibilidade?',
      course: 'Olá! Tenho interesse nos cursos da D\'Mens. Gostaria de mais informações sobre as turmas.'
    };
    
    const message = encodeURIComponent(messages[type]);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-dmens-blue to-blue-900 overflow-hidden">
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
      <div className="absolute inset-0">
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <blockquote className="text-3xl md:text-5xl font-display text-white leading-relaxed mb-8">
            <span className="text-dmens-orange">"</span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="font-display"
            >
              Pronto pra transformar o seu visual ou sua história?
            </motion.span>
            <span className="text-dmens-orange">"</span>
          </blockquote>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Seja para um corte impecável ou para dominar a arte da barbearia, 
            este é o momento de dar o próximo passo.
          </motion.p>
        </motion.div>

        {/* Logo D'Mens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-10"
        >
          <img 
            src="/logo-horizontal-negativa.png"
            alt="D'Mens Barbearia - Logo"
            className="h-12 md:h-16 lg:h-20 mx-auto object-contain"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          {/* Service CTA */}
          <motion.button
            onClick={() => handleWhatsApp('service')}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, 1, -1, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-dmens-orange text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl"
          >
            <span className="relative z-10 flex items-center space-x-3">
              <img 
                src={chatIcon} 
                alt="Chat" 
                className="w-6 h-6" 
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span>Transformar Meu Visual</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            
            {/* Button Animation Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-dmens-orange to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
          </motion.button>

          {/* Course CTA */}
          <motion.button
            onClick={() => handleWhatsApp('course')}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-transparent border-2 border-dmens-orange text-dmens-orange font-bold text-lg rounded-full overflow-hidden hover:text-white transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center space-x-3">
              <img 
                src={livroIcon} 
                alt="Livro" 
                className="w-6 h-6" 
                style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)' }}
              />
              <span>Construir Minha Carreira</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-dmens-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-dmens-orange to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-12 text-gray-400"
        >
          <p className="text-sm md:text-base">
            📍 Av. Principal, 123 - Centro | 📞 (11) 99999-9999 | ⏰ Seg-Sáb: 8h-18h
          </p>
          <p className="text-xs mt-2 opacity-70">
            Mais de 8 anos transformando vidas através do estilo e do conhecimento
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;