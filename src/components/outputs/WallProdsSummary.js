import ApiContext from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class WallProdsSummary extends Component {
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
      this.context.updateWallProdTotal(this.total);
    }
    this.prevTotal.nrc = this.total.nrc;
  }

  render() {
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
    } = this.context;

    const mats = wallProducts;

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
                    Sqft
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
                      {mats[selectedWall1Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{wallProd1sqft}</th>
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
                    <th className="right">{mats[selectedWall1Product].nrc}</th>
                  </tr>
                )}

                {wallProd2sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedWall2Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{wallProd2sqft}</th>
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
                    <th className="right">{mats[selectedWall2Product].nrc}</th>
                  </tr>
                )}

                {wallProd3sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedWall3Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{wallProd3sqft}</th>
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
                    <th className="right">{mats[selectedWall3Product].nrc}</th>
                  </tr>
                )}

                {wallProd4sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedWall4Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{wallProd4sqft}</th>
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
                    <th className="right">{mats[selectedWall4Product].nrc}</th>
                  </tr>
                )}

                {wallProd5sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedWall5Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{wallProd5sqft}</th>
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
                    <th className="right">{mats[selectedWall5Product].nrc}</th>
                  </tr>
                )}

                {wallProd6sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedWall6Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{wallProd6sqft}</th>
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
                    <th className="right">{mats[selectedWall6Product].nrc}</th>
                  </tr>
                )}

                {wallProd7sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedWall7Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{wallProd7sqft}</th>
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
                    <th className="right">{mats[selectedWall7Product].nrc}</th>
                  </tr>
                )}

                {wallProd8sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedWall8Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{wallProd8sqft}</th>
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
                    <th className="right">{mats[selectedWall8Product].nrc}</th>
                  </tr>
                )}

                <tr>
                  <th className="bold left">Total Sabines: </th>
                  <th className="bold right">
                    {Number(wallProd1sqft) +
                      Number(wallProd2sqft) +
                      Number(wallProd3sqft) +
                      Number(wallProd5sqft) +
                      Number(wallProd6sqft) +
                      Number(wallProd7sqft) +
                      Number(wallProd8sqft)}
                  </th>
                  <th className="bold right">
                    {this.updateTotal125(
                      mats[selectedWall1Product].hz125 * wallProd1sqft +
                        mats[selectedWall2Product].hz125 * wallProd2sqft +
                        mats[selectedWall3Product].hz125 * wallProd3sqft +
                        mats[selectedWall4Product].hz125 * wallProd4sqft +
                        mats[selectedWall5Product].hz125 * wallProd5sqft +
                        mats[selectedWall6Product].hz125 * wallProd6sqft +
                        mats[selectedWall7Product].hz125 * wallProd7sqft +
                        mats[selectedWall8Product].hz125 * wallProd8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal250(
                      mats[selectedWall1Product].hz250 * wallProd1sqft +
                        mats[selectedWall2Product].hz250 * wallProd2sqft +
                        mats[selectedWall3Product].hz250 * wallProd3sqft +
                        mats[selectedWall4Product].hz250 * wallProd4sqft +
                        mats[selectedWall5Product].hz250 * wallProd5sqft +
                        mats[selectedWall6Product].hz250 * wallProd6sqft +
                        mats[selectedWall7Product].hz250 * wallProd7sqft +
                        mats[selectedWall8Product].hz250 * wallProd8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal500(
                      mats[selectedWall1Product].hz500 * wallProd1sqft +
                        mats[selectedWall2Product].hz500 * wallProd2sqft +
                        mats[selectedWall3Product].hz500 * wallProd3sqft +
                        mats[selectedWall4Product].hz500 * wallProd4sqft +
                        mats[selectedWall5Product].hz500 * wallProd5sqft +
                        mats[selectedWall6Product].hz500 * wallProd6sqft +
                        mats[selectedWall7Product].hz500 * wallProd7sqft +
                        mats[selectedWall8Product].hz500 * wallProd8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal1000(
                      mats[selectedWall1Product].hz1000 * wallProd1sqft +
                        mats[selectedWall2Product].hz1000 * wallProd2sqft +
                        mats[selectedWall3Product].hz1000 * wallProd3sqft +
                        mats[selectedWall4Product].hz1000 * wallProd4sqft +
                        mats[selectedWall5Product].hz1000 * wallProd5sqft +
                        mats[selectedWall6Product].hz1000 * wallProd6sqft +
                        mats[selectedWall7Product].hz1000 * wallProd7sqft +
                        mats[selectedWall8Product].hz1000 * wallProd8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal2000(
                      mats[selectedWall1Product].hz2000 * wallProd1sqft +
                        mats[selectedWall2Product].hz2000 * wallProd2sqft +
                        mats[selectedWall3Product].hz2000 * wallProd3sqft +
                        mats[selectedWall4Product].hz2000 * wallProd4sqft +
                        mats[selectedWall5Product].hz2000 * wallProd5sqft +
                        mats[selectedWall6Product].hz2000 * wallProd6sqft +
                        mats[selectedWall7Product].hz2000 * wallProd7sqft +
                        mats[selectedWall8Product].hz2000 * wallProd8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal4000(
                      mats[selectedWall1Product].hz4000 * wallProd1sqft +
                        mats[selectedWall2Product].hz4000 * wallProd2sqft +
                        mats[selectedWall3Product].hz4000 * wallProd3sqft +
                        mats[selectedWall4Product].hz4000 * wallProd4sqft +
                        mats[selectedWall5Product].hz4000 * wallProd5sqft +
                        mats[selectedWall6Product].hz4000 * wallProd6sqft +
                        mats[selectedWall7Product].hz4000 * wallProd7sqft +
                        mats[selectedWall8Product].hz4000 * wallProd8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateNRC(
                      mats[selectedWall1Product].nrc * wallProd1sqft +
                        mats[selectedWall2Product].nrc * wallProd2sqft +
                        mats[selectedWall3Product].nrc * wallProd3sqft +
                        mats[selectedWall4Product].nrc * wallProd4sqft +
                        mats[selectedWall5Product].nrc * wallProd5sqft +
                        mats[selectedWall6Product].nrc * wallProd6sqft +
                        mats[selectedWall7Product].nrc * wallProd7sqft +
                        mats[selectedWall8Product].nrc * wallProd8sqft
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
