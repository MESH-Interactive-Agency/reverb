import ReverbContext from '../../contexts/ReverbContext';
import ApiContext from '../../contexts/ApiContext';
import React, { Component } from 'react';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

export default class BaffleUnitsSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = ApiContext;

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
      this.context.updateBaffleTotal(this.total);
    }
    this.prevTotal.nrc = this.total.nrc;
  }

  render() {
    const {
      baffleUnits,

      selectedBaffle1Unit,
      selectedBaffle2Unit,
      selectedBaffle3Unit,

      baffle1sqft,
      baffle2sqft,
      baffle3sqft,
    } = this.context;

    const mats = baffleUnits;

    return (
      <div className="">
        {!!mats && (
          <div>
            <table width="480px">
              <thead>
                <tr>
                  <th scope="col" className="bold left lead-cell">
                    Baffle Products
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
                {baffle1sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedBaffle1Unit].descript.substring(0, 18)}
                    </th>
                    <th className="right">{mats[selectedBaffle1Unit].hz125}</th>
                    <th className="right">{mats[selectedBaffle1Unit].hz250}</th>
                    <th className="right">{mats[selectedBaffle1Unit].hz500}</th>
                    <th className="right">
                      {mats[selectedBaffle1Unit].hz1000}
                    </th>
                    <th className="right">
                      {mats[selectedBaffle1Unit].hz2000}
                    </th>
                    <th className="right">
                      {mats[selectedBaffle1Unit].hz4000}
                    </th>
                    <th className="right">{mats[selectedBaffle1Unit].nrc}</th>
                  </tr>
                )}

                {baffle2sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedBaffle2Unit].descript.substring(0, 18)}
                    </th>
                    <th className="right">{mats[selectedBaffle2Unit].hz125}</th>
                    <th className="right">{mats[selectedBaffle2Unit].hz250}</th>
                    <th className="right">{mats[selectedBaffle2Unit].hz500}</th>
                    <th className="right">
                      {mats[selectedBaffle2Unit].hz1000}
                    </th>
                    <th className="right">
                      {mats[selectedBaffle2Unit].hz2000}
                    </th>
                    <th className="right">
                      {mats[selectedBaffle2Unit].hz4000}
                    </th>
                    <th className="right">{mats[selectedBaffle2Unit].nrc}</th>
                  </tr>
                )}

                {baffle3sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedBaffle3Unit].descript.substring(0, 18)}
                    </th>
                    <th className="right">{mats[selectedBaffle3Unit].hz125}</th>
                    <th className="right">{mats[selectedBaffle3Unit].hz250}</th>
                    <th className="right">{mats[selectedBaffle3Unit].hz500}</th>
                    <th className="right">
                      {mats[selectedBaffle3Unit].hz1000}
                    </th>
                    <th className="right">
                      {mats[selectedBaffle3Unit].hz2000}
                    </th>
                    <th className="right">
                      {mats[selectedBaffle3Unit].hz4000}
                    </th>
                    <th className="right">{mats[selectedBaffle3Unit].nrc}</th>
                  </tr>
                )}

                <tr>
                  <th className="bold left">Total Sabines: </th>
                  <th className="bold right">
                    {this.updateTotal125(
                      mats[selectedBaffle1Unit].hz125 * baffle1sqft +
                        mats[selectedBaffle2Unit].hz125 * baffle2sqft +
                        mats[selectedBaffle3Unit].hz125 * baffle3sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal250(
                      mats[selectedBaffle1Unit].hz250 * baffle1sqft +
                        mats[selectedBaffle2Unit].hz250 * baffle2sqft +
                        mats[selectedBaffle3Unit].hz250 * baffle3sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal500(
                      mats[selectedBaffle1Unit].hz500 * baffle1sqft +
                        mats[selectedBaffle2Unit].hz500 * baffle2sqft +
                        mats[selectedBaffle3Unit].hz500 * baffle3sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal1000(
                      mats[selectedBaffle1Unit].hz1000 * baffle1sqft +
                        mats[selectedBaffle2Unit].hz1000 * baffle2sqft +
                        mats[selectedBaffle3Unit].hz1000 * baffle3sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal2000(
                      mats[selectedBaffle1Unit].hz2000 * baffle1sqft +
                        mats[selectedBaffle2Unit].hz2000 * baffle2sqft +
                        mats[selectedBaffle3Unit].hz2000 * baffle3sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal4000(
                      mats[selectedBaffle1Unit].hz4000 * baffle1sqft +
                        mats[selectedBaffle2Unit].hz4000 * baffle2sqft +
                        mats[selectedBaffle3Unit].hz4000 * baffle3sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateNRC(
                      mats[selectedBaffle1Unit].nrc * baffle1sqft +
                        mats[selectedBaffle2Unit].nrc * baffle2sqft +
                        mats[selectedBaffle3Unit].nrc * baffle3sqft
                    )}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
