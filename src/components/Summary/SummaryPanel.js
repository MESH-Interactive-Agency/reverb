import React from "react";
import Currency from "react-currency-formatter";

import Context from "../../contexts/ApiContext";
import calc from "../../utils/calculations";
import PieChart from "./PieChart";
import data from "../../utils/data";

export default class SummaryPanel extends React.Component {
  static contextType = Context;

  render() {
    const stocks = this.context.openStocks;
    const industryData = data.industryData(stocks);
    const allocation = data.allocation(stocks);
    const divProfits = data.divProfits(stocks);

    return (
      <div className="gray window summaryPanel">
        {!this.context.openStrat.title && <p>No strategy selected</p>}

        {this.context.openStrat.title && (
          <h3 className="red window hide">{this.context.openStrat.title}</h3>
        )}

        {this.context.openStrat.title && (
          <div className="smGraph light window">
            <h4>Invest: </h4>
            <h4>
              <Currency quantity={calc.totalValue(stocks)} currency="USD" />
            </h4>
            <PieChart data={allocation}></PieChart>
          </div>
        )}
        {this.context.openStrat.title && (
          <div className="light window smGraph">
            <h4>Get Paid:</h4>
            <h4>
              <Currency quantity={calc.dividendPayout(stocks)} currency="USD" />
            </h4>
            <PieChart data={divProfits}></PieChart>
          </div>
        )}
        {this.context.openStrat.title && (
          <div className="light window smGraph">
            <h4>Industry</h4>
            <h4>Allocation</h4>
            <PieChart data={industryData}></PieChart>
          </div>
        )}
      </div>
    );
  }
}
