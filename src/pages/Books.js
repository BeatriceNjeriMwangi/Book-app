
import { useState } from "react";
import BookDetails from "./BookDetails";
// import '.../styles/booklist.css'
const BookList = ({ books, addToCart }) => {

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

      <div className="book-list-container">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.imageURL} alt={book.title} />
            <li>{book.title}</li>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
            <button onClick={() => handleDetailsClick(book)}>Details</button>
            {selectedBook && selectedBook.id === book.id && (
              <BookDetails book={selectedBook} addToCart={addToCart} />

            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;