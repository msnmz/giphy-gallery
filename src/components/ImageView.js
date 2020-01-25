import React from 'react';

export default function ImageView({ source, title }) {
  return (
    <div>
      <img src={source} alt={title} />
      <p>title</p>
    </div>
  );
}