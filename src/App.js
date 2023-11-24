import './App.css';
import { useEffect, useState } from 'react';
import BookList from "./pages/Books";
import "./styles/booklist.css"
import Header from "./Components/Header";
import { Routes, Route,  } from "react-router-dom";
import Navbar from './Components/Navbar';
import ShoppingCart from "./pages/ShoppingCart";




function App() {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);  // Initialize to all books

  const API_URL = "https://json-server-books.onrender.com/books";
 // const CART_API_URL = "https://json-server-books.onrender.com/cart";

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    // If the search term is empty, return all books
    if (searchTerm === '') {
      setFilteredBooks(books);
    } else {
      // Filter the books based on an exact match of the title
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  const fetchData = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data || []);
        setFilteredBooks(data || []);  // Set filteredBooks to all books initially
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleAddToCart = (book) => {
    if (!cartItems.some((cartItem) => cartItem.id === book.id)) {
      setCartItems([...cartItems, { ...book }]);
    }
  };

  const handleRemoveFromCart = (book) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== book.id);
    setCartItems(updatedCartItems);
  };

  const handleProceedToCheckout = () => {
    // Add logic for handling the checkout process
    // For now, let's just clear the cartItems array
    setCartItems([]);
    alert('Purchase Successful!');
  };

  return (
    <>
      <Navbar />
      <Header onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={<BookList books={filteredBooks} addToCart={handleAddToCart} />}
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
