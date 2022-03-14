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

  updateWall1(l, w) {
    this.setState({ wall1: { l: l, w: w } });
    this.context.updateCeilingLength(l, w);
    return { l, w };
  }
  updateCeilingWidth(width) {
    this.setState({ cWidth: width });
    this.context.updateCeilingWidth(width);
    return width;
  }

  clearData() {
    this.setState({
      cLength: 0,
      cWidth: 0,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>ENTER Ceiling Areas</h2>
        <div className="inputs">
          <label htmlFor="wall1">Length</label>
          <input
            type="number"
            onChange={(e) => {
              this.updateCeilingLength(e.currentTarget.value);
            }}
            id="wall1"
            name="wall1"
          ></input>
        </div>

      </form>
    );
  }
}
