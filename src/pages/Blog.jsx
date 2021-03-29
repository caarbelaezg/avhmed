import React from 'react';
import Wave from '../assets/static/wave.svg';

const Blog = () => {
  return (
    <section className="blog">
      <section className="blog__head">
        <div className="bg-video">
          <video className="bg-video__content" autoplay muted loop>
            <source
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/blog/Berlin+underground+train.mp4"
              type="video/mp4"
            />
            your browser is not supported!
          </video>
        </div>
        <header className="blog__heading">
          <figure className="blog__img--container">
            <img
              className="blog__img--img"
              src="https://s3-sa-east-1.amazonaws.com/avh.medellin/images/blog/clock.jpg"
              alt=""
            />
          </figure>
          <article className="blog__article">
            <h1 className="blog__title--main">Blog</h1>
            <p className="blog__text--main">
              Herzlich willkommen auf den Blog des Instituto Cultural Alexander
              von Humboldt! Zur Zeit sind alle unsere Kurse im virtuellen Modus.
            </p>
            <p className="blog__text--main">
              Aber wir bieten Ihnen regelmäßig präsenzielle Prüfungen zu
              verschiedenen Goethe-Zertifikaten an (für genaue Details:
              Abschnitt Examenes).
            </p>
            <p className="blog__text--main">
              Außerdem steht unser Sekretariat in Calasanz Ihnen zu folgenden
              Öffnungszeiten zur Verfügung: Montag bis Freitag 10.00 - 13.00 Uhr
              und 14.00 - 17.00 Uhr, Samstag 9.00-12.00 Uhr.
            </p>
            <p className="blog__text--main">
              Freitags können Sie auch von 16-18.00 Uhr unsere
              Präsenz-Bibliothek besuchen und Bücher auf Deutsch ausleihen. Wir
              freuen uns auf Sie!
            </p>
          </article>
        </header>
        <footer className="blog__footer">
          <img src={Wave} alt="" />
        </footer>
      </section>
    </section>
  );
};

export default Blog;
