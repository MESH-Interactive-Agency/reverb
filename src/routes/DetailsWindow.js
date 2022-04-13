import React from 'react';

import Results from '../components/Pages/Results';
import SeeYourSpace from '../components/Pages/SeeYourSpace';
import Charts from '../components/Pages/Charts';

import Context from '../contexts/ApiContext';
import Title from '../components/outputs/Title';
import FloorMatsSummary from '../components/outputs/FloorMatsSummary';
import CeilingMatsSummary from '../components/outputs/CeilingMatsSummary';
import WallMatsSummary from '../components/outputs/WallMatsSummary';
import OtherMatsSummary from '../components/outputs/OtherMatsSummary';
import CeilingProdsSummary from '../components/outputs/CeilingProdsSummary';
import BaffleUnitsSummary from '../components/outputs/BaffleUnitsSummary';
import WallProdsSummary from '../components/outputs/WallProdsSummary';

export default class DetailsWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <aside className="  ">
        <Charts />
        <div className=" tables">
          <div className="card outputTables">
            <h2 className="center-text rounded">Existing Conditions</h2>
            <FloorMatsSummary />
            <CeilingMatsSummary />
            <WallMatsSummary />
            <OtherMatsSummary />
          </div>
          <div className="card outputTables">
            <h2 className="center-text rounded" >Treatments</h2>
            <CeilingProdsSummary />
            <BaffleUnitsSummary />
            <WallProdsSummary />
          </div>
        </div>
        {/* <Results /> */}
      </aside>
    );
  }
}
