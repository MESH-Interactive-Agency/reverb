import React, { Component } from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import ApiContext from '../../contexts/ApiContext';

export default class SabineChart extends Component {
  static contextType = ApiContext;

  render() {
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length === 3) {
        return (
          <div className="custom-tooltip">
            {!!payload[0] && (
              <p className="orange">{`${payload[0].value.toFixed(2)} `}</p>
            )}

            {!!payload[1] && (
              <p className="green">{`${payload[1].value.toFixed(2)} `}</p>
            )}

            {!!payload[2] && (
              <p className="label">{`${payload[2].value.toFixed(2)} `}</p>
            )}
          </div>
        );
      }

      return null;
    };

    let sabines = {};
    let treatment = {};
    let rec = 0;

    const { length, width, height } = this.context;

    const volume = length * width * height * 0.049;

    const {
      floorMatTotal,
      ceilingMatTotal,
      wallMatTotal,
      otherMatTotal,
      wallProdTotal,
      ceilingProdTotal,
      baffleTotal,
      selectedReverbTime,
    } = this.context;

    if (
      floorMatTotal.hz125 > 0 ||
      ceilingMatTotal.hz125 > 0 ||
      wallMatTotal.hz125 > 0 ||
      otherMatTotal > 0
    ) {
      sabines = {
        hz125:
          volume /
          (floorMatTotal.hz125 +
            ceilingMatTotal.hz125 +
            wallMatTotal.hz125 +
            otherMatTotal.hz125),

        hz250:
          volume /
          (floorMatTotal.hz250 +
            ceilingMatTotal.hz250 +
            wallMatTotal.hz250 +
            otherMatTotal.hz250),

        hz500:
          volume /
          (floorMatTotal.hz500 +
            ceilingMatTotal.hz500 +
            wallMatTotal.hz500 +
            otherMatTotal.hz500),

        hz1000:
          volume /
          (floorMatTotal.hz1000 +
            ceilingMatTotal.hz1000 +
            wallMatTotal.hz1000 +
            otherMatTotal.hz1000),

        hz2000:
          volume /
          (floorMatTotal.hz2000 +
            ceilingMatTotal.hz2000 +
            wallMatTotal.hz2000 +
            otherMatTotal.hz2000),

        hz4000:
          volume /
          (floorMatTotal.hz4000 +
            ceilingMatTotal.hz4000 +
            wallMatTotal.hz4000 +
            otherMatTotal.hz4000),
      };
    }

    rec = volume / selectedReverbTime;

    if (
      ceilingProdTotal.hz125 > 0 ||
      wallProdTotal.hz125 > 0 ||
      baffleTotal.hz125 > 0
    ) {
      treatment = {
        hz125:
          volume /
          (floorMatTotal.hz125 +
            ceilingMatTotal.hz125 +
            wallMatTotal.hz125 +
            otherMatTotal.hz125 +
            ceilingProdTotal.hz125 +
            wallProdTotal.hz125 +
            baffleTotal.hz125),

        hz250:
          volume /
          (floorMatTotal.hz250 +
            ceilingMatTotal.hz250 +
            wallMatTotal.hz250 +
            otherMatTotal.hz250 +
            ceilingProdTotal.hz250 +
            wallProdTotal.hz250 +
            baffleTotal.hz250),

        hz500:
          volume /
          (floorMatTotal.hz500 +
            ceilingMatTotal.hz500 +
            wallMatTotal.hz500 +
            otherMatTotal.hz500 +
            ceilingProdTotal.hz500 +
            wallProdTotal.hz500 +
            baffleTotal.hz500),

        hz1000:
          volume /
          (floorMatTotal.hz1000 +
            ceilingMatTotal.hz1000 +
            wallMatTotal.hz1000 +
            otherMatTotal.hz1000 +
            ceilingProdTotal.hz1000 +
            wallProdTotal.hz1000 +
            baffleTotal.hz1000),

        hz2000:
          volume /
          (floorMatTotal.hz2000 +
            ceilingMatTotal.hz2000 +
            wallMatTotal.hz2000 +
            otherMatTotal.hz2000 +
            ceilingProdTotal.hz2000 +
            wallProdTotal.hz2000 +
            baffleTotal.hz2000),

        hz4000:
          volume /
          (floorMatTotal.hz4000 +
            ceilingMatTotal.hz4000 +
            wallMatTotal.hz4000 +
            otherMatTotal.hz4000 +
            ceilingProdTotal.hz4000 +
            wallProdTotal.hz4000 +
            baffleTotal.hz4000),
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
        <div className=" no-foot">
          <h6 className="big-title">
            <span className="orange">Existing Conditions</span> /{' '}
            <span className="green">With Treatment</span> /{' '}
            <span className="grey">Target</span>
          </h6>
          <ResponsiveContainer height={180}>
            <LineChart data={data}>
              <XAxis
                dataKey="name"
                height={15}
                tick={{ fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                width={25}
                tick={{ fontSize: 10 }}
                domain={[0, 'auto']}
                axisLine={false}
                tickLine={false}
              />
              dot={false}
              <Line dot={false} dataKey="uv" stroke="#de6d35" strokeWidth={3} />
              <Line
                dot={false}
                dataKey="altv"
                stroke="#7f9e23"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="recommended"
                strokeWidth={5}
                stroke="#22222222"
                dot={false}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
