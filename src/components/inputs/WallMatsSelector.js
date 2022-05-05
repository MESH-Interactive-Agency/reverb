import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';
import val from '../../utils/val';

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
      wall2: this.context.selectedWall2Material,
      wall3: this.context.selectedWall3Material,
      wall4: this.context.selectedWall4Material,
      wall1sqft: this.context.wall1sqft,
      wall2sqft: this.context.wall2sqft,
      wall3sqft: this.context.wall3sqft,
      wall4sqft: this.context.wall4sqft,
      wall1length: this.context.wall1Length,
      wall2length: this.context.wall2Length,
      wall3length: this.context.wall3Length,
      wall4length: this.context.wall4Length,
      wall1Height: this.context.wall1Height,
      wall2Height: this.context.wall2Height,
      wall3Height: this.context.wall3Height,
      wall4Height: this.context.wall4Height,
    });
  }

  updateWall1sqft(sqft, clear = false) {
    if (clear) {
      this.setState({ wall1sqft: sqft, wall1Length: 0, wall1Height: 0 });
    }
    this.context.updateWall1sqft(sqft);
    return sqft;
  }
  updateWall2sqft(sqft, clear = false) {
    if (clear) {
      this.setState({ wall2sqft: sqft, wall2Length: 0, wall2Height: 0 });
    }
    this.context.updateWall2sqft(sqft);
    return sqft;
  }
  updateWall3sqft(sqft, clear = false) {
    if (clear) {
      this.setState({ wall3sqft: sqft, wall3Length: 0, wall3Height: 0 });
    }
    this.context.updateWall3sqft(sqft);
    return sqft;
  }
  updateWall4sqft(sqft, clear = false) {
    if (clear) {
      this.setState({ wall4sqft: sqft, wall4Length: 0, wall4Height: 0 });
    }
    this.context.updateWall4sqft(sqft);
    return sqft;
  }

  updateWall1Length(l) {
    this.setState({ wall1Length: l, wall1sqft: this.state.wall1Height * l });
    this.context.updateWall1sqft(l * this.state.wall1Height);
    return l;
  }
  updateWall2Length(l) {
    this.setState({ wall2Length: l, wall2sqft: this.state.wall2Height * l });
    this.context.updateWall2sqft(l * this.state.wall2Height);
    return l;
  }
  updateWall3Length(l) {
    this.setState({ wall3Length: l, wall3sqft: this.state.wall3Height * l });
    this.context.updateWall3sqft(l * this.state.wall3Height);
    return l;
  }
  updateWall4Length(l) {
    this.setState({ wall4Length: l, wall4sqft: this.state.wall4Height * l });
    this.context.updateWall4sqft(l * this.state.wall4Height);
    return l;
  }

  updateWall1Height(h) {
    this.setState({ wall1Height: h, wall1sqft: this.state.wall1Length * h });
    this.context.updateWall1sqft(this.state.wall1Length * h);
    return h;
  }
  updateWall2Height(h) {
    this.setState({ wall2Height: h, wall2sqft: this.state.wall2Length * h });
    this.context.updateWall2sqft(this.state.wall2Length * h);
    return h;
  }
  updateWall3Height(h) {
    this.setState({ wall3Height: h, wall3sqft: this.state.wall3Length * h });
    this.context.updateWall3sqft(this.state.wall3Length * h);
    return h;
  }
  updateWall4Height(h) {
    this.setState({ wall4Height: h, wall4sqft: this.state.wall4Length * h });
    this.context.updateWall4sqft(this.state.wall4Length * h);
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
    return selection;
  }
  updateWall2Selection(selection) {
    this.setState({ wall2: selection - 1 });
    this.context.updateSelectedWall2Material(selection - 1);
    return selection;
  }
  updateWall3Selection(selection) {
    this.setState({ wall3: selection - 1 });
    this.context.updateSelectedWall3Material(selection - 1);
    return selection;
  }
  updateWall4Selection(selection) {
    this.setState({ wall4: selection - 1 });
    this.context.updateSelectedWall4Material(selection - 1);
    return selection;
  }

  expand = (e) => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({
      wall1: this.context.selectedWall1Material,
      wall2: this.context.selectedWall2Material,
      wall3: this.context.selectedWall3Material,
      wall4: this.context.selectedWall4Material,

      wall1sqft: this.context.length * this.context.height,
      wall2sqft: this.context.width * this.context.height,
      wall3sqft: this.context.length * this.context.height,
      wall4sqft: this.context.width * this.context.height,
    });
  };

  contract = (e) => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({
      wall1: this.context.selectedWall1Material,
      wall2: this.context.selectedWall1Material,
      wall3: this.context.selectedWall1Material,
      wall4: this.context.selectedWall1Material,
    });
    this.updateWall1Selection(this.state.wall1);
    this.updateWall2Selection(this.state.wall1);
    this.updateWall3Selection(this.state.wall1);
    this.updateWall4Selection(this.state.wall1);
  };

  handleFocus = (event) => event.target.select();

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

    return (
      <div className="row">
        {!!mats && (
          <div className="dropdown ">
            <label className="col-md-3 col-form-label ">Wall materials:<span className="red-text">*</span></label>

            <div className="col-md-9">
              <div className="form-group">
                <select
                  className="lighter-border wallmats"
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

                {!this.state.isOpen && (
                  <span className="expand-button">
                    <button className="expand-button" onClick={this.expand}>
                      + More Walls
                    </button>
                  </span>
                )}

                {this.state.isOpen && (
                  <div className="additional-inputs">
                    <label>L:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="shorter lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall1Length = this.updateWall1Length(
                          val.PosNum(e.currentTarget.value)
                        );
                      }}
                      id="wall1-length"
                      name="Wall1"
                      value={wall1Length}
                    ></input>

                    <label>H:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="shorter lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall1Height = this.updateWall1Height(
                          val.PosNum(e.currentTarget.value)
                        );
                      }}
                      id="wall1-height"
                      name="Wall1"
                      value={wall1Height}
                    ></input>

                    <label>OR sqft:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="short lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall1sqft = this.updateWall1sqft(
                          val.PosNum(e.currentTarget.value),
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
                    className="lighter-border wallmats"
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
                  <div className="additional-inputs">
                    <label>L:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="shorter lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall2Length = this.updateWall2Length(
                          val.PosNum(e.currentTarget.value)
                        );
                      }}
                      id="wall2-length"
                      name="Wall2"
                      value={wall2Length}
                    ></input>

                    <label>H:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="shorter lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall2Height = this.updateWall2Height(
                          val.PosNum(e.currentTarget.value)
                        );
                      }}
                      id="wall2-height"
                      name="Wall2"
                      value={wall2Height}
                    ></input>

                    <label>OR sqft:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="short lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall2sqft = this.updateWall2sqft(
                          val.PosNum(e.currentTarget.value),
                          true
                        );
                      }}
                      id="wall2-sqft"
                      name="Wall2"
                      value={wall2sqft}
                    ></input>
                  </div>
                )}

                {!!this.state.isOpen && (
                  <select
                    className="lighter-border wallmats"
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
                  <div className="additional-inputs">
                    <label>L:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="shorter lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall3Length = this.updateWall3Length(
                          val.PosNum(e.currentTarget.value)
                        );
                      }}
                      id="wall3-length"
                      name="Wall3"
                      value={wall3Length}
                    ></input>

                    <label>Ht:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="shorter lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall3Height = this.updateWall3Height(
                          val.PosNum(e.currentTarget.value)
                        );
                      }}
                      id="wall3-height"
                      name="Wall3"
                      value={wall3Height}
                    ></input>

                    <label>OR Sqft:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="short lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall3sqft = this.updateWall3sqft(
                          val.PosNum(e.currentTarget.value),
                          true
                        );
                      }}
                      id="wall3-sqft"
                      name="Wall3"
                      value={wall3sqft}
                    ></input>
                  </div>
                )}

                {!!this.state.isOpen && (
                  <select
                    className="lighter-border wallmats"
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
                  <div className="additional-inputs">
                    <label>L:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="shorter lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall4Length = this.updateWall4Length(
                          val.PosNum(e.currentTarget.value)
                        );
                      }}
                      id="wall4-length"
                      name="Wall4"
                      value={wall4Length}
                    ></input>

                    <label>H:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="shorter lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall4Height = this.updateWall4Height(
                          val.PosNum(e.currentTarget.value)
                        );
                      }}
                      id="wall4-height"
                      name="Wall4"
                      value={wall4Height}
                    ></input>

                    <label>OR Sqft:</label>
                    <input
                      onFocus={(e) => {
                        this.handleFocus(e);
                      }}
                      className="short lighter-border"
                      type="number"
                      onChange={(e) => {
                        wall4sqft = this.updateWall4sqft(
                          val.PosNum(e.currentTarget.value),
                          true
                        );
                      }}
                      id="wall4-sqft"
                      name="Wall4"
                      value={wall4sqft}
                    ></input>
                  </div>
                )}

                {this.state.isOpen && (
                  <span className="expand-button">
                    <button className="expand-button" onClick={this.contract}>
                      - Fewer walls
                    </button>
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
