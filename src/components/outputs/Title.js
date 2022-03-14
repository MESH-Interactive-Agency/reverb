import React, { Component } from 'react';
import Context from '../../contexts/ReverbContext';

export default class Title extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="window">
        <h2>Project Info:</h2>
        {this.context.date.length > 0 && <span>Date: {this.context.date}</span>}
        {this.context.customerName.length > 0 && (
          <p>Customer Name: {this.context.customerName}</p>
        )}
        {this.context.projectName.length > 0 && (
          <p>Project Name: {this.context.projectName}</p>
        )}
      </div>
    );
  }
}
