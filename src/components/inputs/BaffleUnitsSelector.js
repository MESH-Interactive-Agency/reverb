import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class BaffleUnitsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getBaffleUnits();
  }

  updateSelection(selection) {
    this.setState({ selected: selection });
    this.context.updateSelectedBaffleUnit(selection - 1);
  }

  render() {
    let mats = this.context.baffleUnits;
    return (
      <div className=" window">
        {!!mats && (
          <div>
            <div className="dropdown">
              <label className="inputCaptions" htmlFor="baffleunits inputCaptions">Baffle Units:</label>
              <br></br>
              <select
                name="baffleunits"
                id="baffleunits"
                onClick={(e) => {
                  this.updateSelection(e.currentTarget.value);
                }}
              >
                {mats.map((material) => (
                  <option value={material.id} key={material.id}>
                    {material.descript}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    );
  }
}
