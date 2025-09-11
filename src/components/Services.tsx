import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Star, Clock, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'CLÁSSICO',
      price: 'R$ 45',
      duration: '45min',
      features: [
        'Corte personalizado',
        'Acabamento navalhado',
        'Toalha quente',
        'Finalização com pomada'
      ],
      icon: Scissors,
      popular: false
    },
    {
      title: 'PREMIUM',
      price: 'R$ 75',
      duration: '60min',
      features: [
        'Corte + Barba completa',
        'Tratamento capilar',
        'Massagem relaxante',
        'Produtos premium',
        'Whisky cortesia'
      ],
      icon: Star,
      popular: true
    },
    {
      title: 'VIP EXPERIENCE',
      price: 'R$ 120',
      duration: '90min',
      features: [
        'Serviço completo',
        'Spa masculino',
        'Consultoria de estilo',
        'Produtos exclusivos',
        'Área privativa',
        'Bebidas premium'
      ],
      icon: Shield,
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
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          role="list"
          aria-label="Lista de serviços disponíveis"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-white/85 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 transform perspective-1000 ${
                service.popular 
                  ? 'border-dmens-orange shadow-dmens-orange/20' 
                  : 'border-gray-200 hover:border-dmens-orange/50'
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
                <div className={`p-4 rounded-full ${
                  service.popular 
                    ? 'bg-dmens-orange text-white' 
                    : 'bg-gray-100 text-dmens-blue'
                }`}>
                  <service.icon className="w-8 h-8" aria-hidden="true" />
                </div>
              </div>

              {/* Title & Price */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-dmens-blue mb-2">
                  {service.title}
                </h3>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-4xl font-bold text-dmens-orange">
                    {service.price}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                    <span className="text-sm" aria-label={`Duração: ${service.duration}`}>
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