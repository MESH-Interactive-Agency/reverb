import React from 'react';
import CeilingProdsSelector from '../inputs/CeilingProdsSelector';
import BaffleUnitsSelector from '../inputs/BaffleUnitsSelector';
import WallProdsSelector from '../inputs/WallProdsSelector';

import Context from '../../contexts/ApiContext';

export default class AcousticalTreatments extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="orange window">
        Acoustical Treatments Page
        <CeilingProdsSelector />
        <BaffleUnitsSelector />
        <WallProdsSelector />
      </div>
    );
  }
}
