import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandBanner from './components/BrandBanner';
import HistoryServicesWrapper from './components/HistoryServicesWrapper';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Courses from './components/Courses';
import Units from './components/Units';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TestBackground from './components/TestBackground';
import LiveRegion from './components/LiveRegion';
import ativo6Background from './assets/Ativo 6.png';

function App() {
  useEffect(() => {
    // Definir background do body
    document.body.style.backgroundImage = `url(${ativo6Background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundColor = '#ffffff';

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      // Reset body background
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.backgroundColor = '';
      
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <LiveRegion>
      <div className="min-h-screen bg-transparent relative" lang="pt-BR">
        {/* Skip Links */}
        <div className="sr-only">
          <a href="#main-content" className="skip-link">
            Pular para o conteúdo principal
          </a>
          <a href="#servicos" className="skip-link">
            Pular para serviços
          </a>
          <a href="#cursos" className="skip-link">
            Pular para cursos
          </a>
          <a href="#unidades" className="skip-link">
            Pular para unidades
          </a>
        </div>
        
        <TestBackground />
        
        {/* Main Content */}
        <div className="relative">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Header />
              <main id="main-content" role="main">
                <Hero />
                <BrandBanner />
                <HistoryServicesWrapper />
                <Services />
                <SocialProof />
                <Courses />
                <Units />
                <BrandBanner />
                <FAQ />
                <FinalCTA />
              </main>
              <FloatingWhatsApp />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </LiveRegion>
  );
}

export default App;