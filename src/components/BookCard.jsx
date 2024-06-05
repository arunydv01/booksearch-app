import React from 'react';

const BookCard = ({ book, onAdd, bookshelf = [] }) => {
  const isBookInBookshelf = bookshelf.some((item) => item.key === book.key);

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author_name?.join(', ')}</p>
      {!isBookInBookshelf && (
        <button className="bookcard-btn" onClick={() => onAdd(book)}>
          Add to Bookshelf
        </button>
      )}
    </div>
  );
};

export default BookCard;




