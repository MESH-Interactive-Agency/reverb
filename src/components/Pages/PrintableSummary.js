import React from 'react';
import SabineChart from '../visualizations/SabineChart';
import SurfaceAreaChart from '../visualizations/SurfaceAreaChart';
import ApiContext from '../../contexts/ApiContext';

import CeilingProdsSummary from '../outputs/CeilingProdsSummary';
import WallProdsSummary from '../outputs/WallProdsSummary';
import BaffleUnitsSummary from '../outputs/BaffleUnitsSummary';

import FloorMatsSummary from '../outputs/FloorMatsSummary';
import CeilingMatsSummary from '../outputs/CeilingMatsSummary';
import WallMatsSummary from '../outputs/WallMatsSummary';
import OtherMatsSummary from '../outputs/OtherMatsSummary';

export default class PrintableSummary extends React.Component {
  static contextType = ApiContext;

  render() {
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
      customerName,
      projectName,
      date,
    } = this.context;

    const volume = length * width * height;

    const area = length * height * 2 + width * height * 2 + length * width * 2;

    const avgExistingReverbTime =
      (volume * 0.049) /
      (floorMatTotal.nrc +
        ceilingMatTotal.nrc +
        wallMatTotal.nrc +
        otherMatTotal.nrc);

    const avgTreatedReverbTime =
      (volume * 0.049) /
      (floorMatTotal.nrc +
        ceilingMatTotal.nrc +
        wallMatTotal.nrc +
        otherMatTotal.nrc +
        ceilingProdTotal.nrc +
        wallProdTotal.nrc +
        baffleTotal.nrc);

    return (
      <div className="printable-summary ">
        <div className="">
          <h2 className="print-header">LAMVIN</h2>
          <h3 className="print-header">
            Interior Room Accoustics Summary Report
          </h3>
          <br></br>
          <h3>Date: {date}</h3>
          <h3>Customer Name: {customerName}</h3>
          <h3>Project Name: {projectName}</h3>
          <h3>Total Room Volume (ft3): {volume}</h3>
          <h3>Total Surface Area (ft2): {area}</h3>

          <div className="print-charts">
            <div className="print-chart">
              <SabineChart />
            </div>
            <div className="print-chart">
              <SurfaceAreaChart />
            </div>
          </div>
          <div className="print-summary">
            <div className="print-table">
              <h2 className="print-header">Existing Conditions</h2>
              <FloorMatsSummary />
              <CeilingMatsSummary />
              <WallMatsSummary />
              <OtherMatsSummary />
            </div>
            <div className="print-table">
              <h2 className="print-header">Recommended Treatments</h2>
              <CeilingProdsSummary />
              <WallProdsSummary />
              <BaffleUnitsSummary />
            </div>
          </div>
          <div className="recap">
            <h3>
              Average Existing Reverb Time (sec):{' '}
              {!!avgExistingReverbTime && (
                <span className="orange-background">
                  {' '}
                  {avgExistingReverbTime.toFixed(1)}{' '}
                </span>
              )}
            </h3>

            <h3>
              Specified Average Reverb Time (sec):{' '}
              {!!selectedReverbTime && (
                <span className="green-background"> {selectedReverbTime} </span>
              )}
            </h3>

            <h3>
              Average Time After Treatment (sec):{' '}
              {!!avgTreatedReverbTime && (
                <span className="blue-background">
                  {' '}
                  {avgTreatedReverbTime.toFixed(1)}{' '}
                </span>
              )}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
