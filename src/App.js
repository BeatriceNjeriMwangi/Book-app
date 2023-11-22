import './App.css';
import { useEffect, useState } from 'react';
import BookList from "./pages/Books";
import "./styles/booklist.css"

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
    <div className = "App">
      <div>
      <h1>Books Haven</h1>
      </div>
      <BookList books={books} />

      
    </div>
  );
}

export default App;
