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
      wall1sqft: 0,
      wall2sqft: 0,
      wall3sqft: 0,
      wall4sqft: 0,
      wall1Length: 0,
      wall2Length: 0,
      wall3Length: 0,
      wall4Length: 0,
      wall1Height: 0,
      wall2Height: 0,
      wall3Height: 0,
      wall4Height: 0,
      isOpen: false,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getWallMaterials();
    this.setState({
      wall1: this.context.selectedWall1Material,
      wall1sqft: this.context.wall1sqft,
    });
  }

  updateWall1sqft(sqft, clear = false) {
    if (clear) {
      this.setState({ wall1sqft: sqft, wall1Length: 0, wall1Height: 0 });
    }
    this.context.updateWall1sqft(sqft);
    return sqft;
  }

  updateWall2sqft(sqft) {
    this.setState({ wall2sqft: sqft });
    this.context.updateWall2sqft(sqft);
    return sqft;
  }

  updateWall3sqft(sqft) {
    this.setState({ wall3sqft: sqft });
    this.context.updateWall3sqft(sqft);
    return sqft;
  }

  updateWall4sqft(sqft) {
    this.setState({ wall4sqft: sqft });
    this.context.updateWall4sqft(sqft);
    return sqft;
  }

  updateWall1Length(l) {
    this.setState({
      wall1Length: l,
      wall1sqft: this.state.wall1Height * l,
    });

    this.context.updateWall1sqft(l * this.state.wall1Height);
    return l;
  }

  updateWall2Length(l) {
    this.setState({ wall2Length: l });
    this.context.updateWall2sqft(
      this.state.wall2Length * this.state.wall2Height
    );
    return l;
  }

  updateWall3Length(l) {
    this.setState({ wall3Length: l });
    this.context.updateWall3sqft(
      this.state.wall3Length * this.state.wall3Height
    );
    return l;
  }

  updateWall4Length(l) {
    this.setState({ wall4Length: l });
    this.context.updateWall4sqft(
      this.state.wall4Length * this.state.wall4Height
    );
    return l;
  }

  updateWall1Height(h) {
    this.setState({ wall1Height: h, wall1sqft: this.state.wall1Length * h });
    this.context.updateWall1sqft(this.state.wall1Length * h);
    return h;
  }

  updateWall1Selection(selection) {
    this.setState({ wall1: selection - 1 });

    this.context.updateSelectedWall1Material(selection - 1);

    if (this.state.isOpen === false) {
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

  expand = (e) => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    let mats = this.context.wallMaterials;

    let wall1sqft = this.state.wall1sqft;
    let wall2sqft = this.state.wall2sqft;
    let wall3sqft = this.state.wall3sqft;
    let wall4sqft = this.state.wall4sqft;

    let wall1Length = this.state.wall1Length;
    let wall2Length = this.state.wall2Length;
    let wall3Length = this.state.wall3Length;
    let wall4Length = this.state.wall4Length;

    let wall1Height = this.state.wall1Height;
    let wall2Height = this.state.wall2Height;
    let wall3Height = this.state.wall3Height;
    let wall4Height = this.state.wall4Height;

    console.log(wall1sqft, 'wall1sqft state');
    console.log(wall1Length, 'wall1length state');
    console.log(wall1Height, 'wall1Height state');
    console.log(this.context.wall1sqft, 'wall1sqft context');
    console.log(wall1Height * wall1Length, 'sqft target');

    return (
      <div className="row">
        {!!mats && (
          <div className="dropdown">
            <label className="col-md-3 col-form-label ">Wall materials:</label>

            {!this.state.isOpen && (
              <span className="expand-button">
                <button className="expand-button" onClick={this.expand}>
                  +
                </button>
              </span>
            )}

            {this.state.isOpen && (
              <span className="expand-button">
                <button className="expand-button" onClick={this.expand}>
                  -
                </button>
              </span>
            )}

            <div className="col-md-9">
              <div className="form-group">
                <select
                  className="lighter-border"
                  name="wallmats"
                  id="wallmat1"
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

                {this.state.isOpen && (
                  <div className="additional-inputs">
                    <label>Length:</label>
                    <input
                      className="shorter lighter-border"
                      type="text"
                      onChange={(e) => {
                        wall1Length = this.updateWall1Length(
                          e.currentTarget.value
                        );
                      }}
                      id="wall1-length"
                      name="Wall1"
                      value={wall1Length}
                    ></input>

                    <label>Height:</label>
                    <input
                      className="shorter lighter-border"
                      type="text"
                      onChange={(e) => {
                        wall1Height = this.updateWall1Height(
                          e.currentTarget.value
                        );
                      }}
                      id="wall1-height"
                      name="Wall1"
                      value={wall1Height}
                    ></input>

                    <label>OR sqft:</label>
                    <input
                      className="shorter lighter-border"
                      type="text"
                      onChange={(e) => {
                        wall1sqft = this.updateWall1sqft(
                          e.currentTarget.value,
                          true
                        );
                      }}
                      id="wall1-sqft"
                      name="Wall1"
                      value={wall1sqft}
                    ></input>
                  </div>
                )}

                {!!this.state.isOpen && (
                  <select
                    className="lighter-border"
                    name="wallmats"
                    id="wallmat2"
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
                )}
                {this.state.isOpen && (
                  <input
                    className="shorter lighter-border"
                    type="text"
                    onChange={(e) => {
                      wall2sqft = this.updateWall2sqft(e.currentTarget.value);
                    }}
                    id="wall2-sqft"
                    name="Wall2"
                    value={this.state.wall2sqft}
                  ></input>
                )}

                {!!this.state.isOpen && (
                  <select
                    className="lighter-border"
                    name="wallmats"
                    id="wallmat3"
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
                )}
                {this.state.isOpen && (
                  <input
                    className="shorter lighter-border"
                    type="text"
                    onChange={(e) => {
                      wall3sqft = this.updateWall3sqft(e.currentTarget.value);
                    }}
                    id="wall3-sqft"
                    name="Wall3"
                    value={this.state.wall3sqft}
                  ></input>
                )}

                {!!this.state.isOpen && (
                  <select
                    className="lighter-border"
                    name="wallmats"
                    id="wallmat4"
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
                )}
                {this.state.isOpen && (
                  <input
                    className="shorter lighter-border"
                    type="text"
                    onChange={(e) => {
                      wall4sqft = this.updateWall4sqft(e.currentTarget.value);
                    }}
                    id="wall4-sqft"
                    name="Wall4"
                    value={this.state.wall4sqft}
                  ></input>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
