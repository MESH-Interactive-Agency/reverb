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

  selectedFloorMaterial: 0,
  selectedCeilingMaterial: 0,

  loggedIn: TokenService.hasAuthToken(),
  loggedInUser: () => {},
  setLogin: () => {},
  setLogout: () => {},
  setError: () => {},
  clearError: () => {},

  updateSelectedFloorMaterial: () => {},
  updateSelectedCeilingMaterial: () => {},
});

export default ApiContext;

export class ApiProvider extends Component {
  state = {
    loggedIn: TokenService.hasAuthToken(),
    loggedInUser: TokenService.getUsernameFromToken(),
    error: null,
    selectedFloorMaterial: 0,
    selectedCeilingMaterial: 0,
  };

  setLogin = (bool, userName) => {
    this.setState({
      loggedIn: bool,
      loggedInUser: TokenService.getUsernameFromToken(),
    });
  };

  getFloorMaterials = () => {
    ApiService.getFloorMaterials()
      .then((res) => {
        this.setState({
          floorMaterials: res,
        });
      })
      .catch(this.context.setError);
  };

  getCeilingMaterials = () => {
    ApiService.getCeilingMaterials()
      .then((res) => {
        this.setState({
          ceilingMaterials: res,
        });
      })
      .catch(this.context.setError);
  };

  getOtherMaterials = () => {
    ApiService.getOtherMaterials()
      .then((res) => {
        this.setState({
          otherMaterials: res,
        });
      })
      .catch(this.context.setError);
  };

  getWallMaterials = () => {
    ApiService.getWallMaterials()
      .then((res) => {
        this.setState({
          wallMaterials: res,
        });
      })
      .catch(this.context.setError);
  };

  getCeilingProducts = () => {
    ApiService.getCeilingProducts()
      .then((res) => {
        this.setState({
          ceilingProducts: res,
        });
      })
      .catch(this.context.setError);
  };

  getBaffleUnits = () => {
    ApiService.getBaffleUnits()
      .then((res) => {
        this.setState({
          baffleUnits: res,
        });
      })
      .catch(this.context.setError);
  };

  getWallProducts = () => {
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

  updateSelectedFloorMaterial = (mat) => {
    this.setState({ selectedFloorMaterial: mat });
  };

  updateSelectedCeilingMaterial = (mat) => {
    this.setState({ selectedCeilingMaterial: mat });
  };

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      loggedInUser: this.state.loggedInUser,
      setLogin: this.setLogin,
      setError: this.setError,
      clearError: this.clearError,
      getFloorMaterials: this.getFloorMaterials,
      getCeilingMaterials: this.getCeilingMaterials,
      getWallMaterials: this.getWallMaterials,
      getOtherMaterials: this.getOtherMaterials,
      getCeilingProducts: this.getCeilingProducts,
      getBaffleUnits: this.getBaffleUnits,
      getWallProducts: this.getWallProducts,

      updateSelectedFloorMaterial: this.updateSelectedFloorMaterial,
      updateSelectedCeilingMaterial: this.updateSelectedCeilingMaterial,

      selectedFloorMaterial: this.state.selectedFloorMaterial,
      selectedCeilingMaterial: this.state.selectedCeilingMaterial,

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
