import React, { useContext } from 'react';
import Card from '../../components/Card';

import AppContext from '../../context/AppContext';

const Cards = () => {
  const { state } = useContext(AppContext);
  const { examenes } = state;
  return (
    <section className="cards">
      <h2 className="cards__title">Precios exámenes</h2>
      {examenes.map((element) => (
        <Card
          name={element.name}
          features={element.features}
          price={element.price}
        />
      ))}
    </section>
  );
};

export default Cards;
