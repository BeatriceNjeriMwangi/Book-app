import './App.css';
import { useEffect, useState } from 'react';
import BookList from "./pages/Books";
import "./styles/booklist.css"
import Header from "./Components/Header";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import ShoppingCart from "./pages/ShoppingCart";
import BookDetails from './pages/BookDetails';

function App() {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([])

  const API_URL = "https://json-server-books.onrender.com/books";
  const CART_API_URL = "https://json-server-books.onrender.com/cart";

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

  const handleAddToCart = (book) => {
    if (!cartItems.some((cartItem) => cartItem.id === book.id)) {
      setCartItems([...cartItems, {...book}]);
    }
  }

  const handleRemoveFromCart = (book) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== book.id);
    setCartItems(updatedCartItems);
  }

  const handleProceedToCheckout = () => {
    // Add logic for handling the checkout process
    // For now, let's just clear the cartItems array
    setCartItems([]);
  }

  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<BookList books={books} addToCart={handleAddToCart} />}
        ></Route>
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onProceedToCheckout={handleProceedToCheckout}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
