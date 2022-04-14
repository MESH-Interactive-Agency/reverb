import ReverbContext from '../../contexts/ReverbContext';
import ApiContext from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class WallMatsSummary extends Component {
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
              const { selectedWallMaterial, wallMaterials } = apiContext;
              const mats = wallMaterials;
              const selected = selectedWallMaterial;
              const { length, width, height } = reverbContext;
              const area = width * height * 2 + length * height * 2;
              return (
                <div className="">
                  {!!mats && (
                    <div>
                      <table width="480px">
                        <thead>
                          <tr>
                            <th scope="col" className="bold left lead-cell">
                              Wall Materials
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
                              {(mats[selected].hz125 * area).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(mats[selected].hz250 * area).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(mats[selected].hz500 * area).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(mats[selected].hz1000 * area).toFixed(2)}
                            </th>
                            <th className="bold right">
                              {(mats[selected].hz2000 * area).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(mats[selected].hz4000 * area).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(mats[selected].nrc * area).toFixed(1)}
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
