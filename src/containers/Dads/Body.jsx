import React from 'react';

const Body = () => {
  return (
    <section className="body body--dads">
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">Konversationsclub</h2>
          <p className="body__description">
            ¿Quieres mejorar tus habilidades orales en Alemán? El
            Koversationsclub es el espacio ideal para ello. Para tener una mejor
            experiencia debes haber cursado previamente los niveles A2/B1. Todos
            los martes a las 7 pm, a partir del 9 de febrero 2021
          </p>
        </aside>
        <section className="body__ilustration">
          <img
            className="body__soloimg"
            src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/Deutsch+auf+dem+Sofa/konversationsclub.jpeg"
            alt="cursos image"
          />
        </section>
      </article>
      <article className="body__section">
        <aside className="body__aside body__aside--reversed">
          <h2 className="body__heading">Leseclub</h2>
          <p className="body__description">
            ¿Tienes nivel B2 o C1 de alemán y te gusta la lectura? Puedes
            participar en nuestro Leseclub, en el que conversamos sobre
            diferentes textos de escritores de alemán. El Leseclub para el nivel
            B2 o más, cada dos semanas viernes a las 7 pm, a partir del 12 de
            febrero 2021.
          </p>
        </aside>
        <section className="body__ilustration body__ilustration--reversed">
          <img
            className="body__soloimg"
            src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/Deutsch+auf+dem+Sofa/leseclub.jpeg"
            alt="cursos image"
          />
        </section>
      </article>
    </section>
  );
};

export default Body;
