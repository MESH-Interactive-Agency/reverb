import React from 'react';

import Context from '../contexts/ApiContext';

import Cover from '../components/Pages/Cover';
import Dimensions from '../components/inputs/Dimensions';
import ExistingConditions from '../components/Pages/ExistingConditions';
import AcousticalTreatments from '../components/Pages/AcousticalTreatments';
import ReverbTime from '../components/inputs/ReverbTime';

export default class MainWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className=" main no-shadow">
        <div className="dropdown-groups">
          <Cover />
          <Dimensions />
          <ReverbTime />
          <ExistingConditions />
          <AcousticalTreatments />
        </div>
      </div>
    );
  }
}
