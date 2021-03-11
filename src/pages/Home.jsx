import React from 'react';
import HomeBody from '../containers/HomeBody';
import Main from '../containers/Main';

const Home = () => {
  return (
    <section className="home">
      <Main />
      <HomeBody />
    </section>
  );
};

export default Home;
