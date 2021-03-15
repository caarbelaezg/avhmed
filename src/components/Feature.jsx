import React from 'react';

const Feature = ({ img, title, description }) => {
  return (
    <article className="feature">
      <img className="feature__icon" src={img} alt={title} />
      <h3 className="feature__title">{title}</h3>
      <p className="feature__description">{description}</p>
    </article>
  );
};

export default Feature;
