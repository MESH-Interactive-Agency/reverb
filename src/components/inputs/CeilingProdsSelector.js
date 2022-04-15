import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class CeilingProdsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getCeilingProducts();
  }

  updateSelection(selection) {
    this.setState({ selected: selection });
    this.context.updateSelectedCeilingProduct(selection - 1);
  }

  render() {
    let mats = this.context.ceilingProducts;
    return (
      <div className="row">
        {!!mats && (
          <div className="dropdown">
            <label className="col-md-3 col-form-label ">
              Ceiling Products:
            </label>

            <div className="col-md-9">
              <div className="form-group">
                <select
                  className="lighter-border"
                  name="ceilingprods"
                  id="ceilingprods"
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
