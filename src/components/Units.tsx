import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, Car, Star, Users, Wifi, Snowflake, MapPin } from 'lucide-react';
import fundoVideo from '../assets/Fundo_dmens.mp4';

const Units: React.FC = () => {
  const units = [
    {
      id: 1,
      name: "Unidade Jardim Fragoso",
      address: "Av. da Integração, 93",
      city: "Olinda - PE",
      hours: "Seg-Sex: 9h às 20h | Sáb: 8h às 19h",
      parking: "Estacionamento próprio",
      image: "/fachada-Tabajara.jpeg",
      rating: 4.9,
      clients: "1000+",
      features: [
        { icon: Wifi, label: "Wi-Fi Gratuito" },
        { icon: Snowflake, label: "Ar Condicionado" },
        { icon: Users, label: "Ambiente Moderno" },
        { icon: Star, label: "Atendimento VIP" }
      ]
    },
    {
      id: 2,
      name: "Unidade Jardim Atlântico",
      address: "Av. Fagundes Varela, 365",
      city: "Olinda - PE", 
      hours: "Seg-Sex: 9h às 20h | Sáb: 8h às 19h",
      parking: "Estacionamento disponível",
      image: "/fachada-Jardim.jpg",
      rating: 4.9,
      clients: "1000+",
      features: [
        { icon: Car, label: "Estacionamento" },
        { icon: Wifi, label: "Wi-Fi Gratuito" },
        { icon: Snowflake, label: "Ar Condicionado" },
        { icon: Users, label: "Ambiente Moderno" }
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const handleWhatsApp = (unitName: string) => {
    const message = encodeURIComponent(`Olá! Vim pelo site e gostaria de agendar um horário na ${unitName} da D'Mens Barbearia.`);
    window.open(`https://wa.me/5581987979894?text=${message}`, '_blank');
    
    if ((window as any).announceToScreenReader) {
      (window as any).announceToScreenReader(`Redirecionando para WhatsApp da ${unitName}`);
    }
  };

  return (
    <section 
      id="unidades"
      className="relative py-12 md:py-16 overflow-hidden"
      role="region"
      aria-label="Nossas Unidades"
      style={{
        transform: 'translateZ(0)',
        willChange: 'auto',
        isolation: 'isolate'
      }}
    >
      {/* Barra laranja neon superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-dmens-orange to-transparent shadow-[0_0_20px_rgba(254,76,2,0.8)]" />
      
      {/* Video Background - Altamente Otimizado */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full" style={{ filter: 'blur(3px)', transform: 'scale(1.05)' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%231a1a1a'/%3E%3C/svg%3E"
            className="w-full h-full object-cover"
            style={{
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <source src={fundoVideo} type="video/mp4" />
          </video>
        </div>
        
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 drop-shadow-lg">
            Nossas Unidades
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-body leading-relaxed drop-shadow-md"
          >
            Duas localizações estratégicas, um só padrão de excelência
          </motion.p>
        </motion.div>

        {/* Units Grid with Spotlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {units.map((unit, index) => (
            <motion.div
              key={unit.id}
              variants={cardVariants}
              className="flex justify-center"
            >
              <div
                className="w-full max-w-lg bg-dmens-orange border-2 border-dmens-orange hover:border-orange-400 transition-colors duration-300 group shadow-2xl rounded-2xl overflow-hidden"
                style={{
                  transform: 'translateZ(0)',
                  willChange: 'auto'
                }}
              >
                {/* Card Content */}
                <div className="relative h-full flex flex-col p-6">
                  {/* Header with Image */}
                  <div className="relative h-56 rounded-xl overflow-hidden mb-6">
                    <img
                      src={unit.image}
                      alt={`${unit.name} - D'Mens Barbearia`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 px-3 py-2 rounded-full shadow-lg">
                      <Star className="w-4 h-4 text-dmens-orange fill-current" />
                      <span className="text-sm font-bold text-dmens-blue">{unit.rating}</span>
                    </div>
                    
                    {/* Clients Badge */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 px-3 py-2 rounded-full shadow-lg">
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
                    <div className="flex items-start space-x-3 p-4 bg-white/20 rounded-xl border border-white/30 hover:border-white/50 transition-colors duration-200">
                      <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-body text-white font-semibold">{unit.address}</p>
                        <p className="font-body text-white/80 text-sm">{unit.city}</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center space-x-3 p-4 bg-white/20 rounded-xl border border-white/30 hover:border-white/50 transition-colors duration-200">
                      <Clock className="w-5 h-5 text-white flex-shrink-0" />
                      <p className="font-body text-white font-semibold">{unit.hours}</p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {unit.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 p-3 bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 hover:border-white/50 transition-colors duration-200"
                        >
                          <feature.icon className="w-4 h-4 text-white" />
                          <span className="text-xs font-body text-white font-medium">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => handleWhatsApp(unit.name)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-dmens-orange font-bold py-4 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg mt-6"
                      aria-label={`Agendar horário na ${unit.name} via WhatsApp`}
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-body text-lg">Agendar Agora</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.3, 
            duration: 0.5,
            ease: "easeOut"
          }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="inline-block p-6 md:p-8 bg-black/50 rounded-2xl border border-white/20">
            <p className="text-lg md:text-xl text-white font-body mb-6 leading-relaxed drop-shadow-lg">
              Não importa qual unidade você escolha,{' '}
              <span className="font-display font-bold text-dmens-orange">a excelência é garantida!</span>
            </p>
            
            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 md:px-10 py-3 bg-dmens-orange text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-dmens-orange shadow-2xl"
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
      
      {/* Barra laranja neon inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-dmens-orange to-transparent shadow-[0_0_20px_rgba(254,76,2,0.8)]" />
    </section>
  );
};

export default Units;
