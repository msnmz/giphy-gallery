import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  function handleSearchInputChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <input type='text' className='search-input' value={searchText} onChange={handleSearchInputChange} />
      <button className='search-button' onClick={() => onSearch(searchText)}>Search</button>
    </>
  )
}