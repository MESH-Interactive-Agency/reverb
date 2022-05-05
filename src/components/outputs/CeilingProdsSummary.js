import ApiContext from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class CeilingProdsSummary extends Component {
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
      this.context.updateCeilingProdTotal(this.total);
    }
    this.prevTotal.nrc = this.total.nrc;
  }

  render() {
    const {
      ceilingProducts,
      selectedCeiling1Product,
      selectedCeiling2Product,
      selectedCeiling3Product,
      selectedCeiling4Product,

      ceilingProd1sqft,
      ceilingProd2sqft,
      ceilingProd3sqft,
      ceilingProd4sqft,
    } = this.context;

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
                {ceilingProd1sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedCeiling1Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{ceilingProd1sqft}</th>
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
                      {mats[selectedCeiling2Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{ceilingProd2sqft}</th>
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
                      {mats[selectedCeiling3Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{ceilingProd3sqft}</th>
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
                      {mats[selectedCeiling4Product].descript.substring(0, 18)}
                    </th>
                    <th className="right">{ceilingProd4sqft}</th>
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

                <tr>
                  <th className="bold left">Total Sabines: </th>
                  <th className="bold right">
                    {Number(ceilingProd1sqft) +
                      Number(ceilingProd2sqft) +
                      Number(ceilingProd3sqft) +
                      Number(ceilingProd4sqft)}
                  </th>
                  <th className="bold right">
                    {this.updateTotal125(
                      mats[selectedCeiling1Product].hz125 * ceilingProd1sqft +
                        mats[selectedCeiling2Product].hz125 * ceilingProd2sqft +
                        mats[selectedCeiling3Product].hz125 * ceilingProd3sqft +
                        mats[selectedCeiling4Product].hz125 * ceilingProd4sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal250(
                      mats[selectedCeiling1Product].hz250 * ceilingProd1sqft +
                        mats[selectedCeiling2Product].hz250 * ceilingProd2sqft +
                        mats[selectedCeiling3Product].hz250 * ceilingProd3sqft +
                        mats[selectedCeiling4Product].hz250 * ceilingProd4sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal500(
                      mats[selectedCeiling1Product].hz500 * ceilingProd1sqft +
                        mats[selectedCeiling2Product].hz500 * ceilingProd2sqft +
                        mats[selectedCeiling3Product].hz500 * ceilingProd3sqft +
                        mats[selectedCeiling4Product].hz500 * ceilingProd4sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal1000(
                      mats[selectedCeiling1Product].hz1000 * ceilingProd1sqft +
                        mats[selectedCeiling2Product].hz1000 *
                          ceilingProd2sqft +
                        mats[selectedCeiling3Product].hz1000 *
                          ceilingProd3sqft +
                        mats[selectedCeiling4Product].hz1000 * ceilingProd4sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal2000(
                      mats[selectedCeiling1Product].hz2000 * ceilingProd1sqft +
                        mats[selectedCeiling2Product].hz2000 *
                          ceilingProd2sqft +
                        mats[selectedCeiling3Product].hz2000 *
                          ceilingProd3sqft +
                        mats[selectedCeiling4Product].hz2000 * ceilingProd4sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal2000(
                      mats[selectedCeiling1Product].hz4000 * ceilingProd1sqft +
                        mats[selectedCeiling2Product].hz4000 *
                          ceilingProd2sqft +
                        mats[selectedCeiling3Product].hz4000 *
                          ceilingProd3sqft +
                        mats[selectedCeiling4Product].hz4000 * ceilingProd4sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateNRC(
                      mats[selectedCeiling1Product].nrc * ceilingProd1sqft +
                        mats[selectedCeiling2Product].nrc * ceilingProd2sqft +
                        mats[selectedCeiling3Product].nrc * ceilingProd3sqft +
                        mats[selectedCeiling4Product].nrc * ceilingProd4sqft
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
