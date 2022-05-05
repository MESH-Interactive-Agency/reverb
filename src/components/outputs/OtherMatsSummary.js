import ApiContext from '../../contexts/ApiContext';
import React, { Component } from 'react';

export default class OtherMatsSummary extends Component {
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

  static contextType = ApiContext;

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
      this.context.updateOtherMatTotal(this.total);
    }
    this.prevTotal.nrc = this.total.nrc;
  }

  render() {
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
    } = this.context;

    const mats = otherMaterials;

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
                {other1sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedOther1Material].descript.substring(0, 18)}
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
                )}

                {other2sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedOther2Material].descript.substring(0, 18)}
                    </th>
                    <th className="right">
                      {mats[selectedOther2Material].hz125}
                    </th>
                    <th className="right">
                      {mats[selectedOther2Material].hz250}
                    </th>
                    <th className="right">
                      {mats[selectedOther2Material].hz500}
                    </th>
                    <th className="right">
                      {mats[selectedOther2Material].hz1000}
                    </th>
                    <th className="right">
                      {mats[selectedOther2Material].hz2000}
                    </th>
                    <th className="right">
                      {mats[selectedOther2Material].hz4000}
                    </th>
                    <th className="right">
                      {mats[selectedOther2Material].nrc}
                    </th>
                  </tr>
                )}

                {other3sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedOther3Material].descript.substring(0, 18)}
                    </th>
                    <th className="right">
                      {mats[selectedOther3Material].hz125}
                    </th>
                    <th className="right">
                      {mats[selectedOther3Material].hz250}
                    </th>
                    <th className="right">
                      {mats[selectedOther3Material].hz500}
                    </th>
                    <th className="right">
                      {mats[selectedOther3Material].hz1000}
                    </th>
                    <th className="right">
                      {mats[selectedOther3Material].hz2000}
                    </th>
                    <th className="right">
                      {mats[selectedOther3Material].hz4000}
                    </th>
                    <th className="right">
                      {mats[selectedOther3Material].nrc}
                    </th>
                  </tr>
                )}

                {other4sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedOther4Material].descript.substring(0, 18)}
                    </th>
                    <th className="right">
                      {mats[selectedOther4Material].hz125}
                    </th>
                    <th className="right">
                      {mats[selectedOther4Material].hz250}
                    </th>
                    <th className="right">
                      {mats[selectedOther4Material].hz500}
                    </th>
                    <th className="right">
                      {mats[selectedOther4Material].hz1000}
                    </th>
                    <th className="right">
                      {mats[selectedOther4Material].hz2000}
                    </th>
                    <th className="right">
                      {mats[selectedOther4Material].hz4000}
                    </th>
                    <th className="right">
                      {mats[selectedOther4Material].nrc}
                    </th>
                  </tr>
                )}

                {other5sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedOther5Material].descript.substring(0, 18)}
                    </th>
                    <th className="right">
                      {mats[selectedOther5Material].hz125}
                    </th>
                    <th className="right">
                      {mats[selectedOther5Material].hz250}
                    </th>
                    <th className="right">
                      {mats[selectedOther5Material].hz500}
                    </th>
                    <th className="right">
                      {mats[selectedOther5Material].hz1000}
                    </th>
                    <th className="right">
                      {mats[selectedOther5Material].hz2000}
                    </th>
                    <th className="right">
                      {mats[selectedOther5Material].hz4000}
                    </th>
                    <th className="right">
                      {mats[selectedOther5Material].nrc}
                    </th>
                  </tr>
                )}

                {other6sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedOther6Material].descript.substring(0, 18)}
                    </th>
                    <th className="right">
                      {mats[selectedOther6Material].hz125}
                    </th>
                    <th className="right">
                      {mats[selectedOther6Material].hz250}
                    </th>
                    <th className="right">
                      {mats[selectedOther6Material].hz500}
                    </th>
                    <th className="right">
                      {mats[selectedOther6Material].hz1000}
                    </th>
                    <th className="right">
                      {mats[selectedOther6Material].hz2000}
                    </th>
                    <th className="right">
                      {mats[selectedOther6Material].hz4000}
                    </th>
                    <th className="right">
                      {mats[selectedOther6Material].nrc}
                    </th>
                  </tr>
                )}

                {other7sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedOther7Material].descript.substring(0, 18)}
                    </th>
                    <th className="right">
                      {mats[selectedOther7Material].hz125}
                    </th>
                    <th className="right">
                      {mats[selectedOther7Material].hz250}
                    </th>
                    <th className="right">
                      {mats[selectedOther7Material].hz500}
                    </th>
                    <th className="right">
                      {mats[selectedOther7Material].hz1000}
                    </th>
                    <th className="right">
                      {mats[selectedOther7Material].hz2000}
                    </th>
                    <th className="right">
                      {mats[selectedOther7Material].hz4000}
                    </th>
                    <th className="right">
                      {mats[selectedOther7Material].nrc}
                    </th>
                  </tr>
                )}

                {other8sqft > 0 && (
                  <tr>
                    <th className="left">
                      {mats[selectedOther8Material].descript.substring(0, 18)}
                    </th>
                    <th className="right">
                      {mats[selectedOther8Material].hz125}
                    </th>
                    <th className="right">
                      {mats[selectedOther8Material].hz250}
                    </th>
                    <th className="right">
                      {mats[selectedOther8Material].hz500}
                    </th>
                    <th className="right">
                      {mats[selectedOther8Material].hz1000}
                    </th>
                    <th className="right">
                      {mats[selectedOther8Material].hz2000}
                    </th>
                    <th className="right">
                      {mats[selectedOther8Material].hz4000}
                    </th>
                    <th className="right">
                      {mats[selectedOther8Material].nrc}
                    </th>
                  </tr>
                )}

                <tr>
                  <th className="bold left">Total Sabines: </th>
                  <th className="bold right">
                    {this.updateTotal125(
                      mats[selectedOther1Material].hz125 * other1sqft +
                        mats[selectedOther2Material].hz125 * other2sqft +
                        mats[selectedOther3Material].hz125 * other3sqft +
                        mats[selectedOther4Material].hz125 * other4sqft +
                        mats[selectedOther5Material].hz125 * other5sqft +
                        mats[selectedOther6Material].hz125 * other6sqft +
                        mats[selectedOther7Material].hz125 * other7sqft +
                        mats[selectedOther8Material].hz125 * other8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal250(
                      mats[selectedOther1Material].hz250 * other1sqft +
                        mats[selectedOther2Material].hz250 * other2sqft +
                        mats[selectedOther3Material].hz250 * other3sqft +
                        mats[selectedOther4Material].hz250 * other4sqft +
                        mats[selectedOther5Material].hz250 * other5sqft +
                        mats[selectedOther6Material].hz250 * other6sqft +
                        mats[selectedOther7Material].hz250 * other7sqft +
                        mats[selectedOther8Material].hz250 * other8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal500(
                      mats[selectedOther1Material].hz500 * other1sqft +
                        mats[selectedOther2Material].hz500 * other2sqft +
                        mats[selectedOther3Material].hz500 * other3sqft +
                        mats[selectedOther4Material].hz500 * other4sqft +
                        mats[selectedOther5Material].hz500 * other5sqft +
                        mats[selectedOther6Material].hz500 * other6sqft +
                        mats[selectedOther7Material].hz500 * other7sqft +
                        mats[selectedOther8Material].hz500 * other8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal1000(
                      mats[selectedOther1Material].hz1000 * other1sqft +
                        mats[selectedOther2Material].hz1000 * other2sqft +
                        mats[selectedOther3Material].hz1000 * other3sqft +
                        mats[selectedOther4Material].hz1000 * other4sqft +
                        mats[selectedOther5Material].hz1000 * other5sqft +
                        mats[selectedOther6Material].hz1000 * other6sqft +
                        mats[selectedOther7Material].hz1000 * other7sqft +
                        mats[selectedOther8Material].hz1000 * other8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal2000(
                      mats[selectedOther1Material].hz2000 * other1sqft +
                        mats[selectedOther2Material].hz2000 * other2sqft +
                        mats[selectedOther3Material].hz2000 * other3sqft +
                        mats[selectedOther4Material].hz2000 * other4sqft +
                        mats[selectedOther5Material].hz2000 * other5sqft +
                        mats[selectedOther6Material].hz2000 * other6sqft +
                        mats[selectedOther7Material].hz2000 * other7sqft +
                        mats[selectedOther8Material].hz2000 * other8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateTotal4000(
                      mats[selectedOther1Material].hz4000 * other1sqft +
                        mats[selectedOther2Material].hz4000 * other2sqft +
                        mats[selectedOther3Material].hz4000 * other3sqft +
                        mats[selectedOther4Material].hz4000 * other4sqft +
                        mats[selectedOther5Material].hz4000 * other5sqft +
                        mats[selectedOther6Material].hz4000 * other6sqft +
                        mats[selectedOther7Material].hz4000 * other7sqft +
                        mats[selectedOther8Material].hz4000 * other8sqft
                    )}
                  </th>
                  <th className="bold right">
                    {this.updateNRC(
                      mats[selectedOther1Material].nrc * other1sqft +
                        mats[selectedOther2Material].nrc * other2sqft +
                        mats[selectedOther3Material].nrc * other3sqft +
                        mats[selectedOther4Material].nrc * other4sqft +
                        mats[selectedOther5Material].nrc * other5sqft +
                        mats[selectedOther6Material].nrc * other6sqft +
                        mats[selectedOther7Material].nrc * other7sqft +
                        mats[selectedOther8Material].nrc * other8sqft
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
