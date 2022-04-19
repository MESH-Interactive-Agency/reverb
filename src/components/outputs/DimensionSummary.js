import React, { Component } from 'react';
import Context from '../../contexts/ReverbContext';

export default class DimensionSummary extends Component {
  static contextType = Context;

  calculateVolume = () => {
    return this.context.length * this.context.width * this.context.height;
  };

  render() {
    return (
      <div className="">
        <h3>Floor/Wall Dimensions:</h3>
        {(this.context.length > 0 ||
          this.context.height > 0 ||
          this.context.width > 0) && (
          <div>
            {this.context.length > 0 && <span>L:{this.context.length} </span>}
            {this.context.width > 0 && <span>W:{this.context.width} </span>}
            {this.context.height > 0 && <span>H:{this.context.height} </span>}
            <br></br>
            {this.context.length > 0 &&
              this.context.height > 0 &&
              this.context.width > 0 && (
                <div className="w">
                  Total Volume: {this.calculateVolume()}
                </div>
              )}
          </div>
        )}
      </div>
    );
  }
}