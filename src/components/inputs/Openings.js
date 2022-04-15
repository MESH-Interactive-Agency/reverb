/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Context from '../../contexts/ReverbContext';

export default class Openings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      door1: { l: 0, w: 0, qty: 0 },
      door2: { l: 0, w: 0, qty: 0 },
      window1: { l: 0, w: 0, qty: 0 },
      window2: { l: 0, w: 0, qty: 0 },
      opening1: { l: 0, w: 0, qty: 0 },
      opening2: { l: 0, w: 0, qty: 0 },
      other: { l: 0, w: 0, qty: 0 },
    };
  }

  static contextType = Context;

  removeSpecialChars(num) {
    return num.replace(/[^0-9.]/g, '');
  }

  updateDoor1(o) {
    this.setState({ door1: o });
    this.context.updateDoor1(o);
    return o;
  }

  updateDoor2(o) {
    this.setState({ door2: o });
    this.context.updateDoor2(o);
    return o;
  }

  updateWindow1(o) {
    this.setState({ window1: o });
    this.context.updateWindow1(o);
    return o;
  }

  updateWindow2(o) {
    this.setState({ window2: o });
    this.context.updateWindow2(o);
    return o;
  }

  updateOpening1(o) {
    this.setState({ opening1: o });
    this.context.updateOpening1(o);
    return o;
  }

  updateOpening2(o) {
    this.setState({ opening2: o });
    this.context.updateOpening2(o);
    return o;
  }

  updateOther(o) {
    this.setState({ other: o });
    this.context.updateOther(o);
    return o;
  }

  clearData() {
    this.setState({
      cLength: 0,
      cWidth: 0,
    });
  }

  render() {
    let door1 = this.state.door1;
    let door2 = this.state.door2;
    let window1 = this.state.window1;
    let window2 = this.state.window2;
    let opening1 = this.state.opening1;
    let opening2 = this.state.opening2;
    let other = this.state.other;

    return (
      <div>
        <div className="row">

          <div className="col-md-9 form-group door-dimensions">
          <label htmlFor="door1-l">L:</label>
            <input
              className="shorter lighter-border"
              type="number"
              onChange={(e) => {
                door1 = this.updateDoor1({
                  l: this.removeSpecialChars(e.currentTarget.value),
                  w: door1.w,
                  qty: door1.qty,
                });
              }}
              id="door1-l"
              name="door1"
            ></input>
            <label htmlFor="door1-w">W:</label>
            <input
              className="shorter lighter-border"
              type="number"
              onChange={(e) => {
                door1 = this.updateDoor1({
                  l: door1.l,
                  w: this.removeSpecialChars(e.currentTarget.value),
                  qty: door1.qty,
                });
              }}
              id="door1-w"
              name="door1"
            ></input>
            <label htmlFor="door1-qty">Qty:</label>
            <input
              className="shorter lighter-border"
              type="number"
              onChange={(e) => {
                door1 = this.updateDoor1({
                  l: door1.l,
                  w: door1.w,
                  qty: this.removeSpecialChars(e.currentTarget.value),
                });
              }}
              id="door1-qty"
              name="door1"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
