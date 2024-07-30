// src/components/Menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Top Headlines</Link></li>
        <li><Link to="/sports-news">Sports News</Link></li>
        <li><Link to="/daily-news">Daily News</Link></li>
        <li><Link to="/search-news">Search News</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
