import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import iconeCabelo from '../assets/icone-cabelo.png';
import iconeCompleto from '../assets/icone-completo.png';
import iconeBarba from '../assets/icone-barba.png';

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
      className="py-20 bg-white/70 backdrop-blur-sm"
      role="region"
      aria-label="Seção de serviços da barbearia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-dmens-blue mb-6">
            Nossos <span className="text-dmens-orange">Planos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiências únicas que combinam tradição e modernidade para o homem contemporâneo
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center"
          role="list"
          aria-label="Lista de serviços disponíveis"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: service.popular ? -15 : -10,
                scale: service.popular ? 1.08 : 1.05,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-white/85 backdrop-blur-sm rounded-3xl shadow-2xl border-2 transform perspective-1000 ${
                service.popular 
                  ? 'border-dmens-orange shadow-dmens-orange/20 p-10 md:p-12 md:my-0 md:mx-[-1rem]' 
                  : 'border-gray-200 hover:border-dmens-orange/50 p-8'
              }`}
              role="listitem"
              aria-label={`Serviço ${service.title} por ${service.price}`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="bg-dmens-orange text-white px-6 py-2 rounded-full text-sm font-bold animate-bounce-slow"
                    aria-label="Serviço mais popular"
                  >
                    MAIS POPULAR
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`rounded-full ${
                  service.popular 
                    ? 'bg-dmens-orange text-white p-5 md:p-6' 
                    : 'bg-gray-100 text-dmens-blue p-4'
                }`}>
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className={service.popular ? 'w-16 h-16 md:w-20 md:h-20' : 'w-12 h-12 md:w-14 md:h-14'}
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
              <div className="text-center mb-8">
                <h3 className={`font-display font-bold text-dmens-blue mb-2 ${
                  service.popular ? 'text-3xl md:text-4xl' : 'text-2xl'
                }`}>
                  {service.title}
                </h3>
                <div className="flex items-center justify-center space-x-4">
                  <span className={`font-bold text-dmens-orange ${
                    service.popular ? 'text-5xl md:text-6xl' : 'text-4xl'
                  }`}>
                    {service.price}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Clock className={`mr-1 ${service.popular ? 'w-5 h-5' : 'w-4 h-4'}`} aria-hidden="true" />
                    <span className={`${service.popular ? 'text-base' : 'text-sm'}`} aria-label={`Duração: ${service.duration}`}>
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8" aria-label={`Características do serviço ${service.title}`}>
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex }}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-dmens-orange rounded-full mr-3 flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = encodeURIComponent(`Gostaria de agendar o serviço ${service.title} - ${service.price}`);
                  window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
                  
                  // Announce to screen readers
                  if ((window as any).announceToScreenReader) {
                    (window as any).announceToScreenReader(`Abrindo WhatsApp para agendar ${service.title} por ${service.price}`);
                  }
                }}
                className={`w-full py-3 rounded-xl font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 touch-target ${
                  service.popular
                    ? 'bg-dmens-orange text-white hover:bg-dmens-orange/90 shadow-lg hover:shadow-xl focus:ring-dmens-orange focus:ring-offset-white'
                    : 'bg-dmens-blue text-white hover:bg-dmens-orange focus:ring-dmens-blue focus:ring-offset-white'
                }`}
                aria-label={`Agendar serviço ${service.title} por ${service.price} via WhatsApp`}
              >
                Agendar Agora
              </motion.button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;