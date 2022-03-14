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
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>ENTER Floor & Room Area (Room Volume)</h2>
        <div className="inputs">
          <label htmlFor="length">Length</label>
          <input
            type="length"
            onChange={(e) => {
              this.updateLength(e.currentTarget.value);
            }}
            id="length"
            name="length"
          ></input>
        </div>

        <div className="inputs">
          <label htmlFor="width">Width:</label>
          <input
            type="text"
            onChange={(e) => {
              this.updateWidth(e.currentTarget.value);
            }}
            id="width"
            name="width"
          />
        </div>
        <div className="inputs">
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            onChange={(e) => {
              this.updateHeight(e.currentTarget.value);
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
