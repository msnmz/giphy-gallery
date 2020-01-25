import React, { useState } from 'react';
import './App.css';
import { getImages } from "./utils/giphy";
import { limitPerRequest } from "./utils/constants";
import SearchBar from "./components/SearchBar";
import Loading from './components/Loading';
import ImageList from './components/ImageList';
import ErrorView from './components/ErrorView';

function App() {
  const [imagesOffset, setImagesOffset] = useState(0); // Will provide to API to get new images rather than same ones
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); // Feedback while user waits for the new images
  const [error, setError] = useState(''); // Will contain error message if there is one.

  async function handleSearchClick(searchText) {
    try {
      setLoading(true);
      const newImages = await getImages(searchText, imagesOffset);
      setImagesOffset(prevValue => prevValue + limitPerRequest);
      setImages(prevValue => [...prevValue, ...newImages.data]); // Will add the new ones to the end of the list
      setError('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <SearchBar onSearch={handleSearchClick} />
      {images.length > 0 && <ImageList images={images} />}
      {loading && <Loading />}
      {error && <ErrorView message={error} />}
    </div>
  );
}

export default App;
