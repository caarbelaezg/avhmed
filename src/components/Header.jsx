import React, { useState } from 'react';
import Hamburger from '../UI/Hamburger';
import Logo from '../UI/Logo';
import Menu from '../UI/Menu';
import MenuDesktop from '../UI/MenuDesktop';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <Logo />
      <MenuDesktop />
      <Hamburger onOpen={() => setIsOpen(true)} />
      <Menu open={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
