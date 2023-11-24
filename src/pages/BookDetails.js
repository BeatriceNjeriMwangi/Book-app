// import { useEffect, useState } from "react";

// export default function BookDetails () {

//     return (
//         <div>
//             <h1> </h1>
//         </div>
//     )
// }
import { useEffect } from "react";

const BookDetails = ({ book, onAddToCart }) => {
  useEffect(() => {
    console.log(book);
  }, [book]);

  return (
    <div className="book-details-template">

      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Year: {book.publicationYear}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating} Number of ratings: {book.ratings}</p>
      <p>Price: ${book.price}</p>
      <p>Availability: {book.availability}</p>
    
    </div>
  );
};

export default BookDetails;