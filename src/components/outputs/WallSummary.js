import React, { Component } from 'react';
import Context from '../../contexts/ReverbContext';

export default class WallSummary extends Component {
  static contextType = Context;

  calculateArea = () => {
    return this.context.wall1.l * this.context.wall1.h;
  };

  // this.context.wall2.l * this.context.wall2.h +
  // this.context.wall3.l * this.context.wall3.h +
  // this.context.wall4.l * this.context.wall4.h

  render() {
    console.log(this.context.wall1.l, this.context.wall1.h);
    return (
      <div className="window">
        <h3>Wall Dimensions:</h3>
        {(this.context.wall1.l > 0 || this.context.wall1.h > 0) && (
          <div>
            <h3>Wall1: </h3>
            {this.context.wall1.l > 0 && <span>L:{this.context.wall1.l} </span>}
            {this.context.wall1.h > 0 && <span>H:{this.context.wall1.h} </span>}
            {this.context.wall1.l > 0 && this.context.wall1.h > 0 && (
              <span> Area: {this.calculateArea()}</span>
            )}
          </div>
        )}
      </div>
    );
  }
}
