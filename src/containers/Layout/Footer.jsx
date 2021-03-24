import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../../components/Social';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__description">
        <figure className="footer__container">
          <img
            className="footer__img"
            src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/home/banner_gris.png"
            alt="Logo avh gris"
          />
        </figure>
        <article className="footer_texts">
          <p className="footer__text">
            - Institución Educativa para el trabajo y el desarrollo humano.
          </p>
          <p className="footer__text">
            - Certificado de conocimientos académicos.
          </p>
          <p className="footer__text">
            - Licencia de Funcionamiento 012990 del 26 de Octubre de 2015.
          </p>
          <p className="footer__text">
            - Registros de programa N° 014788 del 01 de Diciembre de 2015.
          </p>
          <p className="footer__text">- Secretaría de Educación de Medellín.</p>
        </article>
      </section>
      <section className="footer__navigation">
        <h3 className="footer__heading">Sitemap</h3>
        <Link className="footer__link" to="/">
          Home
        </Link>
        <Link className="footer__link" to="/courses">
          Cursos
        </Link>
        <Link className="footer__link" to="/institut">
          Instituto
        </Link>
        <Link className="footer__link" to="/examenes">
          Examenes
        </Link>
        <Link className="footer__link" to="/dads">
          Deutsch auf dem sofa
        </Link>
        <Link className="footer__link" to="/">
          Cultural
        </Link>
        <Link className="footer__link" to="/contacto">
          Contacto
        </Link>
      </section>
      <section className="footer__legal">
        <h3 className="footer__heading">Legal</h3>
        <p className="footer__text">Documentos</p>
        <p className="footer__text">Gestión de calidad</p>
      </section>
      <section className="footer__aliados">
        <h3 className="footer__heading">Aliados</h3>
        <p className="footer__text">Goethe Institut</p>
        <p className="footer__text">Au pair</p>
      </section>
      <section className="footer__social">
        <Social />
      </section>
      <section className="footer__copy">
        <p className="footer__text">
          &copy; AVH Medellín. Todos los derechos reservados.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
