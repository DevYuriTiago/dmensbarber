import React from 'react';
import History from './History';
import ServicesMarquee from './ServicesMarquee';

const HistoryServicesWrapper: React.FC = () => {
  return (
    <section 
      id="HistoryServicesWrapper" 
      className="relative isolate bg-gradient-to-b from-dmens-orange via-orange-400 via-[#FAFAFA] via-white to-transparent overflow-hidden"
    >
      {/* Subtle blur transition overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent backdrop-blur-[0.5px] mix-blend-soft-light"></div>
      
      <History />
      <ServicesMarquee />
    </section>
  );
};

export default HistoryServicesWrapper;
