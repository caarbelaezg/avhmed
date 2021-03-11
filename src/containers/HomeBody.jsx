import React from 'react';
import Sofa from "../assets/static/sofa.jpg"
import Examen from "../assets/static/examen.jpg"
import Torre from "../assets/static/torre.jpg"

const HomeBody = () => {
  return (
    <section className="homebody">
      <article className="homebody__section">
        <aside className="homebody__aside">
          <h2 className="homebody__feature">Cursos</h2>
          <p className="homebody__description">
            ¿Quieres aprender alemán? Ofrecemos cursos de alemán desde el primer
            nivel (A1.1) hasta niveles avanzados como el C1. Los contenidos se
            basan en el Marco Común Europeo de Referencia para las Lenguas. La
            oferta incluye cursos semestrales, semi-intensivos, intensivos y
            superintensivos.
          </p>
        </aside>
        <section className="homebody__ilustration">
          <figcaption className="homebody__container">
            <img className="homebody__img" src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/varios/Cursos.jpg" alt="cursos image" />
          </figcaption>
        </section>
      </article>
      <article className="homebody__section">
        <aside className="homebody__aside homebody__aside--reversed">
          <h2 className="homebody__feature">¿Quiénes somos?</h2>
          <p className="homebody__description">
            El Instituto Cultural Alexander von Humboldt, fundado en 1995,
            ofrece un espacio abierto para vivir de cerca la lengua y la cultura
            alemanas. Con este propósito, el Instituto ofrece: cursos de alemán
            en todos los niveles según el Marco Común Europeo de Referencia para
            las Lenguas, exámenes oficiales y actividades culturales
            relacionadas con el idioma y la cultura alemana.
          </p>
        </aside>
        <section className="homebody__ilustration homebody__ilustration--reversed">
          <figcaption className="homebody__container">
            <img className="homebody__img" src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/logos/LOGO+HUMBOLDT+-+Transparencia+%5BColor%5D.png" alt="cursos image" />
          </figcaption>
        </section>
      </article>
      <article className="homebody__section">
        <aside className="homebody__aside">
          <h2 className="homebody__feature">Deutsch auf dem Sofa</h2>
          <p className="homebody__description">
            Deutsch auf dem Sofa - nuestro programa de actividades virtuales
            extracurriculares para el aprendizaje de alemán – desde tu sofá.
          </p>
        </aside>
        <section className="homebody__ilustration">
          <figcaption className="homebody__container">
            <img className="homebody__img" src={Sofa} alt="cursos image" />
          </figcaption>
        </section>
      </article>

      <article className="homebody__section">
        <aside className="homebody__aside homebody__aside--reversed">
          <h2 className="homebody__feature">Exámenes</h2>
          <p className="homebody__description">
            ¿Necesitas un certificado válido internacionalmente que acredite tus
            conocimientos de alemán? Te ofrecemos exámenes Goethe para los
            niveles desde el nivel A1 hasta el B2.
          </p>
        </aside>
        <section className="homebody__ilustration homebody__ilustration--reversed">
          <figcaption className="homebody__container">
            <img className="homebody__img" src={Examen} alt="cursos image" />
          </figcaption>
        </section>
      </article>

      <article className="homebody__section">
        <aside className="homebody__aside">
          <h2 className="homebody__feature">Oferta Cultural</h2>
          <p className="homebody__description">
            El Instituto Cultural Alexander von Humboldt, en alianza con
            diferentes entidades locales, nacionales e internacionales, organiza
            a lo largo del año eventos culturales que buscan promover y divulgar
            la cultura alemana en la ciudad de Medellín.
          </p>
        </aside>
        <section className="homebody__ilustration">
          <figcaption className="homebody__container">
            <img className="homebody__img" src={Torre} alt="cursos image" />
          </figcaption>
        </section>
      </article>
    </section>
  );
};

export default HomeBody;
