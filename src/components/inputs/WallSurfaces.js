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

  updateWall2Length(l) {
    this.setState({ wall2: { l: l, h: this.state.wall2.h } });
    this.context.updateWall2Length(l);
    return l;
  }
  updateWall2Height(h) {
    this.setState({ wall2: { l: this.state.wall2.l, h: h } });
    this.context.updateWall2Height(h);
    return h;
  }

  updateWall3Length(l) {
    this.setState({ wall3: { l: l, h: this.state.wall3.h } });
    this.context.updateWall3Length(l);
    return l;
  }
  updateWall3Height(h) {
    this.setState({ wall3: { l: this.state.wall3.l, h: h } });
    this.context.updateWall3Height(h);
    return h;
  }

  updateWall4Length(l) {
    this.setState({ wall4: { l: l, h: this.state.wall4.h } });
    this.context.updateWall4Length(l);
    return l;
  }
  updateWall4Height(h) {
    this.setState({ wall4: { l: this.state.wall4.l, h: h } });
    this.context.updateWall4Height(h);
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
      <form onSubmit={this.handleSubmit} className="hide">
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

        <div className="inputs">
          <h3>Wall 2: </h3>
          <label htmlFor="wall2-l">L:</label>
          <input
            className="short"
            type="number"
            onChange={(e) => {
              wall2.l = this.updateWall2Length(
                this.removeSpecialChars(e.currentTarget.value)
              );
            }}
            id="wall2-l"
            name="wall2"
          ></input>
          <label htmlFor="wall2-h">H:</label>
          <input
            className="short"
            type="number"
            onChange={(e) => {
              wall2.h = this.updateWall2Height(
                this.removeSpecialChars(e.currentTarget.value)
              );
            }}
            id="wall2-h"
            name="wall2"
          ></input>
        </div>

        <div className="inputs">
          <h3>Wall 3: </h3>
          <label htmlFor="wall3-l">L:</label>
          <input
            className="short"
            type="number"
            onChange={(e) => {
              wall3.l = this.updateWall3Length(
                this.removeSpecialChars(e.currentTarget.value)
              );
            }}
            id="wall3-l"
            name="wall3"
          ></input>
          <label htmlFor="wall3-h">H:</label>
          <input
            className="short"
            type="number"
            onChange={(e) => {
              wall3.h = this.updateWall3Height(
                this.removeSpecialChars(e.currentTarget.value)
              );
            }}
            id="wall3-h"
            name="wall3"
          ></input>
        </div>

        <div className="inputs">
          <h3>Wall 4: </h3>
          <label htmlFor="wall4-l">L:</label>
          <input
            className="short"
            type="number"
            onChange={(e) => {
              wall4.l = this.updateWall4Length(
                this.removeSpecialChars(e.currentTarget.value)
              );
            }}
            id="wall4-l"
            name="wall4"
          ></input>
          <label htmlFor="wall4-h">H:</label>
          <input
            className="short"
            type="number"
            onChange={(e) => {
              wall4.h = this.updateWall4Height(
                this.removeSpecialChars(e.currentTarget.value)
              );
            }}
            id="wall4-h"
            name="wall4"
          ></input>
        </div>
      </form>
    );
  }
}
