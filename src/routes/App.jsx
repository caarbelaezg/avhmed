import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Layout from '../pages/Layout';

import '../styles/routes/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={Courses} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
