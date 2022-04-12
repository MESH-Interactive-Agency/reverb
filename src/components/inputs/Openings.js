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
      <form onSubmit={this.handleSubmit}>
        <h3>ENTER Doors, Windows, Other & People</h3>
        <div className="inputs">
          <h4>Door 1:</h4>
          <label htmlFor="door1-l">L:</label>
          <input
            className="shorter"
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
            className="shorter"
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
            className="shorter"
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
        {/*
        <div className="inputs">
          <h3>Door 2: </h3>
          <label htmlFor="door2-l">L:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              door2 = this.updateDoor2({
                l: this.removeSpecialChars(e.currentTarget.value),
                w: door2.w,
                qty: door2.qty,
              });
            }}
            id="door2-l"
            name="door2"
          ></input>
          <label htmlFor="door2-w">W:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              door2 = this.updateDoor2({
                l: door2.l,
                w: this.removeSpecialChars(e.currentTarget.value),
                qty: door2.qty,
              });
            }}
            id="door2-w"
            name="door2"
          ></input>
          <label htmlFor="door2-qty">Qty:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              door2 = this.updateDoor2({
                l: door2.l,
                w: door2.w,
                qty: this.removeSpecialChars(e.currentTarget.value),
              });
            }}
            id="door2-qty"
            name="door2"
          ></input> 
        </div>

        <div className="inputs">
          <h3>Window 1: </h3>
          <label htmlFor="window1-l">L:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              window1 = this.updateWindow1({
                l: this.removeSpecialChars(e.currentTarget.value),
                w: window1.w,
                qty: window1.qty,
              });
            }}
            id="window1-l"
            name="window1"
          ></input>
          <label htmlFor="window1-w">W:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              window1 = this.updateWindow1({
                l: window1.l,
                w: this.removeSpecialChars(e.currentTarget.value),
                qty: window1.qty,
              });
            }}
            id="window1-w"
            name="window1"
          ></input>
          <label htmlFor="window1-qty">Qty:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              window1 = this.updateWindow1({
                l: window1.l,
                w: window1.w,
                qty: this.removeSpecialChars(e.currentTarget.value),
              });
            }}
            id="window1-qty"
            name="window1"
          ></input>
        </div>

        <div className="inputs">
          <h3>Window 2: </h3>
          <label htmlFor="window2-l">L:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              window2 = this.updateWindow2({
                l: this.removeSpecialChars(e.currentTarget.value),
                w: window2.w,
                qty: window2.qty,
              });
            }}
            id="window2-l"
            name="window2"
          ></input>
          <label htmlFor="window2-w">W:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              window2 = this.updateWindow2({
                l: window2.l,
                w: this.removeSpecialChars(e.currentTarget.value),
                qty: window2.qty,
              });
            }}
            id="window2-w"
            name="window2"
          ></input>
          <label htmlFor="window2-qty">Qty:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              window2 = this.updateWindow2({
                l: window2.l,
                w: window2.w,
                qty: this.removeSpecialChars(e.currentTarget.value),
              });
            }}
            id="window2-qty"
            name="window2"
          ></input>
        </div>

        <div className="inputs">
          <h3>Opening 1: </h3>
          <label htmlFor="opening1-l">L:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              opening1 = this.updateOpening1({
                l: this.removeSpecialChars(e.currentTarget.value),
                w: opening1.w,
                qty: opening1.qty,
              });
            }}
            id="opening1-l"
            name="opening1"
          ></input>
          <label htmlFor="opening1-w">W:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              opening1 = this.updateOpening1({
                l: opening1.l,
                w: this.removeSpecialChars(e.currentTarget.value),
                qty: opening1.qty,
              });
            }}
            id="opening1-w"
            name="opening1"
          ></input>
          <label htmlFor="opening1-qty">Qty:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              opening1 = this.updateOpening1({
                l: opening1.l,
                w: opening1.w,
                qty: this.removeSpecialChars(e.currentTarget.value),
              });
            }}
            id="opening1-qty"
            name="opening1"
          ></input>
        </div>

        <div className="inputs">
          <h3>Opening 2: </h3>
          <label htmlFor="opening2-l">L:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              opening2 = this.updateOpening2({
                l: this.removeSpecialChars(e.currentTarget.value),
                w: opening2.w,
                qty: opening2.qty,
              });
            }}
            id="opening2-l"
            name="opening2"
          ></input>
          <label htmlFor="opening2-w">W:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              opening2 = this.updateOpening2({
                l: opening2.l,
                w: this.removeSpecialChars(e.currentTarget.value),
                qty: opening2.qty,
              });
            }}
            id="opening2-w"
            name="opening2"
          ></input>
          <label htmlFor="opening2-qty">Qty:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              opening2 = this.updateOpening2({
                l: opening2.l,
                w: opening2.w,
                qty: this.removeSpecialChars(e.currentTarget.value),
              });
            }}
            id="opening2-qty"
            name="opening2"
          ></input>
        </div>

        <div className="inputs">
          <h3>Other: </h3>
          <label htmlFor="other-l">L:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              other = this.updateOther({
                l: this.removeSpecialChars(e.currentTarget.value),
                w: other.w,
                qty: other.qty,
              });
            }}
            id="other-l"
            name="other"
          ></input>
          <label htmlFor="other-w">W:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              other = this.updateOther({
                l: other.l,
                w: this.removeSpecialChars(e.currentTarget.value),
                qty: other.qty,
              });
            }}
            id="other-w"
            name="other"
          ></input>
          <label htmlFor="other-qty">Qty:</label>
          <input
            className="shorter"
            type="number"
            onChange={(e) => {
              other = this.updateOther({
                l: other.l,
                w: other.w,
                qty: this.removeSpecialChars(e.currentTarget.value),
              });
            }}
            id="other-qty"
            name="other"
          ></input> 
        </div>*/}
      </form>
    );
  }
}
