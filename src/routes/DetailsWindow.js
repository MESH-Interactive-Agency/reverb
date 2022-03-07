import React from "react";

import Context from "../contexts/ApiContext";

export default class DetailsWindow extends React.Component {
  static contextType = Context;

  render() {
    return (
      <aside className="light main window">
        <h2 className="dark">Summary</h2>

      </aside>
    );
  }
}
