import React from 'react';
import Section from './Section';
import Article from './Article';
import Aside from './Aside';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Section />
      <div className="divider-left"></div>
      <Article />
      <div className="divider-right"></div>
      <Aside />
    </main>
  );
}

export default Main;