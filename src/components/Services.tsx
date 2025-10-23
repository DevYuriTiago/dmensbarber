import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import iconeCabelo from '../assets/icone-cabelo.png';
import iconeCompleto from '../assets/icone-completo.png';
import iconeBarba from '../assets/icone-barba.png';
import ativo01 from '/ativo01-full.png';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Corte ilimitado',
      price: 'R$ 64,90',
      duration: 'Ilimitado',
      features: [
        'Corte seu cabelo quantas vezes quiser',
        'Desconto de 10% em produtos ou serviços',
        'Pagamento no cartão de crédito'
      ],
      icon: iconeCabelo,
      popular: false
    },
    {
      title: 'Corte + Barba ilimitado',
      price: 'R$ 124,90',
      duration: 'Ilimitado',
      features: [
        'Corte e barba quantas vezes quiser',
        'Desconto de 10% em produtos ou serviços',
        'Pagamento no cartão de crédito'
      ],
      icon: iconeCompleto,
      popular: true
    },
    {
      title: 'Barba ilimitado',
      price: 'R$ 79,90',
      duration: 'Ilimitado',
      features: [
        'Corte sua barba quantas vezes quiser',
        'Desconto de 10% em produtos ou serviços',
        'Pagamento no cartão de crédito'
      ],
      icon: iconeBarba,
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="servicos" 
      className="relative m-0 p-0 -mt-[5vh] md:-mt-[10vh]"
      role="region"
      aria-label="Seção de serviços da barbearia"
      style={{
        backgroundImage: `url(${ativo01})`,
        backgroundSize: '100vw 120%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        minHeight: '130vh',
        paddingTop: '12vh',
        paddingBottom: '0',
        zIndex: 10
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dmens-orange mb-3 md:mb-4">
            Nossos Planos
          </h2>
          <p className="text-2xl md:text-3xl text-white max-w-4xl mx-auto font-body leading-relaxed drop-shadow-lg">
            Experiências únicas que combinam tradição e modernidade para o homem contemporâneo
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 md:gap-6 items-center"
          role="list"
          aria-label="Lista de serviços disponíveis"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: service.popular ? -10 : -8,
                scale: service.popular ? 1.05 : 1.03,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-white/85 backdrop-blur-sm rounded-2xl shadow-xl border-2 transform perspective-1000 ${
                service.popular 
                  ? 'border-dmens-orange shadow-dmens-orange/20 p-6 md:p-8 md:my-0 md:mx-[-0.5rem]' 
                  : 'border-gray-200 hover:border-dmens-orange/50 p-5 md:p-6'
              }`}
              role="listitem"
              aria-label={`Serviço ${service.title} por ${service.price}`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="bg-dmens-orange text-white px-4 py-1.5 rounded-full text-xs font-bold animate-bounce-slow"
                    aria-label="Serviço mais popular"
                  >
                    MAIS POPULAR
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className={`rounded-full ${
                  service.popular 
                    ? 'bg-dmens-orange text-white p-3 md:p-4' 
                    : 'bg-gray-100 text-dmens-blue p-3'
                }`}>
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className={service.popular ? 'w-12 h-12 md:w-16 md:h-16' : 'w-10 h-10 md:w-12 md:h-12'}
                    style={{ 
                      filter: service.popular 
                        ? 'brightness(0) invert(1)' 
                        : 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)'
                    }}
                    aria-hidden="true" 
                  />
                </div>
              </div>

              {/* Title & Price */}
              <div className="text-center mb-4 md:mb-6">
                <h3 className={`font-display font-bold text-dmens-blue mb-2 ${
                  service.popular ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                }`}>
                  {service.title}
                </h3>
                <div className="flex items-center justify-center space-x-2 md:space-x-3">
                  <span className={`font-bold text-dmens-orange ${
                    service.popular ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
                  }`}>
                    {service.price}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" aria-hidden="true" />
                    <span className="text-xs md:text-sm" aria-label={`Duração: ${service.duration}`}>
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-4 md:mb-6" aria-label={`Características do serviço ${service.title}`}>
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex }}
                    className="flex items-center text-gray-700 text-xs md:text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-dmens-orange rounded-full mr-2 flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open('https://cashbarber.com.br/dmens', '_blank');
                }}
                className={`w-full py-2 md:py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 touch-target ${
                  service.popular
                    ? 'bg-dmens-orange text-white hover:bg-dmens-orange/90 shadow-lg hover:shadow-xl focus:ring-dmens-orange focus:ring-offset-white'
                    : 'bg-dmens-blue text-white hover:bg-dmens-orange focus:ring-dmens-blue focus:ring-offset-white'
                }`}
                aria-label={`Assinar plano ${service.title} por ${service.price}`}
              >
                Assinar Plano
              </motion.button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;