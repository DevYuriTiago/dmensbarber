import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandIntro from './BrandIntro';
import Header from './Header';
import Hero from './Hero';
import BrandBanner from './BrandBanner';
import History from './History';
import ServicesMarquee from './ServicesMarquee';
import Services from './Services';
import SocialProof from './SocialProof';
import Courses from './Courses';
import Units from './Units';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import FloatingWhatsApp from './FloatingWhatsApp';
import TestBackground from './TestBackground';
import LiveRegion from './LiveRegion';
import ativo6Background from '../assets/Ativo 6.png';

const LandingPage: React.FC = () => {
  const [showContent, setShowContent] = useState(true); // Já inicia true

  useEffect(() => {
    // Verificar se a intro já foi reproduzida
    const introPlayed = sessionStorage.getItem('brandIntroPlayed');
    if (introPlayed === 'true') {
      setShowContent(true);
    }
  }, []);
  useEffect(() => {
    // Definir background do body - ATIVO6 REMOVIDO TEMPORARIAMENTE
    // document.body.style.backgroundImage = `url(${ativo6Background})`;
    document.body.style.backgroundImage = 'none';
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
      {/* Vídeo de Introdução da Marca */}
      <BrandIntro onComplete={() => setShowContent(true)} />
      
      {/* Conteúdo do Site - sempre visível, por trás do vídeo */}
      <div
        className="min-h-screen bg-transparent relative"
        lang="pt-BR"
      >
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
                <Hero startAnimations={showContent} />
                <BrandBanner />
                <History />
                <ServicesMarquee />
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
};

export default LandingPage;