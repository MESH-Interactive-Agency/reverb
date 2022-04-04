import React from 'react';

import Dimensions from '../inputs/Dimensions';
import CeilingArea from '../inputs/CeilingArea';
import WallSurfaces from '../inputs/WallSurfaces';
import Openings from '../inputs/Openings';
import FloorMatsSelector from '../inputs/FloorMatsSelector';

export default class ExistingConditions extends React.Component {
  render() {
    return (
      <div className="light window">
        <h2>Existing Conditions</h2>
        <br></br>
        <Dimensions />
        <FloorMatsSelector />
        <CeilingArea />
        <WallSurfaces />
        <Openings />
      </div>
    );
  }
}
