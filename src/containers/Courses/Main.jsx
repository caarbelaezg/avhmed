import React from 'react';
import Courses from '../../assets/static/courses.svg';

const Main = () => {
  return (
    <section className="main main--courses">
      <article className="main__avh-description">
        <h1 className="main__heading">Cursos</h1>
        <p className="main__description">
          Los cursos regulares se dictan semestralmente, de febrero a junio y de
          agosto a noviembre. Y a mitad y final de año se ofrecen cursos
          intensivos. Cada curso cuenta con una intensidad de 80 horas
          académicas. El instituto los lleva a cabo con base al Marco Común
          Europeo de las Lenguas - MCER.
        </p>
      </article>
      <article className="main__info">
        <figure className="main__imgContainer">
          <img className="main__img" src={Courses} alt="avisos recientes" />
        </figure>
      </article>
    </section>
  );
};

export default Main;
