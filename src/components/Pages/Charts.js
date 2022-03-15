import React from 'react';
import SurfaceAreaChart from '../visualizations/SurfaceAreaChart';

import Context from '../../contexts/ApiContext';

export default class Charts extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="light window">
        <SurfaceAreaChart />
      </div>
    );
  }
}
