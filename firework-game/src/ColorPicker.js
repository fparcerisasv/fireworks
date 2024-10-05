// src/components/ColorPicker.js

import React from 'react';

// Define a mapping of color names to their hex values
const colorOptions = [
    { name: 'Coure', color: '#2185C5' },
    { name: 'Magnesi', color: '#f9f3ee' },
    { name: 'Calci', color: '#f1c232' },
    { name: 'Bari', color: '#6e9627' },
    { name: 'Ferro', color: '#FF3B3F' },
    { name: 'Sodi', color: '#FFDA44' },
  
];

const ColorPicker = ({ selectedColor, setColor, power, setPower, metal, setMetal }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
      <span>Select Particle Color:</span>
      <div style={{ marginTop: '5px' }}>
        {colorOptions.map(({ name, color }) => (
          <button
            key={name}
            style={{
              backgroundColor: color,
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              padding: '5px 10px',
              margin: '5px 0',
              cursor: 'pointer',
              outline: selectedColor === color ? '2px solid black' : 'none',
              width: '100%', // Makes button full-width
              textAlign: 'left', // Align text to the left
            }}
            onClick={() => setColor(color)} // Update selected color
          >
            {name} {/* Display color name */}
          </button>
        ))}
      </div>
      <span style={{ marginTop: '10px' }}>Select Quantity of Component:</span>
      <input
        type="range"
        min="1"
        max="20" // Set appropriate range for power
        value={metal}
        onChange={(e) => setMetal(Number(e.target.value))} // Update power value
        style={{ marginTop: '5px' }}
      />
      <span style={{ color: 'white' }}>{`Current Metal: ${metal} g`}</span>


      <span style={{ marginTop: '10px' }}>Select Quantity of Powder:</span>
      <input
        type="range"
        min="1"
        max="20" // Set appropriate range for power
        value={power}
        onChange={(e) => setPower(Number(e.target.value))} // Update power value
        style={{ marginTop: '5px' }}
      />
      <span style={{ color: 'white' }}>{`Current Powder: ${power} g`}</span>
    </div>
  );
};

export default ColorPicker;
