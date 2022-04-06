import Context from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class OtherMatsSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }
  static contextType = Context;

  componentDidMount() {
    this.context.getOtherMaterials();
  }

  updateSelection(selection) {
    this.setState({ selected: selection - 1 });
  }

  render() {
    let mats = this.context.otherMaterials;
    let selected = this.state.selected;

    return (
      <div className="window">
        {!!mats && (
          <div>
            <div className="dropdown">
              <label htmlFor="othermats">Other material:</label>
              <select
                name="othermats"
                id="othermats"
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

            <table width="450px">
              <caption> 'Absorption Coefficient @ Frequency - Hz </caption>

              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">125hz</th>
                  <th scope="col">250hz</th>
                  <th scope="col">500hz</th>
                  <th scope="col">1000hz</th>
                  <th scope="col">2000hz</th>
                  <th scope="col">4000hz</th>
                  <th scope="col">NRC</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th> {mats[selected].id} </th>
                  <th> {mats[selected].hz125} </th>
                  <th> {mats[selected].hz250} </th>
                  <th> {mats[selected].hz500} </th>
                  <th> {mats[selected].hz1000} </th>
                  <th> {mats[selected].hz2000} </th>
                  <th> {mats[selected].hz4000} </th>
                  <th> {mats[selected].nrc} </th>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
