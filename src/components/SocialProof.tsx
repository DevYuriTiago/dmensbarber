import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';
import tesouraIcon from '../assets/tesoura.png';
import navalhaRetro from '/navalha-retro.png';

const SocialProof: React.FC = () => {
  const [counters, setCounters] = useState({
    clientes: 0,
    cortes: 0,
    avaliacoes: 0,
    anos: 0
  });

  const finalValues = {
    clientes: 2500,
    cortes: 15000,
    avaliacoes: 4.9,
    anos: 8
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          clientes: Math.floor(finalValues.clientes * progress),
          cortes: Math.floor(finalValues.cortes * progress),
          avaliacoes: Math.min(finalValues.avaliacoes, (finalValues.avaliacoes * progress)),
          anos: Math.floor(finalValues.anos * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(finalValues);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('social-proof');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      icon: Users, 
      value: counters.clientes.toLocaleString(), 
      label: 'Clientes Satisfeitos',
      color: 'text-blue-400'
    },
    { 
      icon: tesouraIcon, 
      value: counters.cortes.toLocaleString(), 
      label: 'Cortes Realizados',
      color: 'text-dmens-orange'
    },
    { 
      icon: Star, 
      value: counters.avaliacoes.toFixed(1), 
      label: 'Avaliação Média',
      color: 'text-yellow-400'
    },
    { 
      icon: navalhaRetro, 
      value: counters.anos, 
      label: 'Anos de Tradição',
      color: 'text-green-400'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      text: 'Melhor barbearia da cidade! Profissionais excepcionais e ambiente incrível.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Roberto Santos',
      text: 'Transformaram meu visual completamente. Saio sempre confiante!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Felipe Costa',
      text: 'Atendimento VIP e resultado impecável. Recomendo para todos!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section 
      id="social-proof" 
      className="py-12 md:py-20 m-0 bg-gradient-to-r from-dmens-black via-gray-900 to-dmens-black relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg')] bg-cover bg-center opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            Números que Impressionam
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-body leading-relaxed">
            Nossa trajetória de sucesso construída dia após dia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon === tesouraIcon || stat.icon === navalhaRetro ? (
                  <img 
                    src={stat.icon} 
                    alt={stat.icon === tesouraIcon ? "Tesoura" : "Navalha Retrô"} 
                    className="w-8 h-8" 
                    style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)' }}
                  />
                ) : (
                  <stat.icon className="w-8 h-8 text-dmens-orange" />
                )}
              </div>
              <motion.div
                key={stat.value}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-8">
            O que nossos clientes dizem
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-dmens-orange/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <div className="flex text-dmens-orange">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;