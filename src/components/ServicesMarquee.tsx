import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Zap, Sparkles, Crown, Coffee, User } from 'lucide-react';

const ServicesMarquee: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Corte Clássico',
      description: 'Corte tradicional com acabamento perfeito, utilizando técnicas clássicas de barbearia.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
      icon: Scissors
    },
    {
      id: 2,
      title: 'Barba Completa',
      description: 'Aparar, modelar e finalizar a barba com produtos premium e toalha quente.',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
      icon: Zap
    },
    {
      id: 3,
      title: 'Tratamento Capilar',
      description: 'Hidratação profunda e tratamentos especiais para manter o cabelo saudável.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      icon: Sparkles
    },
    {
      id: 4,
      title: 'Spa Masculino',
      description: 'Experiência relaxante com massagem facial e tratamentos de beleza masculina.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      icon: Crown
    },
    {
      id: 5,
      title: 'Consultoria de Estilo',
      description: 'Consultoria personalizada para encontrar o estilo perfeito para seu perfil.',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
      icon: User
    },
    {
      id: 6,
      title: 'Experiência Premium',
      description: 'Serviço completo com bebidas, ambiente privativo e atendimento exclusivo.',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
      icon: Coffee
    }
  ];

  // Duplicar os serviços para criar o efeito infinito
  const extendedServices = [...services, ...services];

  return (
    <section 
      id="nossos-servicos"
      className="relative bg-transparent m-0 pt-0 -mt-[5px] border-t-0 ring-0 outline-none py-16 md:py-20"
      role="region"
      aria-label="Nossos Serviços"
    >
      {/* Blur transition overlay top */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[12px] bg-gradient-to-b from-white/15 via-white/8 to-transparent backdrop-blur-sm"></div>
      
      {/* Header da Seção */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block p-3 md:p-4 bg-dmens-orange/20 rounded-full backdrop-blur-md mb-6 md:mb-8"
          >
            <Scissors className="w-10 h-10 md:w-12 md:h-12 text-dmens-orange" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-dmens-blue mb-6 md:mb-8">
            Nossos <span className="text-dmens-orange">Serviços</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto font-body leading-relaxed px-4"
          >
            Descubra todos os serviços que oferecemos para{' '}
            <span className="font-display font-bold text-dmens-orange">valorizar seu estilo</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradientes nas bordas para efeito fade */}
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white/60 to-transparent z-10 pointer-events-none" />
        
        {/* Marquee principal - direção normal */}
        <motion.div
          className="flex space-x-4 md:space-x-8 mb-8"
          animate={{
            x: [0, -100 * services.length]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: `${200 * services.length}%` }}
        >
          {extendedServices.map((service, index) => (
            <motion.div
              key={`${service.id}-${index}`}
              className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Imagem do Serviço */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Ícone do Serviço */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 p-2 md:p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-dmens-orange" />
                </div>
                
                {/* Overlay com efeito hover */}
                <div className="absolute inset-0 bg-dmens-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-dmens-blue mb-3 md:mb-4 group-hover:text-dmens-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
                
                {/* Decoração */}
                <div className="mt-4 md:mt-6 h-1 w-12 md:w-16 bg-dmens-orange rounded-full group-hover:w-20 md:group-hover:w-24 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee reverso - direção oposta */}
        <motion.div
          className="flex space-x-4 md:space-x-8 space-x-reverse"
          animate={{
            x: [-100 * services.length, 0]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: `${200 * services.length}%` }}
        >
          {extendedServices.reverse().map((service, index) => (
            <motion.div
              key={`reverse-${service.id}-${index}`}
              className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Imagem do Serviço */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Ícone do Serviço */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 p-2 md:p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-dmens-orange" />
                </div>
                
                {/* Overlay com efeito hover */}
                <div className="absolute inset-0 bg-dmens-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-dmens-blue mb-3 md:mb-4 group-hover:text-dmens-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
                
                {/* Decoração */}
                <div className="mt-4 md:mt-6 h-1 w-12 md:w-16 bg-dmens-orange rounded-full group-hover:w-20 md:group-hover:w-24 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: 1.2, 
          duration: 1,
          type: "spring",
          stiffness: 100
        }}
        className="text-center mt-16 md:mt-20 px-4"
      >
        <div className="inline-block p-6 md:p-8 bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl border border-gray-200 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-body mb-6 md:mb-8 leading-relaxed">
            Pronto para experimentar{' '}
            <span className="font-display font-bold text-dmens-orange">o melhor da barbearia?</span>
          </p>
          
          <motion.a
            href="#unidades"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(254, 76, 2, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 md:px-12 py-3 md:py-4 bg-dmens-orange text-white font-bold text-lg md:text-xl rounded-xl md:rounded-2xl hover:bg-orange-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-dmens-orange focus:ring-offset-4 focus:ring-offset-white shadow-2xl"
          >
            Agende Seu Horário
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesMarquee;
