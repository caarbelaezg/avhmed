import React from 'react';
import { Link } from 'react-router-dom';

const MenuDesktop = () => {
  return (
    <nav className="menu-desk">
      <ul className="menu-desk__list">
        <li className="menu-desk__item">
          <Link to="/courses">
            <p className="menu-desk__text">Cursos</p>
          </Link>
        </li>
        <li className="menu-desk__item">
          <Link to="/institut">
            <p className="menu-desk__text">Instituto</p>
          </Link>
        </li>
        <li className="menu-desk__item">
          <Link to="/examenes">
            <p className="menu-desk__text">Exámenes</p>
          </Link>
        </li>
        <li className="menu-desk__item">
          <Link to="/blog">
            <p className="menu-desk__text">Blog</p>
          </Link>
        </li>
        <li className="menu-desk__item">
          <Link to="/contacto">
            <p className="menu-desk__text">Contacto</p>
          </Link>
        </li>
        <li className="menu-desk__item menu-desk__item--other">
          <p className="menu-desk__text">Otros</p>
          <img src="https://img.icons8.com/plasticine/100/000000/chevron-down.png" />
          <ul className="menu-desk__nestedlist">
            <li className="menu-desk__nesteditem">
              <Link to="/dads">
                <p className="menu-desk__text">Deutsch auf dem sofa</p>
              </Link>
            </li>
            <li className="menu-desk__nesteditem">
              <Link to="/cultural">
                <p className="menu-desk__text">Cultural</p>
              </Link>
            </li>            
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
