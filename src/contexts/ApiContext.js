import React, { Component } from 'react';

import TokenService from '../services/token-service';
import ApiService from '../services/api-service';

const ApiContext = React.createContext({
  floorMaterials: [],
  ceilingMaterials: [],
  wallMaterials: [],
  otherMaterials: [],
  ceilingProducts: [],
  baffleUnits: [],
  wallProducts: [],
  loggedIn: TokenService.hasAuthToken(),
  loggedInUser: () => {},
  setLogin: () => {},
  setLogout: () => {},
  setError: () => {},
  clearError: () => {},
});

export default ApiContext;

export class ApiProvider extends Component {
  state = {
    loggedIn: TokenService.hasAuthToken(),
    loggedInUser: TokenService.getUsernameFromToken(),
    error: null,
  };

  setLogin = (bool, userName) => {
    this.setState({
      loggedIn: bool,
      loggedInUser: TokenService.getUsernameFromToken(),
    });
  };

  setFloorMaterials = () => {
    ApiService.getFloorMaterials()
      .then((res) => {
        this.setState({
          floorMaterials: res,
        });
      })
      .catch(this.context.setError);
  };

  setCeilingMaterials = () => {
    ApiService.getCeilingMaterials()
      .then((res) => {
        this.setState({
          ceilingMaterials: res,
        });
      })
      .catch(this.context.setError);
  };

  setOtherMaterials = () => {
    ApiService.getOtherMaterials()
      .then((res) => {
        this.setState({
          otherMaterials: res,
        });
      })
      .catch(this.context.setError);
  };

  setWallMaterials = () => {
    ApiService.getWallMaterials()
      .then((res) => {
        this.setState({
          wallMaterials: res,
        });
      })
      .catch(this.context.setError);
  };

  setCeilingProducts = () => {
    ApiService.getCeilingProducts()
      .then((res) => {
        this.setState({
          ceilingProducts: res,
        });
      })
      .catch(this.context.setError);
  };

  setBaffleUnits = () => {
    ApiService.getBaffleUnits()
      .then((res) => {
        this.setState({
          baffleUnits: res,
        });
      })
      .catch(this.context.setError);
  };

  setWallProducts = () => {
    ApiService.getWallProducts()
      .then((res) => {
        this.setState({
          wallProducts: res,
        });
      })
      .catch(this.context.setError);
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      loggedInUser: this.state.loggedInUser,
      setLogin: this.setLogin,
      setError: this.setError,
      clearError: this.clearError,
      floorMaterials: this.state.floorMaterials,
      ceilingMaterials: this.state.ceilingMaterials,
      wallMaterials: this.state.wallMaterials,
      otherMaterials: this.state.otherMaterials,
      ceilingProducts: this.state.ceilingProducts,
      baffleUnits: this.state.baffleUnits,
      wallProducts: this.state.wallProducts,
    };

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
