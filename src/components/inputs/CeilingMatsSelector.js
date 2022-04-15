import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class CeilingMatsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getCeilingMaterials();
  }

  updateSelection(selection) {
    this.setState({ selected: selection - 1 });
    this.context.updateSelectedCeilingMaterial(selection - 1);
  }

  render() {
    let mats = this.context.ceilingMaterials;

    return (
      <div className="row">
        {!!mats && (
          <div className="dropdown">
            <label className="col-md-3 col-form-label ">
              Ceiling material:
            </label>

            <div className="col-md-9">
              <div className="form-group">
                <select
                className="lighter-border"
                  name="ceilingmats"
                  id="ceilingmats"
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
          </div>
        )}
      </div>
    );
  }
}
