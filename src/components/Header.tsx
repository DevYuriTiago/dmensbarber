import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/LOGO HORIZONTAL - NEGATIVA.png';
import tesouraIcon from '../assets/tesoura.png';
import livroIcon from '../assets/livro.png';
import agendaIcon from '../assets/agenda.png';
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
    { icon: tesouraIcon, label: 'Serviços', href: '#servicos' },
    { icon: livroIcon, label: 'Cursos', href: '#cursos' },
    { icon: agendaIcon, label: 'Agendar', href: '#contato' }
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dmens-blue/95 backdrop-blur-md shadow-2xl' 
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
            <a 
              href="#"
              aria-label="D'Mens Barbearia - Página inicial"
              className="focus:outline-none focus:ring-2 focus:ring-dmens-orange focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
            >
              <img 
                src={Logo} 
                alt="D'Mens Barbearia - Logo" 
                className="h-8 md:h-10 w-auto"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Menu principal"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1, color: '#FE4C02' }}
                className="flex flex-col items-center text-white hover:text-dmens-orange transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-dmens-orange focus:ring-offset-2 focus:ring-offset-transparent rounded-lg p-2"
                aria-label={`Navegar para ${item.label}`}
              >
                <img 
                  src={item.icon} 
                  alt={item.label} 
                  className="w-6 h-6 mb-1" 
                  style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)' }}
                  aria-hidden="true" 
                />
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-dmens-orange focus:ring-offset-2 focus:ring-offset-transparent rounded-lg p-2"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? 
              <X className="w-6 h-6" aria-hidden="true" /> : 
              <Menu className="w-6 h-6" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dmens-blue/95 backdrop-blur-md border-t border-dmens-orange/20"
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 text-white hover:text-dmens-orange transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-dmens-orange focus:ring-offset-2 focus:ring-offset-dmens-blue rounded-lg p-2"
                  aria-label={`Navegar para ${item.label}`}
                >
                                    <img 
                    src={item.icon} 
                    alt={item.label} 
                    className="w-5 h-5" 
                    style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(346deg) brightness(97%) contrast(97%)' }}
                    aria-hidden="true" 
                  />
                  <span className="font-medium">{item.label}</span>
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