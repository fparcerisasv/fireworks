// src/components/ColorPicker.js

import React from 'react';

// Define a mapping of color names to their hex values
const colors = [
    { name: 'Coure', color: '#2185C5' },
    { name: 'Magnesi', color: '#f9f3ee' },
    { name: 'Calci', color: '#f1c232' },
    { name: 'Bari', color: '#6e9627' },
    { name: 'Ferro', color: '#FF3B3F' },
    { name: 'Sodi', color: '#FFDA44' },
  
];

const ColorPicker = ({ selectedColors, setSelectedColors, power, setPower, metal, setMetal }) => {
    const handleColorChange = (color) => {
        // Add the color if it's not in the selectedColors, otherwise remove it
        setSelectedColors((prevColors) => {
          if (prevColors.includes(color)) {
            return prevColors.filter(c => c !== color); // Remove color
          } else {
            return [...prevColors, color]; // Add color
          }
        });
      };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
      <span>Select Particle Color:</span>
      <div style={{ marginTop: '5px' }}>
      {colors.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleColorChange(item.color)}
            style={{
              backgroundColor: item.color,
              color: 'white',
              marginRight: '10px',
              borderRadius: '5px',
              padding: '5px 10px',
              margin: '5px 0',
              cursor: 'pointer',
              border: selectedColors.includes(item.color) ? '3px solid white' : '3px solid black',
              width: '100%', // Makes button full-width
              textAlign: 'left', // Align text to the left
            }}
          >
            {item.name}
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
      <span style={{ color: 'white' }}>{`Current Powder: ${(power * 21.05 + 78.95).toFixed(2)} g`}</span>
    </div>
  );
};

export default ColorPicker;
