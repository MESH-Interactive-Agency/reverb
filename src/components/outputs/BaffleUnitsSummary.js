import ReverbContext from '../../contexts/ReverbContext';
import ApiContext from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class BaffleUnitsSummary extends Component {
  //static contextType = ApiContext;
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  render() {
    return (
      <ReverbContext.Consumer>
        {(reverbContext) => (
          <ApiContext.Consumer>
            {(apiContext) => {
              const { selectedBaffleUnit, baffleUnits } = apiContext;
              const mats = baffleUnits;
              const selected = selectedBaffleUnit;
              const { length, width } = reverbContext;
              const area = length * width;
              return (
                <div className="">
                  {!!mats && (
                    <div>
                      <table width="480px">
                        <caption> 'Baffle Units:</caption>



                        <tbody>
                          <tr>
                            <th>{mats[selected].descript.substring(0, 16)}</th>
                            <th>{mats[selected].hz125}</th>
                            <th>{mats[selected].hz250}</th>
                            <th>{mats[selected].hz500}</th>
                            <th>{mats[selected].hz1000}</th>
                            <th>{mats[selected].hz2000}</th>
                            <th>{mats[selected].hz4000}</th>
                            <th>{mats[selected].nrc}</th>
                          </tr>

                          <tr>
                            <th className="bold">Total Sabines: </th>
                            <th>{(mats[selected].hz125 * area).toFixed(1)}</th>
                            <th>{(mats[selected].hz250 * area).toFixed(1)}</th>
                            <th>{(mats[selected].hz500 * area).toFixed(1)}</th>
                            <th>{(mats[selected].hz1000 * area).toFixed(2)}</th>
                            <th>{(mats[selected].hz2000 * area).toFixed(1)}</th>
                            <th>{(mats[selected].hz4000 * area).toFixed(1)}</th>
                            <th>{(mats[selected].nrc * area).toFixed(1)}</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            }}
          </ApiContext.Consumer>
        )}
      </ReverbContext.Consumer>
    );
  }
}
