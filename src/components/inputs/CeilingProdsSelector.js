import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class CeilingProdsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCeiling1Product: 0,
      selectedCeiling2Product: 0,
      selectedCeiling3Product: 0,
      selectedCeiling4Product: 0,

      ceilingProd1sqft: 0,
      ceilingProd2sqft: 0,
      ceilingProd3sqft: 0,
      ceilingProd4sqft: 0,

      ceilingProd1length: 0,
      ceilingProd2length: 0,
      ceilingProd3length: 0,
      ceilingProd4length: 0,

      ceilingProd1width: 0,
      ceilingProd2width: 0,
      ceilingProd3width: 0,
      ceilingProd4width: 0,

      ceilingProd1qty: 0,
      ceilingProd2qty: 0,
      ceilingProd3qty: 0,
      ceilingProd4qty: 0,

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
    this.context.getCeilingProducts();
  }

  updateCeilingProd1Selection(selection) {
    this.setState({ selectedCeiling1Product: selection - 1 });
    this.context.updateSelectedCeiling1Product(selection - 1);
  }
  updateCeilingProd2Selection(selection) {
    this.setState({ selectedCeiling2Product: selection - 1 });
    this.context.updateSelectedCeiling2Product(selection - 1);
  }
  updateCeilingProd3Selection(selection) {
    this.setState({ selectedCeiling3Product: selection - 1 });
    this.context.updateSelectedCeiling3Product(selection - 1);
  }
  updateCeilingProd4Selection(selection) {
    this.setState({ selectedCeiling4Product: selection - 1 });
    this.context.updateSelectedCeiling4Product(selection - 1);
  }

  updateCeilingProd1Length(l) {
    this.setState({
      ceilingProd1length: l,
      ceilingProd1sqft:
        this.state.ceilingProd1width * this.state.ceilingProd1qty * l,
    });
    this.context.updateCeilingProd1sqft(
      this.state.ceilingProd1width * this.state.ceilingProd1qty * l
    );
    return l;
  }
  updateCeilingProd2Length(l) {
    this.setState({
      ceilingProd2length: l,
      ceilingProd2sqft:
        this.state.ceilingProd2width * this.state.ceilingProd2qty * l,
    });
    this.context.updateCeilingProd2sqft(
      this.state.ceilingProd2width * this.state.ceilingProd2qty * l
    );
    return l;
  }
  updateCeilingProd3Length(l) {
    this.setState({
      ceilingProd3length: l,
      ceilingProd3sqft:
        this.state.ceilingProd3width * this.state.ceilingProd3qty * l,
    });
    this.context.updateCeilingProd3sqft(
      this.state.ceilingProd3width * this.state.ceilingProd3qty * l
    );
    return l;
  }
  updateCeilingProd4Length(l) {
    this.setState({
      ceilingProd4length: l,
      ceilingProd4sqft:
        this.state.ceilingProd4width * this.state.ceilingProd4qty * l,
    });
    this.context.updateCeilingProd4sqft(
      this.state.ceilingProd4width * this.state.ceilingProd4qty * l
    );
    return l;
  }

  updateCeilingProd1Width(w) {
    this.setState({
      ceilingProd1width: w,
      ceilingProd1sqft:
        this.state.ceilingProd1length * this.state.ceilingProd1qty * w,
    });
    this.context.updateCeilingProd1sqft(
      this.state.ceilingProd1length * this.state.ceilingProd1qty * w
    );
    return w;
  }
  updateCeilingProd2Width(w) {
    this.setState({
      ceilingProd2width: w,
      ceilingProd2sqft:
        this.state.ceilingProd2length * this.state.ceilingProd2qty * w,
    });
    this.context.updateCeilingProd2sqft(
      this.state.ceilingProd2length * this.state.ceilingProd2qty * w
    );
    return w;
  }
  updateCeilingProd3Width(w) {
    this.setState({
      ceilingProd3width: w,
      ceilingProd3sqft:
        this.state.ceilingProd3length * this.state.ceilingProd3qty * w,
    });
    this.context.updateCeilingProd3sqft(
      this.state.ceilingProd3length * this.state.ceilingProd3qty * w
    );
    return w;
  }
  updateCeilingProd4Width(w) {
    this.setState({
      ceilingProd4width: w,
      ceilingProd4sqft:
        this.state.ceilingProd4length * this.state.ceilingProd4qty * w,
    });
    this.context.updateCeilingProd4sqft(
      this.state.ceilingProd4length * this.state.ceilingProd4qty * w
    );
    return w;
  }

  updateCeilingProd1qty(qty) {
    this.setState({
      ceilingProd1qty: qty,
      ceilingProd1sqft:
        this.state.ceilingProd1length * this.state.ceilingProd1width * qty,
    });
    this.context.updateCeilingProd1sqft(
      this.state.ceilingProd1length * this.state.ceilingProd1width * qty
    );
    return qty;
  }
  updateCeilingProd2qty(qty) {
    this.setState({
      ceilingProd2qty: qty,
      ceilingProd2sqft:
        this.state.ceilingProd2length * this.state.ceilingProd2width * qty,
    });
    this.context.updateCeilingProd2sqft(
      this.state.ceilingProd2length * this.state.ceilingProd2width * qty
    );
    return qty;
  }
  updateCeilingProd3qty(qty) {
    this.setState({
      ceilingProd3qty: qty,
      ceilingProd3sqft:
        this.state.ceilingProd3length * this.state.ceilingProd3width * qty,
    });
    this.context.updateCeilingProd3sqft(
      this.state.ceilingProd3length * this.state.ceilingProd3width * qty
    );
    return qty;
  }
  updateCeilingProd4qty(qty) {
    this.setState({
      ceilingProd4qty: qty,
      ceilingProd4sqft:
        this.state.ceilingProd4length * this.state.ceilingProd4width * qty,
    });
    this.context.updateCeilingProd4sqft(
      this.state.ceilingProd4length * this.state.ceilingProd4width * qty
    );
    return qty;
  }

  updateCeilingProd1sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        ceilingProd1sqft: sqft,
        ceilingProd1length: 0,
        ceilingProd1width: 0,
        ceilingProd1qty: 0,
      });
    }
    this.context.updateCeilingProd1sqft(sqft);
    return sqft;
  }
  updateCeilingProd2sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        ceilingProd2sqft: sqft,
        ceilingProd2length: 0,
        ceilingProd2width: 0,
        ceilingProd2qty: 0,
      });
    }
    this.context.updateCeilingProd2sqft(sqft);
    return sqft;
  }
  updateCeilingProd3sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        ceilingProd3sqft: sqft,
        ceilingProd3length: 0,
        ceilingProd3width: 0,
        ceilingProd3qty: 0,
      });
    }
    this.context.updateCeilingProd3sqft(sqft);
    return sqft;
  }
  updateCeilingProd4sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        ceilingProd4sqft: sqft,
        ceilingProd4length: 0,
        ceilingProd4width: 0,
        ceilingProd4qty: 0,
      });
    }
    this.context.updateCeilingProd4sqft(sqft);
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
    this.updateCeilingProd2sqft(0);
  };
  contract3 = (e) => {
    e.preventDefault();
    this.setState({ isOpen2: false, isOpen3: false });
    this.updateCeilingProd3sqft(0);
  };
  contract4 = (e) => {
    e.preventDefault();
    this.setState({ isOpen3: false, isOpen4: false });
    this.updateCeilingProd4sqft(0);
  };
  contract5 = (e) => {
    e.preventDefault();
    this.setState({ isOpen4: false, isOpen5: false });
    this.updateCeilingProd5sqft(0);
  };
  contract6 = (e) => {
    e.preventDefault();
    this.setState({ isOpen5: false, isOpen6: false });
    this.updateCeilingProd6sqft(0);
  };
  contract7 = (e) => {
    e.preventDefault();
    this.setState({ isOpen6: false, isOpen7: false });
    this.updateCeilingProd7sqft(0);
  };
  contract8 = (e) => {
    e.preventDefault();
    this.setState({ isOpen7: false, isOpen8: false });
    this.updateCeilingProd8sqft(0);
  };

  render() {
    let mats = this.context.ceilingProducts;

    let {
      ceilingProd1length,
      ceilingProd1width,
      ceilingProd1qty,
      ceilingProd1sqft,

      ceilingProd2length,
      ceilingProd2width,
      ceilingProd2qty,
      ceilingProd2sqft,

      ceilingProd3length,
      ceilingProd3width,
      ceilingProd3qty,
      ceilingProd3sqft,

      ceilingProd4length,
      ceilingProd4width,
      ceilingProd4qty,
      ceilingProd4sqft,
    } = this.state;

    return (
      <div className="row">
        {!!mats && (
          <div className="dropdown">
            <label className="col-md-3 col-form-label ">Ceiling Products</label>

            <div className="col-md-9">
              <div className="form-group">
                <select
                  className="lighter-border"
                  name="ceilingProdmats"
                  id="ceilingProdmats"
                  onClick={(e) => {
                    this.updateCeilingProd1Selection(e.currentTarget.value);
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
                      ceilingProd1length = this.updateCeilingProd1Length(
                        e.currentTarget.value
                      );
                    }}
                    id="CeilingProd1-length"
                    name="CeilingProd1"
                    value={ceilingProd1length}
                  ></input>

                  <label>W:</label>
                  <input
                    className="shorter lighter-border"
                    type="text"
                    onChange={(e) => {
                      ceilingProd1width = this.updateCeilingProd1Width(
                        e.currentTarget.value
                      );
                    }}
                    id="ceilingProd1-width"
                    name="CeilingProd1"
                    value={ceilingProd1width}
                  ></input>

                  <label>QTY:</label>
                  <input
                    className="shorter lighter-border"
                    type="number"
                    onChange={(e) => {
                      ceilingProd1qty = this.updateCeilingProd1qty(
                        e.currentTarget.value
                      );
                    }}
                    id="ceilingProd1-qty"
                    name="CeilingProd1"
                    value={ceilingProd1qty}
                  ></input>

                  <label>Sqft:</label>
                  <input
                    className="short lighter-border"
                    type="number"
                    onChange={(e) => {
                      ceilingProd1sqft = this.updateCeilingProd1sqft(
                        e.currentTarget.value,
                        true
                      );
                    }}
                    id="ceilingProd1-sqft"
                    name="CeilingProd1"
                    value={ceilingProd1sqft}
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
                      name="ceilingProdmats"
                      id="ceilingProdmats"
                      onClick={(e) => {
                        this.updateCeilingProd2Selection(e.currentTarget.value);
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
                          ceilingProd2length = this.updateCeilingProd2Length(
                            e.currentTarget.value
                          );
                        }}
                        id="CeilingProd2-length"
                        name="CeilingProd2"
                        value={ceilingProd2length}
                      ></input>

                      <label>W:</label>
                      <input
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          ceilingProd2width = this.updateCeilingProd2Width(
                            e.currentTarget.value
                          );
                        }}
                        id="ceilingProd2-width"
                        name="CeilingProd2"
                        value={ceilingProd2width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        className="shorter lighter-border"
                        type="number"
                        onChange={(e) => {
                          ceilingProd2qty = this.updateCeilingProd2qty(
                            e.currentTarget.value
                          );
                        }}
                        id="ceilingProd2-qty"
                        name="CeilingProd2"
                        value={ceilingProd2qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          ceilingProd2sqft = this.updateCeilingProd2sqft(
                            e.currentTarget.value,
                            true
                          );
                        }}
                        id="ceilingProd2-sqft"
                        name="CeilingProd2"
                        value={ceilingProd2sqft}
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
                      name="ceilingProdmats"
                      id="ceilingProdmats"
                      onClick={(e) => {
                        this.updateCeilingProd3Selection(e.currentTarget.value);
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
                          ceilingProd3length = this.updateCeilingProd3Length(
                            e.currentTarget.value
                          );
                        }}
                        id="CeilingProd3-length"
                        name="CeilingProd3"
                        value={ceilingProd3length}
                      ></input>

                      <label>W:</label>
                      <input
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          ceilingProd3width = this.updateCeilingProd3Width(
                            e.currentTarget.value
                          );
                        }}
                        id="ceilingProd3-width"
                        name="CeilingProd3"
                        value={ceilingProd3width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        className="shorter lighter-border"
                        type="number"
                        onChange={(e) => {
                          ceilingProd3qty = this.updateCeilingProd3qty(
                            e.currentTarget.value
                          );
                        }}
                        id="ceilingProd3-qty"
                        name="CeilingProd3"
                        value={ceilingProd3qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          ceilingProd3sqft = this.updateCeilingProd3sqft(
                            e.currentTarget.value,
                            true
                          );
                        }}
                        id="ceilingProd3-sqft"
                        name="CeilingProd3"
                        value={ceilingProd3sqft}
                      ></input>
                    </div>
                  </div>
                </div>

                {!this.state.isOpen3 && (
                  <span>
                    <span className="expand-button">
                      <button className="expand-button" onClick={this.expand3}>
                        + Add Another
                      </button>
                    </span>

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

            {this.state.isOpen3 && (
              <span>
                <div className="col-md-9">
                  <div className="form-group">
                    <select
                      className="lighter-border"
                      name="ceilingProdmats"
                      id="ceilingProdmats"
                      onClick={(e) => {
                        this.updateCeilingProd4Selection(e.currentTarget.value);
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
                          ceilingProd4length = this.updateCeilingProd4Length(
                            e.currentTarget.value
                          );
                        }}
                        id="CeilingProd4-length"
                        name="CeilingProd4"
                        value={ceilingProd4length}
                      ></input>

                      <label>W:</label>
                      <input
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          ceilingProd4width = this.updateCeilingProd4Width(
                            e.currentTarget.value
                          );
                        }}
                        id="ceilingProd4-width"
                        name="CeilingProd4"
                        value={ceilingProd4width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        className="shorter lighter-border"
                        type="number"
                        onChange={(e) => {
                          ceilingProd4qty = this.updateCeilingProd4qty(
                            e.currentTarget.value
                          );
                        }}
                        id="ceilingProd4-qty"
                        name="CeilingProd4"
                        value={ceilingProd4qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          ceilingProd4sqft = this.updateCeilingProd4sqft(
                            e.currentTarget.value,
                            true
                          );
                        }}
                        id="ceilingProd4-sqft"
                        name="CeilingProd4"
                        value={ceilingProd4sqft}
                      ></input>
                    </div>
                  </div>
                </div>

                {!this.state.isOpen4 && (
                  <span>
                    <span className="expand-button">
                      <button
                        className="expand-button"
                        onClick={this.contract4}
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
