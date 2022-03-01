import React, { Component } from "react";

import TokenService from "../services/token-service";
import ApiService from "../services/api-service";

const ApiContext = React.createContext({
  stocks: [],
  strategies: [],
  openStocks: [],
  openStrat: {},
  loggedIn: TokenService.hasAuthToken(),
  loggedInUser: () => {},
  setLogin: () => {},
  setLogout: () => {},
  setError: () => {},
  clearError: () => {},
  setStrategies: () => {},
  clearStrategies: () => {},
  setStocks: () => {},
  clearStocks: () => {},
  addStrategy: () => {},
  addStock: () => {},
  setOpenStrat: () => {},
  deleteStock: () => {},
});

export default ApiContext;

export class ApiProvider extends Component {
  state = {
    strategies: [],
    stocks: [],
    openStrat: {},
    openStocks: [],
    loggedIn: TokenService.hasAuthToken(),
    loggedInUser: TokenService.getUsernameFromToken(),
    error: null,
  };

  setLogin = (bool, userName) => {
    this.setState({
      loggedIn: bool,
      loggedInUser: TokenService.getUsernameFromToken(),
      openStrat: {},
      openStocks: [],
      stocks: [],
      strategies: [],
    });

    ApiService.getStrategies()
      .then((res) => {
        this.setState({
          strategies: res,
        });
      })
      .catch(this.context.setError);
    ApiService.getStocks()
      .then((res) => {
        this.setState({
          stocks: res,
        });
      })
      .catch(this.context.setError);
  };

  setOpenStrat = (stratName) => {
    if (stratName !== "") {
      const strat = this.state.strategies.find(
        (strategy) => strategy.title === stratName
      );
      const stocks = this.state.stocks.filter(
        (stock) => stock.strategy_id === strat.id
      );

      this.setState({
        openStocks: stocks,
        openStrat: strat,
      });
    } else {
      this.setState({
        openStocks: [],
        openStrat: {},
      });
    }
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setStrategies = (strategies) => {
    this.setState({ strategies });
  };

  clearStrategies = () => {
    this.setState({ strategies: [] });
  };

  setStocks = (stocks) => {
    this.setState({ stocks });
  };

  clearStocks = () => {
    this.setState({ stocks: [] });
  };

  handleAddStrategy = (strategy) => {
    this.setState({
      strategies: [...this.state.strategies, strategy],
    });
  };

  handleAddStock = (stock) => {
    this.setState({
      stocks: [...this.state.stocks, stock],
      openStocks: [...this.state.openStocks, stock],
    });
  };

  handleDeleteStock = (stockId) => {
    this.setState({
      stocks: this.state.stocks.filter((stock) => stock.id !== stockId),
      openStocks: this.state.openStocks.filter((stock) => stock.id !== stockId),
    });
  };

  handleDeleteStrategy = (strategyId) => {
    this.setState({
      stocks: this.state.stocks.filter(
        (stock) => stock.strategy_id !== strategyId
      ),
    });
  };

  render() {
    const value = {
      stocks: this.state.stocks,
      strategies: this.state.strategies,
      openStrat: this.state.openStrat,
      loggedIn: this.state.loggedIn,
      loggedInUser: this.state.loggedInUser,
      openStocks: this.state.openStocks,
      setLogin: this.setLogin,
      setError: this.setError,
      clearError: this.clearError,
      setStrategies: this.setStrategies,
      setStocks: this.setStocks,
      addStrategy: this.handleAddStrategy,
      addStock: this.handleAddStock,
      setOpenStrat: this.setOpenStrat,
      deleteStock: this.handleDeleteStock,
    };

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
