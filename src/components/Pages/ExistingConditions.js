import React from 'react';

import Dimensions from '../inputs/Dimensions';
import CeilingArea from '../inputs/CeilingArea';
import WallSurfaces from '../inputs/WallSurfaces';
import Openings from '../inputs/Openings';
import FloorMatsSelector from '../inputs/FloorMatsSelector';
import CeilingMatsSelector from '../inputs/CeilingMatsSelector';
import WallMatsSelector from '../inputs/WallMatsSelector';
import OtherMatsSelector from '../inputs/OtherMatsSelector';

export default class ExistingConditions extends React.Component {
  render() {
    return (
      <div className="card existing ">
        <div className="card-header">
        <h4 className="card-title">Existing Materials</h4>
        </div>
        <form className="form-horizontal">
          <FloorMatsSelector />
          {/* <CeilingArea /> */}
          <CeilingMatsSelector />
          {/* <WallSurfaces /> */}
          <WallMatsSelector />
          <OtherMatsSelector />
          {/* <Openings /> */}
        </form>
      </div>
    );
  }
}
