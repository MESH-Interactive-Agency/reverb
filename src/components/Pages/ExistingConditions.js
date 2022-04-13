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
      <div className=" topMargin ">
        <h2 className="">Existing Materials</h2>
        <FloorMatsSelector />
        <CeilingArea />
        <CeilingMatsSelector />
        <WallSurfaces />
        <WallMatsSelector />
        <Openings />
        <OtherMatsSelector />
      </div>
    );
  }
}
