import React, { useState } from 'react';
import './App.css';
import { getImages } from "./utils/giphy";
import { limitPerRequest } from "./utils/constants";
import { isScrolledToBottom } from './utils/helpers';
import SearchBar from "./components/SearchBar";
import Loading from './components/Loading';
import ImageList from './components/ImageList';
import ErrorView from './components/ErrorView';
import ToggleDisplay from './components/ToggleDisplay';

function App() {
  const [imagesOffset, setImagesOffset] = useState(0); // Will provide to API to get new images rather than same ones
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); // Feedback while user waits for the new images
  const [error, setError] = useState(''); // Will contain error message if there is one.
  const [query, setQuery] = useState('');
  const [oneColumnDisplay, setOneColumnDisplay] = useState(true);

  async function handleSearch(searchText, isNewSearch) {
    try {
      setLoading(true);
      setQuery(searchText);
      const newImages = await getImages(searchText, imagesOffset);
      setImagesOffset(prevValue => prevValue + limitPerRequest);
      /**
       * New search is made when user clicks the search button,
       * so we need to reset the images we are displaying,
       * but when the user scrolls to the bottom, we are just adding new results to the end of the list.
       */
      setImages(prevValue => isNewSearch ? newImages.data : [...prevValue, ...newImages.data]);
      setError('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  window.onscroll = (event) => {
    if (isScrolledToBottom() && !loading && query) {
      /* 
        setLoading(true) may seen as duplicate but it prevents multiple call on handleSearch function.
        onscroll event occur so many times and makes many call to the function before it sets the loading state.
        So, we need to ensure it first.
      */
      setLoading(true);
      handleSearch(query, false);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={searchText => handleSearch(searchText, true)} disabled={loading} />
      {images.length > 0 &&
        <>
          <ToggleDisplay onToggle={setOneColumnDisplay} />
          <ImageList images={images} oneColumn={oneColumnDisplay} />
        </>
      }
      {loading && <Loading />}
      {error && <ErrorView message={error} />}
    </div>
  );
}

export default App;
