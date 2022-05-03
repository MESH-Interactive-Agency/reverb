import React from 'react';

import Charts from '../components/Pages/Charts';

import Context from '../contexts/ApiContext';

import FloorMatsSummary from '../components/outputs/FloorMatsSummary';
import CeilingMatsSummary from '../components/outputs/CeilingMatsSummary';
import WallMatsSummary from '../components/outputs/WallMatsSummary';
import OtherMatsSummary from '../components/outputs/OtherMatsSummary';
import CeilingProdsSummary from '../components/outputs/CeilingProdsSummary';
import BaffleUnitsSummary from '../components/outputs/BaffleUnitsSummary';
import WallProdsSummary from '../components/outputs/WallProdsSummary';
import logo from '../../src/images/CAG_logo.svg';

export default class DetailsWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <aside className="  ">
        <Charts />
        <div className=" tables">
          <div className="card outputTables">
            <h4 className=" ">Existing Conditions</h4>
            <FloorMatsSummary />
            <CeilingMatsSummary />
            <WallMatsSummary />
            <OtherMatsSummary />
          </div>
          <div className="card outputTables">
            <h4 className="">Treatments</h4>
            <CeilingProdsSummary />
            <WallProdsSummary />
            <BaffleUnitsSummary />
          </div>
        </div>
        <img className="cata-logo" src={logo} alt="logo"></img>
      </aside>
    );
  }
}
