import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Actors } from './pages/Actors';
import { Books } from './pages/Books'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/actors' component={Actors} />
        <Route path='/books' component={Books} />
      </Layout>
    );
  }
}
