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
    wall1: { l: 0, h: 0 },
    wall2: { l: 0, h: 0 },
    wall3: { l: 0, h: 0 },
    wall4: { l: 0, h: 0 },
  };

  updateWall1Height = (h) => {
    this.setState({ wall1: { l: this.state.wall1.l, h: h } });
  };
  updateWall1Length = (l) => {
    this.setState({ wall1: { l: l, h: this.state.wall1.h } });
  };

  updateWall2Height = (h) => {
    this.setState({ wall2: { l: this.state.wall2.l, h: h } });
  };
  updateWall2Length = (l) => {
    this.setState({ wall2: { l: l, h: this.state.wall2.h } });
  };

  updateWall3Height = (h) => {
    this.setState({ wall3: { l: this.state.wall3.l, h: h } });
  };
  updateWall3Length = (l) => {
    this.setState({ wall3: { l: l, h: this.state.wall3.h } });
  };

  updateWall4Height = (h) => {
    this.setState({ wall4: { l: this.state.wall4.l, h: h } });
  };
  updateWall4Length = (l) => {
    this.setState({ wall4: { l: l, h: this.state.wall4.h } });
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
      wall1: this.state.wall1,
      wall2: this.state.wall2,
      wall3: this.state.wall3,
      wall4: this.state.wall4,
      updateCustomerName: this.updateCustomerName,
      updateProjectName: this.updateProjectName,
      updateDate: this.updateDate,
      updateHeight: this.updateHeight,
      updateWidth: this.updateWidth,
      updateLength: this.updateLength,
      updateCeilingLength: this.updateCeilingLength,
      updateCeilingWidth: this.updateCeilingWidth,
      updateWall1Height: this.updateWall1Height,
      updateWall1Length: this.updateWall1Length,
      updateWall2Height: this.updateWall2Height,
      updateWall2Length: this.updateWall2Length,
      updateWall3Height: this.updateWall3Height,
      updateWall3Length: this.updateWall3Length,
      updateWall4Height: this.updateWall4Height,
      updateWall4Length: this.updateWall4Length,
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
