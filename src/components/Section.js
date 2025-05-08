import React from 'react';
import './Section.css';
import placeholderImage from '../images/placeholder.jpg'

function Section() {
  return (
    <section className="section">
      <img src={placeholderImage} alt="Placeholder" />
    </section>
  );
}

export default Section;