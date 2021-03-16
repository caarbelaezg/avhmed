import React from 'react';

const Main = () => {
  return (
    <section className="main main--home">
      <article className="main__avh-description">
        <figure className="main__logocontainer">
          <img
            className="main__logo"
            src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/home/banner_color.png"
            alt="Logo instituto"
          />
        </figure>
        <p className="main__description">
          Instituto ofrece cursos de alemán en todos los niveles según el Marco
          Común Europeo de Referencia para las Lenguas, exámenes oficiales y
          actividades culturales relacionadas con el idioma y la cultura
          alemana.
        </p>
      </article>
      <article className="main__info">
        <h3 className="main__infoTitle">Avisos</h3>
        <figure className="main__imgContainer">
          <img
            className="main__img"
            src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/home/location.svg"
            alt="avisos recientes"
          />
        </figure>
        <section className="main__aviso">
          <h4 className="main__infoSubtitle">Atención presencial</h4>
          <p>
            <strong>Miercoles:</strong> 9am a 11am
          </p>
          <p>
            <strong>Viernes:</strong> 3pm a 6pm
          </p>
          <p>
            <strong>Sábado:</strong> 9am a 12m
          </p>
        </section>
      </article>
    </section>
  );
};

export default Main;
