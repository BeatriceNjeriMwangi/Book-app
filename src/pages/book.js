import { useEffect } from "react";


const BookDetails = ({ books: bookData, onAddToCart,}) => {
useEffect (() => {
    console.log (bookData);
}, [bookData])
    return(
        <div>
            
        </div>
        
    )
}