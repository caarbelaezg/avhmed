import React from 'react';

const Poster = ({ link }) => {
  return (
    <figure className="poster">
      <img className="poster__img" src={link} alt="" />
    </figure>
  );
};

export default Poster;
