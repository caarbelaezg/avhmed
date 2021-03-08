import React from 'react';

const Hamburger = ({ onOpen }) => (
  <div onClick={onOpen} className="hamburger">
    <span className="hamburger__icon">&nbsp;</span>
  </div>
);

export default Hamburger;
