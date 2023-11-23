import React, { useState  } from 'react';



function Header(){
    const [books, setBooks] = useState([]);
    const filterBooks = () => books.filter((book) => {
        setBooks(book)
    })
    return(
        <header>
            <div className='form'>
            <h1>Books Haven</h1>
            <form>
                <div className='search-barg'>
                <label for="search" ></label>
                 <input type="text" id="search" name="search" placeholder="Enter your search" />
                 <button id='search-button' onClick={filterBooks}>Search</button>
                 </div>
            </form>
            </div>

        </header>
    )
}
export default Header;