import React, { Component } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import ApiContext from '../../contexts/ApiContext';

export default class SurfaceAreaChart extends Component {
  render() {
    return (
      <ApiContext.Consumer>
        {(apiContext) => {
          const {
            floorMatTotal,
            ceilingMatTotal,
            wallMatTotal,
            otherMatTotal,
            ceilingProdTotal,
            wallProdTotal,
            baffleTotal,
            selectedReverbTime,
            length,
            width,
            height,
          } = apiContext;

          const volume = length * width * height * 0.049;

          let current =
            floorMatTotal.nrc +
            ceilingMatTotal.nrc +
            wallMatTotal.nrc +
            otherMatTotal.nrc +
            ceilingProdTotal.nrc +
            wallProdTotal.nrc +
            baffleTotal.nrc;

          let added =
            ceilingProdTotal.nrc + wallProdTotal.nrc + baffleTotal.nrc;

          let remaining = volume / selectedReverbTime - current;


          const data = [
            {
              name: 'Total Required',
              uv: remaining,

              fill: '#de6d35',
            },
            {
              name: 'Added',
              uv: added,
              fill: '#7f9e23',
            },
          ];


          return (
            <div className="card  ">
              <div className="card-header">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="numbers pull-left">Treatment</div>
                  </div>
                  <div className="col-sm-5"></div>
                </div>
              </div>
              <div className="card-body">
                <h6 className="big-title">
                  <span>Treatment Required</span>
                </h6>

                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={data}>
                    <XAxis dataKey="name" height={15} tick={{ fontSize: 10 }} />
                    <YAxis type="number" width={35} tick={{ fontSize: 12 }} />
                    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        }}
      </ApiContext.Consumer>
    );
  }
}
