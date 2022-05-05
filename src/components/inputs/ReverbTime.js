import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';
import { ValidatePosNum } from '../../utils/lib';

export default class ReverbTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      avg: 0,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getRecommendedReverbTimes();
  }

  updateAvg(avg) {
    this.setState({
      avg: avg,
      selected: 0,
    });

    this.context.updateSelectedReverbTime(avg);
    return avg;
  }

  updateSelection(selection) {
    let value = 0;

    let mats = this.context.recommendedReverbTimes;

    if (!!mats) value = (mats[selection - 1].min + mats[selection - 1].max) / 2;

    this.setState({
      selected: selection - 1,
      avg: value,
      min: mats[selection].min,
      max: mats[selection].max,
    });

    this.context.updateSelectedReverbTime(value);
  }

  handleFocus = (event) => event.target.select();

  render() {
    let mats = this.context.recommendedReverbTimes;

    let avg = this.state.avg;

    return (
      <div className="card rec-drop">
        {!!mats && (
          <div>
            <div className="card-header">
              <h4 className="card-title">Target Reverb Time:</h4>
              <div className="card-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="form-horizontal"
                >
                  <div className="row>">
                    <label className="col-md-3 col-form-label">
                      Choose room type or enter value:
                      <span className="red-text">*</span>
                    </label>
                    <div className="col-md-9">
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
                          onFocus={(e) => {
                            this.handleFocus(e);
                          }}
                          onChange={(e) => {
                            avg = this.updateAvg(
                              ValidatePosNum(e.currentTarget.value)
                            );
                          }}
                          className="rec-reverb-input lighter-border"
                          value={avg}
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
