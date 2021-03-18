import React from 'react';

const Card = ({ name, features, price }) => {
  const classModifier = features[0].feature;
  return (
    <article className="card">
      <section className={`card__heading card__heading--${classModifier}`}>
        <h3 className={`card__title card__title--${classModifier}`}>{name}</h3>
      </section>
      <section className="card__body">
        {features.map((el) => (
          <p className="card__feature">{el.feature}</p>
        ))}
      </section>
      <section className={`card__footer card__footer--${classModifier}`}>
        <h4 className="card__price">PRECIO</h4>
        <p className="card__value">{price}</p>
      </section>
    </article>
  );
};

export default Card;
