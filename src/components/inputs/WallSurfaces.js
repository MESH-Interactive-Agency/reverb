import React, { Component } from 'react';
//import { Button } from '../../utils/utils';
import Context from '../../contexts/ReverbContext';

export default class WallSurfaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wall1: { l: 0, h: 0 },
      wall2: { l: 0, h: 0 },
      wall3: { l: 0, h: 0 },
      wall4: { l: 0, h: 0 },
    };
  }

  static contextType = Context;

  removeSpecialChars(num) {
    return num.replace(/[^0-9.]/g, '');
  }

  updateWall1Length(l) {
    this.setState({ wall1: { l: l, h: this.state.wall1.h } });
    this.context.updateWall1Length(l);
    return l;
  }
  updateWall1Height(h) {
    this.setState({ wall1: { l: this.state.wall1.l, h: h } });
    this.context.updateWall1Height(h);
    return h;
  }

  clearData() {
    this.setState({
      cLength: 0,
      cWidth: 0,
    });
  }

  render() {
    let wall1 = this.state.wall1;
    let wall2 = this.state.wall2;
    let wall3 = this.state.wall3;
    let wall4 = this.state.wall4;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>ENTER Wall Surfaces Dimensions</h2>
        <div className="inputs">
          <h3>Wall 1: </h3>
          <label htmlFor="wall1-l">L:</label>
          <input
            className="short"
            type="number"
            onChange={(e) => {
              wall1.l = this.updateWall1Length(
                this.removeSpecialChars(e.currentTarget.value)
              );
            }}
            id="wall1-l"
            name="wall1"
          ></input>
          <label htmlFor="wall1-h">H:</label>
          <input
            className="short"
            type="number"
            onChange={(e) => {
              wall1.h = this.updateWall1Height(
                this.removeSpecialChars(e.currentTarget.value)
              );
            }}
            id="wall1-h"
            name="wall1"
          ></input>
        </div>
      </form>
    );
  }
}
