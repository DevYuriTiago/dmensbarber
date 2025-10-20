import React from 'react';
import { motion } from 'framer-motion';
import { useTotem, AVAILABLE_TIMES } from '../context/TotemContext';
import { Clock, ArrowRight, ArrowLeft, Calendar } from 'lucide-react';
import logoSelo from '../../assets/LOGO - SELO - PADRÃO.png';

const TimeScreen: React.FC = () => {
  const { state, dispatch } = useTotem();

  const handleTimeSelect = (time: string) => {
    dispatch({ type: 'SET_TIME', payload: time });
  };

  const handleConfirm = () => {
    if (state.selectedTime) {
      dispatch({ type: 'CREATE_APPOINTMENT' });
    }
  };

  const handleBack = () => {
    dispatch({ type: 'SET_STEP', payload: 'customer' });
  };

  const today = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-dmens-blue via-dmens-black to-dmens-blue p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <img 
              src={logoSelo} 
              alt="D'Mens Logo" 
              className="h-16 w-auto mr-4"
            />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4">
            ESCOLHA O
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dmens-orange">
            HORÁRIO
          </h2>
          <div className="flex items-center justify-center mt-6 text-xl md:text-2xl text-gray-300 font-body">
            <Calendar className="w-8 h-8 mr-3 text-dmens-orange" />
            <span className="capitalize">{today}</span>
          </div>
        </motion.div>

        {/* Customer Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-12 border-2 border-dmens-orange/30"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-4">
            Olá, {state.customer?.name}! 👋
          </h3>
          <p className="text-xl text-gray-300 font-body">
            Escolha o melhor horário para seu atendimento hoje
          </p>
        </motion.div>

        {/* Time Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {AVAILABLE_TIMES.map((time, index) => {
            const isSelected = state.selectedTime === time;
            
            return (
              <motion.button
                key={time}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTimeSelect(time)}
                className={`relative group p-12 rounded-3xl transition-all duration-300 border-4 ${
                  isSelected
                    ? 'bg-gradient-to-br from-dmens-orange to-orange-500 border-dmens-orange shadow-2xl shadow-dmens-orange/25'
                    : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-dmens-orange/50 shadow-xl hover:shadow-dmens-orange/10'
                }`}
              >
                {/* Clock Icon */}
                <div className="mb-6 flex justify-center">
                  <Clock className={`w-16 h-16 ${isSelected ? 'text-white' : 'text-dmens-orange'}`} />
                </div>

                {/* Time Display */}
                <div className={`text-center ${isSelected ? 'text-white' : 'text-white'}`}>
                  <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                    {time}
                  </div>
                  <div className="text-lg md:text-xl font-body">
                    Disponível
                  </div>
                </div>

                {/* Selection Indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span className="text-3xl">✓</span>
                  </motion.div>
                )}

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  !isSelected ? 'bg-gradient-to-br from-yellow-500/10 to-yellow-400/5' : ''
                }`} />
              </motion.button>
            );
          })}
        </div>

        {/* Selected Time Info */}
        {state.selectedTime && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-green-800/20 to-green-900/20 rounded-2xl p-8 mb-12 border-2 border-green-400/30"
          >
            <div className="flex items-center justify-center">
              <Clock className="w-8 h-8 text-green-400 mr-4" />
              <span className="text-2xl font-display font-bold text-white">
                Horário selecionado: {state.selectedTime}
              </span>
            </div>
          </motion.div>
        )}

        {/* Services Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-12 border-2 border-yellow-400/30"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-6">
            Resumo dos Serviços ({state.selectedServices.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {state.selectedServices.map((service) => (
              <div key={service.id} className="flex items-center justify-between bg-gray-700/50 rounded-xl p-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-lg font-body text-white">{service.name}</span>
                </div>
                <span className="text-lg font-bold text-dmens-orange">R$ {service.price}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-display font-bold text-white">Total:</span>
            <span className="text-3xl font-display font-bold text-dmens-orange">
              R$ {state.selectedServices.reduce((sum, service) => sum + service.price, 0)}
            </span>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBack}
            className="flex items-center space-x-4 bg-gray-700 hover:bg-gray-600 text-white px-8 py-6 rounded-2xl text-2xl font-display font-bold transition-all duration-300 border-2 border-gray-600"
          >
            <ArrowLeft className="w-8 h-8" />
            <span>VOLTAR</span>
          </motion.button>

          <motion.button
            whileHover={state.selectedTime ? { scale: 1.05 } : {}}
            whileTap={state.selectedTime ? { scale: 0.98 } : {}}
            onClick={handleConfirm}
            disabled={!state.selectedTime}
            className={`flex items-center space-x-4 px-12 py-6 rounded-2xl text-2xl font-display font-bold transition-all duration-300 border-2 ${
              state.selectedTime
                ? 'bg-gradient-to-r from-dmens-orange to-orange-500 text-white hover:shadow-2xl hover:shadow-dmens-orange/25 border-dmens-orange'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed border-gray-700'
            }`}
          >
            <span>CONFIRMAR AGENDAMENTO</span>
            <ArrowRight className="w-8 h-8" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TimeScreen;