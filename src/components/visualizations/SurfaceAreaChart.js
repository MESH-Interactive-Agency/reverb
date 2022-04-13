import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

import Context from '../../contexts/ReverbContext';

export default class SurfaceAreaChart extends Component {
  static contextType = Context;

  calculateWallArea = () => {
    return (
      this.context.wall1.l * this.context.wall1.h +
      this.context.wall2.l * this.context.wall2.h +
      this.context.wall3.l * this.context.wall3.h +
      this.context.wall4.l * this.context.wall4.h
    );
  };

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
    const data = [
      {
        name: 'Total Required',
        uv: 62.5,
      },
      {
        name: 'Added',
        uv: 45,
        fill: '#880000',
      },
    ];

    return (
      <div className="window chart ">
        <h2 className="center-text shortRound">Treatment Required</h2>
        <br></br>
        <ResponsiveContainer width="90%" height={180}>
          <BarChart data={data}>
            <XAxis dataKey="name" height={15} tick={{ fontSize: 10 }} />
            <YAxis width={35} tick={{ fontSize: 12 }} />
            <CartesianGrid />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
