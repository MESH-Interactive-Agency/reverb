import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class BaffleUnitSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBaffle1Unit: 0,
      selectedBaffle2Unit: 0,
      selectedBaffle3Unit: 0,
      selectedBaffle4Unit: 0,
      selectedBaffle5Unit: 0,
      selectedBaffle6Unit: 0,
      selectedBaffle7Unit: 0,
      selectedBaffle8Unit: 0,

      baffle1sqft: 0,
      baffle2sqft: 0,
      baffle3sqft: 0,
      baffle4sqft: 0,
      baffle5sqft: 0,
      baffle6sqft: 0,
      baffle7sqft: 0,
      baffle8sqft: 0,

      baffleUnit1length: 0,
      baffleUnit2length: 0,
      baffleUnit3length: 0,
      baffleUnit4length: 0,
      baffleUnit5length: 0,
      baffleUnit6length: 0,
      baffleUnit7length: 0,
      baffleUnit8length: 0,

      baffleUnit1width: 0,
      baffleUnit2width: 0,
      baffleUnit3width: 0,
      baffleUnit4width: 0,
      baffleUnit5width: 0,
      baffleUnit6width: 0,
      baffleUnit7width: 0,
      baffleUnit8width: 0,

      baffleUnit1qty: 0,
      baffleUnit2qty: 0,
      baffleUnit3qty: 0,
      baffleUnit4qty: 0,
      baffleUnit5qty: 0,
      baffleUnit6qty: 0,
      baffleUnit7qty: 0,
      baffleUnit8qty: 0,

      isOpen: false,
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false,
      isOpen7: false,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getBaffleUnits();
  }

  updateBaffleUnit1Selection(selection) {
    this.setState({ selectedBaffle1Unit: selection - 1 });
    this.context.updateSelectedBaffleUnit1(selection - 1);
  }
  updateBaffleUnit2Selection(selection) {
    this.setState({ selectedBaffle2Unit: selection - 1 });
    this.context.updateSelectedBaffleUnit2(selection - 1);
  }
  updateBaffleUnit3Selection(selection) {
    this.setState({ selectedBaffle3Unit: selection - 1 });
    this.context.updateSelectedBaffleUnit3(selection - 1);
  }
  updateBaffleUnit4Selection(selection) {
    this.setState({ selectedBaffleUnit4: selection - 1 });
    this.context.updateSelectedBaffleUnit4(selection - 1);
  }

  updateBaffleUnit1Length(l) {
    this.setState({
      baffleUnit1length: l,
      baffleUnit1sqft:
        this.state.baffleUnit1width * this.state.baffleUnit1qty * l,
    });
    this.context.updateBaffle1sqft(
      this.state.baffleUnit1width * this.state.baffleUnit1qty * l
    );
    return l;
  }

  //updateSelectedBaffleUnit3:
  //updateBaffle1sqft:

  updateBaffleUnit2Length(l) {
    this.setState({
      baffleUnit2length: l,
      baffleUnit2sqft:
        this.state.baffleUnit2width * this.state.baffleUnit2qty * l,
    });
    this.context.updateBaffle2sqft(
      this.state.baffleUnit2width * this.state.baffleUnit2qty * l
    );
    return l;
  }
  updateBaffleUnit3Length(l) {
    this.setState({
      baffleUnit3length: l,
      baffleUnit3sqft:
        this.state.baffleUnit3width * this.state.baffleUnit3qty * l,
    });
    this.context.updateBaffle3sqft(
      this.state.baffleUnit3width * this.state.baffleUnit3qty * l
    );
    return l;
  }

  updateBaffleUnit1Width(w) {
    this.setState({
      baffleUnit1width: w,
      baffleUnit1sqft:
        this.state.baffleUnit1length * this.state.baffleUnit1qty * w,
    });
    this.context.updateBaffle1sqft(
      this.state.baffleUnit1length * this.state.baffleUnit1qty * w
    );
    return w;
  }
  updateBaffleUnit2Width(w) {
    this.setState({
      baffleUnit2width: w,
      baffleUnit2sqft:
        this.state.baffleUnit2length * this.state.baffleUnit2qty * w,
    });
    this.context.updateBaffle2sqft(
      this.state.baffleUnit12ength * this.state.baffleUnit2qty * w
    );
    return w;
  }
  updateBaffleUnit3Width(w) {
    this.setState({
      baffleUnit3width: w,
      baffleUnit3sqft:
        this.state.baffleUnit3length * this.state.baffleUnit3qty * w,
    });
    this.context.updateBaffle3sqft(
      this.state.baffleUnit3length * this.state.baffleUnit3qty * w
    );
    return w;
  }

  updateBaffleUnit1qty(qty) {
    this.setState({
      baffleUnit1qty: qty,
      baffleUnit1sqft:
        this.state.baffleUnit1length * this.state.baffleUnit1width * qty,
    });
    this.context.updateBaffle1sqft(
      this.state.baffleUnit1length * this.state.baffleUnit1width * qty
    );
    return qty;
  }
  updateBaffleUnit2qty(qty) {
    this.setState({
      baffleUnit2qty: qty,
      baffleUnit2sqft:
        this.state.baffleUnit2length * this.state.baffleUnit2width * qty,
    });
    this.context.updateBaffle2sqft(
      this.state.baffleUnit2length * this.state.baffleUnit2width * qty
    );
    return qty;
  }
  updateBaffleUnit3qty(qty) {
    this.setState({
      baffleUnit3qty: qty,
      baffleUnit3sqft:
        this.state.baffleUnit3length * this.state.baffleUnit3width * qty,
    });
    this.context.updateBaffle3sqft(
      this.state.baffleUnit3length * this.state.baffleUnit3width * qty
    );
    return qty;
  }

  updateBaffleUnit1sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        baffleUnit1sqft: sqft,
        baffleUnit1length: 0,
        baffleUnit1width: 0,
        baffleUnit1qty: 0,
      });
    }
    this.context.updateBaffle1sqft(sqft);
    return sqft;
  }
  updateBaffleUnit2sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        baffleUnit2sqft: sqft,
        baffleUnit2length: 0,
        baffleUnit2width: 0,
        baffleUnit2qty: 0,
      });
    }
    this.context.updateBaffle2sqft(sqft);
    return sqft;
  }
  updateBaffleUnit3sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        baffleUnit3sqft: sqft,
        baffleUnit3length: 0,
        baffleUnit3width: 0,
        baffleUnit3qty: 0,
      });
    }
    this.context.updateBaffle3sqft(sqft);
    return sqft;
  }
  updateBaffleUnit4sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        baffleUnit4sqft: sqft,
        baffleUnit4length: 0,
        baffleUnit4width: 0,
        baffleUnit4qty: 0,
      });
    }
    this.context.updateBaffle4sqft(sqft);
    return sqft;
  }

  expand1 = (e) => {
    e.preventDefault();
    this.setState({ isOpen1: true });
  };
  expand2 = (e) => {
    e.preventDefault();
    this.setState({ isOpen2: true });
  };
  expand3 = (e) => {
    e.preventDefault();
    this.setState({ isOpen3: true });
  };
  expand4 = (e) => {
    e.preventDefault();
    this.setState({ isOpen4: true });
  };
  expand5 = (e) => {
    e.preventDefault();
    this.setState({ isOpen5: true });
  };
  expand6 = (e) => {
    e.preventDefault();
    this.setState({ isOpen6: true });
  };
  expand7 = (e) => {
    e.preventDefault();
    this.setState({ isOpen7: true });
  };
  expand8 = (e) => {
    e.preventDefault();
    this.setState({ isOpen8: true });
  };

  contract2 = (e) => {
    e.preventDefault();
    this.setState({ isOpen1: false, isOpen2: false });
    this.updateBaffleUnit2sqft(0);
  };
  contract3 = (e) => {
    e.preventDefault();
    this.setState({ isOpen2: false, isOpen3: false });
    this.updateBaffleUnit3sqft(0);
  };
  contract4 = (e) => {
    e.preventDefault();
    this.setState({ isOpen3: false, isOpen4: false });
    this.updateBaffleUnit4sqft(0);
  };
  contract5 = (e) => {
    e.preventDefault();
    this.setState({ isOpen4: false, isOpen5: false });
    this.updateBaffleUnit5sqft(0);
  };
  contract6 = (e) => {
    e.preventDefault();
    this.setState({ isOpen5: false, isOpen6: false });
    this.updateBaffleUnit6sqft(0);
  };
  contract7 = (e) => {
    e.preventDefault();
    this.setState({ isOpen6: false, isOpen7: false });
    this.updateBaffleUnit7sqft(0);
  };
  contract8 = (e) => {
    e.preventDefault();
    this.setState({ isOpen7: false, isOpen8: false });
    this.updateBaffleUnit8sqft(0);
  };

  render() {
    let mats = this.context.baffleUnits;

    let {
      baffleUnit1length,
      baffleUnit1width,
      baffleUnit1qty,
      baffleUnit1sqft,

      baffleUnit2length,
      baffleUnit2width,
      baffleUnit2qty,
      baffleUnit2sqft,

      baffleUnit3length,
      baffleUnit3width,
      baffleUnit3qty,
      baffleUnit3sqft,
    } = this.state;

    return (
      <div className="row">
        {!!mats && (
          <div className="dropdown">
            <label className="col-md-3 col-form-label ">Baffle Units</label>

            <div className="col-md-9">
              <div className="form-group">
                <select
                  className="lighter-border"
                  name="baffleUnitmats"
                  id="baffleUnitmats"
                  onClick={(e) => {
                    this.updateBaffleUnit1Selection(e.currentTarget.value);
                  }}
                >
                  {mats.map((material) => (
                    <option value={material.id} key={material.id}>
                      {material.descript}
                    </option>
                  ))}
                </select>
                <div className="additional-inputs">
                  <label>L:</label>
                  <input
                    className="shorter lighter-border"
                    type="text"
                    onChange={(e) => {
                      baffleUnit1length = this.updateBaffleUnit1Length(
                        e.currentTarget.value
                      );
                    }}
                    id="BaffleUnit1-length"
                    name="BaffleUnit1"
                    value={baffleUnit1length}
                  ></input>

                  <label>W:</label>
                  <input
                    className="shorter lighter-border"
                    type="text"
                    onChange={(e) => {
                      baffleUnit1width = this.updateBaffleUnit1Width(
                        e.currentTarget.value
                      );
                    }}
                    id="baffleUnit1-width"
                    name="BaffleUnit1"
                    value={baffleUnit1width}
                  ></input>

                  <label>QTY:</label>
                  <input
                    className="shorter lighter-border"
                    type="text"
                    onChange={(e) => {
                      baffleUnit1qty = this.updateBaffleUnit1qty(
                        e.currentTarget.value
                      );
                    }}
                    id="baffleUnit1-qty"
                    name="BaffleUnit1"
                    value={baffleUnit1qty}
                  ></input>

                  <label>Sqft:</label>
                  <input
                    className="short lighter-border"
                    type="text"
                    onChange={(e) => {
                      baffleUnit1sqft = this.updateBaffleUnit1sqft(
                        e.currentTarget.value,
                        true
                      );
                    }}
                    id="baffleUnit1-sqft"
                    name="BaffleUnit1"
                    value={baffleUnit1sqft}
                  ></input>
                </div>
              </div>
            </div>

            {!this.state.isOpen1 && (
              <span className="expand-button">
                <button className="expand-button" onClick={this.expand1}>
                  + Add Another
                </button>
              </span>
            )}

            {this.state.isOpen1 && (
              <span>
                <div className="col-md-9">
                  <div className="form-group">
                    <select
                      className="lighter-border"
                      name="baffleUnitmats"
                      id="baffleUnitmats"
                      onClick={(e) => {
                        this.updateBaffleUnit2Selection(e.currentTarget.value);
                      }}
                    >
                      {mats.map((material) => (
                        <option value={material.id} key={material.id}>
                          {material.descript}
                        </option>
                      ))}
                    </select>

                    <div className="additional-inputs">
                      <label>L:</label>
                      <input
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          baffleUnit2length = this.updateBaffleUnit2Length(
                            e.currentTarget.value
                          );
                        }}
                        id="BaffleUnit2-length"
                        name="BaffleUnit2"
                        value={baffleUnit2length}
                      ></input>

                      <label>W:</label>
                      <input
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          baffleUnit2width = this.updateBaffleUnit2Width(
                            e.currentTarget.value
                          );
                        }}
                        id="baffleUnit2-width"
                        name="BaffleUnit2"
                        value={baffleUnit2width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          baffleUnit2qty = this.updateBaffleUnit2qty(
                            e.currentTarget.value
                          );
                        }}
                        id="baffleUnit2-qty"
                        name="BaffleUnit2"
                        value={baffleUnit2qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        className="short lighter-border"
                        type="text"
                        onChange={(e) => {
                          baffleUnit2sqft = this.updateBaffleUnit2sqft(
                            e.currentTarget.value,
                            true
                          );
                        }}
                        id="baffleUnit2-sqft"
                        name="BaffleUnit2"
                        value={baffleUnit2sqft}
                      ></input>
                    </div>
                  </div>
                </div>

                {!this.state.isOpen2 && (
                  <span>
                    <span className="expand-button">
                      <button className="expand-button" onClick={this.expand2}>
                        + Add Another
                      </button>
                    </span>

                    <span className="expand-button">
                      <button
                        className="expand-button"
                        onClick={this.contract2}
                      >
                        - Remove
                      </button>
                    </span>
                  </span>
                )}
              </span>
            )}

            {this.state.isOpen2 && (
              <span>
                <div className="col-md-9">
                  <div className="form-group">
                    <select
                      className="lighter-border"
                      name="baffleUnitmats"
                      id="baffleUnitmats"
                      onClick={(e) => {
                        this.updateBaffleUnit3Selection(e.currentTarget.value);
                      }}
                    >
                      {mats.map((material) => (
                        <option value={material.id} key={material.id}>
                          {material.descript}
                        </option>
                      ))}
                    </select>

                    <div className="additional-inputs">
                      <label>L:</label>
                      <input
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          baffleUnit3length = this.updateBaffleUnit3Length(
                            e.currentTarget.value
                          );
                        }}
                        id="BaffleUnit3-length"
                        name="BaffleUnit3"
                        value={baffleUnit3length}
                      ></input>

                      <label>W:</label>
                      <input
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          baffleUnit3width = this.updateBaffleUnit3Width(
                            e.currentTarget.value
                          );
                        }}
                        id="baffleUnit3-width"
                        name="BaffleUnit3"
                        value={baffleUnit3width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          baffleUnit3qty = this.updateBaffleUnit3qty(
                            e.currentTarget.value
                          );
                        }}
                        id="baffleUnit3-qty"
                        name="BaffleUnit3"
                        value={baffleUnit3qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        className="short lighter-border"
                        type="text"
                        onChange={(e) => {
                          baffleUnit3sqft = this.updateBaffleUnit3sqft(
                            e.currentTarget.value,
                            true
                          );
                        }}
                        id="baffleUnit3-sqft"
                        name="BaffleUnit3"
                        value={baffleUnit3sqft}
                      ></input>
                    </div>
                  </div>
                </div>

                {!this.state.isOpen3 && (
                  <span>
                    <span className="expand-button">
                      <button
                        className="expand-button"
                        onClick={this.contract3}
                      >
                        - Remove
                      </button>
                    </span>
                  </span>
                )}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
}
