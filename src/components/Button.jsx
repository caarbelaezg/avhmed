import React from 'react';

const Button = ({ type, link, children }) => {
  return (
    <a className={type} href={link} target="_blank">
      {children}
    </a>
  );
};

export default Button;
