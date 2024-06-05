import React from 'react';
import BookList from '../components/BookList';

const Bookshelf = ({ bookshelf }) => {
  return (
    <div>
      <h2>My Bookshelf:</h2>
      <BookList books={bookshelf} bookshelf={bookshelf} />
    </div>
  );
};

export default Bookshelf;




