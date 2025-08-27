import React, { useState, useEffect } from 'react';

interface LiveRegionProps {
  children?: React.ReactNode;
}

const LiveRegion: React.FC<LiveRegionProps> = ({ children }) => {
  const [announcements, setAnnouncements] = useState<string[]>([]);

  useEffect(() => {
    // Global function to announce messages
    (window as any).announceToScreenReader = (message: string) => {
      setAnnouncements(prev => [...prev, message]);
      // Clear after announcement
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1));
      }, 1000);
    };

    return () => {
      delete (window as any).announceToScreenReader;
    };
  }, []);

  return (
    <>
      {/* Polite announcements */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
        id="status-announcements"
      >
        {announcements.map((announcement, index) => (
          <span key={index}>{announcement}</span>
        ))}
      </div>
      
      {/* Assertive announcements for urgent messages */}
      <div 
        role="alert" 
        aria-live="assertive" 
        aria-atomic="true"
        className="sr-only"
        id="alert-announcements"
      >
      </div>
      
      {children}
    </>
  );
};

export default LiveRegion;
