import React from 'react';
import SurfaceAreaChart from '../visualizations/SurfaceAreaChart';
import SabineChart from '../visualizations/SabineChart';

import Context from '../../contexts/ApiContext';

export default class Charts extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="light window">
        {/* <SurfaceAreaChart /> */}
        <SabineChart />
      </div>
    );
  }
}
