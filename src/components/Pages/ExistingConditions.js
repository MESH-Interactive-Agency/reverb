import React from 'react';

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
          <CeilingMatsSelector />
          <WallMatsSelector />
          <OtherMatsSelector />
        </form>
      </div>
    );
  }
}
