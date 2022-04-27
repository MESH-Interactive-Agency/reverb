import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class FloorMatsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getFloorMaterials();
  }

  updateSelection(selection) {
    this.setState({ selected: selection });
    this.context.updateSelectedFloorMaterial(selection - 1);
  }

  render() {
    let mats = this.context.floorMaterials;
    return (
      <div className="row">
        {!!mats && (
          <div className="dropdown">
            
            <label className="col-md-3 col-form-label ">Floor material:</label>
            
            <div className="col-md-9">
              <div className="form-group">
                <select
                className="lighter-border floormats"
                  name="floormats"
                  id="floormats"
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
