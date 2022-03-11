import React from 'react';

import Results from '../components/Pages/Results';

import Context from '../contexts/ApiContext';

export default class DetailsWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <aside className="light main window">
        <h2 className="dark">This window is serving as an output window.</h2>
        <br></br>
        <p>
          For right now, this is just showing the processed results in
          real-time. As you update information from the other windows, the
          processed results will show up here. Again, just for demo purposes. I
          can display this info any way you want.
        </p>
        <br></br>

        <Results></Results>
      </aside>
    );
  }
}
