import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Award, Calendar, Menu, X } from 'lucide-react';
import Logo from '../assets/LOGO SELO - NEGATIVA.png';
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Scissors, label: 'Serviços', href: '#servicos' },
    { icon: Award, label: 'Cursos', href: '#cursos' },
    { icon: Calendar, label: 'Agendar', href: '#contato' }
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dmens-black/95 backdrop-blur-md shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src={Logo} 
              alt="D'Mens Barbearia" 
              className="h-12 md:h-16 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1, color: '#FE4C02' }}
                className="flex flex-col items-center text-white hover:text-dmens-orange transition-colors duration-300 group"
              >
                <item.icon className="w-6 h-6 mb-1" />
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dmens-black/95 backdrop-blur-md border-t border-dmens-orange/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 text-white hover:text-dmens-orange transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;