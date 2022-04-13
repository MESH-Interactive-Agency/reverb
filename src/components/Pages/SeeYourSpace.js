import React from 'react';
import BoxSpace from '../visualizations/BoxSpace';

import Context from '../../contexts/ApiContext';

export default class SeeYourSpace extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="">
        <BoxSpace></BoxSpace>
      </div>
    );
  }
}
