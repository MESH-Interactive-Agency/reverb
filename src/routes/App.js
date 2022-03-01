import React, { Component } from "react";
import { Route } from "react-router-dom";
import ErrorBoundary from "../components/Tools/ErrorBoundary";

//import NavWindow from "../routes/NavWindow";
//import MainWindow from "../routes/MainWindow";
//import DetailsWindow from "../routes/DetailsWindow";
//import Footer from "./Footer";

import Context from "../contexts/ApiContext";

import "../css/setup.css";
//import "../css/gradients.css";
//import "../css/App.css";

export default class App extends Component {
  static contextType = Context;

  render() {
    return (
      <main className="App">
        <ErrorBoundary>
          <div>Yay!</div>
        </ErrorBoundary>
      </main>
    );
  }
}
