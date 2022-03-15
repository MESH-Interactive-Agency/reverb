import React from 'react';
import DimensionSummary from '../outputs/DimensionSummary';
import CeilingSummary from '../outputs/CeilingSummary';
import WallSummary from '../outputs/WallSummary';
import OpeningsSummary from '../outputs/OpeningsSummary';
import Charts from './Charts';
import BoxSpace from '../visualizations/BoxSpace';

import Title from '../outputs/Title';

import Context from '../../contexts/ReverbContext';

export default class Results extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="light window">
        <h2 className="center-text">Live Summary</h2>
        <Title></Title>
        <DimensionSummary></DimensionSummary>
        <CeilingSummary></CeilingSummary>
        <WallSummary></WallSummary>
        <OpeningsSummary></OpeningsSummary>
      </div>
    );
  }
}
