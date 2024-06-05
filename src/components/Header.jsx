import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='header-btn'>
      <button className = "nav-btn" onClick={() => navigate('/')}>Search</button>
      <button className = "nav-btn" onClick={() => navigate('/bookshelf')}>My Bookshelf</button>
    </header>
  );
};

export default Header;
