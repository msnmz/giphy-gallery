import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch, disabled }) {
  const [searchText, setSearchText] = useState('');

  function handleSearchInputChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <input type='text' className='search-input' value={searchText} onChange={handleSearchInputChange} placeholder='Search keywords...' />
      <button disabled={disabled} className='search-button' onClick={() => onSearch(searchText)}>Search</button>
    </>
  )
}