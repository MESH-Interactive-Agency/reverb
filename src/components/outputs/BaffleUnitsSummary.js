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
              const {
                baffleUnits,

                selectedBaffle1Unit,
                selectedBaffle2Unit,
                selectedBaffle3Unit,

                baffle1sqft,
                baffle2sqft,
                baffle3sqft,
              } = apiContext;

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
                                {mats[selectedBaffle1Unit].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle1Unit].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle1Unit].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle1Unit].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle1Unit].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle1Unit].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle1Unit].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle1Unit].nrc}
                              </th>
                            </tr>
                          )}

                          {baffle2sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[selectedBaffle2Unit].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle2Unit].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle2Unit].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle2Unit].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle2Unit].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle2Unit].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle2Unit].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle2Unit].nrc}
                              </th>
                            </tr>
                          )}

                          {baffle3sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[selectedBaffle3Unit].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle3Unit].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle3Unit].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle3Unit].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle3Unit].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle3Unit].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle3Unit].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedBaffle3Unit].nrc}
                              </th>
                            </tr>
                          )}

                          <tr>
                            <th className="bold left">Total Sabines: </th>
                            <th className="bold right">
                              {(
                                mats[selectedBaffle1Unit].hz125 * baffle1sqft +
                                mats[selectedBaffle2Unit].hz125 * baffle2sqft +
                                mats[selectedBaffle3Unit].hz125 * baffle3sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedBaffle1Unit].hz250 * baffle1sqft +
                                mats[selectedBaffle2Unit].hz250 * baffle2sqft +
                                mats[selectedBaffle3Unit].hz250 * baffle3sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedBaffle1Unit].hz500 * baffle1sqft +
                                mats[selectedBaffle2Unit].hz500 * baffle2sqft +
                                mats[selectedBaffle3Unit].hz500 * baffle3sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedBaffle1Unit].hz1000 * baffle1sqft +
                                mats[selectedBaffle2Unit].hz1000 * baffle2sqft +
                                mats[selectedBaffle3Unit].hz1000 * baffle3sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedBaffle1Unit].hz2000 * baffle1sqft +
                                mats[selectedBaffle2Unit].hz2000 * baffle2sqft +
                                mats[selectedBaffle3Unit].hz2000 * baffle3sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedBaffle1Unit].hz4000 * baffle1sqft +
                                mats[selectedBaffle2Unit].hz4000 * baffle2sqft +
                                mats[selectedBaffle3Unit].hz4000 * baffle3sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedBaffle1Unit].nrc * baffle1sqft +
                                mats[selectedBaffle2Unit].nrc * baffle2sqft +
                                mats[selectedBaffle3Unit].nrc * baffle3sqft
                              ).toFixed(1)}
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
