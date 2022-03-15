import React from 'react';

import Results from '../components/Pages/Results';
import SeeYourSpace from '../components/Pages/SeeYourSpace';
import Charts from '../components/Pages/Charts';

import Context from '../contexts/ApiContext';

export default class DetailsWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <aside className="light main window">
        <SeeYourSpace />
        <Charts></Charts>
        <Results></Results>
      </aside>
    );
  }
}
