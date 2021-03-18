import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <section className="body">
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">
            <Link to="/courses">Cursos</Link>
          </h2>
          <p className="body__description">
            ¿Quieres aprender alemán? Ofrecemos cursos de alemán desde el primer
            nivel (A1.1) hasta niveles avanzados como el C1. Los contenidos se
            basan en el Marco Común Europeo de Referencia para las Lenguas. La
            oferta incluye cursos semestrales, semi-intensivos, intensivos y
            superintensivos.
          </p>
        </aside>
        <section className="body__ilustration">
          <figure className="body__container">
            <img
              className="body__img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/home/cursos.jpg"
              alt="cursos image"
            />
          </figure>
        </section>
      </article>
      <article className="body__section">
        <aside className="body__aside body__aside--reversed">
          <h2 className="body__heading">
            <Link to="/institut">¿Quiénes somos?</Link>
          </h2>
          <p className="body__description">
            El Instituto Cultural Alexander von Humboldt, fundado en 1995,
            ofrece un espacio abierto para vivir de cerca la lengua y la cultura
            alemanas. Con este propósito, el Instituto ofrece: cursos de alemán
            en todos los niveles según el Marco Común Europeo de Referencia para
            las Lenguas, exámenes oficiales y actividades culturales
            relacionadas con el idioma y la cultura alemana.
          </p>
        </aside>
        <section className="body__ilustration body__ilustration--reversed">
          <figure className="body__container">
            <img
              className="body__img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/home/banner_color.png"
              alt="Quienes somos image"
            />
          </figure>
        </section>
      </article>
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">
            <Link>Deutsch auf dem Sofa</Link>
          </h2>
          <p className="body__description">
            Deutsch auf dem Sofa - nuestro programa de actividades virtuales
            extracurriculares para el aprendizaje de alemán – desde tu sofá.
          </p>
        </aside>
        <section className="body__ilustration">
          <figure className="body__container">
            <img
              className="body__img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/home/sofa.jpg"
              alt="Dads image"
            />
          </figure>
        </section>
      </article>

      <article className="body__section">
        <aside className="body__aside body__aside--reversed">
          <h2 className="body__heading">
            <Link to="/examenes">Exámenes</Link>
          </h2>
          <p className="body__description">
            ¿Necesitas un certificado válido internacionalmente que acredite tus
            conocimientos de alemán? Te ofrecemos exámenes Goethe para los
            niveles desde el nivel A1 hasta el B2.
          </p>
        </aside>
        <section className="body__ilustration body__ilustration--reversed">
          <figure className="body__container">
            <img
              className="body__img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/home/examen.jpg"
              alt="Exámenes image"
            />
          </figure>
        </section>
      </article>

      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">
            <Link>Oferta Cultural</Link>
          </h2>
          <p className="body__description">
            El Instituto Cultural Alexander von Humboldt, en alianza con
            diferentes entidades locales, nacionales e internacionales, organiza
            a lo largo del año eventos culturales que buscan promover y divulgar
            la cultura alemana en la ciudad de Medellín.
          </p>
        </aside>
        <section className="body__ilustration">
          <figure className="body__container">
            <img
              className="body__img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/home/torre.jpg"
              alt="Cultural image"
            />
          </figure>
        </section>
      </article>
    </section>
  );
};

export default Body;
