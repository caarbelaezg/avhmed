import React from 'react';
import { Link } from 'react-router-dom';
import LogoRounded from '../assets/static/logo_rounded.png';

const Logo = () => (
  <section className="logo">
    <figure className="logo__fig">
      <Link to="/">
        <img className="logo__img" src={LogoRounded} alt="Avh logo" />
      </Link>
    </figure>
    <Link to="/">
      <p className="logo__text">Alexander von Humboldt</p>
    </Link>
  </section>
);

export default Logo;
