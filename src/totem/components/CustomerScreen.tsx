import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTotem } from '../context/TotemContext';
import { ArrowRight, ArrowLeft, User, Phone, Mail } from 'lucide-react';
import logoSelo from '../../assets/LOGO - SELO - PADRÃO.png';

const CustomerScreen: React.FC = () => {
  const { state, dispatch } = useTotem();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Phone mask
  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    if (field === 'phone') {
      formattedValue = formatPhone(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: formattedValue
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else {
      const phoneNumbers = formData.phone.replace(/\D/g, '');
      if (phoneNumbers.length !== 11) {
        newErrors.phone = 'Telefone deve ter 11 dígitos';
      }
    }
    
    if (formData.email && !formData.email.includes('@')) {
      newErrors.email = 'E-mail inválido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    if (validateForm()) {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate loading
      setTimeout(() => {
        dispatch({
          type: 'SET_CUSTOMER',
          payload: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email || undefined
          }
        });
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_STEP', payload: 'time' });
      }, 1500);
    }
  };

  const handleBack = () => {
    dispatch({ type: 'SET_STEP', payload: 'services' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dmens-blue via-dmens-black to-dmens-blue p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
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
            SEUS DADOS
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dmens-orange">
            CADASTRO RÁPIDO
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mt-6 font-body">
            Precisamos de alguns dados para finalizar seu agendamento
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border-2 border-gray-700 shadow-2xl"
        >
          <div className="space-y-8">
            {/* Name Input */}
            <div>
              <label className="flex items-center text-2xl font-display font-bold text-white mb-4">
                <User className="w-8 h-8 mr-4 text-dmens-orange" />
                NOME COMPLETO *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Digite seu nome completo"
                className={`w-full p-6 text-2xl bg-gray-700 border-4 rounded-2xl text-white placeholder-gray-400 font-body focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.name 
                    ? 'border-red-500 focus:border-red-400 focus:ring-red-500/25' 
                    : 'border-gray-600 focus:border-dmens-orange focus:ring-dmens-orange/25'
                }`}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-lg mt-2 font-body"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <label className="flex items-center text-2xl font-display font-bold text-white mb-4">
                <Phone className="w-8 h-8 mr-4 text-dmens-orange" />
                TELEFONE *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
                maxLength={15}
                className={`w-full p-6 text-2xl bg-gray-700 border-4 rounded-2xl text-white placeholder-gray-400 font-body focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.phone 
                    ? 'border-red-500 focus:border-red-400 focus:ring-red-500/25' 
                    : 'border-gray-600 focus:border-dmens-orange focus:ring-dmens-orange/25'
                }`}
              />
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-lg mt-2 font-body"
                >
                  {errors.phone}
                </motion.p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="flex items-center text-2xl font-display font-bold text-white mb-4">
                <Mail className="w-8 h-8 mr-4 text-dmens-orange" />
                E-MAIL (OPCIONAL)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu.email@exemplo.com"
                className={`w-full p-6 text-2xl bg-gray-700 border-4 rounded-2xl text-white placeholder-gray-400 font-body focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-400 focus:ring-red-500/25' 
                    : 'border-gray-600 focus:border-dmens-orange focus:ring-dmens-orange/25'
                }`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-lg mt-2 font-body"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContinue}
            disabled={state.isLoading}
            className="flex items-center space-x-4 bg-gradient-to-r from-dmens-orange to-orange-500 text-white px-12 py-6 rounded-2xl text-2xl font-display font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-dmens-orange/25 border-2 border-dmens-orange disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-4 border-black border-t-transparent rounded-full"
                />
                <span>PROCESSANDO...</span>
              </>
            ) : (
              <>
                <span>AVANÇAR</span>
                <ArrowRight className="w-8 h-8" />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CustomerScreen;