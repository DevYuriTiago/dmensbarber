import React from 'react';
import { motion } from 'framer-motion';
import { useTotem, AVAILABLE_SERVICES, Service } from '../context/TotemContext';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import logoSelo from '../../assets/LOGO - SELO - PADRÃO.png';

const ServicesScreen: React.FC = () => {
  const { state, dispatch } = useTotem();

  const handleServiceToggle = (service: Service) => {
    const isSelected = state.selectedServices.find(s => s.id === service.id);
    
    if (isSelected) {
      dispatch({ type: 'REMOVE_SERVICE', payload: service.id });
    } else {
      dispatch({ type: 'ADD_SERVICE', payload: service });
    }
  };

  const handleContinue = () => {
    if (state.selectedServices.length > 0) {
      dispatch({ type: 'SET_STEP', payload: 'customer' });
    }
  };

  const handleBack = () => {
    dispatch({ type: 'SET_STEP', payload: 'welcome' });
  };

  const totalPrice = state.selectedServices.reduce((sum, service) => sum + service.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dmens-blue via-dmens-black to-dmens-blue p-8">
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
          ESCOLHA SEUS
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dmens-orange">
          SERVIÇOS
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mt-6 font-body">
          Selecione um ou mais serviços para seu atendimento
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {AVAILABLE_SERVICES.map((service, index) => {
            const isSelected = state.selectedServices.find(s => s.id === service.id);
            
            return (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleServiceToggle(service)}
                className={`relative group p-8 rounded-3xl transition-all duration-300 border-4 ${
                  isSelected
                    ? 'bg-gradient-to-br from-dmens-orange to-orange-500 border-dmens-orange shadow-2xl shadow-dmens-orange/25'
                    : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-dmens-orange/50 shadow-xl hover:shadow-dmens-orange/10'
                }`}
              >
                {/* Selection Indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-3 -right-3 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Check className="w-6 h-6 text-white" />
                  </motion.div>
                )}

                {/* Service Icon */}
                <div className="text-6xl mb-4 text-center">
                  {service.icon}
                </div>

                {/* Service Name */}
                <h3 className={`text-xl md:text-2xl font-display font-bold mb-4 text-center ${
                  isSelected ? 'text-white' : 'text-white'
                }`}>
                  {service.name}
                </h3>

                {/* Service Price */}
                <div className={`text-center ${
                  isSelected ? 'text-white' : 'text-dmens-orange'
                }`}>
                  <span className="text-2xl md:text-3xl font-bold">
                    R$ {service.price}
                  </span>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  !isSelected ? 'bg-gradient-to-br from-yellow-500/10 to-yellow-400/5' : ''
                }`} />
              </motion.button>
            );
          })}
        </div>

        {/* Selected Services Summary */}
        {state.selectedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-8 border-2 border-dmens-orange/30"
          >
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Serviços Selecionados ({state.selectedServices.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {state.selectedServices.map((service) => (
                <div key={service.id} className="flex items-center justify-between bg-gray-700/50 rounded-xl p-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="text-lg font-body text-white">{service.name}</span>
                  </div>
                  <span className="text-xl font-bold text-dmens-orange">R$ {service.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-display font-bold text-white">Total:</span>
              <span className="text-4xl font-display font-bold text-dmens-orange">R$ {totalPrice}</span>
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
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
            whileHover={state.selectedServices.length > 0 ? { scale: 1.05 } : {}}
            whileTap={state.selectedServices.length > 0 ? { scale: 0.98 } : {}}
            onClick={handleContinue}
            disabled={state.selectedServices.length === 0}
            className={`flex items-center space-x-4 px-12 py-6 rounded-2xl text-2xl font-display font-bold transition-all duration-300 border-2 ${
              state.selectedServices.length > 0
                ? 'bg-gradient-to-r from-dmens-orange to-orange-500 text-white hover:shadow-2xl hover:shadow-dmens-orange/25 border-dmens-orange'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed border-gray-700'
            }`}
          >
            <span>CONTINUAR</span>
            <ArrowRight className="w-8 h-8" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;