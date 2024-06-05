import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';
import { useNavigate } from 'react-router-dom';

const Search = ({ addToBookshelf, bookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      axios
        .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => {
          setBooks(response.data.docs);
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
        });
    }
    else if (query.length===0){
      setBooks([]);
    }
  }, [query]);

  return (
    <div className="search-bar">
        <div className='search-panel'>
            <label htmlFor="books">Search by book name</label>
            <input
                type="text"
                placeholder="Search for books..."
                value={query}
                name="books"
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
        <div className='booklist-panel'>
            <BookList books={books} onAdd={addToBookshelf} bookshelf={bookshelf} />
        </div>
    </div>
  );
};

export default Search;


