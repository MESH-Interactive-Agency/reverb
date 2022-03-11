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
  };

  updateCustomerName = (name) => {
    this.setState({ customerName: name });
    console.log('name updated: ', name);
  };

  updateProjectName = (name) => {
    this.setState({ projectName: name });

    console.log('project updated: ', name);
  };

  updateDate = (date) => {
    this.setState({ date: date });
    console.log('date updated: ', date);
  };

  static contextType = Context;

  render() {
    const value = {
      customerName: this.state.customerName,
      projectName: this.state.projectName,
      date: this.state.date,
      updateCustomerName: this.updateCustomerName,
      updateProjectName: this.updateProjectName,
      updateDate: this.updateDate,
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
