import React, { Component } from 'react';
import { Button } from '../../utils/utils';
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
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>ENTER Ceiling Areas</h2>
        <div className="inputs">
          <label htmlFor="length">Length</label>
          <input
            type="length"
            onChange={(e) => {
              this.updateCeilingLength(e.currentTarget.value);
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
              this.updateCeilingWidth(e.currentTarget.value);
            }}
            id="width"
            name="width"
          />
        </div>

        {/* <Button onClick={this.clearData}>Clear Data</Button> */}
      </form>
    );
  }
}
