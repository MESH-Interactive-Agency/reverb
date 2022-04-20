import React from 'react';
import SabineChart from '../visualizations/SabineChart';
import ReverbContext from '../../contexts/ReverbContext';
import ApiContext from '../../contexts/ApiContext';

export default class PrintableSummary extends React.Component {
  render() {
    return (
      <ReverbContext.Consumer>
        {(reverbContext) => (
          <ApiContext.Consumer>
            {(apiContext) => {
              const {
                selectedFloorMaterial,
                floorMaterials,
                selectedReverbTime,
              } = apiContext;
              const mats = floorMaterials;
              const selected = selectedFloorMaterial;
              const { length, width, height, customerName, projectName, date } =
                reverbContext;
              const volume = length * width * height;
              const area =
                length * height * 2 + width * height * 2 + length * width * 2;

              return (
                <div className="printable-summary ">
                  <div className="left-side">
                    <h2>LAMVIN</h2>
                    <h3>Interior Room Accoustics Report</h3>
                    <br></br>
                    <h3>Date: {date}</h3>
                    <h3>Customer Name: {customerName}</h3>
                    <h3>Project Name: {projectName}</h3>
                    <br></br>
                    <div className="print-chart">
                      <SabineChart />
                    </div>
                    <br></br>
                    <h3>Specified Average Reverb Time: {selectedReverbTime}</h3>
                    <br></br>
                    <h3>Total Room Volume (ft3): {volume}</h3>
                    <h3>Total Surface Area (ft2): {area}</h3>
                  </div>

                  <div className="right-side">
                    <table className=" print-chart">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="bold left long-lead-cell"
                          ></th>
                          <th scope="col" className="bold center-text">
                            Original Space
                          </th>
                          <th scope="col" className="bold center-text">
                            After Treatment
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="col" className="bold right">
                            Average Reverb Time:
                          </th>
                          <th scope="col" className="bold center-text">
                            PH
                          </th>
                          <th scope="col" className="bold center-text">
                            PH
                          </th>
                        </tr>
                        <tr>
                          <th scope="col" className="bold right">
                            Total Averga Sabines:
                          </th>
                          <th scope="col" className="bold center-text">
                            PH
                          </th>
                          <th scope="col" className="bold center-text">
                            PH
                          </th>
                        </tr>
                        <tr>
                          <th scope="col" className="bold right">
                            Average Room Absorption Coefficient:
                          </th>
                          <th scope="col" className="bold center-text">
                            PH
                          </th>
                          <th scope="col" className="bold center-text">
                            PH
                          </th>
                        </tr>
                        <tr>
                          <th scope="col" className="bold right">
                            Critical Distance to Reverberant Field (ft):
                          </th>
                          <th scope="col" className="bold center-text">
                            PH
                          </th>
                          <th scope="col" className="bold center-text">
                            PH
                          </th>
                        </tr>
                        <tr>
                          <th scope="col" className="bold right">
                            Maximum SPL Reduction at Critical Distance (dB):
                          </th>
                          <th scope="col" className="bold center-text">
                            PH
                          </th>
                          <th scope="col" className="bold center-text">
                            PH
                          </th>
                        </tr>
                      </tbody>
                    </table>
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
