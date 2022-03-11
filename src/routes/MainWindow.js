import React from 'react';

import Context from '../contexts/ApiContext';

import Cover from '../components/Pages/Cover';
import ExistingConditions from '../components/Pages/ExistingConditions';
import SeeYourSpace from '../components/Pages/SeeYourSpace';
import AcousticalTreatments from '../components/Pages/AcousticalTreatments';

export default class MainWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="light main window">
        Hello! This page is ugly. I will fix that later!
        <br></br>
        <br></br>
        The app does not have to be in this configuration. Everything you will
        see here can be considered an object. Essentially, what this means is I
        can include all of the functionality in each component, but move them
        around as easily as I can move a paragraph. Very flexible.
        <br></br>
        <br></br>
        <Cover></Cover>
        <ExistingConditions></ExistingConditions>
        <SeeYourSpace></SeeYourSpace>
        <AcousticalTreatments></AcousticalTreatments>
      </div>
    );
  }
}
