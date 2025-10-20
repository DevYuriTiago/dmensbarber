import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Clock, User, Phone, Star, Home } from 'lucide-react';
import { useTotem } from '../context/TotemContext';
import logoSelo from '../../assets/LOGO - SELO - PADRÃO.png';

export const ConfirmationScreen: React.FC = () => {
  const { state, dispatch } = useTotem();

  const handleFinish = () => {
    dispatch({ type: 'RESET_SYSTEM' });
  };

  // Auto restart after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleFinish();
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!state.appointment) {
    return null;
  }

  const { appointment } = state;
  const today = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-dmens-blue via-dmens-black to-dmens-blue p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto">
        {/* Success Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <img 
              src={logoSelo} 
              alt="D'Mens Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-block p-8 bg-gradient-to-br from-green-500 to-green-400 rounded-full shadow-2xl shadow-green-500/25 mb-8"
          >
            <Check className="w-24 h-24 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            AGENDAMENTO
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-green-400 mb-8"
          >
            CONFIRMADO!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-2xl md:text-3xl text-white font-body"
          >
            Obrigado, <span className="text-dmens-orange font-bold">{appointment.customer.name}</span>!
          </motion.p>
        </motion.div>

        {/* Appointment Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border-2 border-green-400/30 shadow-2xl mb-8"
        >
          {/* Customer Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <User className="w-8 h-8 text-dmens-orange" />
                <div>
                  <p className="text-lg text-gray-400 font-body">Cliente</p>
                  <p className="text-2xl font-display font-bold text-white">{appointment.customer.name}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-dmens-orange" />
                <div>
                  <p className="text-lg text-gray-400 font-body">Telefone</p>
                  <p className="text-2xl font-display font-bold text-white">{appointment.customer.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Calendar className="w-8 h-8 text-dmens-orange" />
                <div>
                  <p className="text-lg text-gray-400 font-body">Data</p>
                  <p className="text-2xl font-display font-bold text-white capitalize">{today}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-dmens-orange" />
                <div>
                  <p className="text-lg text-gray-400 font-body">Horário</p>
                  <p className="text-2xl font-display font-bold text-white">{appointment.time}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="mb-8">
            <h3 className="text-3xl font-display font-bold text-white mb-6 flex items-center">
              <Star className="w-8 h-8 text-dmens-orange mr-4" />
              Serviços Agendados ({appointment.services.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {appointment.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                  className="bg-gray-700/50 rounded-xl p-6 border border-gray-600"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{service.icon}</span>
                      <span className="text-xl font-body text-white">{service.name}</span>
                    </div>
                    <span className="text-xl font-bold text-dmens-orange">R$ {service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="border-t-2 border-gray-700 pt-6">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-display font-bold text-white">Total:</span>
              <span className="text-4xl font-display font-bold text-dmens-orange">
                R$ {appointment.totalPrice}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="bg-gradient-to-r from-dmens-orange/10 to-orange-500/10 rounded-2xl p-8 border-2 border-dmens-orange/30 mb-8"
        >
          <h3 className="text-2xl font-display font-bold text-dmens-orange mb-4">
            Próximos Passos:
          </h3>
          <div className="space-y-3 text-lg font-body text-white">
            <p>• Compareça na D'Mens Barbearia no horário agendado</p>
            <p>• Chegue com 10 minutos de antecedência</p>
            <p>• Traga um documento de identificação</p>
            <p>• Em caso de cancelamento, entre em contato conosco</p>
          </div>
        </motion.div>

        {/* Finish Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleFinish}
            className="group relative overflow-hidden bg-gradient-to-r from-dmens-orange to-orange-500 text-white px-16 py-8 rounded-2xl text-3xl font-display font-bold shadow-2xl transition-all duration-300 hover:shadow-dmens-orange/25 border-2 border-dmens-orange"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-dmens-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center justify-center space-x-4">
              <Home className="w-8 h-8" />
              <span>FINALIZAR</span>
            </div>
          </motion.button>
          
          <p className="text-gray-400 text-lg mt-6 font-body">
            Tela será reiniciada automaticamente em 30 segundos
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-green-400/30 rounded-full" />
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-dmens-orange/20 rounded-full" />
        <div className="absolute bottom-10 left-20 w-24 h-24 border-2 border-green-400/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-dmens-orange/25 rounded-full" />
      </div>
    </div>
  );
};

export default ConfirmationScreen;