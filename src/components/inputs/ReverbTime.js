import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class ReverbTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getRecommendedReverbTimes();
  }

  updateSelection(selection) {
    this.setState({ selected: selection - 1 });
    this.context.updateSelectedReverbTime(selection - 1);
  }

  render() {
    let mats = this.context.recommendedReverbTimes;
    let selected = this.state.selected;
    let value = 0;

    if (!!mats) value = (mats[selected].min - mats[selected].max) / 2;
    if (!!mats) console.log(mats, selected, mats[selected]);
    return (
      <div className="card rec-drop">
        {!!mats && (
          <div>
            <div className="card-header">
              <h4 className="card-title">Target Reverb Time:</h4>
              <div className="card-body">
                <form className="form-horizontal">
                  <div className="row>">
                    <label class="col-md-3 col-form-label">
                      Choose room type or enter value
                    </label>
                    <div class="col-md-9">
                      <div className="form-group">
                        <select
                          className="lighter-border"
                          name="reverbtime"
                          id="reverbtime"
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
                        <input
                          className="rec-reverb-input lighter-border"
                          value={value.toFixed(1)}
                        ></input>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
