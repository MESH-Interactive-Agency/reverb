import ReverbContext from '../../contexts/ReverbContext';
import ApiContext from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class CeilingProdsSummary extends Component {
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
                ceilingProducts,
                selectedCeiling1Product,
                selectedCeiling2Product,
                selectedCeiling3Product,
                selectedCeiling4Product,
                selectedCeiling5Product,
                selectedCeiling6Product,
                selectedCeiling7Product,
                selectedCeiling8Product,
                ceilingProd1sqft,
                ceilingProd2sqft,
                ceilingProd3sqft,
                ceilingProd4sqft,
                ceilingProd5sqft,
                ceilingProd6sqft,
                ceilingProd7sqft,
                ceilingProd8sqft,
              } = apiContext;

              const mats = ceilingProducts;

              return (
                <div className="">
                  {!!mats && (
                    <div>
                      <table width="480px">
                        <thead>
                          <tr>
                            <th scope="col" className="bold left lead-cell">
                              Ceiling Products
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
                          {ceilingProd1sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[
                                  selectedCeiling1Product
                                ].descript.substring(0, 18)}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling1Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling1Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling1Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling1Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling1Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling1Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling1Product].nrc}
                              </th>
                            </tr>
                          )}

                          {ceilingProd2sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[
                                  selectedCeiling2Product
                                ].descript.substring(0, 18)}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling2Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling2Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling2Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling2Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling2Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling2Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling2Product].nrc}
                              </th>
                            </tr>
                          )}

                          {ceilingProd3sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[
                                  selectedCeiling3Product
                                ].descript.substring(0, 18)}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling3Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling3Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling3Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling3Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling3Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling3Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling3Product].nrc}
                              </th>
                            </tr>
                          )}

                          {ceilingProd4sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[
                                  selectedCeiling4Product
                                ].descript.substring(0, 18)}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling4Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling4Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling4Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling4Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling4Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling4Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling4Product].nrc}
                              </th>
                            </tr>
                          )}

                          {ceilingProd5sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[
                                  selectedCeiling5Product
                                ].descript.substring(0, 18)}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling5Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling5Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling5Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling5Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling5Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling5Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling5Product].nrc}
                              </th>
                            </tr>
                          )}

                          {ceilingProd6sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[
                                  selectedCeiling6Product
                                ].descript.substring(0, 18)}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling6Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling6Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling6Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling6Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling6Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling6Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling6Product].nrc}
                              </th>
                            </tr>
                          )}

                          {ceilingProd7sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[
                                  selectedCeiling7Product
                                ].descript.substring(0, 18)}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling7Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling7Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling7Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling7Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling7Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling7Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling7Product].nrc}
                              </th>
                            </tr>
                          )}

                          {ceilingProd8sqft > 0 && (
                            <tr>
                              <th className="left">
                                {mats[
                                  selectedCeiling8Product
                                ].descript.substring(0, 18)}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling8Product].hz125}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling8Product].hz250}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling8Product].hz500}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling8Product].hz1000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling8Product].hz2000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling8Product].hz4000}
                              </th>
                              <th className="right">
                                {mats[selectedCeiling8Product].nrc}
                              </th>
                            </tr>
                          )}

                          <tr>
                            <th className="bold left">Total Sabines: </th>
                            <th className="bold right">
                              {(
                                mats[selectedCeiling1Product].hz125 *
                                  ceilingProd1sqft +
                                mats[selectedCeiling2Product].hz125 *
                                  ceilingProd2sqft +
                                mats[selectedCeiling3Product].hz125 *
                                  ceilingProd3sqft +
                                mats[selectedCeiling4Product].hz125 *
                                  ceilingProd4sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedCeiling1Product].hz250 *
                                  ceilingProd1sqft +
                                mats[selectedCeiling2Product].hz250 *
                                  ceilingProd2sqft +
                                mats[selectedCeiling3Product].hz250 *
                                  ceilingProd3sqft +
                                mats[selectedCeiling4Product].hz250 *
                                  ceilingProd4sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedCeiling1Product].hz500 *
                                  ceilingProd1sqft +
                                mats[selectedCeiling2Product].hz500 *
                                  ceilingProd2sqft +
                                mats[selectedCeiling3Product].hz500 *
                                  ceilingProd3sqft +
                                mats[selectedCeiling4Product].hz500 *
                                  ceilingProd4sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedCeiling1Product].hz1000 *
                                  ceilingProd1sqft +
                                mats[selectedCeiling2Product].hz1000 *
                                  ceilingProd2sqft +
                                mats[selectedCeiling3Product].hz1000 *
                                  ceilingProd3sqft +
                                mats[selectedCeiling4Product].hz1000 *
                                  ceilingProd4sqft
                              ).toFixed(2)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedCeiling1Product].hz2000 *
                                  ceilingProd1sqft +
                                mats[selectedCeiling2Product].hz2000 *
                                  ceilingProd2sqft +
                                mats[selectedCeiling3Product].hz2000 *
                                  ceilingProd3sqft +
                                mats[selectedCeiling4Product].hz2000 *
                                  ceilingProd4sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedCeiling1Product].hz4000 *
                                  ceilingProd1sqft +
                                mats[selectedCeiling2Product].hz4000 *
                                  ceilingProd2sqft +
                                mats[selectedCeiling3Product].hz4000 *
                                  ceilingProd3sqft +
                                mats[selectedCeiling4Product].hz4000 *
                                  ceilingProd4sqft
                              ).toFixed(1)}
                            </th>
                            <th className="bold right">
                              {(
                                mats[selectedCeiling1Product].nrc *
                                  ceilingProd1sqft +
                                mats[selectedCeiling2Product].nrc *
                                  ceilingProd2sqft +
                                mats[selectedCeiling3Product].nrc *
                                  ceilingProd3sqft +
                                mats[selectedCeiling4Product].nrc *
                                  ceilingProd4sqft
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
