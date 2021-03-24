import React from 'react';
import Posters from './Posters';

const Body = () => {
  return (
    <section className="body body--cultural">
      <article className="body__section body__section--fw">
        <aside className="body__aside">
          <h2 className="body__heading">Sobre la oferta cultural</h2>
          <p className="body__description">
            Dada la contingencia sanitaria por el COVID-19, los eventos
            culturales programados por el Instituto quedaron suspendidos desde
            Marzo del 2020. Esperamos volver prontamente a realizarlos y
            difundir la cultura alemana en la ciudad.
          </p>
        </aside>
      </article>
      <article className="body__section body__section--fw">
        <Posters />
      </article>
    </section>
  );
};

export default Body;
