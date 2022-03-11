import React from 'react';

import Context from '../../contexts/ReverbContext';

export default class Results extends React.Component {
  static contextType = Context;

  calculateVolume = () => {
    return this.context.length * this.context.width * this.context.height;
  };

  render() {
    return (
      <div className="light window">
        <h2>Results Page</h2>
        {this.context.date.length > 0 && <span>Date: {this.context.date}</span>}
        {this.context.customerName.length > 0 && (
          <p>Customer Name: {this.context.customerName}</p>
        )}
        {this.context.projectName.length > 0 && (
          <p>Project Name: {this.context.projectName}</p>
        )}

        {(this.context.length > 0 ||
          this.context.height > 0 ||
          this.context.width > 0) && (
          <div>
            <br></br>
            <h3>Dimensions:</h3>
            {this.context.length > 0 && <span>L:{this.context.length} </span>}
            {this.context.width > 0 && <span>W:{this.context.width} </span>}
            {this.context.height > 0 && <span>H:{this.context.height} </span>}
            <br></br>
            {this.context.length > 0 &&
              this.context.height > 0 &&
              this.context.width > 0 && (
                <div className="window">
                  Total Volume: {this.calculateVolume()}
                </div>
              )}
          </div>
        )}
      </div>
    );
  }
}
