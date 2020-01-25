import React from 'react';
import './ImageView.css';

export default function ImageView({ source, title }) {
  return (
    <div className='image-container'>
      <img src={source} alt={title} />
      <p className='image-title'>{title}</p>
    </div>
  );
}