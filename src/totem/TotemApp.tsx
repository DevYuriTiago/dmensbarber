import React from 'react';
import { TotemProvider, useTotem } from './context/TotemContext';
import WelcomeScreen from './components/WelcomeScreen';
import ServicesScreen from './components/ServicesScreen';
import CustomerScreen from './components/CustomerScreen';
import TimeScreen from './components/TimeScreen';
import ConfirmationScreen from './components/ConfirmationScreen';

const TotemContent: React.FC = () => {
  const { state } = useTotem();

  const renderCurrentScreen = () => {
    switch (state.currentStep) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'services':
        return <ServicesScreen />;
      case 'customer':
        return <CustomerScreen />;
      case 'time':
        return <TimeScreen />;
      case 'confirmation':
        return <ConfirmationScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      {renderCurrentScreen()}
    </div>
  );
};

const TotemApp: React.FC = () => {
  return (
    <TotemProvider>
      <TotemContent />
    </TotemProvider>
  );
};

export default TotemApp;