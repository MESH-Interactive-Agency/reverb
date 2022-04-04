import React from 'react';

import Context from '../contexts/ApiContext';

import Cover from '../components/Pages/Cover';
import ExistingConditions from '../components/Pages/ExistingConditions';
import AcousticalTreatments from '../components/Pages/AcousticalTreatments';

export default class MainWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="light main window">
        <h2 className="center-text">
          Hello! This page is ugly. I will fix that later!
        </h2>

        <br></br>
        <br></br>
        <Cover></Cover>
        <ExistingConditions></ExistingConditions>
        <AcousticalTreatments></AcousticalTreatments>
      </div>
    );
  }
}
