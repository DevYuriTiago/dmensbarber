import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Trophy, Clock, ChevronRight } from 'lucide-react';
import livroIcon from '../assets/livro.png';

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [timeLeft, setTimeLeft] = useState(72); // 72 horas restantes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 72);
    }, 3600000); // Update every hour

    return () => clearInterval(timer);
  }, []);

  const courses = [
    {
      title: 'Barbeiro Profissional',
      subtitle: 'Do Zero ao Pro',
      duration: '120h',
      students: '2.500+',
      price: 'R$ 1.897',
      installments: '12x R$ 158',
      nextClass: '15 de Março',
      features: [
        'Técnicas clássicas e modernas',
        'Equipamentos profissionais',
        'Certificado reconhecido',
        'Estágio em salões parceiros',
        'Suporte pós-curso',
        'Kit completo incluso'
      ],
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg',
      gradient: 'from-dmens-orange to-orange-600'
    },
    {
      title: 'Gestão de Barbearia',
      subtitle: 'Empreendedorismo',
      duration: '60h',
      students: '1.200+',
      price: 'R$ 997',
      installments: '10x R$ 99',
      nextClass: '22 de Março',
      features: [
        'Planejamento de negócio',
        'Marketing digital',
        'Gestão financeira',
        'Fidelização de clientes',
        'Precificação estratégica',
        'Consultoria personalizada'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Especialização Avançada',
      subtitle: 'Master Class',
      duration: '80h',
      students: '800+',
      price: 'R$ 2.497',
      installments: '12x R$ 208',
      nextClass: '5 de Abril',
      features: [
        'Técnicas exclusivas',
        'Cortes internacionais',
        'Colorimetria avançada',
        'Styling profissional',
        'Networking premium',
        'Certificação internacional'
      ],
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  const timelineSteps = [
    { title: 'Inscrição', description: 'Garantir sua vaga', status: 'completed' },
    { title: 'Preparação', description: 'Material e cronograma', status: 'current' },
    { title: 'Aprendizado', description: 'Aulas práticas', status: 'upcoming' },
    { title: 'Certificação', description: 'Diploma reconhecido', status: 'upcoming' },
    { title: 'Carreira', description: 'Sucesso profissional', status: 'upcoming' }
  ];

  return (
    <section id="cursos" className="py-12 md:py-20 m-0 bg-white/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dmens-blue mb-6">
            Nossos Cursos
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto mb-8 font-body leading-relaxed">
            Cursos profissionalizantes que preparam você para dominar a arte da barbearia
          </p>
          
          {/* Countdown Timer */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center bg-dmens-orange/10 border border-dmens-orange/30 rounded-full px-6 py-3 text-dmens-orange font-semibold"
          >
            <Clock className="w-5 h-5 mr-2" />
            Próximas turmas em {timeLeft}h | Últimas vagas!
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
                    <h3 className="text-2xl font-display font-bold text-center text-dmens-blue mb-8">
            Como Funciona
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center mb-8 md:mb-0"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 ${
                  step.status === 'completed' 
                    ? 'bg-green-500 text-white' 
                    : step.status === 'current'
                    ? 'bg-dmens-orange text-white animate-pulse'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {index + 1}
                </div>
                <h4 className="font-semibold text-dmens-blue">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < timelineSteps.length - 1 && (
                  <ChevronRight className="hidden md:block w-6 h-6 text-dmens-orange mt-4" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {courses.map((course, index) => (
            <motion.button
              key={course.title}
              onClick={() => setSelectedCourse(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCourse === index
                  ? 'bg-dmens-orange text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white/90 border border-gray-200'
              }`}
            >
              {course.title}
            </motion.button>
          ))}
        </div>

        {/* Selected Course Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCourse}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Course Image */}
              <div className="relative h-64 md:h-full">
                <img 
                  src={courses[selectedCourse].image} 
                  alt={courses[selectedCourse].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${courses[selectedCourse].gradient} opacity-80`} />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">
                      {courses[selectedCourse].title}
                    </h3>
                    <p className="text-xl opacity-90">{courses[selectedCourse].subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Course Details */}
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-dmens-orange/10 rounded-full mb-2 mx-auto">
                      <Clock className="w-6 h-6 text-dmens-orange" />
                    </div>
                    <div className="font-semibold text-dmens-blue">{courses[selectedCourse].duration}</div>
                    <div className="text-sm text-gray-600">Duração</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-dmens-orange/10 rounded-full mb-2 mx-auto">
                      <Users className="w-6 h-6 text-dmens-orange" />
                    </div>
                    <div className="font-semibold text-dmens-blue">{courses[selectedCourse].students}</div>
                    <div className="text-sm text-gray-600">Formados</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-dmens-orange/10 rounded-full mb-2 mx-auto">
                      <Trophy className="w-6 h-6 text-dmens-orange" />
                    </div>
                    <div className="font-semibold text-dmens-blue">5.0</div>
                    <div className="text-sm text-gray-600">Avaliação</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {courses[selectedCourse].features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-dmens-orange rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-dmens-blue">
                        {courses[selectedCourse].price}
                      </div>
                      <div className="text-gray-600">
                        ou {courses[selectedCourse].installments}
                      </div>
                      <div className="text-sm text-dmens-orange font-semibold">
                        Próxima turma: {courses[selectedCourse].nextClass}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const message = encodeURIComponent(`Olá! Vim pelo site e tenho interesse no curso de ${courses[selectedCourse].title}. Gostaria de mais informações sobre valores, próximas turmas e conteúdo programático.`);
                      window.open(`https://wa.me/5581987979894?text=${message}`, '_blank');
                    }}
                    className="w-full bg-dmens-orange text-white font-bold py-4 rounded-xl hover:bg-dmens-orange/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <img 
                      src={livroIcon} 
                      alt="Livro" 
                      className="w-5 h-5" 
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <span>Garantir Minha Vaga</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Courses;