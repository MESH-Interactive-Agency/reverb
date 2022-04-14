import React, { Component } from 'react';
import {
  BarChart,
  LineChart,
  Line,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

import ReverbContext from '../../contexts/ReverbContext';
import ApiContext from '../../contexts/ApiContext';
import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';

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
    let sabines = { hz125: 100, hz250: 50 };
    let rec = 0;
    return (
      <ReverbContext.Consumer>
        {(reverbContext) => (
          <ApiContext.Consumer>
            {(apiContext) => {
              const { length, width, height } = reverbContext;
              const wallArea = width * height * 2 + length * height * 2;
              const floorArea = length * width;
              const volume = length * width * height * 0.049;

              const {
                selectedFloorMaterial,
                floorMaterials,
                selectedCeilingMaterial,
                ceilingMaterials,
                selectedWallMaterial,
                wallMaterials,
                selectedOtherMaterial,
                otherMaterials,
                recommendedReverbTimes,
                selectedReverbTime,
              } = apiContext;

              if (
                !!floorMaterials &&
                !!ceilingMaterials &&
                !!wallMaterials &&
                !!otherMaterials &&
                !!recommendedReverbTimes
              ) {
                console.log(
                  volume,
                  floorMaterials[selectedFloorMaterial].hz125 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz125 *
                      floorArea +
                    wallMaterials[selectedWallMaterial].hz125 * wallArea +
                    otherMaterials[selectedOtherMaterial].hz125
                );

                sabines = {
                  hz125:
                    volume /
                    (floorMaterials[selectedFloorMaterial].hz125 * floorArea +
                      ceilingMaterials[selectedCeilingMaterial].hz125 *
                        floorArea +
                      wallMaterials[selectedWallMaterial].hz125 * wallArea +
                      otherMaterials[selectedOtherMaterial].hz125),

                  hz250:
                    volume /
                    (floorMaterials[selectedFloorMaterial].hz250 * floorArea +
                      ceilingMaterials[selectedCeilingMaterial].hz250 *
                        floorArea +
                      wallMaterials[selectedWallMaterial].hz250 * wallArea +
                      otherMaterials[selectedOtherMaterial].hz250),

                  hz500:
                    volume /
                    (floorMaterials[selectedFloorMaterial].hz500 * floorArea +
                      ceilingMaterials[selectedCeilingMaterial].hz500 *
                        floorArea +
                      wallMaterials[selectedWallMaterial].hz500 * wallArea +
                      otherMaterials[selectedOtherMaterial].hz500),

                  hz1000:
                    volume /
                    (floorMaterials[selectedFloorMaterial].hz1000 * floorArea +
                      ceilingMaterials[selectedCeilingMaterial].hz1000 *
                        floorArea +
                      wallMaterials[selectedWallMaterial].hz1000 * wallArea +
                      otherMaterials[selectedOtherMaterial].hz1000),

                  hz2000:
                    volume /
                    (floorMaterials[selectedFloorMaterial].hz2000 * floorArea +
                      ceilingMaterials[selectedCeilingMaterial].hz2000 *
                        floorArea +
                      wallMaterials[selectedWallMaterial].hz2000 * wallArea +
                      otherMaterials[selectedOtherMaterial].hz2000),

                  hz4000:
                    volume /
                    (floorMaterials[selectedFloorMaterial].hz4000 * floorArea +
                      ceilingMaterials[selectedCeilingMaterial].hz4000 *
                        floorArea +
                      wallMaterials[selectedWallMaterial].hz4000 * wallArea +
                      otherMaterials[selectedOtherMaterial].hz4000),
                };

                rec =
                  (recommendedReverbTimes[selectedReverbTime].min +
                    recommendedReverbTimes[selectedReverbTime].max) /
                  2;
              }

              const data = [
                {
                  name: '125',
                  altv: '1.5',
                  uv: sabines.hz125,
                  recommended: rec,
                },
                {
                  name: '250',
                  altv: '1.8',
                  uv: sabines.hz250,
                  recommended: rec,
                },
                {
                  name: '500',
                  altv: '1.6',
                  uv: sabines.hz500,
                  recommended: rec,
                },
                {
                  name: '1000',
                  altv: '1.4',
                  uv: sabines.hz1000,
                  recommended: rec,
                },
                {
                  name: '2000',
                  altv: '1',
                  uv: sabines.hz2000,
                  recommended: rec,
                },
                {
                  name: '4000',
                  altv: '.5',
                  uv: sabines.hz4000,
                  recommended: rec,
                },
              ];

              return (
                <div className="card">
                  <div className="card-header">
                    <div class="row">
                      <div class="col-sm-7">
                        <div class="numbers pull-left">Total Sabines</div>
                      </div>
                      <div class="col-sm-5">
                        <div class="pull-right">
                          <span class="badge badge-pill badge-success">
                            Avg Reverb Time - 0.5
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="big-title">
                      <span className="green">Existing Conditions</span> /{' '}
                      <span className="orange">With Treatment</span>
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
                          dataKey="recommended"
                          strokeWidth={15}
                          fill="#008888"
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
        )}
      </ReverbContext.Consumer>
    );
  }
}
