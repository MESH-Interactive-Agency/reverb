import React from 'react';

import Context from '../../contexts/ReverbContext';

export default class Results extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="light window">
        <h2>Results Page</h2>
        {this.context.date.length > 0 && <span>Date: {this.context.date}</span>}
        {this.context.customerName.length > 0 && (
          <span>Customer Name: {this.context.customerName}</span>
        )}
        {this.context.projectName.length > 0 && (
          <span>Project Name: {this.context.projectName}</span>
        )}
      </div>
    );
  }
}
