import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Zap, Sparkles, Crown, Coffee, User } from 'lucide-react';
import tesouraIcon from '../assets/tesoura.png';

const ServicesMarquee: React.FC = () => {
  const [isHoveredFirst, setIsHoveredFirst] = React.useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = React.useState(false);
  const controlsFirst = useAnimation();
  const controlsSecond = useAnimation();

  const services = [
    {
      id: 1,
      title: 'Esfoliação Facial',
      description: 'Limpeza profunda com esfoliação para remover impurezas e células mortas da pele.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
      icon: tesouraIcon
    },
    {
      id: 2,
      title: 'Epilação Nasal',
      description: 'Remoção de pelos do nariz com técnica segura e indolor.',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
      icon: Zap
    },
    {
      id: 3,
      title: 'Pé e Mão Aveludado',
      description: 'Tratamento completo para pés e mãos deixando a pele macia e hidratada.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      icon: Sparkles
    },
    {
      id: 4,
      title: 'Higienização Capilar',
      description: 'Limpeza profunda do couro cabeludo para cabelos mais saudáveis.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      icon: Crown
    },
    {
      id: 5,
      title: 'Hidratação Cabelo ou Barba',
      description: 'Hidratação intensiva para cabelo ou barba com produtos premium.',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
      icon: User
    },
    {
      id: 6,
      title: 'Sobrancelha',
      description: 'Design e modelagem de sobrancelhas para um visual marcante.',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
      icon: Coffee
    },
    {
      id: 7,
      title: 'Coloração Cabelo',
      description: 'Coloração profissional de cabelo com produtos de alta qualidade.',
      image: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=800&q=80',
      icon: tesouraIcon
    },
    {
      id: 8,
      title: 'Coloração Barba',
      description: 'Coloração especializada para barba com tons naturais.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      icon: Zap
    },
    {
      id: 9,
      title: 'Pezinho',
      description: 'Acabamento perfeito na nuca e contornos para um visual impecável.',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
      icon: Sparkles
    },
    {
      id: 10,
      title: 'Alisamento',
      description: 'Alisamento profissional para cabelos mais lisos e disciplinados.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
      icon: Crown
    },
    {
      id: 11,
      title: 'Selagem',
      description: 'Selagem capilar para proteção e brilho intenso.',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
      icon: User
    },
    {
      id: 12,
      title: 'Luzes',
      description: 'Aplicação de luzes e mechas para um visual moderno.',
      image: 'https://images.unsplash.com/photo-1534438097545-f8c41e537e0c?auto=format&fit=crop&w=800&q=80',
      icon: Coffee
    },
    {
      id: 13,
      title: 'Platinado Global',
      description: 'Descoloração completa para um visual platinado exclusivo.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
      icon: tesouraIcon
    },
    {
      id: 14,
      title: 'Corte + Barba',
      description: 'Serviço completo com corte de cabelo e barba modelada.',
      image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80',
      icon: Zap
    }
  ];

  // Duplicar os serviços para criar o efeito infinito
  const extendedServices = [...services, ...services];

  // Efeito para controlar a animação do primeiro marquee
  React.useEffect(() => {
    if (!isHoveredFirst) {
      controlsFirst.start({
        x: [0, -100 * services.length],
        transition: {
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }
      });
    } else {
      controlsFirst.stop();
    }
  }, [isHoveredFirst, controlsFirst, services.length]);

  // Efeito para controlar a animação do segundo marquee
  React.useEffect(() => {
    if (!isHoveredSecond) {
      controlsSecond.start({
        x: [-100 * services.length, 0],
        transition: {
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }
      });
    } else {
      controlsSecond.stop();
    }
  }, [isHoveredSecond, controlsSecond, services.length]);

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
            <img 
              src={tesouraIcon} 
              alt="Tesoura" 
              className="w-10 h-10 md:w-12 md:h-12" 
              style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)' }}
            />
          </motion.div>          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-dmens-blue mb-6 md:mb-8">
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
          drag="x"
          dragConstraints={{ left: -100 * services.length, right: 0 }}
          dragElastic={0.1}
          onHoverStart={() => setIsHoveredFirst(true)}
          onHoverEnd={() => setIsHoveredFirst(false)}
          animate={controlsFirst}
          className="flex space-x-4 md:space-x-8 mb-8 cursor-grab active:cursor-grabbing"
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
                  {service.icon === tesouraIcon ? (<img src={service.icon} alt="Tesoura" className="w-5 h-5 md:w-6 md:h-6" style={{ filter: "invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)" }} />) : (<service.icon className="w-5 h-5 md:w-6 md:h-6 text-dmens-orange" />)}
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
          drag="x"
          dragConstraints={{ left: 0, right: 100 * services.length }}
          dragElastic={0.1}
          onHoverStart={() => setIsHoveredSecond(true)}
          onHoverEnd={() => setIsHoveredSecond(false)}
          animate={controlsSecond}
          className="flex space-x-4 md:space-x-8 space-x-reverse cursor-grab active:cursor-grabbing"
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
                  {service.icon === tesouraIcon ? (<img src={service.icon} alt="Tesoura" className="w-5 h-5 md:w-6 md:h-6" style={{ filter: "invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)" }} />) : (<service.icon className="w-5 h-5 md:w-6 md:h-6 text-dmens-orange" />)}
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
