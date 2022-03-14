/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
//import { Button } from '../../utils/utils';
import Context from '../../contexts/ReverbContext';

export default class CeilingArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cLength: 0,
      cWidth: 0,
    };
  }

  static contextType = Context;

  removeSpecialChars(num) {
    return num.replace(/[^0-9.]/g, '');
  }

  updateCeilingLength(length) {
    this.setState({ cLength: length });
    this.context.updateCeilingLength(length);
    return length;
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
    let cWidth = this.state.cWidth;
    let cLength = this.state.cLength;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>ENTER Ceiling Areas</h2>
        <div className="inputs">
          <label htmlFor="length">Length</label>
          <input
            type="number"
            onChange={(e) => {
              cLength = this.updateCeilingLength(
                this.removeSpecialChars(e.currentTarget.value)
              );
            }}
            id="c-length"
            name="c-length"
          ></input>
        </div>

        <div className="inputs">
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            onChange={(e) => {
              cWidth=
              this.updateCeilingWidth(this.removeSpecialChars(e.currentTarget.value));
            }}
            id="c-width"
            name="c-width"
          />
        </div>

        {/* <Button onClick={this.clearData}>Clear Data</Button> */}
      </form>
    );
  }
}
