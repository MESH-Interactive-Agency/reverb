import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class OtherMatsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      other1: 0,
      other2: 0,
      other3: 0,
      other4: 0,
      other5: 0,
      other6: 0,
      other7: 0,
      other8: 0,

      other1sqft: 0,
      other2sqft: 0,
      other3sqft: 0,
      other4sqft: 0,
      other5sqft: 0,
      other6sqft: 0,
      other7sqft: 0,
      other8sqft: 0,

      other1length: 0,
      other2length: 0,
      other3length: 0,
      other4length: 0,
      other5length: 0,
      other6length: 0,
      other7length: 0,
      other8length: 0,

      other1width: 0,
      other2width: 0,
      other3width: 0,
      other4width: 0,
      other5width: 0,
      other6width: 0,
      other7width: 0,
      other8width: 0,

      other1qty: 0,
      other2qty: 0,
      other3qty: 0,
      other4qty: 0,
      other5qty: 0,
      other6qty: 0,
      other7qty: 0,
      other8qty: 0,

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
    this.context.getOtherMaterials();
  }

  updateOther1Selection(selection) {
    this.setState({ other1: selection - 1 });
    this.context.updateSelectedOther1Material(selection - 1);
  }
  updateOther2Selection(selection) {
    this.setState({ other2: selection - 1 });
    this.context.updateSelectedOther2Material(selection - 1);
  }
  updateOther3Selection(selection) {
    this.setState({ other3: selection - 1 });
    this.context.updateSelectedOther3Material(selection - 1);
  }
  updateOther4Selection(selection) {
    this.setState({ other4: selection - 1 });
    this.context.updateSelectedOther4Material(selection - 1);
  }
  updateOther5Selection(selection) {
    this.setState({ other5: selection - 1 });
    this.context.updateSelectedOther5Material(selection - 1);
  }
  updateOther6Selection(selection) {
    this.setState({ other6: selection - 1 });
    this.context.updateSelectedOther6Material(selection - 1);
  }
  updateOther7Selection(selection) {
    this.setState({ other7: selection - 1 });
    this.context.updateSelectedOther7Material(selection - 1);
  }
  updateOther8Selection(selection) {
    this.setState({ other8: selection - 1 });
    this.context.updateSelectedOther8Material(selection - 1);
  }

  updateOther1Length(l) {
    if (l < 0) l = 0;
    this.setState({
      other1length: l,
      other1sqft: this.state.other1width * this.state.other1qty * l,
    });
    this.context.updateOther1sqft(
      this.state.other1width * this.state.other1qty * l
    );
    return l;
  }
  updateOther2Length(l) {
    if (l < 0) l = 0;
    this.setState({
      other2length: l,
      other2sqft: this.state.other2width * this.state.other2qty * l,
    });
    this.context.updateOther2sqft(
      this.state.other2width * this.state.other2qty * l
    );
    return l;
  }
  updateOther3Length(l) {
    if (l < 0) l = 0;
    this.setState({
      other3length: l,
      other3sqft: this.state.other3width * this.state.other3qty * l,
    });
    this.context.updateOther3sqft(
      this.state.other3width * this.state.other3qty * l
    );
    return l;
  }
  updateOther4Length(l) {
    if (l < 0) l = 0;
    this.setState({
      other4length: l,
      other4sqft: this.state.other4width * this.state.other4qty * l,
    });
    this.context.updateOther4sqft(
      this.state.other4width * this.state.other4qty * l
    );
    return l;
  }
  updateOther5Length(l) {
    if (l < 0) l = 0;
    this.setState({
      other5length: l,
      other5sqft: this.state.other5width * this.state.other5qty * l,
    });
    this.context.updateOther5sqft(
      this.state.other5width * this.state.other5qty * l
    );
    return l;
  }
  updateOther6Length(l) {
    if (l < 0) l = 0;
    this.setState({
      other6length: l,
      other6sqft: this.state.other6width * this.state.other6qty * l,
    });
    this.context.updateOther6sqft(
      this.state.other6width * this.state.other6qty * l
    );
    return l;
  }
  updateOther7Length(l) {
    if (l < 0) l = 0;
    this.setState({
      other7length: l,
      other7sqft: this.state.other7width * this.state.other7qty * l,
    });
    this.context.updateOther7sqft(
      this.state.other7width * this.state.other7qty * l
    );
    return l;
  }
  updateOther8Length(l) {
    if (l < 0) l = 0;
    this.setState({
      other8length: l,
      other8sqft: this.state.other8width * this.state.other8qty * l,
    });
    this.context.updateOther8sqft(
      this.state.other8width * this.state.other8qty * l
    );
    return l;
  }

  updateOther1Width(w) {
    if (w < 0) w = 0;
    this.setState({
      other1width: w,
      other1sqft: this.state.other1length * this.state.other1qty * w,
    });
    this.context.updateOther1sqft(
      this.state.other1length * this.state.other1qty * w
    );
    return w;
  }
  updateOther2Width(w) {
    if (w < 0) w = 0;
    this.setState({
      other2width: w,
      other2sqft: this.state.other2length * this.state.other2qty * w,
    });
    this.context.updateOther2sqft(
      this.state.other2length * this.state.other2qty * w
    );
    return w;
  }
  updateOther3Width(w) {
    if (w < 0) w = 0;
    this.setState({
      other3width: w,
      other3sqft: this.state.other3length * this.state.other3qty * w,
    });
    this.context.updateOther3sqft(
      this.state.other3length * this.state.other3qty * w
    );
    return w;
  }
  updateOther4Width(w) {
    if (w < 0) w = 0;
    this.setState({
      other4width: w,
      other4sqft: this.state.other4length * this.state.other4qty * w,
    });
    this.context.updateOther4sqft(
      this.state.other4length * this.state.other4qty * w
    );
    return w;
  }
  updateOther5Width(w) {
    if (w < 0) w = 0;
    this.setState({
      other5width: w,
      other5sqft: this.state.other5length * this.state.other5qty * w,
    });
    this.context.updateOther5sqft(
      this.state.other5length * this.state.other5qty * w
    );
    return w;
  }
  updateOther6Width(w) {
    if (w < 0) w = 0;
    this.setState({
      other6width: w,
      other6sqft: this.state.other6length * this.state.other6qty * w,
    });
    this.context.updateOther6sqft(
      this.state.other6length * this.state.other6qty * w
    );
    return w;
  }
  updateOther7Width(w) {
    if (w < 0) w = 0;
    this.setState({
      other7width: w,
      other7sqft: this.state.other7length * this.state.other7qty * w,
    });
    this.context.updateOther7sqft(
      this.state.other7length * this.state.other7qty * w
    );
    return w;
  }
  updateOther8Width(w) {
    if (w < 0) w = 0;
    this.setState({
      other8width: w,
      other8sqft: this.state.other8length * this.state.other8qty * w,
    });
    this.context.updateOther8sqft(
      this.state.other8length * this.state.other8qty * w
    );
    return w;
  }

  updateOther1qty(qty) {
    if (qty < 0) qty = 0;
    this.setState({
      other1qty: qty,
      other1sqft: this.state.other1length * this.state.other1width * qty,
    });
    this.context.updateOther1sqft(
      this.state.other1length * this.state.other1width * qty
    );
    return qty;
  }
  updateOther2qty(qty) {
    if (qty < 0) qty = 0;
    this.setState({
      other2qty: qty,
      other2sqft: this.state.other2length * this.state.other2width * qty,
    });
    this.context.updateOther2sqft(
      this.state.other2length * this.state.other2width * qty
    );
    return qty;
  }
  updateOther3qty(qty) {
    if (qty < 0) qty = 0;
    this.setState({
      other3qty: qty,
      other3sqft: this.state.other3length * this.state.other3width * qty,
    });
    this.context.updateOther3sqft(
      this.state.other3length * this.state.other3width * qty
    );
    return qty;
  }
  updateOther4qty(qty) {
    if (qty < 0) qty = 0;
    this.setState({
      other4qty: qty,
      other4sqft: this.state.other4length * this.state.other4width * qty,
    });
    this.context.updateOther4sqft(
      this.state.other4length * this.state.other4width * qty
    );
    return qty;
  }
  updateOther5qty(qty) {
    if (qty < 0) qty = 0;
    this.setState({
      other5qty: qty,
      other5sqft: this.state.other5length * this.state.other5width * qty,
    });
    this.context.updateOther5sqft(
      this.state.other5length * this.state.other5width * qty
    );
    return qty;
  }
  updateOther6qty(qty) {
    if (qty < 0) qty = 0;
    this.setState({
      other6qty: qty,
      other6sqft: this.state.other6length * this.state.other6width * qty,
    });
    this.context.updateOther6sqft(
      this.state.other6length * this.state.other6width * qty
    );
    return qty;
  }
  updateOther7qty(qty) {
    if (qty < 0) qty = 0;
    this.setState({
      other7qty: qty,
      other7sqft: this.state.other7length * this.state.other7width * qty,
    });
    this.context.updateOther7sqft(
      this.state.other7length * this.state.other7width * qty
    );
    return qty;
  }
  updateOther8qty(qty) {
    if (qty < 0) qty = 0;
    this.setState({
      other8qty: qty,
      other8sqft: this.state.other8length * this.state.other8width * qty,
    });
    this.context.updateOther8sqft(
      this.state.other8length * this.state.other8width * qty
    );
    return qty;
  }

  updateOther1sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        other1sqft: sqft,
        other1length: 0,
        other1width: 0,
        other1qty: 0,
      });
    }
    this.context.updateOther1sqft(sqft);
    return sqft;
  }
  updateOther2sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        other2sqft: sqft,
        other2length: 0,
        other2width: 0,
        other2qty: 0,
      });
    }
    this.context.updateOther2sqft(sqft);
    return sqft;
  }
  updateOther3sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        other3sqft: sqft,
        other3length: 0,
        other3width: 0,
        other3qty: 0,
      });
    }
    this.context.updateOther3sqft(sqft);
    return sqft;
  }
  updateOther4sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        other4sqft: sqft,
        other4length: 0,
        other4width: 0,
        other4qty: 0,
      });
    }
    this.context.updateOther4sqft(sqft);
    return sqft;
  }
  updateOther5sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        other5sqft: sqft,
        other5length: 0,
        other5width: 0,
        other5qty: 0,
      });
    }
    this.context.updateOther5sqft(sqft);
    return sqft;
  }
  updateOther6sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        other6sqft: sqft,
        other6length: 0,
        other6width: 0,
        other6qty: 0,
      });
    }
    this.context.updateOther6sqft(sqft);
    return sqft;
  }
  updateOther7sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        other7sqft: sqft,
        other7length: 0,
        other7width: 0,
        other7qty: 0,
      });
    }
    this.context.updateOther7sqft(sqft);
    return sqft;
  }
  updateOther8sqft(sqft, clear = false) {
    if (clear) {
      this.setState({
        other8sqft: sqft,
        other8length: 0,
        other8width: 0,
        other8qty: 0,
      });
    }
    this.context.updateOther8sqft(sqft);
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
    this.updateOther2sqft(0);
  };
  contract3 = (e) => {
    e.preventDefault();
    this.setState({ isOpen2: false, isOpen3: false });
    this.updateOther3sqft(0);
  };
  contract4 = (e) => {
    e.preventDefault();
    this.setState({ isOpen3: false, isOpen4: false });
    this.updateOther4sqft(0);
  };
  contract5 = (e) => {
    e.preventDefault();
    this.setState({ isOpen4: false, isOpen5: false });
    this.updateOther5sqft(0);
  };
  contract6 = (e) => {
    e.preventDefault();
    this.setState({ isOpen5: false, isOpen6: false });
    this.updateOther6sqft(0);
  };
  contract7 = (e) => {
    e.preventDefault();
    this.setState({ isOpen6: false, isOpen7: false });
    this.updateOther7sqft(0);
  };
  contract8 = (e) => {
    e.preventDefault();
    this.setState({ isOpen7: false, isOpen8: false });
    this.updateOther8sqft(0);
  };

  handleFocus = (event) => event.target.select();

  render() {
    let mats = this.context.otherMaterials;

    let {
      other1length,
      other1width,
      other1qty,
      other1sqft,

      other2length,
      other2width,
      other2qty,
      other2sqft,

      other3length,
      other3width,
      other3qty,
      other3sqft,

      other4length,
      other4width,
      other4qty,
      other4sqft,

      other5length,
      other5width,
      other5qty,
      other5sqft,

      other6length,
      other6width,
      other6qty,
      other6sqft,

      other7length,
      other7width,
      other7qty,
      other7sqft,

      other8length,
      other8width,
      other8qty,
      other8sqft,
    } = this.state;

    return (
      <div className="row">
        {!!mats && (
          <div className="dropdown">
            <label className="col-md-3 col-form-label ">
              Doors, Window or Other Materials:
            </label>

            <div className="col-md-9">
              <div className="form-group">
                <select
                  className="lighter-border othermats"
                  name="othermats"
                  id="othermats"
                  onClick={(e) => {
                    this.updateOther1Selection(e.currentTarget.value);
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
                      other1length = this.updateOther1Length(
                        this.removeSpecialChars(e.currentTarget.value)
                      );
                    }}
                    id="Other1-length"
                    name="Other1"
                    value={other1length}
                  ></input>

                  <label>W:</label>
                  <input
                    onFocus={(e) => {
                      this.handleFocus(e);
                    }}
                    className="shorter lighter-border"
                    type="text"
                    onChange={(e) => {
                      other1width = this.updateOther1Width(
                        this.removeSpecialChars(e.currentTarget.value)
                      );
                    }}
                    id="other1-width"
                    name="Other1"
                    value={other1width}
                  ></input>

                  <label>QTY:</label>
                  <input
                    onFocus={(e) => {
                      this.handleFocus(e);
                    }}
                    className="short lighter-border"
                    type="number"
                    onChange={(e) => {
                      other1qty = this.updateOther1qty(
                        this.removeSpecialChars(e.currentTarget.value)
                      );
                    }}
                    id="other1-qty"
                    name="Other1"
                    value={other1qty}
                  ></input>

                  <label>Sqft:</label>
                  <input
                    onFocus={(e) => {
                      this.handleFocus(e);
                    }}
                    className="short lighter-border"
                    type="number"
                    onChange={(e) => {
                      other1sqft = this.updateOther1sqft(
                        this.removeSpecialChars(e.currentTarget.value),
                        true
                      );
                    }}
                    id="other1-sqft"
                    name="Other1"
                    value={other1sqft}
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
                      className="lighter-border othermats"
                      name="othermats"
                      id="othermats"
                      onClick={(e) => {
                        this.updateOther2Selection(e.currentTarget.value);
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
                          other2length = this.updateOther2Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="Other2-length"
                        name="Other2"
                        value={other2length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          other2width = this.updateOther2Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other2-width"
                        name="Other2"
                        value={other2width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other2qty = this.updateOther2qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other2-qty"
                        name="Other2"
                        value={other2qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other2sqft = this.updateOther2sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="other2-sqft"
                        name="Other2"
                        value={other2sqft}
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
                      className="lighter-border othermats"
                      name="othermats"
                      id="othermats"
                      onClick={(e) => {
                        this.updateOther3Selection(e.currentTarget.value);
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
                          other3length = this.updateOther3Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="Other3-length"
                        name="Other3"
                        value={other3length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          other3width = this.updateOther3Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other3-width"
                        name="Other3"
                        value={other3width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other3qty = this.updateOther3qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other3-qty"
                        name="Other3"
                        value={other3qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other3sqft = this.updateOther3sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="other3-sqft"
                        name="Other3"
                        value={other3sqft}
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
                      className="lighter-border othermats"
                      name="othermats"
                      id="othermats"
                      onClick={(e) => {
                        this.updateOther4Selection(e.currentTarget.value);
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
                          other4length = this.updateOther4Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="Other4-length"
                        name="Other4"
                        value={other4length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          other4width = this.updateOther4Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other4-width"
                        name="Other4"
                        value={other4width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other4qty = this.updateOther4qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other4-qty"
                        name="Other4"
                        value={other4qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other4sqft = this.updateOther4sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="other4-sqft"
                        name="Other4"
                        value={other4sqft}
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
                      className="lighter-border othermats"
                      name="othermats"
                      id="othermats"
                      onClick={(e) => {
                        this.updateOther5Selection(e.currentTarget.value);
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
                          other5length = this.updateOther5Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="Other5-length"
                        name="Other5"
                        value={other5length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          other5width = this.updateOther5Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other5-width"
                        name="Other5"
                        value={other5width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other5qty = this.updateOther5qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other5-qty"
                        name="Other5"
                        value={other5qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other5sqft = this.updateOther5sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="other5-sqft"
                        name="Other5"
                        value={other5sqft}
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
                      className="lighter-border othermats"
                      name="othermats"
                      id="othermats"
                      onClick={(e) => {
                        this.updateOther6Selection(e.currentTarget.value);
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
                          other6length = this.updateOther6Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="Other6-length"
                        name="Other6"
                        value={other6length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          other6width = this.updateOther6Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other6-width"
                        name="Other6"
                        value={other6width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other6qty = this.updateOther6qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other6-qty"
                        name="Other6"
                        value={other6qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other6sqft = this.updateOther6sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="other6-sqft"
                        name="Other6"
                        value={other6sqft}
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
                      className="lighter-border othermats"
                      name="othermats"
                      id="othermats"
                      onClick={(e) => {
                        this.updateOther7Selection(e.currentTarget.value);
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
                          other7length = this.updateOther7Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="Other7-length"
                        name="Other7"
                        value={other7length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          other7width = this.updateOther7Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other7-width"
                        name="Other7"
                        value={other7width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other7qty = this.updateOther7qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other7-qty"
                        name="Other7"
                        value={other7qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other7sqft = this.updateOther7sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="other7-sqft"
                        name="Other7"
                        value={other7sqft}
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
                      className="lighter-border othermats"
                      name="othermats"
                      id="othermats"
                      onClick={(e) => {
                        this.updateOther8Selection(e.currentTarget.value);
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
                          other8length = this.updateOther8Length(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="Other8-length"
                        name="Other8"
                        value={other8length}
                      ></input>

                      <label>W:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="shorter lighter-border"
                        type="text"
                        onChange={(e) => {
                          other8width = this.updateOther8Width(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other8-width"
                        name="Other8"
                        value={other8width}
                      ></input>

                      <label>QTY:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other8qty = this.updateOther8qty(
                            this.removeSpecialChars(e.currentTarget.value)
                          );
                        }}
                        id="other8-qty"
                        name="Other8"
                        value={other8qty}
                      ></input>

                      <label>Sqft:</label>
                      <input
                        onFocus={(e) => {
                          this.handleFocus(e);
                        }}
                        className="short lighter-border"
                        type="number"
                        onChange={(e) => {
                          other8sqft = this.updateOther8sqft(
                            this.removeSpecialChars(e.currentTarget.value),
                            true
                          );
                        }}
                        id="other8-sqft"
                        name="Other8"
                        value={other8sqft}
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
