import React from 'react';

import Results from '../components/Pages/Results';
import SeeYourSpace from '../components/Pages/SeeYourSpace';
import Charts from '../components/Pages/Charts';

import Context from '../contexts/ApiContext';

//import ApiService from '../services/data-api-service';

export default class DetailsWindow extends React.Component {
  static contextType = Context;

  render() {
    //  let test = ApiService.getFloorMaterials();

    let test = 'test';
    return (
      <aside className="light main window">
        <p>test: {test}</p>
        <SeeYourSpace />
        <Charts></Charts>
        <Results></Results>
      </aside>
    );
  }
}
