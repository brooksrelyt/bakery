import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header';
import Footer from './footer';

import Home from '../pages/home';

import '../scss/styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="main">
          <Home />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
