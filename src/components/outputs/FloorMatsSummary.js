import ReverbContext from '../../contexts/ReverbContext';
import ApiContext from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class FloorMatsSummary extends Component {
  static contextType = ApiContext;
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  total = {
    hz125: 0,
    hz250: 0,
    hz500: 0,
    hz1000: 0,
    hz2000: 0,
    hz4000: 0,
    nrc: 0,
  };

  prevTotal = {
    hz125: 0,
    hz250: 0,
    hz500: 0,
    hz1000: 0,
    hz2000: 0,
    hz4000: 0,
    nrc: 0,
  };

  updateTotal125(tot) {
    const t = tot.toFixed(1);
    this.total.hz125 = t;
    return t;
  }

  updateTotal250(tot) {
    const t = tot.toFixed(1);
    this.total.hz250 = t;
    return t;
  }

  updateTotal500(tot) {
    const t = tot.toFixed(1);
    this.total.hz500 = t;
    return t;
  }

  updateTotal1000(tot) {
    const t = tot.toFixed(1);
    this.total.hz1000 = t;
    return t;
  }

  updateTotal2000(tot) {
    const t = tot.toFixed(1);
    this.total.hz2000 = t;
    return t;
  }

  updateTotal4000(tot) {
    const t = tot.toFixed(1);
    this.total.hz4000 = t;
    return t;
  }

  updateNRC(tot) {
    const t = tot.toFixed(1);
    this.total.nrc = t;
    return t;
  }

  componentDidUpdate() {
    if (this.prevTotal.nrc !== this.total.nrc) {
      this.context.updateFloorMatTotal(this.total);
    }
    this.prevTotal.nrc = this.total.nrc;
  }

  render() {
    return (
      <ReverbContext.Consumer>
        {(reverbContext) => (
          <ApiContext.Consumer>
            {(apiContext) => {
              const { selectedFloorMaterial, floorMaterials, length, width } =
                apiContext;
              const mats = floorMaterials;
              const selected = selectedFloorMaterial;
              const area = length * width;
              return (
                <div className="">
                  {!!mats && (
                    <div>
                      <table width="480px">
                        <thead>
                          <tr>
                            <th scope="col" className="bold left lead-cell">
                              Floor Material
                            </th>
                            <th scope="col" className="bold right">
                              125hz
                            </th>
                            <th scope="col" className="bold right">
                              250hz
                            </th>
                            <th scope="col" className="bold right">
                              500hz
                            </th>
                            <th scope="col" className="bold right">
                              1000hz
                            </th>
                            <th scope="col" className="bold right">
                              2000hz
                            </th>
                            <th scope="col" className="bold right">
                              4000hz
                            </th>
                            <th scope="col" className="bold right">
                              NRC
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className="left">
                              {mats[selected].descript.substring(0, 18)}
                            </th>
                            <th className="right">{mats[selected].hz125}</th>
                            <th className="right">{mats[selected].hz250}</th>
                            <th className="right">{mats[selected].hz500}</th>
                            <th className="right">{mats[selected].hz1000}</th>
                            <th className="right">{mats[selected].hz2000}</th>
                            <th className="right">{mats[selected].hz4000}</th>
                            <th className="right">{mats[selected].nrc}</th>
                          </tr>

                          <tr>
                            <th className="bold left">Total Sabines: </th>
                            <th className="bold right">
                              {this.updateTotal125(mats[selected].hz125 * area)}
                            </th>
                            <th className="bold right">
                              {this.updateTotal250(mats[selected].hz250 * area)}
                            </th>
                            <th className="bold right">
                              {this.updateTotal500(mats[selected].hz500 * area)}
                            </th>
                            <th className="bold right">
                              {this.updateTotal1000(
                                mats[selected].hz1000 * area
                              )}
                            </th>
                            <th className="bold right">
                              {this.updateTotal2000(
                                mats[selected].hz2000 * area
                              )}
                            </th>
                            <th className="bold right">
                              {this.updateTotal4000(
                                mats[selected].hz4000 * area
                              )}
                            </th>
                            <th className="bold right">
                              {this.updateNRC(mats[selected].nrc * area)}
                            </th>
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
