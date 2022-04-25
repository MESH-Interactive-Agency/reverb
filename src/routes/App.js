import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from '../components/Tools/ErrorBoundary';

import NavWindow from '../routes/NavWindow';
import MainWindow from '../routes/MainWindow';
import DetailsWindow from '../routes/DetailsWindow';
import Footer from './Footer';

import '../css/setup.css';
import '../css/App.css';

export default class App extends Component {
  state = {};

  render() {
    return (
      <main className="App ">
        <ErrorBoundary>
          <Route path="/" component={NavWindow} />
          <Route path="/" component={MainWindow} />
          <Route path="/" component={DetailsWindow} />
          <Route path="/" component={Footer} />
        </ErrorBoundary>
      </main>
    );
  }
}
