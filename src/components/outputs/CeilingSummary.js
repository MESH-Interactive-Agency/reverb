import React, { Component } from 'react';
import Context from '../../contexts/ReverbContext';

export default class CeilingSummary extends Component {
  static contextType = Context;

  calculateArea = () => {
    return this.context.cLength * this.context.cWidth;
  };

  render() {
    return (
      <div className="window">
        <h3>Ceiling Dimensions:</h3>
        {(this.context.cLength > 0 || this.context.cWidth > 0) && (
          <div>
            {this.context.cLength > 0 && <span>L:{this.context.cLength} </span>}
            {this.context.cWidth > 0 && <span>W:{this.context.cWidth} </span>}

            <br></br>
            {this.context.cLength > 0 && this.context.cWidth > 0 && (
              <div className="window">Total Area: {this.calculateArea()}</div>
            )}
          </div>
        )}
      </div>
    );
  }
}
