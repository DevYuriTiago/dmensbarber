import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TotemApp from './totem/TotemApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Principal */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Totem de Autoatendimento */}
        <Route path="/totem" element={<TotemApp />} />
      </Routes>
    </Router>
  );
}

export default App;