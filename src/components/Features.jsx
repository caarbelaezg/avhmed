import React, { useContext } from 'react';
import Feature from './Feature';
import AppContext from '../context/AppContext';

const Features = () => {
  const { state } = useContext(AppContext);
  const { features } = state;
  return (
    <section className="features">
      <h2 className="features__title">Sobre los cursos</h2>
      {features.map((elem) => (
        <Feature
          img={elem.icon}
          title={elem.title}
          description={elem.description}
        />
      ))}
    </section>
  );
};

export default Features;
