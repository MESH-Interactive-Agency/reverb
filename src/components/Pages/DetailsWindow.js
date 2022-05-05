import React from 'react';

import Charts from './Charts';

import Context from '../../contexts/ApiContext';

import FloorMatsSummary from '../outputs/FloorMatsSummary';
import CeilingMatsSummary from '../outputs/CeilingMatsSummary';
import WallMatsSummary from '../outputs/WallMatsSummary';
import OtherMatsSummary from '../outputs/OtherMatsSummary';
import CeilingProdsSummary from '../outputs/CeilingProdsSummary';
import BaffleUnitsSummary from '../outputs/BaffleUnitsSummary';
import WallProdsSummary from '../outputs/WallProdsSummary';
import logo from '../../images/CAG_logo.svg';

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
