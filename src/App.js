import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Bookshelf from './pages/Bookshelf';
import Header from './components/Header';

const App = () => {
  const [bookshelf, setBookshelf] = useState(() => {
    const savedBooks = localStorage.getItem('bookshelf');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  const addToBookshelf = (book) => {
    setBookshelf((prevBookshelf) => [...prevBookshelf, book]);
  };

  return (
    <div className="main">
      <Router>
        <div className="header">
          <Header />
        </div>
        <div className="routes">
          <Routes>
            <Route
              path="/"
              element={<Search addToBookshelf={addToBookshelf} bookshelf={bookshelf} />}
            />
            <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;


