import React from 'react';

import Context from '../contexts/ApiContext';

import Cover from '../components/Pages/Cover';
import ExistingConditions from '../components/Pages/ExistingConditions';
import AcousticalTreatments from '../components/Pages/AcousticalTreatments';

import Accordion from '../components/Tools/Accordion';
import AccordionSection from '../components/Tools/AccordionSection';
export default class MainWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="light main window">
        <Cover />
        <ExistingConditions />
        <AcousticalTreatments />
      </div>
    );
  }
}
