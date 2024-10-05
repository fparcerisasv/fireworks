// src/App.js

import React, { useState } from 'react';
import ParticleCanvas from './ParticleCanvas';
import ColorPicker from './ColorPicker';
import './App.css'; // Make sure to have some basic styles

const App = () => {
  const [color, setColor] = useState('#2185C5'); // Default color
  const [power, setPower] = useState(12); // Default power value

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <ParticleCanvas color={color} power={power} /> {/* Pass power value */}
      </div>
      <div style={{ padding: '20px', position: 'fixed', right: '10px', top: '10px' }}>
        <ColorPicker 
          selectedColor={color} 
          setColor={setColor} 
          power={power} 
          setPower={setPower} // Pass setPower to ColorPicker
        />
      </div>
    </div>
  );
};

export default App;