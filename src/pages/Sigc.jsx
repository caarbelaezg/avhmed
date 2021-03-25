import React from 'react';

const Sigc = () => {
  return (
    <section className="body body--sgc">
      <article className="body__section body__section--fw">
        <h2 className="body__heading">Sistema de calidad</h2>
        <p className="body__description">
          El Instituto Cultural Alexander von Humboldt se organiza por gestiones
          y procesos de acuerdo a su misión y visión. El mapa demuestra la
          interacción de las gestiones entre ellas y las partes interesadas.
        </p>
      </article>
      <article className="body__section">
        <section className="body__ilustration">
          <figure className="body__container">
            <img
              className="body__img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/SIC/mapa+de+procesos+AvH+version+2.png"
              alt="cursos image"
            />
          </figure>
        </section>
        <section className="body__ilustration">
          <figure className="body__container">
            <img
              className="body__img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/SIC/Anexo+02++Organigrama++V01.png"
              alt="cursos image"
            />
          </figure>
        </section>
      </article>
    </section>
  );
};

export default Sigc;
