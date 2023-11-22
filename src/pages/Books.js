import { useState, useEffect } from "react";
import BookDetails from "./BookDetails"


const BookList = ({ books, onAddToCart, onDetails }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDetailsClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <h2>Book Haven Library</h2>
    <div className="book-list-container">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <img src={book.imageURL} alt={book.title} />
          <li>{book.title}</li>
          {/* <button onClick={() => handleAddCartClick(book)}>Add to Cart</button> */}
          <button onClick={() => handleDetailsClick(book)}>Details</button>

          {selectedBook && selectedBook.id === book.id && (
            <BookDetails book={selectedBook} onAddToCart={onAddToCart} />
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default BookList;