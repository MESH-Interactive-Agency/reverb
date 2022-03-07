import React from "react";

import Context from "../contexts/ApiContext";


export default class MainWindow extends React.Component {
  static contextType = Context;

  // componentDidMount() {
  //   ApiService.getStrategies()
  //     .then((res) => {
  //       this.context.setStrategies(res);
  //     })
  //     .catch(this.context.setError);
  //   ApiService.getStocks()
  //     .then((res) => {
  //       this.context.setStocks(res);
  //     })
  //     .catch(this.context.setError);
  // }

  render() {
    //const { stocks, strategies } = this.context;

    return (
      <div className="light main window">
          Test
      </div>
    );
  }
}
