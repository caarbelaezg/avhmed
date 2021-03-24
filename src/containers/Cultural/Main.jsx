import React from 'react';

const Main = () => {
  return (
    <section className="main main--cultural">
      <article className="main__avh-description">
        <h1 className="main__heading main__heading--dads">Oferta Cultural</h1>
        <p className="main__description">
          Con el apoyo del Goethe-Institut organizamos eventos culturales para
          la sociedad antioqueña que promueven el acercamiento de las culturas,
          el intercambio y la reflexión.
        </p>
      </article>
      <article className="main__info">
        <figure className="main__imgContainer">
          <img
            className="main__img"
            src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/Cultural/event.svg"
            alt="avisos recientes"
          />
        </figure>
      </article>
    </section>
  );
};

export default Main;
