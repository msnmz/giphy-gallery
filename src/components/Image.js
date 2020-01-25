import React from 'react';

export default function Image({ source, title }) {
  return (
    <div>
      <img src={source} alt={title} />
      <p>title</p>
    </div>
  );
}