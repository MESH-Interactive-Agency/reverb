import React from 'react';

import Dimensions from '../inputs/Dimensions';
import CeilingArea from '../inputs/CeilingArea';

export default class ExistingConditions extends React.Component {
  render() {
    return (
      <div className="light window">
        <h2>Existing Conditions</h2>
        <br></br>
        <Dimensions></Dimensions>
        <CeilingArea></CeilingArea>
      </div>
    );
  }
}
