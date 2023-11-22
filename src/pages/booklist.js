import { useEffect } from "react";

const BookList = ({ books: bookData, onAddToCart, onDetails }) => {
  useEffect(() => {
    console.log(bookData);
  }, [bookData]);

  return (
    <div className="book-list-container">
      {bookData.map((book) => (
        <div className="book-card" key={book.id}>
          <img src={book.imageURL}/>
          <li>{book.title}</li>
          <button onClick={() => onAddToCart(book)}>Add to Cart</button>
          <button onClick={() => onDetails(book)}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
