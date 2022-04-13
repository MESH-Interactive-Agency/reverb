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
              const { selectedWallProduct, wallProducts } = apiContext;
              const mats = wallProducts;
              const selected = selectedWallProduct;

              const { length, width, height } = reverbContext;
              const area = width * height * 4;
              return (
                <div className="">
                  {!!mats && (
                    <div>
                      <table width="480px">
                        <caption> 'Wall Products:</caption>

                        <thead>
                          <tr>
                            <th scope="col"></th>
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
