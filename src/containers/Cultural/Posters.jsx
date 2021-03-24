import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Poster from '../../components/Poster';

const Posters = () => {
  const { state } = useContext(AppContext);
  const { cultural } = state;
  return (
    <section className="posters">
      <h2 className="posters__title">Eventos realizados</h2>
      {cultural.map((el) => (
        <Poster link={el} />
      ))}
    </section>
  );
};

export default Posters;
