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

  return (
    <>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<BookList books={books} />}></Route>
      <Route path="/cart" element={<ShoppingCart books={books} />}></Route>
      <Route path="/details" element={<BookDetails books={books} />}></Route>
         


      {/* <Route path="/category" element={<ShoppingCart books={books} />}></Route> */}



      {/* <Route path='/category' element={<Category books={books}/>}</Route> */}
     
      
   

    </Routes>
   
    </>
    // <div className = "App">
    //   <div>
    //   <h1>Books Haven</h1>
    //   </div>
    //   <BookList books={books} />

      
    // </div>
  );
}

export default App;
