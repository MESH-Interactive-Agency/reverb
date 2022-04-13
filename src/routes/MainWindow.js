import React from 'react';

import Context from '../contexts/ApiContext';

import Cover from '../components/Pages/Cover';
import ExistingConditions from '../components/Pages/ExistingConditions';
import AcousticalTreatments from '../components/Pages/AcousticalTreatments';

export default class MainWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="window main no-shadow">
        <Cover />
        <div className="dropdown-groups">
          <ExistingConditions />
          <AcousticalTreatments />
        </div>
      </div>
    );
  }
}
