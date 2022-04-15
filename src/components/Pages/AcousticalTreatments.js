import React from 'react';
import CeilingProdsSelector from '../inputs/CeilingProdsSelector';
import BaffleUnitsSelector from '../inputs/BaffleUnitsSelector';
import WallProdsSelector from '../inputs/WallProdsSelector';
import Openings from '../inputs/Openings';

import Context from '../../contexts/ApiContext';

export default class AcousticalTreatments extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="card accoustic-treatments ">
        <div className="card-header">
          <h4 className="card-title">Acoustical Treatments</h4>
        </div>
        <form className="form-horizontal">
          <CeilingProdsSelector />
          <BaffleUnitsSelector />
          <WallProdsSelector />
          <Openings />
        </form>
      </div>
    );
  }
}
