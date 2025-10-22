import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Car, Star, Users, Wifi, Snowflake } from 'lucide-react';
import { GlowCard } from './ui/spotlight-card';
import fundoVideo from '../assets/Fundo_dmens.mp4';

const Units: React.FC = () => {
  const units = [
    {
      id: 1,
      name: "Unidade Centro",
      address: "Av. Principal, 123 - Centro",
      city: "São Paulo - SP",
      phone: "(11) 99999-9999",
      hours: "Seg-Sáb: 8h às 18h",
      parking: "Estacionamento próprio",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      clients: "500+",
      features: [
        { icon: Car, label: "Estacionamento" },
        { icon: Wifi, label: "Wi-Fi Gratuito" },
        { icon: Snowflake, label: "Ar Condicionado" },
        { icon: Users, label: "Música Ambiente" }
      ]
    },
    {
      id: 2,
      name: "Unidade Shopping",
      address: "Shopping Center, Loja 245 - 2º Piso",
      city: "São Paulo - SP", 
      phone: "(11) 88888-8888",
      hours: "Seg-Dom: 10h às 22h",
      parking: "Estacionamento do shopping",
      image: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      clients: "800+",
      features: [
        { icon: Users, label: "Praça de Alimentação" },
        { icon: Star, label: "Cinema" },
        { icon: Car, label: "Fácil Acesso" },
        { icon: Wifi, label: "Wi-Fi Shopping" }
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 120,
      scale: 0.8,
      rotateY: 15
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const handleWhatsApp = (phone: string, unitName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar um horário na ${unitName} da D'Mens Barbearia.`);
    window.open(`https://wa.me/55${phone.replace(/\D/g, '')}?text=${message}`, '_blank');
    
    if ((window as any).announceToScreenReader) {
      (window as any).announceToScreenReader(`Redirecionando para WhatsApp da ${unitName}`);
    }
  };

  return (
    <section 
      id="unidades"
      className="relative py-32 overflow-hidden"
      role="region"
      aria-label="Nossas Unidades"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            perspective: 1000
          }}
        >
          <source src={fundoVideo} type="video/mp4" />
          {/* Fallback caso o vídeo não carregue */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-700 to-black" />
        </video>
        
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1.5, 0],
              x: [0, Math.random() * 200 - 100, Math.random() * 150 - 75],
              y: [0, Math.random() * 200 - 100, Math.random() * 150 - 75],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut"
            }}
            className="absolute w-4 h-4 bg-dmens-orange/20 rounded-full backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100
          }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block p-4 bg-dmens-orange/20 rounded-full backdrop-blur-md mb-8"
          >
            <MapPin className="w-12 h-12 text-dmens-orange" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 drop-shadow-lg">
            Nossas Unidades
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto font-body leading-relaxed drop-shadow-md"
          >
            Duas localizações estratégicas, um só padrão de{' '}
            <span className="font-display font-bold text-dmens-orange">excelência</span>
          </motion.p>
        </motion.div>

        {/* Units Grid with Spotlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {units.map((unit, index) => (
            <motion.div
              key={unit.id}
              variants={cardVariants}
              className="flex justify-center"
            >
              <div
                className="w-full max-w-lg h-auto bg-dmens-orange border border-dmens-orange hover:border-orange-600 transition-all duration-500 group shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden"
              >
                <GlowCard
                  glowColor="white"
                  customSize={true}
                  className="w-full h-full bg-transparent border-0 shadow-none"
                >
                {/* Card Content */}
                <div className="relative h-full flex flex-col">
                  {/* Header with Image */}
                  <div className="relative h-56 rounded-xl overflow-hidden mb-6">
                    <img
                      src={unit.image}
                      alt={`${unit.name} - D'Mens Barbearia`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/95 backdrop-blur-md px-3 py-2 rounded-full shadow-lg">
                      <Star className="w-4 h-4 text-dmens-orange fill-current" />
                      <span className="text-sm font-bold text-dmens-blue">{unit.rating}</span>
                    </div>
                    
                    {/* Clients Badge */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white backdrop-blur-md px-3 py-2 rounded-full shadow-lg">
                      <Users className="w-4 h-4 text-dmens-orange" />
                      <span className="text-sm font-bold text-dmens-orange">{unit.clients}</span>
                    </div>
                    
                    {/* Unit Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white drop-shadow-lg">
                        {unit.name}
                      </h3>
                    </div>
                  </div>

                  {/* Unit Details */}
                  <div className="flex-1 space-y-4 px-2">
                    {/* Address */}
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
                    >
                      <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-body text-white font-semibold">{unit.address}</p>
                        <p className="font-body text-white/80 text-sm">{unit.city}</p>
                      </div>
                    </motion.div>

                    {/* Hours */}
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
                    >
                      <Clock className="w-5 h-5 text-white flex-shrink-0" />
                      <p className="font-body text-white font-semibold">{unit.hours}</p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {unit.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-2 p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300"
                        >
                          <feature.icon className="w-4 h-4 text-white" />
                          <span className="text-xs font-body text-white font-medium">
                            {feature.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => handleWhatsApp(unit.phone, unit.name)}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-dmens-orange font-bold py-4 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg mt-6"
                      aria-label={`Agendar horário na ${unit.name} via WhatsApp`}
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-body text-lg">Agendar Agora</span>
                    </motion.button>
                  </div>
                </div>
                </GlowCard>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
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
          className="text-center mt-20"
        >
          <div className="inline-block p-8 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/20">
            <p className="text-2xl md:text-3xl text-white font-body mb-8 leading-relaxed drop-shadow-lg">
              Não importa qual unidade você escolha,{' '}
              <span className="font-display font-bold text-dmens-orange">a excelência é garantida!</span>
            </p>
            
            <motion.a
              href="#servicos"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(254, 76, 2, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-12 py-4 bg-dmens-orange text-white font-bold text-xl rounded-2xl hover:bg-orange-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-dmens-orange focus:ring-offset-4 focus:ring-offset-white shadow-2xl"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="font-body">Conheça Nossos Serviços</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Units;
