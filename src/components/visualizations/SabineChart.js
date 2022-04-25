import React, { Component } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import ApiContext from '../../contexts/ApiContext';

/*
      updateFloorMatTotal: this.updateFloorMatTotal,
      updateCeilingMatTotal: this.updateCeilingMatTotal,
      updateWallMatTotal: this.updateWallMatTotal,
      updateOtherMatTotal: this.updateOtherMatTotal,
      updateCeilingProdTotal: this.updateCeilingProdTotal,
      updateWallProdTotal: this.updateWallProdTotal,
      updateBaffleTotal: this.updateBaffleTotal,

      floorMatTotal: this.state.floorMatTotal,
      ceilingMatTotal: this.state.ceilingMatTotal,
      wallMatTotal: this.state.wallMatTotal,
      otherMatTotal: this.state.otherMatTotal,
      ceilingProdTotal: this.state.ceilingProdTotal,
      wallProdTotal: this.state.wallProdTotal,
      baffleTotal: this.state.baffleTotal,
*/

export default class SabineChart extends Component {
  calculateOpeningsArea = () => {
    let door1 = this.context.door1;
    let door2 = this.context.door2;
    let window1 = this.context.window1;
    let window2 = this.context.window2;
    let opening1 = this.context.opening1;
    let opening2 = this.context.opening2;
    let other = this.context.other;

    return (
      door1.l * door1.w * door1.qty +
      door2.l * door2.w * door2.qty +
      window1.l * window1.w * window1.qty +
      window2.l * window2.w * window2.qty +
      opening1.l * opening1.w * opening1.qty +
      opening2.l * opening2.w * opening2.qty +
      other.l * other.w * other.qty
    );
  };

  calculateCeilingArea = () => {
    return this.context.cLength * this.context.cWidth;
  };

  calculateFloorArea = () => {
    return this.context.length * this.context.width;
  };

  calculateTotalSurfaceArea = () => {
    return (
      this.calculateCeilingArea() +
      this.calculateFloorArea() +
      this.calculateWallArea() -
      this.calculateOpeningsArea()
    );
  };

  render() {
    let sabines = {};
    let treatment = {};
    let rec = 0;
    return (
      <ApiContext.Consumer>
        {(apiContext) => {
          const { length, width, height, wall1, wall2, wall3, wall4 } =
            apiContext;

          const wall1Area = wall1.l * wall1.h;
          const wall2Area = wall2.l * wall2.h;
          const wall3Area = wall3.l * wall3.h;
          const wall4Area = wall4.l * wall4.h;

          const wallArea = wall1Area + wall2Area + wall3Area + wall4Area;

          const floorArea = length * width;

          const volume = length * width * height * 0.049;

          const {
            selectedFloorMaterial,
            floorMaterials,
            selectedCeilingMaterial,
            ceilingMaterials,
            selectedWall1Material,
            selectedWall2Material,
            selectedWall3Material,
            selectedWall4Material,
            wallMaterials,
            selectedOtherMaterial,
            otherMaterials,
            recommendedReverbTimes,
            selectedReverbTime,
            ceilingProducts,
            selectedCeilingProduct,
            wallProducts,
            selectedWallProduct,
            baffleUnits,
            selectedBaffleUnit,
          } = apiContext;

          if (
            !!floorMaterials &&
            !!ceilingMaterials &&
            !!wallMaterials &&
            !!otherMaterials &&
            !!ceilingProducts &&
            !!wallProducts &&
            !!baffleUnits &&
            !!recommendedReverbTimes
          ) {
            sabines = {
              hz125:
                volume /
                (floorMaterials[selectedFloorMaterial].hz125 * floorArea +
                  ceilingMaterials[selectedCeilingMaterial].hz125 * floorArea +
                  wallMaterials[selectedWall1Material].hz125 * wall1Area +
                  wallMaterials[selectedWall2Material].hz125 * wall2Area +
                  wallMaterials[selectedWall3Material].hz125 * wall3Area +
                  wallMaterials[selectedWall4Material].hz125 * wall4Area +
                  otherMaterials[selectedOtherMaterial].hz125),

              hz250:
                volume /
                (floorMaterials[selectedFloorMaterial].hz250 * floorArea +
                  ceilingMaterials[selectedCeilingMaterial].hz250 * floorArea +
                  wallMaterials[selectedWall1Material].hz250 * wall1Area +
                  wallMaterials[selectedWall2Material].hz250 * wall2Area +
                  wallMaterials[selectedWall3Material].hz250 * wall3Area +
                  wallMaterials[selectedWall4Material].hz250 * wall4Area +
                  otherMaterials[selectedOtherMaterial].hz250),

              hz500:
                volume /
                (floorMaterials[selectedFloorMaterial].hz500 * floorArea +
                  ceilingMaterials[selectedCeilingMaterial].hz500 * floorArea +
                  wallMaterials[selectedWall1Material].hz500 * wall1Area +
                  wallMaterials[selectedWall2Material].hz500 * wall2Area +
                  wallMaterials[selectedWall3Material].hz500 * wall3Area +
                  wallMaterials[selectedWall4Material].hz500 * wall4Area +
                  otherMaterials[selectedOtherMaterial].hz500),

              hz1000:
                volume /
                (floorMaterials[selectedFloorMaterial].hz1000 * floorArea +
                  ceilingMaterials[selectedCeilingMaterial].hz1000 * floorArea +
                  wallMaterials[selectedWall1Material].hz1000 * wall1Area +
                  wallMaterials[selectedWall2Material].hz1000 * wall2Area +
                  wallMaterials[selectedWall3Material].hz1000 * wall3Area +
                  wallMaterials[selectedWall4Material].hz1000 * wall4Area +
                  otherMaterials[selectedOtherMaterial].hz1000),

              hz2000:
                volume /
                (floorMaterials[selectedFloorMaterial].hz2000 * floorArea +
                  ceilingMaterials[selectedCeilingMaterial].hz2000 * floorArea +
                  wallMaterials[selectedWall1Material].hz2000 * wall1Area +
                  wallMaterials[selectedWall2Material].hz2000 * wall2Area +
                  wallMaterials[selectedWall3Material].hz2000 * wall3Area +
                  wallMaterials[selectedWall4Material].hz2000 * wall4Area +
                  otherMaterials[selectedOtherMaterial].hz2000),

              hz4000:
                volume /
                (floorMaterials[selectedFloorMaterial].hz4000 * floorArea +
                  ceilingMaterials[selectedCeilingMaterial].hz4000 * floorArea +
                  wallMaterials[selectedWall1Material].hz4000 * wall1Area +
                  wallMaterials[selectedWall2Material].hz4000 * wall2Area +
                  wallMaterials[selectedWall3Material].hz4000 * wall3Area +
                  wallMaterials[selectedWall4Material].hz4000 * wall4Area +
                  otherMaterials[selectedOtherMaterial].hz4000),
            };

            rec = volume / selectedReverbTime;

            treatment = {
              hz125:
                volume /
                (ceilingProducts[selectedCeilingProduct].hz125 * floorArea +
                  wallProducts[selectedWallProduct].hz125 * wallArea +
                  baffleUnits[selectedBaffleUnit].hz125 +
                  (floorMaterials[selectedFloorMaterial].hz125 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz125 *
                      floorArea +
                    wallMaterials[selectedWall1Material].hz125 * wall1Area +
                    wallMaterials[selectedWall2Material].hz125 * wall2Area +
                    wallMaterials[selectedWall3Material].hz125 * wall3Area +
                    wallMaterials[selectedWall4Material].hz125 * wall4Area +
                    otherMaterials[selectedOtherMaterial].hz125)),

              hz250:
                volume /
                (ceilingProducts[selectedCeilingProduct].hz250 * floorArea +
                  wallProducts[selectedWallProduct].hz250 * wallArea +
                  baffleUnits[selectedBaffleUnit].hz250 +
                  (floorMaterials[selectedFloorMaterial].hz250 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz250 *
                      floorArea +
                    wallMaterials[selectedWall1Material].hz250 * wall1Area +
                    wallMaterials[selectedWall2Material].hz250 * wall2Area +
                    wallMaterials[selectedWall3Material].hz250 * wall3Area +
                    wallMaterials[selectedWall4Material].hz250 * wall4Area +
                    otherMaterials[selectedOtherMaterial].hz250)),

              hz500:
                volume /
                (ceilingProducts[selectedCeilingProduct].hz500 * floorArea +
                  wallProducts[selectedWallProduct].hz500 * wallArea +
                  baffleUnits[selectedBaffleUnit].hz500 +
                  (floorMaterials[selectedFloorMaterial].hz500 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz500 *
                      floorArea +
                    wallMaterials[selectedWall1Material].hz500 * wall1Area +
                    wallMaterials[selectedWall2Material].hz500 * wall2Area +
                    wallMaterials[selectedWall3Material].hz500 * wall3Area +
                    wallMaterials[selectedWall4Material].hz500 * wall4Area +
                    otherMaterials[selectedOtherMaterial].hz500)),

              hz1000:
                volume /
                (ceilingProducts[selectedCeilingProduct].hz1000 * floorArea +
                  wallProducts[selectedWallProduct].hz1000 * wallArea +
                  baffleUnits[selectedBaffleUnit].hz1000 +
                  (floorMaterials[selectedFloorMaterial].hz1000 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz1000 *
                      floorArea +
                    wallMaterials[selectedWall1Material].hz1000 * wall1Area +
                    wallMaterials[selectedWall2Material].hz1000 * wall2Area +
                    wallMaterials[selectedWall3Material].hz1000 * wall3Area +
                    wallMaterials[selectedWall4Material].hz1000 * wall4Area +
                    otherMaterials[selectedOtherMaterial].hz1000)),

              hz2000:
                volume /
                (ceilingProducts[selectedCeilingProduct].hz2000 * floorArea +
                  wallProducts[selectedWallProduct].hz2000 * wallArea +
                  baffleUnits[selectedBaffleUnit].hz2000 +
                  (floorMaterials[selectedFloorMaterial].hz2000 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz2000 *
                      floorArea +
                    wallMaterials[selectedWall1Material].hz2000 * wall1Area +
                    wallMaterials[selectedWall2Material].hz2000 * wall2Area +
                    wallMaterials[selectedWall3Material].hz2000 * wall3Area +
                    wallMaterials[selectedWall4Material].hz2000 * wall4Area +
                    otherMaterials[selectedOtherMaterial].hz2000)),

              hz4000:
                volume /
                (ceilingProducts[selectedCeilingProduct].hz4000 * floorArea +
                  wallProducts[selectedWallProduct].hz4000 * wallArea +
                  baffleUnits[selectedBaffleUnit].hz4000 +
                  floorMaterials[selectedFloorMaterial].hz4000 * floorArea +
                  ceilingMaterials[selectedCeilingMaterial].hz4000 * floorArea +
                  wallMaterials[selectedWall1Material].hz4000 * wall1Area +
                  wallMaterials[selectedWall2Material].hz4000 * wall2Area +
                  wallMaterials[selectedWall3Material].hz4000 * wall3Area +
                  wallMaterials[selectedWall4Material].hz4000 * wall4Area +
                  otherMaterials[selectedOtherMaterial].hz4000),
            };
          }

          const data = [
            {
              name: '125',
              altv: treatment.hz125,
              uv: sabines.hz125,
              recommended: volume / (rec * 0.492),
            },
            {
              name: '250',
              altv: treatment.hz250,
              uv: sabines.hz250,
              recommended: volume / (rec * 0.594),
            },
            {
              name: '500',
              altv: treatment.hz500,
              uv: sabines.hz500,
              recommended: volume / (rec * 1.188),
            },
            {
              name: '1000',
              altv: treatment.hz1000,
              uv: sabines.hz1000,
              recommended: volume / (rec * 1.391),
            },
            {
              name: '2000',
              altv: treatment.hz2000,
              uv: sabines.hz2000,
              recommended: volume / (rec * 1.594),
            },
            {
              name: '4000',
              altv: treatment.hz4000,
              uv: sabines.hz4000,
              recommended: volume / (rec * 1.797),
            },
          ];

          return (
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="numbers pull-left">Total Sabines</div>
                  </div>
                  <div className="col-sm-5">
                    <div className="pull-right">
                      {/* <span className="badge badge-pill badge-success">
                            Avg Reverb Time - 0.5
                          </span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h6 className="big-title">
                  <span className="green">Existing Conditions</span> /{' '}
                  <span className="orange">With Treatment</span> /{' '}
                  <span className="grey">Target</span>
                </h6>
                <ResponsiveContainer height={180}>
                  <LineChart data={data}>
                    <XAxis
                      dataKey="name"
                      height={20}
                      tick={{ fontSize: 8 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      width={22}
                      tick={{ fontSize: 10 }}
                      domain={[0, 3.5]}
                      axisLine={false}
                      tickLine={false}
                    />
                    dot={false}
                    <Line
                      dot={false}
                      dataKey="uv"
                      stroke="#7f9e23"
                      strokeWidth={3}
                    />
                    <Line
                      dot={false}
                      dataKey="altv"
                      stroke="#de6d35"
                      strokeWidth={3}
                    />
                    <Line
                      type="monotone"
                      dataKey="recommended"
                      strokeWidth={5}
                      stroke="#22222222"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        }}
      </ApiContext.Consumer>
    );
  }
}
