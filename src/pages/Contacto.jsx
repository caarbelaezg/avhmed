import React from 'react';

const Contacto = () => {
  return (
    <section className="body body--contacto">
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">Comunicate con nosotros</h2>
          <p className="body__description">
            Para nosotros es muy importante que nos cuentes tu experiencia en el
            Instituto, por eso te invitamos a que diligencies este formulario y
            nos dejes tus comentarios. También puedes escribir a los siguientes
            correos:
          </p>
          <ul className="body__list">
            <li>
              <strong>contacto@avhmedellin.co:</strong> para información sobre
              cursos, exámenes y oferta del Instituto en español
            </li>
            <li>
              <strong>academico@avhmedellin.co:</strong> Información sobre
              cursos, exámenes y oferta del Instituto en alemán, exámenes de
              nivelación
            </li>
            <li>
              <strong>comunidad@avhmedellin.co:</strong> Información sobre
              actividades extracurriculares, servicio de biblioteca, eventos
              culturales
            </li>
          </ul>
        </aside>
        <section className="body__ilustration">
          <figure className="body__container">
            <iframe
              className="body__formular"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfNn5_GTV1dWiyi_JXAvLeSZn9GXDRMCMDnC2PVsmH-M7P25Q/viewform?embedded=true"
              frameborder="0"
            ></iframe>
          </figure>
        </section>
      </article>
      <article className="body__section">
        <aside className="body__aside">
          <h2 className="body__heading">Sede Calazans</h2>
          <p className="body__description">
            <strong>Sede principal:</strong> calle 49A # 81-26
          </p>
          <p className="body__description">
            <strong>Barrio:</strong> Calasanz
          </p>
          <p className="body__description">
            <strong>Tel:</strong> (+57)(4) 589 7850
          </p>
          <p className="body__description">
            <a
              className="social__link"
              href="https://api.whatsapp.com/send?phone=573008763792&amp;text=Cuéntanos que información quieres saber sobre el AVH'"
              target="_blank"
            >
              <img
                className="social__icon"
                src="https://img.icons8.com/material-sharp/24/000000/whatsapp--v1.png"
                alt="whatsapp icon"
              />
              300 8763792
            </a>
          </p>
        </aside>
        <aside className="body__aside">
          <h2 className="body__heading">Sede Alianza Francesa</h2>
          <p className="body__description">
            <strong>Sede alterna:</strong> calle 15 Sur # 48-144
          </p>
          <p className="body__description">
            <strong>Barrio:</strong> Aguacatala
          </p>
          <p className="body__description">
            En esta sede no hay atención al cliente
          </p>
          <p className="body__description">Medellín – Colombia</p>
        </aside>
      </article>
      <article className="body__section body__section--fw">
        <section className="body__ilustration">
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
    </section>
  );
};

export default Contacto;
