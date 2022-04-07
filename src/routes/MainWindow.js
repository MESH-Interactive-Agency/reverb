import React from 'react';

import Context from '../contexts/ApiContext';

import Cover from '../components/Pages/Cover';
import ExistingConditions from '../components/Pages/ExistingConditions';
import AcousticalTreatments from '../components/Pages/AcousticalTreatments';

import Accordion from '../components/Tools/Accordion';
export default class MainWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="light main window">
        {/* <Accordion> */}
        <li>
          <Cover></Cover>
        </li>
        <li>
          <ExistingConditions></ExistingConditions>
        </li>
        <li>
          <AcousticalTreatments></AcousticalTreatments>
        </li>
        {/* </Accordion> */}
      </div>
    );
  }
}
