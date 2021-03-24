import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Button from '../../components/Button';

const Main = () => {
  const { state } = useContext(AppContext);
  const { links } = state;
  return (
    <section className="main main--sofa">
      <article className="main__avh-description">
        <h1 className="main__heading main__heading--dads">Deutsch auf dem Sofa</h1>
        <p className="main__description">
          Deutsch auf dem Sofa - nuestro programa de actividades virtuales
          extracurriculares para el aprendizaje de alemán – desde tu sofá. Las
          ofertas son gratuitas y abiertas al público.
        </p>
        <Button type="avh__btn" link={links.dads}>
          Inscribirse
        </Button>
      </article>
      <article className="main__info">
        <figure className="main__imgContainer">
          <img
            className="main__img"
            src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/Deutsch+auf+dem+Sofa/sofa.svg"
            alt="avisos recientes"
          />
        </figure>
      </article>
    </section>
  );
};

export default Main;
