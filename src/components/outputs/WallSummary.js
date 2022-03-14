import React, { Component } from 'react';
import Context from '../../contexts/ReverbContext';

export default class WallSummary extends Component {
  static contextType = Context;

  calculateArea = () => {
    return (
      this.context.wall1.l * this.context.wall1.h +
      this.context.wall2.l * this.context.wall2.h +
      this.context.wall3.l * this.context.wall3.h +
      this.context.wall4.l * this.context.wall4.h
    );
  };
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
          </div>
        )}

        {(this.context.wall2.l > 0 || this.context.wall2.h > 0) && (
          <div>
            <h3>Wall2: </h3>
            {this.context.wall2.l > 0 && <span>L:{this.context.wall2.l} </span>}
            {this.context.wall2.h > 0 && <span>H:{this.context.wall2.h} </span>}
          </div>
        )}

        {(this.context.wall3.l > 0 || this.context.wall3.h > 0) && (
          <div>
            <h3>Wall3: </h3>
            {this.context.wall3.l > 0 && <span>L:{this.context.wall3.l} </span>}
            {this.context.wall3.h > 0 && <span>H:{this.context.wall3.h} </span>}
          </div>
        )}

        {(this.context.wall4.l > 0 || this.context.wall4.h > 0) && (
          <div>
            <h3>Wall4: </h3>
            {this.context.wall4.l > 0 && <span>L:{this.context.wall4.l} </span>}
            {this.context.wall4.h > 0 && <span>H:{this.context.wall4.h} </span>}
          </div>
        )}

        {this.context.wall1.l > 0 && this.context.wall1.h > 0 && (
          <div className="window">Total Wall Area: {this.calculateArea()}</div>
        )}
      </div>
    );
  }
}
