import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Article.css';

function News() {
  return (
    <>
      <h1>Актуальные новости</h1>
      <p>Здесь представлены последние новости и события, касающиеся нашего проекта и деятельности университета.</p>
      <p>Следите за обновлениями и будьте в курсе всех важных событий!</p>
    </>
  );
}

function About() {
  return (
    <>
      <h1>Южный федеральный университет</h1>
      <p>Южный федеральный университет.</p>
    </>
  );
}

function Contacts() {
  return (
    <>
      <h1>Контактная информация</h1>
      <p>Телефон: +7 (999) 123-45-67</p>
    </>
  );
}

function NotFound() {
  return (
    <>
      <h1>404 - Страница не найдена</h1>
      <p>Запрашиваемая страница не существует.</p>
    </>
  );
}

function Article() {
  return (
    <article className="article">
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </article>
  );
}

export default Article;