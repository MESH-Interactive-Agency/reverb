import ReverbContext from '../../contexts/ReverbContext';
import ApiContext from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class WallProdsSummary extends Component {
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
                wallProducts,
                selectedWall1Product,
                selectedWall2Product,
                selectedWall3Product,
                selectedWall4Product,
                selectedWall5Product,
                selectedWall6Product,
                selectedWall7Product,
                selectedWall8Product,
                wallProd1sqft,
                wallProd2sqft,
                wallProd3sqft,
                wallProd4sqft,
                wallProd5sqft,
                wallProd6sqft,
                wallProd7sqft,
                wallProd8sqft,
              } = apiContext;

              const mats = wallProducts;

              console.log(mats);

              return (
                <div className="">
                  {!!mats && (
                    <div>
                      <table width="480px">
                        <thead>
                          <tr>
                            <th scope="col" className="bold left lead-cell">
                              Wall Products
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
                          {wallProd1sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[selectedWall1Product].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedWall1Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedWall1Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedWall1Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedWall1Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedWall1Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedWall1Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedWall1Product].nrc}
                              </th>
                            </tr>
                          )}

                          {wallProd2sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[selectedWall2Product].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedWall2Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedWall2Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedWall2Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedWall2Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedWall2Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedWall2Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedWall2Product].nrc}
                              </th>
                            </tr>
                          )}

                          {wallProd3sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[selectedWall3Product].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedWall3Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedWall3Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedWall3Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedWall3Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedWall3Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedWall3Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedWall3Product].nrc}
                              </th>
                            </tr>
                          )}

                          {wallProd4sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[selectedWall4Product].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedWall4Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedWall4Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedWall4Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedWall4Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedWall4Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedWall4Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedWall4Product].nrc}
                              </th>
                            </tr>
                          )}

                          {wallProd5sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[selectedWall5Product].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedWall5Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedWall5Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedWall5Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedWall5Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedWall5Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedWall5Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedWall5Product].nrc}
                              </th>
                            </tr>
                          )}

                          {wallProd6sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[selectedWall6Product].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedWall6Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedWall6Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedWall6Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedWall6Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedWall6Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedWall6Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedWall6Product].nrc}
                              </th>
                            </tr>
                          )}

                          {wallProd7sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[selectedWall7Product].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedWall7Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedWall7Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedWall7Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedWall7Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedWall7Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedWall7Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedWall7Product].nrc}
                              </th>
                            </tr>
                          )}

                          {wallProd8sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[selectedWall8Product].descript.substring(
                                  0,
                                  18
                                )}
                              </th>
                              <th className="right">
                                {mats[selectedWall8Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedWall8Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedWall8Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedWall8Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedWall8Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedWall8Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedWall8Product].nrc}
                              </th>
                            </tr>
                          )}

                          <tr>
                            <th className="bold left">Total Sabines: </th>
                            <th className="bold right">
                              {(
                                mats[selectedWall1Product].hz125 * wallProd1sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedWall1Product].hz250 * wallProd1sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedWall1Product].hz500 * wallProd1sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedWall1Product].hz1000 *
                                wallProd1sqft
                              ).toFixed(2)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedWall1Product].hz2000 *
                                wallProd1sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedWall1Product].hz4000 *
                                wallProd1sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedWall1Product].nrc * wallProd1sqft
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
