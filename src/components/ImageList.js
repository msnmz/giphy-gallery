import React from 'react';
import ImageView from './ImageView';
import './ImageList.css';

export default function ImageList({ images }) {
  return (
    <ul className='images-container'>
      {
        images.map(image => (
          <li key={'search_results_' + image.id} className='image'>
            <ImageView source={image.images.original.url} title={image.title} />
          </li>
        ))
      }
    </ul>
  );
}