import React from 'react';

const Social = () => (
  <figure className="social">
    <a
      className="social__link"
      href="https://www.instagram.com/avhmedellin/"
      target="_blank"
    >
      <img
        className="social__icon"
        src="https://img.icons8.com/fluent-systems-regular/24/000000/instagram-new--v1.png"
        alt="Instagram icon"
      />
    </a>
    <a
      className="social__link"
      href="https://www.facebook.com/avhmedellin"
      target="_blank"
    >
      <img
        className="social__icon"
        src="https://img.icons8.com/fluent-systems-filled/24/000000/facebook-new.png"
        alt="facebook icon"
      />
    </a>
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
    </a>
  </figure>
);

export default Social;
