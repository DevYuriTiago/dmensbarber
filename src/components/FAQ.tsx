import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona o agendamento?',
      answer: 'Você pode agendar pelo WhatsApp, telefone ou presencialmente. Recomendamos agendar com antecedência para garantir o horário desejado. Trabalhamos de segunda a sábado.'
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos dinheiro, cartão de débito/crédito, Pix e transferência bancária. Para os cursos, oferecemos parcelamento em até 12x sem juros.'
    },
    {
      question: 'Os cursos têm certificado reconhecido?',
      answer: 'Sim! Todos os nossos cursos possuem certificado reconhecido pelo mercado. Nossa escola é registrada e nossos instrutores são profissionais com mais de 10 anos de experiência.'
    },
    {
      question: 'Preciso ter experiência prévia para fazer o curso?',
      answer: 'Não! Nossos cursos são desenvolvidos do básico ao avançado. Começamos do zero e você sairá preparado para atuar profissionalmente no mercado.'
    },
    {
      question: 'Vocês ajudam na colocação profissional?',
      answer: 'Sim! Temos parceria com diversas barbearias da região e indicamos nossos melhores alunos. Também oferecemos suporte para quem quer abrir o próprio negócio.'
    },
    {
      question: 'Qual o diferencial da D\'Mens Barbearia?',
      answer: 'Combinamos tradição com modernidade, oferecendo serviços premium e ensino de qualidade. Nossa equipe é altamente qualificada e o ambiente é exclusivamente masculino.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-dmens-black relative overflow-hidden">
      {/* Glitch Background Effect */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.1, 0],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-32 h-32 bg-dmens-orange/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-dmens-orange mr-3" />
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
              FAQ<span className="text-dmens-orange animate-pulse">.</span>
            </h2>
            <Zap className="w-8 h-8 text-dmens-orange ml-3" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Respostas rápidas para as perguntas mais frequentes
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: 'rgba(254, 76, 2, 0.1)' }}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-dmens-orange" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      className="px-6 pb-6 border-t border-white/10"
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 leading-relaxed mt-4 animate-glitch"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;