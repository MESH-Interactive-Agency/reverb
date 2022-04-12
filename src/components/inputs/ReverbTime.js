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

    if (!!mats) console.log(mats, selected, mats[selected]);
    return (
      <div className="">
        {!!mats && (
          <div>
            <div className="dropdown">
              <label htmlFor="reverbtime " className="inputCaptions">
                Recommended Reverb Times:
              </label>
              <select
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

              <span>
                {' '}
                {mats[selected].min} - {mats[selected].max}{' '}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
