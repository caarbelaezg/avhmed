import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Institut from '../pages/Institut';
import Examenes from '../pages/Examenes';
import Dads from '../pages/Dads';
import Contacto from '../pages/Contacto';
import Cultural from '../pages/Cultural';
import Legal from '../pages/Legal';
import Sigc from '../pages/Sigc';
import Blog from '../pages/Blog';

import Layout from '../pages/Layout';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import ScrollTop from '../utils/ScrollTop';

import '../styles/routes/App.scss';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <ScrollTop />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/institut" component={Institut} />
            <Route exact path="/examenes" component={Examenes} />
            <Route exact path="/dads" component={Dads} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/cultural" component={Cultural} />
            <Route exact path="/legal" component={Legal} />
            <Route exact path="/sgc" component={Sigc} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
export default App;
