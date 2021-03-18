import React from 'react';
import Table from '../../components/Table';
import Cards from './Cards';

const Body = () => {
  return (
    <section className="body">
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">Calendario</h2>
          <p className="body__description">
            Los exámenes se realizan continuamente a lo largo del año con la
            finalidad de que obtengas tu certificación en cualquier momento. El
            calendario del presente año es el que se muestra en la tabla.
          </p>
        </aside>
        <aside className="body__aside">
          <Table />
        </aside>
      </article>
      <article className="body__section body__section--fw">
        <Cards />
      </article>
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">Para tener en cuenta</h2>
          <p className="body__description">
            En el Instituto ofrecemos cursos de preparación para los exámenes
            grupales o personalizados dependiendo de la demanda, para obtener
            más información sobre esta oferta, comuníquese con nosotros. Para
            los estudiantes activos del Instituto aplica un precio especial.{' '}
            <br />
            <br />
            Como estudiante activo cuentan personas que actualmente están
            matriculados en un curso de alemán en el instituto o que acaban de
            terminar un curso en nuestra institución.
          </p>
        </aside>
        <aside className="body__aside">
          <h2 className="body__heading">Exámenes C1 y C2</h2>
          <p className="body__description">
            El Zertifikat Deutsch C1 y C2 se puede presentar en el Instituto
            Goethe en Bogotá. TestDaF se puede presentar con el DAAD Medellín
            (medellin@daad.co) u otras instituciones en Colombia, consulte la{' '}
            <a className="avh__link" href="https://www.testdaf.de">
              página del TestDaF.
            </a>
            <br />
            <br />
            Para mayor información sobre los exámenes puedes consultar el Goethe
            Institut y nuestras{' '}
            <a
              className="avh__link"
              href="https://s3-sa-east-1.amazonaws.com/avh.medellin/Documentos/Condiciones_Generales.pdf"
            >
              condiciones generales para cursos y exámenes y participación en
              los mismos
            </a>
          </p>
        </aside>
      </article>
    </section>
  );
};

export default Body;
