import React from 'react';

import Results from '../components/Pages/Results';
import SeeYourSpace from '../components/Pages/SeeYourSpace';
import Charts from '../components/Pages/Charts';

import Context from '../contexts/ApiContext';
import Title from '../components/outputs/Title';
import FloorMatsSummary from '../components/outputs/FloorMatsSummary';
import CeilingMatsSummary from '../components/outputs/CeilingMatsSummary';

export default class DetailsWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <aside className="light main window">
        <Title />
        <SeeYourSpace />
        <Charts />
        <FloorMatsSummary />
        <CeilingMatsSummary />
        <Results />
      </aside>
    );
  }
}
