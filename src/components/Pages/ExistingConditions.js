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
      <div className="card white ">
        <h2 className="card-header">Existing Materials</h2>
        <div className="">
          <FloorMatsSelector />
          <CeilingArea />
          <CeilingMatsSelector />
          <WallSurfaces />
          <WallMatsSelector />
          <OtherMatsSelector />
          <Openings />
        </div>
      </div>
    );
  }
}
