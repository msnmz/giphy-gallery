import React from 'react';
import './ErrorView.css';

export default function ErrorView({ message }) {
  return <p className='error-message'>{message}</p>;
}