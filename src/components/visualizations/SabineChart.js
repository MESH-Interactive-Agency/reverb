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
                  name: 'hz125',
                  uv: sabines.hz125,
                  recommended: rec,
                },
                {
                  name: 'hz250',
                  uv: sabines.hz250,
                  recommended: rec,
                },
                {
                  name: 'hz500',
                  uv: sabines.hz500,
                  recommended: rec,
                },
                {
                  name: 'hz1000',
                  uv: sabines.hz1000,
                  recommended: rec,
                },
                {
                  name: 'hz2000',
                  uv: sabines.hz2000,
                  recommended: rec,
                },
                {
                  name: 'hz4000',
                  uv: sabines.hz4000,
                  recommended: rec,
                },
              ];

              return (
                <div className="window sabine chart ">
                   <h2 className="center-text">Total Sabines</h2>
                  <ResponsiveContainer height={200}>
                    <LineChart data={data}>
                      <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                      <YAxis
                        width={35}
                        tick={{ fontSize: 12 }}
                        domain={[0, 3.5]}
                      />
                      <CartesianGrid />
                      <Line dataKey="uv" fill="#8884d8" />
                      <Line
                        dataKey="recommended"
                        strokeWidth={15}
                        fill="#008888"
                        stroke="#55555555"
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              );
            }}
          </ApiContext.Consumer>
        )}
      </ReverbContext.Consumer>
    );
  }
}
