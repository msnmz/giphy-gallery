import React, { useState } from 'react';
import './ToggleDisplay.css';

export default function ToggleDisplay({ onToggle }) {
  const [oneColumn, setOneColumn] = useState(true);

  function handleToggle(toOneColumnView) {
    setOneColumn(toOneColumnView);
    onToggle(toOneColumnView);
  }

  return (
    <div className='toggle-container'>
      <button onClick={() => handleToggle(true)} className={`toggle-button ${oneColumn ? 'active' : 'passive'}`}>1-Column Display</button>
      <button onClick={() => handleToggle(false)} className={`toggle-button ${oneColumn ? 'passive' : 'active'}`}>3-Column Display</button>
    </div>
  )
} 
