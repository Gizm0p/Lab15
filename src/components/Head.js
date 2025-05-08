import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

function Head() {
  return (
    <header className="head">
      <nav>
        <Link to="/">Новости</Link>
        <Link to="/about">О проекте</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
}

export default Head;