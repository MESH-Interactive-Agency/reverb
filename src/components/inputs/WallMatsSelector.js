import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class WallMatsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getWallMaterials();
  }

  updateSelection(selection) {
    this.setState({ selected: selection - 1 });
    this.context.updateSelectedWallMaterial(selection - 1);
  }

  render() {
    let mats = this.context.wallMaterials;
    let selected = this.state.selected;

    return (
      <div className="window">
        {!!mats && (
          <div>
            <div className="dropdown">
              <label htmlFor="wallmats">Wall material:</label>
              <select
                name="wallmats"
                id="wallmats"
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
