import React from 'react';

import Context from '../../contexts/ReverbContext';

export default class Results extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="light window">
        <h2>Results Page</h2>
          Name: <span>{this.context.name}</span>
      </div>
    );
  }
}
