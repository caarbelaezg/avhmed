import React from 'react';
import Gallery from '../components/Gallery';

const Institut = () => {
  return (
    <section className="body body--institut">
      <article className="body__section body__section--fw">
        <img
          className="body__logo"
          src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/home/banner_color.png"
          alt="Logo instituto"
        />
        <p className="body__description">
          El Instituto Cultural Alexander von Humboldt fue fundado en 1995
          después del cierre del Goethe-Institut (actualmente solo en Bogotá) en
          Medellín, y desde entonces cumple con las funciones del mismo en la
          ciudad: ofrece un espacio abierto para vivir de cerca la lengua y
          cultura alemanas. Con este propósito, el Instituto Alexander von
          Humboldt ofrece cursos de alemán en todos los niveles según el Marco
          Común Europeo de Referencia para las Lenguas, con profesores
          calificados en la enseñanza de alemán, y promueve iniciativas
          orientadas a la difusión del idioma y de la cultura alemanes en
          Colombia, tendiendo así un puente al intercambio cultural entre
          Colombia y Alemania.
        </p>
        <br />
        <p className="body__description">
          Como respaldo a la tarea que cumple en la ciudad, el Instituto
          Alexander von Humboldt cuenta con el apoyo teórico y práctico del
          Goethe-Institut en Bogotá. Ha sido reconocido por él como una
          institución cultural oficial alemana y por ende es fomentado cuando
          realiza proyectos culturales. Además, se le da la posibilidad de
          enviar sus profesores a cursos de capacitación ofrecidos por el
          Goethe-Institut tanto en Bogotá como en Alemania. También, por ser un
          centro de exámenes debidamente certificado, está facultado para hacer
          los exámenes del Goethe-Institut en los niveles comprendidos entre A1
          y B2 según MCERL y de expedir los certificados correspondientes para
          este idioma.
        </p>
      </article>
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">Nuestros docentes</h2>
          <p className="body__description">
            En el Instituto Cultural contamos con un gran equipo de docentes.
            Alemanes, colombo-alemanes y colombianos. Cada uno de ellos, tanto
            nativos alemanes como hispanohablantes, están altamente calificados
            y certificados para su labor. Cuentan con estudios universitarios y
            de maestría en la enseñanza del alemán, experiencia docente en el
            área de alemán como lengua extranjera y nivel superior de alemán
            certificado por el Goethe Institut (mínimo B2). Los cursos de Alemán
            son distribuidos entre nuestros docentes de tal forma que los
            alumnos tengan la mejor experiencia en cada curso que realizan.
          </p>
        </aside>
        <section className="body__ilustration">
          <figure className="body__container">
            <img
              className="body__img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/Instituto/docentes.jpg"
              alt="cursos image"
            />
          </figure>
        </section>
      </article>
      <article className="body__section">
        <aside className="body__aside body__aside--reversed">
          <h2 className="body__heading">Instalaciones</h2>
          <p className="body__description">
            Nuestra sede principal se encuentra en el barrio Calasanz, a tres
            cuadras de la estación Floresta y a dos cuadras de la Avenida
            Colombia. Tenemos una casa amplia e iluminada, donde ofrecemos
            nuestras clases de alemán, la oficina y la biblioteca. Cada aula
            cuenta con sonido, video beam y computador para el desarrollo de las
            clases. En Aguacatala ofrecemos clases de alemán en las
            instalaciones de la Alianza Francesa, allí no se presta atención al
            público.
          </p>
        </aside>
        <section className="body__ilustration body__ilustration--reversed">
          <figure className="body__container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0118661279066!2d-75.60023098541107!3d6.262166495467338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442912af7635e9%3A0x112bd55e38988364!2sInstituto%20Cultural%20Alexander%20von%20Humboldt!5e0!3m2!1ses!2sco!4v1615906035998!5m2!1ses!2sco"
              className="body__map"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </figure>
        </section>
      </article>
      <section className="body__section body__section--fw">
        <Gallery />
      </section>
    </section>
  );
};

export default Institut;
