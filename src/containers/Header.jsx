import React, { useState } from 'react';
import Hamburger from '../components/Hamburger';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import MenuDesktop from '../components/MenuDesktop';

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
