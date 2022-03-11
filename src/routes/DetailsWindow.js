import React from 'react';

import Results from "../components/Pages/Results";

import Context from '../contexts/ApiContext';

export default class DetailsWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <aside className="light main window">
        <h2 className="dark">This window is serving as an output window.</h2>
        <br></br>
        <p>
          It doesn't have to look like this in the end, it's jsut to show the
          data moving from one component to another, passing through a helper
          function in between that makes the calculations.
        </p>
        <br></br>
        <p>-----------</p>
        <br></br>
        <Results></Results>
      </aside>
    );
  }
}
