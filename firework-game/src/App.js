// src/App.js

import React from 'react';
import ParticleCanvas from './ParticleCanvas';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#00000' }}>Particle Effect</h1>
      <ParticleCanvas />
    </div>
  );
};

export default App;
