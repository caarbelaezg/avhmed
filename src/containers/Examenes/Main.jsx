import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Button from '../../components/Button';

const Main = () => {
  const { state } = useContext(AppContext);
  const { links } = state;
  return (
    <section className="main main--examenes">
      <article className="main__avh-description">
        <h1 className="main__heading">Exámenes</h1>
        <p className="main__description">
          El Instituto Alexander von Humboldt es certificado para llevar a cabo
          y evaluar los exámenes oficiales del Instituto Goethe desde el nivel
          A1 hasta el nivel B2.
          <Button type="avh__btn" link={links.examenes}>
            Inscribirse
          </Button>
        </p>
      </article>
      <article className="main__info">
        <figure className="main__imgContainer">
          <img
            className="main__img"
            src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/examenes/examen.svg"
            alt="examenes"
          />
        </figure>
      </article>
    </section>
  );
};

export default Main;
