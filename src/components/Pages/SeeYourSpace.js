import React from 'react';

import Context from '../../contexts/ApiContext';

export default class SeeYourSpace extends React.Component {
  static contextType = Context;

  render() {
    return <div className="light window">See Your Space Page (NYI)</div>;
  }
}
