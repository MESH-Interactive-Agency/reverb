import ReverbContext from '../../contexts/ReverbContext';
import ApiContext from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class OtherMatsSummary extends Component {
  //static contextType = ApiContext;
  constructor(props) {
    super(props);
    this.state = {
      selectedOther1Material: 0,
    };
  }

  render() {
    return (
      <ReverbContext.Consumer>
        {(reverbContext) => (
          <ApiContext.Consumer>
            {(apiContext) => {
              const {
                otherMaterials,
                selectedOther1Material,
                selectedOther2Material,
                selectedOther3Material,
                selectedOther4Material,
                selectedOther5Material,
                selectedOther6Material,
                selectedOther7Material,
                selectedOther8Material,
                other1sqft,
                other2sqft,
                other3sqft,
                other4sqft,
                other5sqft,
                other6sqft,
                other7sqft,
                other8sqft,
              } = apiContext;

              const mats = otherMaterials;

              console.log(
                this.context.other1sqft,
                this.context.selectedOther1Material
              );

              return (
                <div className="">
                  {!!mats && (
                    <div>
                      <table width="480px">
                        <thead>
                          <tr>
                            <th scope="col" className="bold left lead-cell">
                              Other Materials
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
                              {mats[selectedOther1Material].descript.substring(
                                0,
                                18
                              )}
                            </th>
                            <th className="right">
                              {mats[selectedOther1Material].hz125}
                            </th>
                            <th className="right">
                              {mats[selectedOther1Material].hz250}
                            </th>
                            <th className="right">
                              {mats[selectedOther1Material].hz500}
                            </th>
                            <th className="right">
                              {mats[selectedOther1Material].hz1000}
                            </th>
                            <th className="right">
                              {mats[selectedOther1Material].hz2000}
                            </th>
                            <th className="right">
                              {mats[selectedOther1Material].hz4000}
                            </th>
                            <th className="right">
                              {mats[selectedOther1Material].nrc}
                            </th>
                          </tr>

                          <tr>
                            <th className="bold left">Total Sabines: </th>
                            <th className="bold right">
                              {(
                                mats[selectedOther1Material].hz125 * other1sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedOther1Material].hz250 * other1sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedOther1Material].hz500 * other1sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedOther1Material].hz1000 * other1sqft
                              ).toFixed(2)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedOther1Material].hz2000 * other1sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedOther1Material].hz4000 * other1sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedOther1Material].nrc * other1sqft
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
