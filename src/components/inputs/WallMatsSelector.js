import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class WallMatsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wall1: 0,
      wall2: 0,
      wall3: 0,
      wall4: 0,
      hidden: true,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getWallMaterials();
  }

  updateWall1Selection(selection) {
    this.setState({ wall1: selection - 1 });
    this.context.updateSelectedWall1Material(selection - 1);

    if (this.state.hidden === true) {
      this.updateWall2Selection(selection);
      this.updateWall3Selection(selection);
      this.updateWall4Selection(selection);
    }
  }
  updateWall2Selection(selection) {
    this.setState({ wall2: selection - 1 });
    this.context.updateSelectedWall2Material(selection - 1);
  }
  updateWall3Selection(selection) {
    this.setState({ wall3: selection - 1 });
    this.context.updateSelectedWall3Material(selection - 1);
  }
  updateWall4Selection(selection) {
    this.setState({ wall4: selection - 1 });
    this.context.updateSelectedWall4Material(selection - 1);
  }

  render() {
    let mats = this.context.wallMaterials;

    return (
      <div className="row">
        {!!mats && (
          <div className="dropdown">
            <label className="col-md-3 col-form-label ">Wall materials:</label>
            <div className="col-md-9">
              <div className="form-group">
                <select
                  className="lighter-border"
                  name="wallmats"
                  id="wallmats"
                  onClick={(e) => {
                    this.updateWall1Selection(e.currentTarget.value);
                  }}
                >
                  {mats.map((material) => (
                    <option value={material.id} key={material.id}>
                      {material.descript}
                    </option>
                  ))}
                </select>
                <select
                  className="lighter-border"
                  name="wallmats"
                  id="wallmats"
                  onClick={(e) => {
                    this.updateWall2Selection(e.currentTarget.value);
                  }}
                >
                  {mats.map((material) => (
                    <option value={material.id} key={material.id}>
                      {material.descript}
                    </option>
                  ))}
                </select>

                <select
                  className="lighter-border"
                  name="wallmats"
                  id="wallmats"
                  onClick={(e) => {
                    this.updateWall3Selection(e.currentTarget.value);
                  }}
                >
                  {mats.map((material) => (
                    <option value={material.id} key={material.id}>
                      {material.descript}
                    </option>
                  ))}
                </select>

                <select
                  className="lighter-border"
                  name="wallmats"
                  id="wallmats"
                  onClick={(e) => {
                    this.updateWall4Selection(e.currentTarget.value);
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
