import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class WallProdsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWall1Product: 0,
      selectedWall2Product: 0,
      selectedWall3Product: 0,
      selectedWall4Product: 0,
      selectedWall5Product: 0,
      selectedWall6Product: 0,
      selectedWall7Product: 0,
      selectedWall8Product: 0,

      wallProd1sqft: 0,
      wallProd2sqft: 0,
      wallProd3sqft: 0,
      wallProd4sqft: 0,
      wallProd5sqft: 0,
      wallProd6sqft: 0,
      wallProd7sqft: 0,
      wallProd8sqft: 0,

      wallProd1length: 0,
      wallProd2length: 0,
      wallProd3length: 0,
      wallProd4length: 0,
      wallProd5length: 0,
      wallProd6length: 0,
      wallProd7length: 0,
      wallProd8length: 0,

      wallProd1width: 0,
      wallProd2width: 0,
      wallProd3width: 0,
      wallProd4width: 0,
      wallProd5width: 0,
      wallProd6width: 0,
      wallProd7width: 0,
      wallProd8width: 0,

      wallProd1qty: 0,
      wallProd2qty: 0,
      wallProd3qty: 0,
      wallProd4qty: 0,
      wallProd5qty: 0,
      wallProd6qty: 0,
      wallProd7qty: 0,
      wallProd8qty: 0,

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

  removeSpecialChars(num) {
    if (num < 0) return 0;
    else return num.replace(/[^0-9.]/g, '');
  }

  componentDidMount() {
    this.context.getWallProducts();
  }

  updateWallProd1Selection(selection) {
    this.setState({ selectedWall1Product: selection - 1 });
    this.context.updateSelectedWall1Product(selection - 1);
  }
  updateWallProd2Selection(selection) {
    this.setState({ selectedWall2Product: selection - 1 });
    this.context.updateSelectedWall2Product(selection - 1);
  }
  updateWallProd3Selection(selection) {
    this.setState({ selectedWall3Product: selection - 1 });
    this.context.updateSelectedWall3Product(selection - 1);
  }
  updateWallProd4Selection(selection) {
    this.setState({ selectedWall4Product: selection - 1 });
    this.context.updateSelectedWall4Product(selection - 1);
  }
  updateWallProd5Selection(selection) {
    this.setState({ selectedWall5Product: selection - 1 });
    this.context.updateSelectedWall5Product(selection - 1);
  }
  updateWallProd6Selection(selection) {
    this.setState({ selectedWall6Product: selection - 1 });
    this.context.updateSelectedWall6Product(selection - 1);
  }
  updateWallProd7Selection(selection) {
    this.setState({ selectedWall7Product: selection - 1 });
    this.context.updateSelectedWall7Product(selection - 1);
  }
  updateWallProd8Selection(selection) {
    this.setState({ selectedWall8Product: selection - 1 });
    this.context.updateSelectedWall8Product(selection - 1);
  }

  updateWallProd1Length(l) {
    this.setState({
      wallProd1length: l,
      wallProd1sqft: this.state.wallProd1width * this.state.wallProd1qty * l,
    });
    this.context.updateWallProd1sqft(
      this.state.wallProd1width * this.state.wallProd1qty * l
    );
    return l;
  }
  updateWallProd2Length(l) {
    this.setState({
      wallProd2length: l,
      wallProd2sqft: this.state.wallProd2width * this.state.wallProd2qty * l,
    });
    this.context.updateWallProd2sqft(
      this.state.wallProd2width * this.state.wallProd2qty * l
    );
    return l;
  }
  updateWallProd3Length(l) {
    this.setState({
      wallProd3length: l,
      wallProd3sqft: this.state.wallProd3width * this.state.wallProd3qty * l,
    });
    this.context.updateWallProd3sqft(
      this.state.wallProd3width * this.state.wallProd3qty * l
    );
    return l;
  }
  updateWallProd4Length(l) {
    this.setState({
      wallProd4length: l,
      wallProd4sqft: this.state.wallProd4width * this.state.wallProd4qty * l,
    });
    this.context.updateWallProd4sqft(
      this.state.wallProd4width * this.state.wallProd4qty * l
    );
    return l;
  }
  updateWallProd5Length(l) {
    this.setState({
      wallProd5length: l,
      wallProd5sqft: this.state.wallProd5width * this.state.wallProd5qty * l,
    });
    this.context.updateWallProd5sqft(
      this.state.wallProd5width * this.state.wallProd5qty * l
    );
    return l;
  }
  updateWallProd6Length(l) {
    this.setState({
      wallProd6length: l,
      wallProd6sqft: this.state.wallProd6width * this.state.wallProd6qty * l,
    });
    this.context.updateWallProd6sqft(
      this.state.wallProd6width * this.state.wallProd6qty * l
    );
    return l;
  }
  updateWallProd7Length(l) {
    this.setState({
      wallProd7length: l,
      wallProd7sqft: this.state.wallProd7width * this.state.wallProd7qty * l,
    });
    this.context.updateWallProd7sqft(
      this.state.wallProd7width * this.state.wallProd7qty * l
    );
    return l;
  }
  updateWallProd8Length(l) {
    this.setState({
      wallProd8length: l,
      wallProd8sqft: this.state.wallProd8width * this.state.wallProd8qty * l,
    });
    this.context.updateWallProd8sqft(
      this.state.wallProd8width * this.state.wallProd8qty * l
    );
    return l;
  }

  updateWallProd1Width(w) {
    this.setState({
      wallProd1width: w,
      wallProd1sqft: this.state.wallProd1length * this.state.wallProd1qty * w,
    });
    this.context.updateWallProd1sqft(
      this.state.wallProd1length * this.state.wallProd1qty * w
    );
    return w;
  }
  updateWallProd2Width(w) {
    this.setState({
      wallProd2width: w,
      wallProd2sqft: this.state.wallProd2length * this.state.wallProd2qty * w,
    });
    this.context.updateWallProd2sqft(
      this.state.wallProd12ength * this.state.wallProd2qty * w
    );
    return w;
  }
  updateWallProd3Width(w) {
    this.setState({
      wallProd3width: w,
      wallProd3sqft: this.state.wallProd3length * this.state.wallProd3qty * w,
    });
    this.context.updateWallProd3sqft(
      this.state.wallProd3length * this.state.wallProd3qty * w
    );
    return w;
  }
  updateWallProd4Width(w) {
    this.setState({
      wallProd4width: w,
      wallProd4sqft: this.state.wallProd4length * this.state.wallProd4qty * w,
    });
    this.context.updateWallProd4sqft(
      this.state.wallProd4length * this.state.wallProd4qty * w
    );
    return w;
  }
  updateWallProd5Width(w) {
    this.setState({
      wallProd5width: w,
      wallProd5sqft: this.state.wallProd5length * this.state.wallProd5qty * w,
    });
    this.context.updateWallProd5sqft(
      this.state.wallProd5length * this.state.wallProd5qty * w
    );
    return w;
  }
  updateWallProd6Width(w) {
    this.setState({
      wallProd6width: w,
      wallProd6sqft: this.state.wallProd6length * this.state.wallProd6qty * w,
    });
    this.context.updateWallProd6sqft(
      this.state.wallProd6length * this.state.wallProd6qty * w
    );
    return w;
  }
  updateWallProd7Width(w) {
    this.setState({
      wallProd7width: w,
      wallProd7sqft: this.state.wallProd7length * this.state.wallProd7qty * w,
    });
    this.context.updateWallProd7sqft(
      this.state.wallProd7length * this.state.wallProd7qty * w
    );
    return w;
  }
  updateWallProd8Width(w) {
    this.setState({
      wallProd8width: w,
      wallProd8sqft: this.state.wallProd8length * this.state.wallProd8qty * w,
    });
    this.context.updateWallProd8sqft(
      this.state.wallProd8length * this.state.wallProd8qty * w
    );
    return w;
  }

  updateWallProd1qty(qty) {
    this.setState({
      wallProd1qty: qty,
      wallProd1sqft:
        this.state.wallProd1length * this.state.wallProd1width * qty,
    });
    this.context.updateWallProd1sqft(
      this.state.wallProd1length * this.state.wallProd1width * qty
    );
    return qty;
  }
  updateWallProd2qty(qty) {
    this.setState({
      wallProd2qty: qty,
      wallProd2sqft:
        this.state.wallProd2length * this.state.wallProd2width * qty,
    });
    this.context.updateWallProd2sqft(
      this.state.wallProd2length * this.state.wallProd2width * qty
    );
    return qty;
  }
  updateWallProd3qty(qty) {
    this.setState({
      wallProd3qty: qty,
      wallProd3sqft:
        this.state.wallProd3length * this.state.wallProd3width * qty,
    });
    this.context.updateWallProd3sqft(
      this.state.wallProd3length * this.state.wallProd3width * qty
    );
    return qty;
  }
  updateWallProd4qty(qty) {
    this.setState({
      wallProd4qty: qty,
      wallProd4sqft:
        this.state.wallProd4length * this.state.wallProd4width * qty,
    });
    this.context.updateWallProd4sqft(
      this.state.wallProd4length * this.state.wallProd4width * qty
    );
    return qty;
  }
  updateWallProd5qty(qty) {
    this.setState({
      wallProd5qty: qty,
      wallProd5sqft:
        this.state.wallProd5length * this.state.wallProd5width * qty,
    });
    this.context.updateWallProd5sqft(
      this.state.wallProd5length * this.state.wallProd5width * qty
    );
    return qty;
  }
  updateWallProd6qty(qty) {
    this.setState({
      wallProd6qty: qty,
      wallProd6sqft:
        this.state.wallProd6length * this.state.wallProd6width * qty,
    });
    this.context.updateWallProd6sqft(
      this.state.wallProd6length * this.state.wallProd6width * qty
    );
    return qty;
  }
  updateWallProd7qty(qty) {
    this.setState({
      wallProd7qty: qty,
      wallProd7sqft:
        this.state.wallProd7length * this.state.wallProd7width * qty,
    });
    this.context.updateWallProd7sqft(
      this.state.wallProd7length * this.state.wallProd7width * qty
    );
    return qty;
  }
  updateWallProd8qty(qty) {
    this.setState({
      wallProd8qty: qty,
      wallProd8sqft:
        this.state.wallProd8length * this.state.wallProd8width * qty,
    });
    this.context.updateWallProd8sqft(
      this.state.wallProd8length * this.state.wallProd8width * qty
    );
    return qty;
  }

  updateWallProd1sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        wallProd1sqft: sqft,
        wallProd1length: 0,
        wallProd1width: 0,
        wallProd1qty: 0,
      });
    }
    this.context.updateWallProd1sqft(sqft);
    return sqft;
  }
  updateWallProd2sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        wallProd2sqft: sqft,
        wallProd2length: 0,
        wallProd2width: 0,
        wallProd2qty: 0,
      });
    }
    this.context.updateWallProd2sqft(sqft);
    return sqft;
  }
  updateWallProd3sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        wallProd3sqft: sqft,
        wallProd3length: 0,
        wallProd3width: 0,
        wallProd3qty: 0,
      });
    }
    this.context.updateWallProd3sqft(sqft);
    return sqft;
  }
  updateWallProd4sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        wallProd4sqft: sqft,
        wallProd4length: 0,
        wallProd4width: 0,
        wallProd4qty: 0,
      });
    }
    this.context.updateWallProd4sqft(sqft);
    return sqft;
  }
  updateWallProd5sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        wallProd5sqft: sqft,
        wallProd5length: 0,
        wallProd5width: 0,
        wallProd5qty: 0,
      });
    }
    this.context.updateWallProd5sqft(sqft);
    return sqft;
  }
  updateWallProd6sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        wallProd6sqft: sqft,
        wallProd6length: 0,
        wallProd6width: 0,
        wallProd6qty: 0,
      });
    }
    this.context.updateWallProd6sqft(sqft);
    return sqft;
  }
  updateWallProd7sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        wallProd7sqft: sqft,
        wallProd7length: 0,
        wallProd7width: 0,
        wallProd7qty: 0,
      });
    }
    this.context.updateWallProd7sqft(sqft);
    return sqft;
  }
  updateWallProd8sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        wallProd8sqft: sqft,
        wallProd8length: 0,
        wallProd8width: 0,
        wallProd8qty: 0,
      });
    }
    this.context.updateWallProd8sqft(sqft);
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
    this.updateWallProd2sqft(0);
  };
  contract3 = (e) => {
    e.preventDefault();
    this.setState({ isOpen2: false, isOpen3: false });
    this.updateWallProd3sqft(0);
  };
  contract4 = (e) => {
    e.preventDefault();
    this.setState({ isOpen3: false, isOpen4: false });
    this.updateWallProd4sqft(0);
  };
  contract5 = (e) => {
    e.preventDefault();
    this.setState({ isOpen4: false, isOpen5: false });
    this.updateWallProd5sqft(0);
  };
  contract6 = (e) => {
    e.preventDefault();
    this.setState({ isOpen5: false, isOpen6: false });
    this.updateWallProd6sqft(0);
  };
  contract7 = (e) => {
    e.preventDefault();
    this.setState({ isOpen6: false, isOpen7: false });
    this.updateWallProd7sqft(0);
  };
  contract8 = (e) => {
    e.preventDefault();
    this.setState({ isOpen7: false, isOpen8: false });
    this.updateWallProd8sqft(0);
  };

  handleFocus = (event) => event.target.select();

  render() {
    let mats = this.context.wallProducts;

    let {
      wallProd1length,
      wallProd1width,
      wallProd1qty,
      wallProd1sqft,

      wallProd2length,
      wallProd2width,
      wallProd2qty,
      wallProd2sqft,

      wallProd3length,
      wallProd3width,
      wallProd3qty,
      wallProd3sqft,

      wallProd4length,
      wallProd4width,
      wallProd4qty,
      wallProd4sqft,

      wallProd5length,
      wallProd5width,
      wallProd5qty,
      wallProd5sqft,

      wallProd6length,
      wallProd6width,
      wallProd6qty,
      wallProd6sqft,

      wallProd7length,
      wallProd7width,
      wallProd7qty,
      wallProd7sqft,

      wallProd8length,
      wallProd8width,
      wallProd8qty,
      wallProd8sqft,
    } = this.state;

    return (
      <div className="row">
        {!!mats && (
          <div className="dropdown">
            <label className="col-md-3 col-form-label ">Wall Products</label>

            <div className="col-md-9">
              <div className="form-group">
                <select
                  className="lighter-border wallprods"
                  name="wallProdmats"
                  id="wallProdmats"
                  onClick={(e) => {
                    this.updateWallProd1Selection(e.currentTarget.value);
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
                    onFocus={(e) => {
                      this.handleFocus(e);
                    }}
                    className="shorter lighter-border"
                    type="text"
                    onChange={(e) => {
                      wallProd1length = this.updateWallProd1Length(
                        this.removeSpecialChars(e.currentTarget.value)
                      );
                    }}
                    id="WallProd1-length"
                    name="WallProd1"
                    value={wallProd1length}
                  ></input>

                  <label>W:</label>
                  <input
                    onFocus={(e) => {
                      this.handleFocus(e);
                    }}
                    className="shorter lighter-border"
                    type="text"
                    onChange={(e) => {
                      wallProd1width = this.updateWallProd1Width(
                        this.removeSpecialChars(e.currentTarget.value)
                      );
                    }}
                    id="wallProd1-width"
                    name="WallProd1"
                    value={wallProd1width}
                  ></input>

                  <label>QTY:</label>
                  <input
                    onFocus={(e) => {
                      this.handleFocus(e);
                    }}
                    className="short lighter-border"
                    type="number"
                    onChange={(e) => {
                      wallProd1qty = this.updateWallProd1qty(
                        this.removeSpecialChars(e.currentTarget.value)
                      );
                    }}
                    id="wallProd1-qty"
                    name="WallProd1"
                    value={wallProd1qty}
                  ></input>

                  <label>Sqft:</label>
                  <input
                    onFocus={(e) => {
                      this.handleFocus(e);
                    }}
                    className="short lighter-border"
                    type="number"
                    onChange={(e) => {
                      wallProd1sqft = this.updateWallProd1sqft(
                        this.removeSpecialChars(e.currentTarget.value),
                        true
                      );
                    }}
                    id="wallProd1-sqft"
                    name="WallProd1"
                    value={wallProd1sqft}
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
                      className="lighter-border wallprods"
                      name="wallProdmats"
                      id="wallProdmats"
                      onClick={(e) => {
                        this.updateWallProd2Selection(e.currentTarget.value);
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
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd2length = this.updateWallProd2Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="WallProd2-length"
                        name="WallProd2"
                        value={wallProd2length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd2width = this.updateWallProd2Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd2-width"
                        name="WallProd2"
                        value={wallProd2width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd2qty = this.updateWallProd2qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd2-qty"
                        name="WallProd2"
                        value={wallProd2qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd2sqft = this.updateWallProd2sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="wallProd2-sqft"
                        name="WallProd2"
                        value={wallProd2sqft}
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
                      className="lighter-border wallprods"
                      name="wallProdmats"
                      id="wallProdmats"
                      onClick={(e) => {
                        this.updateWallProd3Selection(e.currentTarget.value);
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
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd3length = this.updateWallProd3Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="WallProd3-length"
                        name="WallProd3"
                        value={wallProd3length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd3width = this.updateWallProd3Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd3-width"
                        name="WallProd3"
                        value={wallProd3width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd3qty = this.updateWallProd3qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd3-qty"
                        name="WallProd3"
                        value={wallProd3qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd3sqft = this.updateWallProd3sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="wallProd3-sqft"
                        name="WallProd3"
                        value={wallProd3sqft}
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
                      className="lighter-border wallprods"
                      name="wallProdmats"
                      id="wallProdmats"
                      onClick={(e) => {
                        this.updateWallProd4Selection(e.currentTarget.value);
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
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd4length = this.updateWallProd4Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="WallProd4-length"
                        name="WallProd4"
                        value={wallProd4length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd4width = this.updateWallProd4Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd4-width"
                        name="WallProd4"
                        value={wallProd4width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd4qty = this.updateWallProd4qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd4-qty"
                        name="WallProd4"
                        value={wallProd4qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd4sqft = this.updateWallProd4sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="wallProd4-sqft"
                        name="WallProd4"
                        value={wallProd4sqft}
                      ></input>
                    </div>
                  </div>
                </div>

                {!this.state.isOpen4 && (
                  <span>
                    <span className="expand-button">
                      <button className="expand-button" onClick={this.expand4}>
                        + Add Another
                      </button>
                    </span>

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

            {this.state.isOpen4 && (
              <span>
                <div className="col-md-9">
                  <div className="form-group">
                    <select
                      className="lighter-border wallprods"
                      name="wallProdmats"
                      id="wallProdmats"
                      onClick={(e) => {
                        this.updateWallProd5Selection(e.currentTarget.value);
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
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd5length = this.updateWallProd5Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="WallProd5-length"
                        name="WallProd5"
                        value={wallProd5length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd5width = this.updateWallProd5Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd5-width"
                        name="WallProd5"
                        value={wallProd5width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd5qty = this.updateWallProd5qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd5-qty"
                        name="WallProd5"
                        value={wallProd5qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd5sqft = this.updateWallProd5sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="wallProd5-sqft"
                        name="WallProd5"
                        value={wallProd5sqft}
                      ></input>
                    </div>
                  </div>
                </div>

                {!this.state.isOpen5 && (
                  <span>
                    <span className="expand-button">
                      <button className="expand-button" onClick={this.expand5}>
                        + Add Another
                      </button>
                    </span>

                    <span className="expand-button">
                      <button
                        className="expand-button"
                        onClick={this.contract5}
                      >
                        - Remove
                      </button>
                    </span>
                  </span>
                )}
              </span>
            )}

            {this.state.isOpen5 && (
              <span>
                <div className="col-md-9">
                  <div className="form-group">
                    <select
                      className="lighter-border wallprods"
                      name="wallProdmats"
                      id="wallProdmats"
                      onClick={(e) => {
                        this.updateWallProd6Selection(e.currentTarget.value);
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
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd6length = this.updateWallProd6Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="WallProd6-length"
                        name="WallProd6"
                        value={wallProd6length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd6width = this.updateWallProd6Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd6-width"
                        name="WallProd6"
                        value={wallProd6width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd6qty = this.updateWallProd6qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd6-qty"
                        name="WallProd6"
                        value={wallProd6qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd6sqft = this.updateWallProd6sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="wallProd6-sqft"
                        name="WallProd6"
                        value={wallProd6sqft}
                      ></input>
                    </div>
                  </div>
                </div>

                {!this.state.isOpen6 && (
                  <span>
                    <span className="expand-button">
                      <button className="expand-button" onClick={this.expand6}>
                        + Add Another
                      </button>
                    </span>

                    <span className="expand-button">
                      <button
                        className="expand-button"
                        onClick={this.contract6}
                      >
                        - Remove
                      </button>
                    </span>
                  </span>
                )}
              </span>
            )}

            {this.state.isOpen6 && (
              <span>
                <div className="col-md-9">
                  <div className="form-group">
                    <select
                      className="lighter-border wallprods"
                      name="wallProdmats"
                      id="wallProdmats"
                      onClick={(e) => {
                        this.updateWallProd7Selection(e.currentTarget.value);
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
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd7length = this.updateWallProd7Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="WallProd7-length"
                        name="WallProd7"
                        value={wallProd7length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd7width = this.updateWallProd7Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd7-width"
                        name="WallProd7"
                        value={wallProd7width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd7qty = this.updateWallProd7qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd7-qty"
                        name="WallProd7"
                        value={wallProd7qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd7sqft = this.updateWallProd7sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="wallProd7-sqft"
                        name="WallProd7"
                        value={wallProd7sqft}
                      ></input>
                    </div>
                  </div>
                </div>

                {!this.state.isOpen7 && (
                  <span>
                    <span className="expand-button">
                      <button className="expand-button" onClick={this.expand7}>
                        + Add Another
                      </button>
                    </span>

                    <span className="expand-button">
                      <button
                        className="expand-button"
                        onClick={this.contract7}
                      >
                        - Remove
                      </button>
                    </span>
                  </span>
                )}
              </span>
            )}

            {this.state.isOpen7 && (
              <span>
                <div className="col-md-9">
                  <div className="form-group">
                    <select
                      className="lighter-border wallprods"
                      name="wallProdmats"
                      id="wallProdmats"
                      onClick={(e) => {
                        this.updateWallProd8Selection(e.currentTarget.value);
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
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd8length = this.updateWallProd8Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="WallProd8-length"
                        name="WallProd8"
                        value={wallProd8length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          wallProd8width = this.updateWallProd8Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd8-width"
                        name="WallProd8"
                        value={wallProd8width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd8qty = this.updateWallProd8qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="wallProd8-qty"
                        name="WallProd8"
                        value={wallProd8qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          wallProd8sqft = this.updateWallProd8sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="wallProd8-sqft"
                        name="WallProd8"
                        value={wallProd8sqft}
                      ></input>
                    </div>
                  </div>
                </div>

                {!this.state.isOpen8 && (
                  <span>
                    <span className="expand-button">
                      <button
                        className="expand-button"
                        onClick={this.contract8}
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
