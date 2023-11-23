import './App.css';
import { useEffect, useState } from 'react';
import BookList from "./pages/Books";
import "./styles/booklist.css"
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import ShoppingCart from "./pages/ShoppingCart";
import BookDetails from './pages/BookDetails';


function App() {
  const [books, setBooks] = useState([]);
  const [CartItems, setCartItems] = useState([])

  const API_URL = "https://json-server-books.onrender.com/books";
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => { 
        setBooks(data || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  function handleAddToCart(){
    const newItems = [...CartItems, books];
    setCartItems(newItems);
    console.log(`${book.title} added to the shopping cart.`);


  }
  function handleClick(){
    
  }  



  return (
    <>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<BookList books={books} addToCart={handleAddToCart}/>}></Route>
      <Route path="/cart" element={<ShoppingCart cartItems={CartItems}  />}></Route>

      
         


     
      
   

    </Routes>
   
    </>
    
  );
}

export default App;
