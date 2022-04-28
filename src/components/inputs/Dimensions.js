/* eslint-disable no-unused-vars */
import React from 'react';
import Context from '../../contexts/ApiContext';

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
    if (num < 0) num = 0;
    return num.replace(/[^0-9.]/g, '');
  }

  static contextType = Context;

  updateLength(length) {
    if (length <= 0) length = 0;
    this.setState({ length: length });
    this.context.updateLength(length);
    this.context.updateWall1sqft(length * this.state.height);
    this.context.updateWall3sqft(length * this.state.height);

    this.context.updateWall1Length(length);
    this.context.updateWall3Length(length);

    this.context.updateCeilingLength(length);

    return length;
  }
  updateWidth(width) {
    if (width <= 0) width = 0;
    this.setState({ width: width });
    this.context.updateWidth(width);

    this.context.updateWall2sqft(width * this.state.height);
    this.context.updateWall4sqft(width * this.state.height);

    this.context.updateWall2Length(width);
    this.context.updateWall4Length(width);

    this.context.updateCeilingWidth(width);
    return width;
  }
  updateHeight(height) {
    if (height <= 0) height = 0;
    this.setState({ height: height });
    this.context.updateHeight(height);

    this.context.updateWall1sqft(height * this.state.length);
    this.context.updateWall2sqft(height * this.state.width);
    this.context.updateWall3sqft(height * this.state.length);
    this.context.updateWall4sqft(height * this.state.width);

    this.context.updateWall1Height(height);
    this.context.updateWall2Height(height);
    this.context.updateWall3Height(height);
    this.context.updateWall4Height(height);
    return height;
  }

  handleFocus = (event) => event.target.select();

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
      <div className="card dimensions-input">
        <div className="card-header">
          <h4 className="card-title">Room Dimensions</h4>
        </div>
        {this.state.isOpen && (
          <div className="card-body">
            <form className="form-horizontal">
              <div className="row">
                <div className="form-group">
                  <label className="col-md-3 col-form-label" htmlFor="length">
                    Length
                  </label>
                  <div className="col-md-9">
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="form-control"
                      type="number"
                      onChange={(e) => {
                        length = this.updateLength(
                          this.removeSpecialChars(e.currentTarget.value)
                        );
                      }}
                      id="length"
                      name="length"
                      value={length}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-form-label" htmlFor="width">
                  Width:
                </label>
                <div className="col-md-9">
                  <div className="form-group">
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="form-control"
                      type="number"
                      onChange={(e) => {
                        width = this.updateWidth(
                          this.removeSpecialChars(e.currentTarget.value)
                        );
                      }}
                      id="width"
                      name="width"
                      value={width}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-form-label" htmlFor="height">
                  Height:
                </label>
                <div className="col-md-9">
                  <div className="form-group">
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="form-control"
                      type="number"
                      onChange={(e) => {
                        height = this.updateHeight(
                          this.removeSpecialChars(e.currentTarget.value)
                        );
                      }}
                      id="height"
                      name="height"
                      value={height}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
        {/* {!this.state.isOpen && (
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
        )} */}
      </div>
    );
  }
}
