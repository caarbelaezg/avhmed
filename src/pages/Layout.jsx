import React from 'react';
import Footer from '../containers/Layout/Footer';
import Header from '../containers/Layout/Header';

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
