import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Users, Clock } from 'lucide-react';
import ativo05 from '/ativo05-full.png';

const History: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const slides = [
    {
      id: 1,
      title: "Nossa História",
      subtitle: "Tradição e Paixão",
      text: "Fundada com o sonho de criar um espaço único para o homem moderno, a D'Mens Barbearia nasceu da paixão pela arte de barbear e do cuidado masculino. Desde o primeiro dia, nosso compromisso tem sido oferecer não apenas um corte de cabelo, mas uma experiência completa de bem-estar e estilo.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      icon: Award,
      stats: "Fundada em 2018"
    },
    {
      id: 2,
      title: "Nossos Valores",
      subtitle: "Excelência em Cada Detalhe",
      text: "Acreditamos que cada cliente merece o melhor. Por isso, investimos continuamente em técnicas modernas, produtos premium e na capacitação constante de nossa equipe. Nossa filosofia é simples: tratar cada cliente como único, respeitando seu estilo e personalidade.",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
      icon: Award,
      stats: "Mais de 5000 clientes atendidos"
    },
    {
      id: 3,
      title: "Nossa Equipe",
      subtitle: "Profissionais Qualificados",
      text: "Contamos com uma equipe de barbeiros altamente qualificados, cada um especialista em diferentes técnicas e estilos. Nossos profissionais participam regularmente de cursos e workshops para se manterem atualizados com as últimas tendências do mundo da barbearia.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      icon: Users,
      stats: "Equipe de 8 profissionais certificados"
    },
    {
      id: 4,
      title: "Mestre Barbeiro",
      subtitle: "Experiência e Dedicação",
      text: "Nosso fundador e mestre barbeiro possui mais de 15 anos de experiência na arte da barbearia. Formado pelas melhores escolas do país e com certificações internacionais, ele lidera nossa equipe com paixão e dedicação, garantindo que cada cliente receba o melhor atendimento.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      icon: Clock,
      stats: "15+ anos de experiência"
    }
  ];

  // Intersection Observer para detectar visibilidade
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // 30% da seção precisa estar visível
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-advance slides - só quando visível
  useEffect(() => {
    if (!isVisible) return; // Só executa se a seção estiver visível

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 7 seconds per slide

    return () => clearInterval(timer);
  }, [slides.length, isVisible]); // Adiciona isVisible como dependência

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      ref={sectionRef}
      id="historia"
      className="relative m-0 p-0 py-12 md:py-20"
      role="region"
      aria-label="História da D'Mens Barbearia"
      style={{
        backgroundImage: `url(${ativo05})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        minHeight: '120vh',
        paddingBottom: '15vh'
      }}
    >

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 drop-shadow-2xl">
            Nossa História
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto font-body leading-relaxed drop-shadow-lg"
          >
            Conheça a trajetória que nos trouxe até aqui e descubra{' '}
            <span className="font-display font-bold text-white">nossa paixão pela barbearia</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Slideshow Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 5 }}>
        <div className="relative">
          {/* Main Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 p-4 bg-dmens-orange rounded-full shadow-lg">
                    {React.createElement(slides[currentSlide].icon, { 
                      className: "w-8 h-8 text-white" 
                    })}
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-6 left-6 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
                    <p className="text-dmens-orange font-bold text-lg">
                      {slides[currentSlide].stats}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h3 className="text-3xl lg:text-4xl font-display font-bold text-dmens-blue mb-4">
                      {slides[currentSlide].title}
                    </h3>
                    <h4 className="text-xl lg:text-2xl font-body text-dmens-orange mb-6 font-semibold">
                      {slides[currentSlide].subtitle}
                    </h4>
                    <p className="text-lg text-gray-600 font-body leading-relaxed mb-8">
                      {slides[currentSlide].text}
                    </p>
                    
                    {/* Decorative Line */}
                    <div className="h-1 w-20 bg-dmens-orange rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-dmens-orange rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-dmens-orange rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="h-1 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-center text-white/80 mt-2 text-sm">
            {currentSlide + 1} de {slides.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
