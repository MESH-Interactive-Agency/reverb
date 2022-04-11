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
  recommendedReverbTimes: [],

  selectedReverbTime: 0,
  selectedFloorMaterial: 0,
  selectedCeilingMaterial: 0,
  selectedWallMaterial: 0,
  selectedOtherMaterial: 0,
  selectedCeilingProduct: 0,
  selectedBaffleUnit: 0,
  selectedWallProduct: 0,

  loggedIn: TokenService.hasAuthToken(),
  loggedInUser: () => {},
  setLogin: () => {},
  setLogout: () => {},
  setError: () => {},
  clearError: () => {},

  updateSelectedFloorMaterial: () => {},
  updateSelectedCeilingMaterial: () => {},
  updateSelectedWallMaterial: () => {},
  updateSelectedOtherMaterial: () => {},
  updateSelectedCeilingProduct: () => {},
  updateSelectedBaffleUnit: () => {},
  updateSelectedWallProduct: () => {},
  updateSelectedReverbTime: () => {},
});

export default ApiContext;

export class ApiProvider extends Component {
  state = {
    loggedIn: TokenService.hasAuthToken(),
    loggedInUser: TokenService.getUsernameFromToken(),
    error: null,
    selectedFloorMaterial: 0,
    selectedCeilingMaterial: 0,
    selectedWallMaterial: 0,
    selectedOtherMaterial: 0,
    selectedCeilingProduct: 0,
    selectedBaffleUnit: 0,
    selectedWallProduct: 0,
    selectedReverbTime: 0,
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

  getRecommendedReverbTimes = () => {
    ApiService.getRecommendedReverbTimes()
      .then((res) => {
        this.setState({
          recommendedReverbTimes: res,
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

  updateSelectedReverbTime = (num) => {
    this.setState({ selectedReverbTime: num });
  };

  updateSelectedCeilingMaterial = (mat) => {
    this.setState({ selectedCeilingMaterial: mat });
  };

  updateSelectedWallMaterial = (mat) => {
    this.setState({ selectedWallMaterial: mat });
  };

  updateSelectedOtherMaterial = (mat) => {
    this.setState({ selectedOtherMaterial: mat });
  };

  updateSelectedCeilingProduct = (mat) => {
    this.setState({ selectedCeilingProduct: mat });
  };

  updateSelectedBaffleUnit = (mat) => {
    this.setState({ selectedBaffleUnit: mat });
  };

  updateSelectedWallProduct = (mat) => {
    this.setState({ selectedWallProduct: mat });
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
      getRecommendedReverbTimes: this.getRecommendedReverbTimes,

      updateSelectedFloorMaterial: this.updateSelectedFloorMaterial,
      updateSelectedCeilingMaterial: this.updateSelectedCeilingMaterial,
      updateSelectedWallMaterial: this.updateSelectedWallMaterial,
      updateSelectedOtherMaterial: this.updateSelectedOtherMaterial,
      updateSelectedBaffleUnit: this.updateSelectedBaffleUnit,
      updateSelectedCeilingProduct: this.updateSelectedCeilingProduct,
      updateSelectedWallProduct: this.updateSelectedWallProduct,
      updateSelectedReverbTime: this.updateSelectedReverbTime,

      selectedFloorMaterial: this.state.selectedFloorMaterial,
      selectedCeilingMaterial: this.state.selectedCeilingMaterial,
      selectedWallMaterial: this.state.selectedWallMaterial,
      selectedOtherMaterial: this.state.selectedOtherMaterial,
      selectedCeilingProduct: this.state.selectedCeilingProduct,
      selectedBaffleUnit: this.state.selectedBaffleUnit,
      selectedWallProduct: this.state.selectedWallProduct,
      selectedReverbTime: this.state.selectedReverbTime,

      floorMaterials: this.state.floorMaterials,
      ceilingMaterials: this.state.ceilingMaterials,
      wallMaterials: this.state.wallMaterials,
      otherMaterials: this.state.otherMaterials,
      ceilingProducts: this.state.ceilingProducts,
      baffleUnits: this.state.baffleUnits,
      wallProducts: this.state.wallProducts,
      recommendedReverbTimes: this.state.recommendedReverbTimes,
    };

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
