/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Context from '../../contexts/ReverbContext';

export default class OpeningsSummary extends Component {
  static contextType = Context;

  calculateVolume = () => {
    let door1 = this.context.door1;
    let door2 = this.context.door2;
    let window1 = this.context.window1;
    let window2 = this.context.window2;
    let opening1 = this.context.opening1;
    let opening2 = this.context.opening2;
    let other = this.context.other;

    return (
      door1.l * door1.w * door1.qty +
      door2.l * door2.w * door2.qty +
      window1.l * window1.w * window1.qty +
      window2.l * window2.w * window2.qty +
      opening1.l * opening1.w * opening1.qty +
      opening2.l * opening2.w * opening2.qty +
      other.l * other.w * other.qty
    );
  };

  render() {
    let door1 = this.context.door1;
    let door2 = this.context.door2;
    let window1 = this.context.window1;
    let window2 = this.context.window2;
    let opening1 = this.context.opening1;
    let opening2 = this.context.opening2;
    let other = this.context.other;

    return (
      <div className="window">
        <h3>Openings Dimensions:</h3>
        <div>
          {door1.l > 0 && (
            <div>
              <h3>Door 1:</h3>
              {door1.l > 0 && <span>L:{door1.l} </span>}
              {door1.w > 0 && <span>W:{door1.w} </span>}
              {door1.qty > 0 && <span>Qty:{door1.qty} </span>}
              <br></br>
            </div>
          )}
          {door2.l > 0 && (
            <div>
              <h3>Door 2:</h3>
              {door2.l > 0 && <span>L:{door2.l} </span>}
              {door2.w > 0 && <span>W:{door2.w} </span>}
              {door2.qty > 0 && <span>Qty:{door2.qty} </span>}
              <br></br>
            </div>
          )}
          {window1.l > 0 && (
            <div>
              <h3>Window 1:</h3>
              {window1.l > 0 && <span>L:{window1.l} </span>}
              {window1.w > 0 && <span>W:{window1.w} </span>}
              {window1.qty > 0 && <span>Qty:{window1.qty} </span>}
              <br></br>
            </div>
          )}
          {window2.l > 0 && (
            <div>
              <h3>Window 2:</h3>
              {window2.l > 0 && <span>L:{window2.l} </span>}
              {window2.w > 0 && <span>W:{window2.w} </span>}
              {window2.qty > 0 && <span>Qty:{window2.qty} </span>}
              <br></br>
            </div>
          )}
          {opening1.l > 0 && (
            <div>
              <h3>Opening 1:</h3>
              {opening1.l > 0 && <span>L:{opening1.l} </span>}
              {opening1.w > 0 && <span>W:{opening1.w} </span>}
              {opening1.qty > 0 && <span>Qty:{opening1.qty} </span>}
              <br></br>
            </div>
          )}
          {opening2.l > 0 && (
            <div>
              <h3>Opening 2:</h3>
              {opening2.l > 0 && <span>L:{opening2.l} </span>}
              {opening2.w > 0 && <span>W:{opening2.w} </span>}
              {opening2.qty > 0 && <span>Qty:{opening2.qty} </span>}
              <br></br>
            </div>
          )}
          {other.l > 0 && (
            <div>
              <h3>Other:</h3>
              {other.l > 0 && <span>L:{other.l} </span>}
              {other.w > 0 && <span>W:{other.w} </span>}
              {other.qty > 0 && <span>Qty:{other.qty} </span>}
              <br></br>
            </div>
          )}

          {this.calculateVolume() > 0 && (
            <div className="window">Total Volume: {this.calculateVolume()}</div>
          )}
        </div>
      </div>
    );
  }
}
