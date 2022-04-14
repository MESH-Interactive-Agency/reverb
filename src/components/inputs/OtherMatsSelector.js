import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class OtherMatsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getOtherMaterials();
  }

  updateSelection(selection) {
    this.setState({ selected: selection - 1 });
    this.context.updateSelectedOtherMaterial(selection - 1);
  }

  render() {
    let mats = this.context.otherMaterials;
    let selected = this.state.selected;

    return (
      <div className="">
        {!!mats && (
          <div>
            <div className="dropdown">
              <h4 className="inputCaptions">Doors, Windows, Other:</h4>
              <select
                name="othermats"
                id="othermats"
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
