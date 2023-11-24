import React from "react";

const BookDetails = ({ book, onAddToCart }) => {
  return (
    <div className="book-details-template">
      {/* <img src={book.imageURL} alt={book.title} /> */}
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Year: {book.publicationYear}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating} Number of ratings: {book.ratings}</p>
      <p>Price: {book.price}</p>
      <p>Availability: {book.availability}</p>
      <button onClick={() => onAddToCart(book)}>Add to Cart</button>
    </div>
  );
};


export default BookDetails;