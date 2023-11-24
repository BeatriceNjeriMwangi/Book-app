import React, { useState } from 'react';


function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (e) => {
    e.preventDefault();
    // Pass the search term to the parent component (App.js)
    onSearch(searchTerm);
  };

  return (
    <header>
      <div className='form'>
        <h1>Books Haven</h1>
        <form onSubmit={handleSearch}>
          <div className='search-bar'>
            <label htmlFor="search"></label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Enter your search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='submit' id='search-button'>Search</button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
