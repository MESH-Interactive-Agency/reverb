import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from '../components/Tools/ErrorBoundary';

import NavWindow from '../routes/NavWindow';
import MainWindow from '../routes/MainWindow';
import DetailsWindow from '../routes/DetailsWindow';
import Footer from './Footer';

import Context from '../contexts/ApiContext';

import '../css/setup.css';
//import "../css/gradients.css";
import '../css/App.css';
import ReverbContext from '../contexts/ReverbContext';

export default class App extends Component {
  state = {
    customerName: '',
    projectName: '',
    date: '',
    length: 0,
    width: 0,
    height: 0,
    cLength: 0,
    cWidth: 0,
  };

  updateCeilingWidth = (cWidth) => {
    this.setState({ cWidth: cWidth });
  };

  updateCeilingLength = (cLength) => {
    this.setState({ cLength: cLength });
  };

  updateCustomerName = (name) => {
    this.setState({ customerName: name });
  };

  updateProjectName = (name) => {
    this.setState({ projectName: name });
  };

  updateDate = (date) => {
    this.setState({ date: date });
  };

  updateHeight = (height) => {
    this.setState({ height: height });
  };

  updateWidth = (width) => {
    this.setState({ width: width });
  };

  updateLength = (length) => {
    this.setState({ length: length });
  };

  static contextType = Context;

  render() {
    const value = {
      customerName: this.state.customerName,
      projectName: this.state.projectName,
      date: this.state.date,
      height: this.state.height,
      width: this.state.width,
      length: this.state.length,
      cWidth: this.state.cWidth,
      cLength: this.state.cLength,
      updateCustomerName: this.updateCustomerName,
      updateProjectName: this.updateProjectName,
      updateDate: this.updateDate,
      updateHeight: this.updateHeight,
      updateWidth: this.updateWidth,
      updateLength: this.updateLength,
      updateCeilingLength: this.updateCeilingLength,
      updateCeilingWidth: this.updateCeilingWidth,
    };

    return (
      <main className="App">
        <ErrorBoundary>
          <ReverbContext.Provider value={value}>
            <Route path="/" component={NavWindow} />
            <Route path="/" component={MainWindow} />
            <Route path="/" component={DetailsWindow} />
            <Route path="/" component={Footer} />
          </ReverbContext.Provider>
        </ErrorBoundary>
      </main>
    );
  }
}
