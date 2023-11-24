import { useState, useEffect } from "react";
import BookDetails from "./BookDetails";
import 

const BookList = ({ books, onAddToCart, onDetails }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDetailsClick = (book) => {
    setSelectedBook(book);
  };

  const handleAddCartClick = (book) => {
    onAddToCart(book);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2>Book Haven Library</h2>
      <div>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="book-list-container">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.imageURL} alt={book.title} />
            <li>{book.title}</li>
            <button onClick={() => handleAddCartClick(book)}>Add to Cart</button>
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

export default BookList;