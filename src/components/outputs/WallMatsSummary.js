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
      <ApiContext.Consumer>
        {(apiContext) => {
          const {
            selectedWall1Material,
            selectedWall2Material,
            selectedWall3Material,
            selectedWall4Material,
            wallMaterials,
          } = apiContext;

          const mats = wallMaterials;

          const sel1 = selectedWall1Material;
          const sel2 = selectedWall2Material;
          const sel3 = selectedWall3Material;
          const sel4 = selectedWall4Material;

          const { wall1, wall2, wall3, wall4 } = apiContext;

          console.log(wall1);

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
                          {mats[sel1].descript.substring(0, 18)}
                        </th>
                        <th className="right">{mats[sel1].hz125}</th>
                        <th className="right">{mats[sel1].hz250}</th>
                        <th className="right">{mats[sel1].hz500}</th>
                        <th className="right">{mats[sel1].hz1000}</th>
                        <th className="right">{mats[sel1].hz2000}</th>
                        <th className="right">{mats[sel1].hz4000}</th>
                        <th className="right">{mats[sel1].nrc}</th>
                      </tr>
                      <tr>
                        <th className="left">
                          {mats[sel2].descript.substring(0, 18)}
                        </th>
                        <th className="right">{mats[sel2].hz125}</th>
                        <th className="right">{mats[sel2].hz250}</th>
                        <th className="right">{mats[sel2].hz500}</th>
                        <th className="right">{mats[sel2].hz1000}</th>
                        <th className="right">{mats[sel2].hz2000}</th>
                        <th className="right">{mats[sel2].hz4000}</th>
                        <th className="right">{mats[sel2].nrc}</th>
                      </tr>
                      <tr>
                        <th className="left">
                          {mats[sel3].descript.substring(0, 18)}
                        </th>
                        <th className="right">{mats[sel3].hz125}</th>
                        <th className="right">{mats[sel3].hz250}</th>
                        <th className="right">{mats[sel3].hz500}</th>
                        <th className="right">{mats[sel3].hz1000}</th>
                        <th className="right">{mats[sel3].hz2000}</th>
                        <th className="right">{mats[sel3].hz4000}</th>
                        <th className="right">{mats[sel3].nrc}</th>
                      </tr>
                      <tr>
                        <th className="left">
                          {mats[sel4].descript.substring(0, 18)}
                        </th>
                        <th className="right">{mats[sel4].hz125}</th>
                        <th className="right">{mats[sel4].hz250}</th>
                        <th className="right">{mats[sel4].hz500}</th>
                        <th className="right">{mats[sel4].hz1000}</th>
                        <th className="right">{mats[sel4].hz2000}</th>
                        <th className="right">{mats[sel4].hz4000}</th>
                        <th className="right">{mats[sel4].nrc}</th>
                      </tr>
                      <tr>
                        <th className="bold left">Total Sabines: </th>
                        <th className="bold right">
                          {(
                            mats[sel1].hz125 * wall1.l * wall1.h +
                            mats[sel2].hz125 * wall2.l * wall2.h +
                            mats[sel3].hz125 * wall3.l * wall3.h +
                            mats[sel4].hz125 * wall4.l * wall4.h
                          ).toFixed(1)}
                        </th>
                        <th className="bold right">
                          {(
                            mats[sel1].hz250 * wall1.l * wall1.h +
                            mats[sel2].hz250 * wall2.l * wall2.h +
                            mats[sel3].hz250 * wall3.l * wall3.h +
                            mats[sel4].hz250 * wall4.l * wall4.h
                          ).toFixed(1)}
                        </th>
                        <th className="bold right">
                          {(
                            mats[sel1].hz500 * wall1.l * wall1.h +
                            mats[sel2].hz500 * wall2.l * wall2.h +
                            mats[sel3].hz500 * wall3.l * wall3.h +
                            mats[sel4].hz500 * wall4.l * wall4.h
                          ).toFixed(1)}
                        </th>
                        <th className="bold right">
                          {(
                            mats[sel1].hz1000 * wall1.l * wall1.h +
                            mats[sel2].hz1000 * wall2.l * wall2.h +
                            mats[sel3].hz1000 * wall3.l * wall3.h +
                            mats[sel4].hz1000 * wall4.l * wall4.h
                          ).toFixed(1)}
                        </th>
                        <th className="bold right">
                          {(
                            mats[sel1].hz2000 * wall1.l * wall1.h +
                            mats[sel2].hz2000 * wall2.l * wall2.h +
                            mats[sel3].hz2000 * wall3.l * wall3.h +
                            mats[sel4].hz2000 * wall4.l * wall4.h
                          ).toFixed(1)}
                        </th>
                        <th className="bold right">
                          {(
                            mats[sel1].hz4000 * wall1.l * wall1.h +
                            mats[sel2].hz4000 * wall2.l * wall2.h +
                            mats[sel3].hz4000 * wall3.l * wall3.h +
                            mats[sel4].hz4000 * wall4.l * wall4.h
                          ).toFixed(1)}
                        </th>
                        <th className="bold right">
                          {(
                            mats[sel1].nrc * wall1.l * wall1.h +
                            mats[sel2].nrc * wall2.l * wall2.h +
                            mats[sel3].nrc * wall3.l * wall3.h +
                            mats[sel4].nrc * wall4.l * wall4.h
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
    );
  }
}
