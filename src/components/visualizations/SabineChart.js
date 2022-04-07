import React, { Component } from 'react';
import {
  BarChart,
  LineChart,
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
    return (
      <ReverbContext.Consumer>
        {(reverbContext) => (
          <ApiContext.Consumer>
            {(apiContext) => {
              const { length, width, height } = reverbContext;
              const wallArea = width * height * 4;
              const floorArea = length * width;

              const {
                selectedFloorMaterial,
                floorMaterials,
                selectedCeilingMaterial,
                ceilingMaterials,
                selectedWallMaterial,
                wallMaterials,
                selectedOtherMaterial,
                otherMaterials,
              } = apiContext;

              if (
                !!floorMaterials &&
                !!ceilingMaterials &&
                !!wallMaterials &&
                !!otherMaterials
              ) {
                console.log(sabines[0]);

                sabines = {
                  hz125:
                    floorMaterials[selectedFloorMaterial].hz125 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz125 *
                      floorArea +
                    wallMaterials[selectedWallMaterial].hz125 * wallArea +
                    otherMaterials[selectedOtherMaterial].hz125,

                  hz250:
                    floorMaterials[selectedFloorMaterial].hz250 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz250 *
                      floorArea +
                    wallMaterials[selectedWallMaterial].hz250 * wallArea +
                    otherMaterials[selectedOtherMaterial].hz250,

                  hz500:
                    floorMaterials[selectedFloorMaterial].hz500 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz500 *
                      floorArea +
                    wallMaterials[selectedWallMaterial].hz500 * wallArea +
                    otherMaterials[selectedOtherMaterial].hz500,

                  hz1000:
                    floorMaterials[selectedFloorMaterial].hz1000 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz1000 *
                      floorArea +
                    wallMaterials[selectedWallMaterial].hz1000 * wallArea +
                    otherMaterials[selectedOtherMaterial].hz1000,

                  hz2000:
                    floorMaterials[selectedFloorMaterial].hz2000 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz2000 *
                      floorArea +
                    wallMaterials[selectedWallMaterial].hz2000 * wallArea +
                    otherMaterials[selectedOtherMaterial].hz2000,

                  hz4000:
                    floorMaterials[selectedFloorMaterial].hz4000 * floorArea +
                    ceilingMaterials[selectedCeilingMaterial].hz4000 *
                      floorArea +
                    wallMaterials[selectedWallMaterial].hz4000 * wallArea +
                    otherMaterials[selectedOtherMaterial].hz4000,
                };
              }

              const data = [
                {
                  name: 'hz125',
                  uv: sabines.hz125,
                },
                {
                  name: 'hz250',
                  uv: sabines.hz250,
                },
                {
                  name: 'hz500',
                  uv: sabines.hz500,
                },
                {
                  name: 'hz1000',
                  uv: sabines.hz1000,
                },
                {
                  name: 'hz2000',
                  uv: sabines.hz2000,
                },
                {
                  name: 'hz4000',
                  uv: sabines.hz4000,
                },
              ];

              return (
                <ResponsiveContainer width="100%" height={150}>
                  <BarChart data={data}>
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                    <YAxis width={35} tick={{ fontSize: 12 }} />
                    <CartesianGrid />
                    <Bar dataKey="uv" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              );
            }}
          </ApiContext.Consumer>
        )}
      </ReverbContext.Consumer>
    );
  }
}
