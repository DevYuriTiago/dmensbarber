import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';
import tesouraIcon from '../assets/tesoura.png';

const ServicesMarquee: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Barba com Ozonioterapia',
      description: 'Tratamento de barba com ozonioterapia para desinfecção e revitalização profunda.',
      image: '/serviços/barba-com-ozonioterapia.webp',
      icon: tesouraIcon
    },
    {
      id: 2,
      title: 'Corte',
      description: 'Corte de cabelo profissional com técnicas modernas e acabamento impecável.',
      image: '/serviços/corte.webp',
      icon: Scissors
    },
    {
      id: 3,
      title: 'Corte Infantil',
      description: 'Corte especializado para crianças com atendimento cuidadoso e descontraído.',
      image: '/serviços/corte-infantil.webp',
      icon: Scissors
    },
    {
      id: 4,
      title: 'Epilação Nasal',
      description: 'Remoção de pelos do nariz com técnica segura e indolor.',
      image: '/serviços/epilacao-nasal.webp',
      icon: tesouraIcon
    },
    {
      id: 5,
      title: 'Esfoliação Facial',
      description: 'Limpeza profunda com esfoliação para remover impurezas e células mortas da pele.',
      image: '/serviços/esfoliacao-facial.webp',
      icon: tesouraIcon
    },
    {
      id: 6,
      title: 'Higienização Capilar',
      description: 'Limpeza profunda do couro cabeludo para cabelos mais saudáveis.',
      image: '/serviços/higienizacao-capilar.webp',
      icon: tesouraIcon
    },
    {
      id: 7,
      title: 'Luzes',
      description: 'Aplicação de luzes e mechas para um visual moderno e iluminado.',
      image: '/serviços/luzes.webp',
      icon: tesouraIcon
    },
    {
      id: 8,
      title: 'Máscara Black',
      description: 'Tratamento com máscara black para limpeza profunda dos poros.',
      image: '/serviços/mascara-black.webp',
      icon: tesouraIcon
    },
    {
      id: 9,
      title: 'Platinado',
      description: 'Descoloração completa para um visual platinado exclusivo e marcante.',
      image: '/serviços/platinado.webp',
      icon: tesouraIcon
    },
    {
      id: 10,
      title: 'Selagem',
      description: 'Selagem capilar para proteção, brilho intenso e fios disciplinados.',
      image: '/serviços/selagem.webp',
      icon: tesouraIcon
    },
    {
      id: 11,
      title: 'Sobrancelha',
      description: 'Design e modelagem de sobrancelhas para um visual marcante.',
      image: '/serviços/sobrancelha.webp',
      icon: tesouraIcon
    }
  ];

  // Duplicar os serviços 3 vezes para garantir loop infinito perfeito
  const extendedServices = [...services, ...services, ...services];

  return (
    <section 
      id="nossos-servicos"
      className="relative m-0 p-0 pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 border-0 -mt-[15vh] md:-mt-[20vh]"
      style={{ backgroundColor: 'transparent', zIndex: 10 }}
      role="region"
      aria-label="Nossos Serviços"
    >
      
      {/* Header da Seção */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-dmens-blue mb-6 md:mb-8">
            Nossos Serviços
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto font-body leading-relaxed drop-shadow-lg"
          >
            Descubra todos os serviços que oferecemos para{' '}
            <span className="font-display font-bold text-dmens-orange">valorizar seu estilo</span>
          </motion.p>
        </motion.div>
      </div>      {/* Marquee Container */}
      <div className="relative py-16">
        {/* Gradientes nas bordas para efeito fade */}
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white/60 to-transparent z-10 pointer-events-none" />
        
        {/* Marquee principal - direção normal */}
        <div className="mb-12 overflow-x-hidden">
          <motion.div
            animate={{
              x: [0, -(services.length * 272)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
            className="flex space-x-6"
          >
            {extendedServices.map((service, index) => (
              <motion.div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                whileHover={{ scale: 1.05, y: -8, zIndex: 20 }}
              >
                {/* Imagem do Serviço - Proporção 3:4 (Retrato) */}
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Ícone do Serviço */}
                  <div className="absolute top-3 right-3 p-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                    {service.icon === tesouraIcon ? (
                      <img src={service.icon} alt="Tesoura" className="w-5 h-5" style={{ filter: "invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)" }} />
                    ) : (
                      <service.icon className="w-5 h-5 text-dmens-orange" />
                    )}
                  </div>
                  
                  {/* Overlay com efeito hover */}
                  <div className="absolute inset-0 bg-dmens-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-dmens-blue mb-2 group-hover:text-dmens-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-body leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Decoração */}
                  <div className="mt-4 h-1 w-12 bg-dmens-orange rounded-full group-hover:w-16 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Marquee reverso - direção oposta */}
        <div className="overflow-x-hidden">
          <motion.div
            animate={{
              x: [-(services.length * 272), 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
            className="flex space-x-6"
          >
            {extendedServices.map((service, index) => (
              <motion.div
                key={`reverse-${service.id}-${index}`}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                whileHover={{ scale: 1.05, y: -8, zIndex: 20 }}
              >
                {/* Imagem do Serviço - Proporção 3:4 (Retrato) */}
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Ícone do Serviço */}
                  <div className="absolute top-3 right-3 p-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                    {service.icon === tesouraIcon ? (
                      <img src={service.icon} alt="Tesoura" className="w-5 h-5" style={{ filter: "invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)" }} />
                    ) : (
                      <service.icon className="w-5 h-5 text-dmens-orange" />
                    )}
                  </div>
                  
                  {/* Overlay com efeito hover */}
                  <div className="absolute inset-0 bg-dmens-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-dmens-blue mb-2 group-hover:text-dmens-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-body leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Decoração */}
                  <div className="mt-4 h-1 w-12 bg-dmens-orange rounded-full group-hover:w-16 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
