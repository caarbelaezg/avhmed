import React, { useContext } from 'react';
import Features from '../../components/Features';
import Courses from '../../components/Courses';
import AppContext from '../../context/AppContext';
import Button from '../../components/Button';

const Body = () => {
  const { state } = useContext(AppContext);
  const { links } = state;
  return (
    <section className="body body--courses">
      <Features />
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">Cursos Regulares</h2>
          <p className="body__description">
            Los cursos regulares se dictan semestralmente, de febrero a junio y
            de agosto a noviembre. Y a mitad y final de año se ofrecen cursos
            intensivos. Cada curso cuenta con una intensidad de 80 horas
            académicas. El instituto los lleva a cabo con base al Marco Común
            Europeo de las Lenguas - MCER.
          </p>
          <Button type="avh__btn" link={links.incripcion}>
            Inscribirse
          </Button>
        </aside>
        <section className="body__ilustration">
          <figure className="body__container">
            <img
              className="body__img body__img--square"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/courses/inscripciones.JPG"
              alt="cursos image"
            />
          </figure>
        </section>
      </article>
      <article className="body__section body__section--fw">
        <Courses />
      </article>
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">Cursos personalizados</h2>
          <p className="body__description">
            El instituto ofrece cursos personalizados y para pequeños grupos en
            modalidad presencial y/o virtual. Los cursos personalizados pueden
            ser como los curso grupales según el Marco Común Europeo, clases de
            refuerzo y también preparación para los diferentes exámenes. Para
            obtener una cotización, envíanos un correo a{' '}
            <a className="avh__link" href="mailto:avhmedellin@gmail.com">
              avhmedellin@gmail.com
            </a>{' '}
            especificando el tipo de curso que deseas.
          </p>
        </aside>
        <section className="body__ilustration">
          <figure className="body__container">
            <img
              className="body__img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/courses/teacher.jpg"
              alt="cursos image"
            />
          </figure>
        </section>
      </article>
      <article className="body__section body__section--fw">
        <aside className="body__aside">
          <h2 className="body__heading">Costos y descuentos</h2>
          <p className="body__description">
            Para personas particulares, cada curso tiene un costo de $962.000.
            Sin embargo los cursos virtuales tienen un 10% de descuento , para
            un total de 866.000. Ten en cuenta que los niveles A1, A2 y B1 se
            dividen en dos cursos y que los niveles B2 y C1, en tres. Además de
            eso, los siguientes grupos de personas aplican tarifas especiales:
          </p>
          <ul className="body__list">
            <li>Docentes</li>
            <li>Estudiantes de colegio</li>
            <li>Estudiantes de la UPB, UdeA y UNal</li>
            <li>Afiliados a Comfenalco estratos 1, 2 y 3</li>
            <li>
              Estudiantes de la Escuela Normal María Auxiliadora de Copacabana
            </li>
            <li>Docentes Alianza Francesa Medellín</li>
            <li>Au Pair Global Exchange</li>
            <li>Enfermeros inscritos en la plataforma de Careloop</li>
          </ul>
        </aside>
      </article>
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">Pasos para realizar la inscripción</h2>
          <ol className="body__list">
            <li>
              Llenar y enviar el{' '}
              <a className="avh__link" href={links.incripcion}>
                formulario
              </a>{' '}
              de inscripción en línea
            </li>
            <li>
              Al enviar su respuesta, usted acepta nuestras "Condiciones
              generales para cursos, exámenes y participación en los mismos" las
              cuales se encuentran en nuestra página web
            </li>
            <li>
              El valor del curso debe ser cancelado en la cuenta de ahorros No.
              10042442045 de Bancolombia a nombre de Instituto Cultural
              Alexander von Humboldt. (NIT 811.011.577-7)
            </li>
            <li>
              Para realizar la matrícula y reserva de cupo debe enviar el
              comprobante de pago, inmediatamente hecha la consignación, al
              correo{' '}
              <a className="avh__link" href="mailto:avhmedellin@gmail.com">
                avhmedellin@gmail.com
              </a>
              .
            </li>
          </ol>
        </aside>
        <section className="body__ilustration">
          <figure className="body__container">
            <img
              className="body__img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/courses/steps.jpg"
              alt="steps"
            />
          </figure>
        </section>
      </article>
    </section>
  );
};

export default Body;
