import React from "react";

const BookDetails = ({ book, onGoBack }) => {
  return (
    <div className="book-details-template">


      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Year: {book.publicationYear}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating} Number of ratings: {book.ratings}</p>
      <p>Price: {book.price}</p>
      <p>Availability: {book.availability}</p>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
};

export default BookDetails;
