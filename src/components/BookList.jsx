import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onAdd, bookshelf }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} onAdd={onAdd} bookshelf={bookshelf} />
      ))}
    </div>
  );
};

export default BookList;



