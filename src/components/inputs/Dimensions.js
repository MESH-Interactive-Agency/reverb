/* eslint-disable no-unused-vars */
import React from 'react';
import Context from '../../contexts/ReverbContext';

import ReverbTime from './ReverbTime';

export default class Dimensions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      width: 0,
      height: 0,
      isOpen: true,
    };
  }

  removeSpecialChars(num) {
    return num.replace(/[^0-9.]/g, '');
  }

  static contextType = Context;

  updateLength(length) {
    this.setState({ length: length });
    this.context.updateLength(length);
    this.context.updateWall1Length(length);
    this.context.updateWall3Length(length);
    this.context.updateCeilingLength(length);
    return length;
  }
  updateWidth(width) {
    this.setState({ width: width });
    this.context.updateWidth(width);
    this.context.updateWall2Length(width);
    this.context.updateWall4Length(width);
    this.context.updateCeilingWidth(width);
    return width;
  }
  updateHeight(height) {
    this.setState({ height: height });
    this.context.updateHeight(height);
    this.context.updateWall1Height(height);
    this.context.updateWall2Height(height);
    this.context.updateWall3Height(height);
    this.context.updateWall4Height(height);
    return height;
  }

  clearData() {
    this.setState({
      length: 0,
      width: 0,
      height: 0,
    });
  }

  render() {
    let length = this.state.length;
    let width = this.state.width;
    let height = this.state.height;

    return (
      <div className="">
        {this.state.isOpen && (
          <form onSubmit={this.handleSubmit}>
            <h2>Room Dimensions</h2>
            <div className="inputs">
              <label htmlFor="length">Length</label>
              <input
                type="number"
                onChange={(e) => {
                  length = this.updateLength(
                    this.removeSpecialChars(e.currentTarget.value)
                  );
                }}
                id="length"
                name="length"
                value={this.state.length}
              ></input>
            </div>

            <div className="inputs">
              <label htmlFor="width">Width:</label>
              <input
                type="number"
                onChange={(e) => {
                  width = this.updateWidth(
                    this.removeSpecialChars(e.currentTarget.value)
                  );
                }}
                id="width"
                name="width"
                value={this.state.width}
              />
            </div>
            <div className="inputs">
              <label htmlFor="height">Height:</label>
              <input
                type="number"
                onChange={(e) => {
                  height = this.updateHeight(
                    this.removeSpecialChars(e.currentTarget.value)
                  );
                }}
                id="height"
                name="height"
                value={this.state.height}
              />
            </div>
            <button
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              Next
            </button>
          </form>
        )}
        {!this.state.isOpen && (
          <div>
            <button
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              edit
            </button>
            <p>
              L: {this.state.length} W: {this.state.width} H:{' '}
              {this.state.height}
            </p>
            <p>
              Total Volume:{' '}
              {this.state.length * this.state.width * this.state.height}
            </p>
          </div>
        )}
        <ReverbTime />
      </div>
    );
  }
}
