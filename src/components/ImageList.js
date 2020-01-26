import React from 'react';
import ImageView from './ImageView';
import './ImageList.css';

export default function ImageList({ images, oneColumn }) {
  return (
    <ul className={`images-container ${oneColumn ? 'one-column' : 'three-column'}`}>
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