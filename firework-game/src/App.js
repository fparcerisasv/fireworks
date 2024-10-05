// src/App.js

import React, { useState } from 'react';
import ParticleCanvas from './ParticleCanvas';
import ColorPicker from './ColorPicker';
import './App.css'; // Make sure to have some basic styles

const App = () => {
  const [selectedColors, setSelectedColors] = useState(['#2185C5']); // Start with one default color
  const [power, setPower] = useState(12); // Default power value
  const [metal, setMetal] = useState(12); // Defaultmetal value
  const [count, setCount] = useState(0);
 
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <ParticleCanvas  colors={selectedColors} power={power} metal = {metal} setCount={setCount} /> {/* Pass power value */}
      </div>
      <div style={{ padding: '20px', position: 'fixed', right: '10px', top: '10px' }}>
        <ColorPicker 
          selectedColors={selectedColors} 
          setSelectedColors={setSelectedColors}
          power={power} 
          setPower={setPower} // Pass setPower to ColorPicker
          metal={metal} 
          setMetal={setMetal} // Pass setPower to ColorPicker
        />

    <div style={{
        position: 'fixed',
        top: '10px',
        left: '100px', // Adjust the position as needed
        color: 'white',
        fontSize: '24px',
      }}>
        CO2 emissions: {count.toFixed(5)} Kg
      </div>
      </div>
    </div>
  );
};

export default App;