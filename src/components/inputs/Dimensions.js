/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from '../../utils/utils';
import Context from '../../contexts/ReverbContext';

export default class ExistingConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      width: 0,
      height: 0,
    };
  }

  removeSpecialChars(num) {
    return num.replace(/[^0-9.]/g, '');
  }

  static contextType = Context;

  updateLength(length) {
    this.setState({ length: length });
    this.context.updateLength(length);
    return length;
  }
  updateWidth(width) {
    this.setState({ width: width });
    this.context.updateWidth(width);
    return width;
  }
  updateHeight(height) {
    this.setState({ height: height });
    this.context.updateHeight(height);
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
      <form onSubmit={this.handleSubmit}>
        <h2>ENTER Floor & Room Area (Room Volume)</h2>
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
          />
        </div>

        {/* <Button onClick={this.clearData}>Clear Data</Button> */}
      </form>
    );
  }
}
