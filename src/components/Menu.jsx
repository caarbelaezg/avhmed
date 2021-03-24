import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ open, onClose }) => {
    
  const menuAppearStyle = {
    borderRight: open !== true ? 'none' : '1px solid #cccccc',
    transform: open !== true ? 'translateX(100%)' : 'translateX(0%)',
  };

  return (
    <section className="menu" style={menuAppearStyle}>

      <div onClick={onClose} className="menu__icon">
        &#10006;
      </div>

      <nav className="menu__nav">
        <ul className="menu__list">
          <li className="menu__item">
            <Link onClick={onClose} to="/">
              <span className="menu__image">
                <img src="https://img.icons8.com/material-rounded/24/000000/home.png" />
              </span>
              <p className="menu__text">Home</p>
            </Link>
          </li>
          <li className="menu__item">
            <Link onClick={onClose} to="/courses">
              <span className="menu__image">
                <img src="https://img.icons8.com/ios-filled/50/000000/open-book.png" />
              </span>
              <p className="menu__text">Cursos</p>
            </Link>
          </li>
          <li className="menu__item">
            <Link onClick={onClose} to="/institut">
              <span className="menu__image">
                <img src="https://img.icons8.com/material-sharp/24/000000/school-building.png" />
              </span>
              <p className="menu__text">Instituto</p>
            </Link>
          </li>
          <li className="menu__item">
            <Link onClick={onClose} to="/examenes">
              <span className="menu__image">
                <img src="https://img.icons8.com/fluent-systems-filled/24/000000/test-results.png" />
              </span>
              <p className="menu__text">Examenes</p>
            </Link>
          </li>
          <li className="menu__item">
            <Link onClick={onClose} to="/dads">
              <span className="menu__image">
                <img src="https://img.icons8.com/metro/26/000000/sofa.png" />
              </span>
              <p className="menu__text">Deutsch auf dem Sofa</p>
            </Link>
          </li>
          <li className="menu__item">
            <Link onClick={onClose} to="/">
              <span className="menu__image">
                <img src="https://img.icons8.com/android/24/000000/tear-off-calendar.png" />
              </span>
              <p className="menu__text">Cultural</p>
            </Link>
          </li>
          <li className="menu__item">
            <Link onClick={onClose} to="/contacto">
              <span className="menu__image">
                <img src="https://img.icons8.com/material/24/000000/important-mail.png" />
              </span>
              <p className="menu__text">Contacto</p>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
