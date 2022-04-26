import React from 'react';
import SurfaceAreaChart from '../visualizations/SurfaceAreaChart';
import SabineChart from '../visualizations/SabineChart';
import BoxSpace from '../visualizations/BoxSpace';

import Context from '../../contexts/ApiContext';

export default class Charts extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="charts sticky ">
        <div></div>
        <BoxSpace />
        <SabineChart />
        {/* <SurfaceAreaChart /> */}
        <div></div>
      </div>
    );
  }
}
