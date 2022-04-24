import React from 'react';
import CeilingProdsSelector from '../inputs/CeilingProdsSelector';
import BaffleUnitsSelector from '../inputs/BaffleUnitsSelector';
import WallProdsSelector from '../inputs/WallProdsSelector';

import FinalSummary from './FinalSummary';

import Context from '../../contexts/ApiContext';

export default class AcousticalTreatments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  static contextType = Context;

  printWindow = (e) => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
    console.log(e);
  };

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

          {this.state.isOpen && (
            <div className="printWindow">
              <FinalSummary />
              <button className="top-right-close" onClick={this.printWindow}>
                {' '}
                Close
              </button>
            </div>
          )}

          <button onClick={this.printWindow}>Print Report</button>
        </form>
      </div>
    );
  }
}
