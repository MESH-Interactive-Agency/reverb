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

  selectedWall1Material: 0,
  selectedWall2Material: 0,
  selectedWall3Material: 0,
  selectedWall4Material: 0,

  selectedOtherMaterial: 0,
  selectedCeilingProduct: 0,
  selectedBaffleUnit: 0,
  selectedWallProduct: 0,

  selectedTreatments: [],

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
  updateSelectedReverbTime: () => {},

  updateSelectedWall1Product: () => {},
  updateSelectedWall2Product: () => {},
  updateSelectedWall3Product: () => {},
  updateSelectedWall4Product: () => {},

  updateSelectedTreatments: () => {},
  clearSelectedTreatments: () => {},

  getExistingSabines: () => {},
});

export default ApiContext;

export class ApiProvider extends Component {
  state = {
    loggedIn: TokenService.hasAuthToken(),
    loggedInUser: TokenService.getUsernameFromToken(),
    error: null,
    selectedFloorMaterial: 0,
    selectedCeilingMaterial: 0,
    selectedWall1Material: 0,
    selectedWall2Material: 0,
    selectedWall3Material: 0,
    selectedWall4Material: 0,
    selectedOtherMaterial: 0,
    selectedCeilingProduct: 0,
    selectedBaffleUnit: 0,
    selectedWallProduct: 0,
    selectedReverbTime: 0,

    selectedTreatments: [],
  };

  getExistingSabines = () => {
    this.getFloorMaterials();
    this.getCeilingMaterials();
    this.getWallMaterials();
    this.getOtherMaterials();

    return 0;
  };

  updateSelectedTreatments = () => {
    let updatedTreatments = [];
    this.setState({
      selectedTreatments: updatedTreatments,
    });
  };

  clearSelectedTreatments = () => {
    this.setState({
      selectedTreatments: [],
    });
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

  updateSelectedWall1Material = (mat) => {
    this.setState({ selectedWall1Material: mat });
  };
  updateSelectedWall2Material = (mat) => {
    this.setState({ selectedWall2Material: mat });
  };
  updateSelectedWall3Material = (mat) => {
    this.setState({ selectedWall3Material: mat });
  };
  updateSelectedWall4Material = (mat) => {
    this.setState({ selectedWall4Material: mat });
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

      getExistingSabines: this.getExistingSabines,

      updateSelectedFloorMaterial: this.updateSelectedFloorMaterial,
      updateSelectedCeilingMaterial: this.updateSelectedCeilingMaterial,
      updateSelectedWall1Material: this.updateSelectedWall1Material,
      updateSelectedWall2Material: this.updateSelectedWall2Material,
      updateSelectedWall3Material: this.updateSelectedWall3Material,
      updateSelectedWall4Material: this.updateSelectedWall4Material,
      updateSelectedOtherMaterial: this.updateSelectedOtherMaterial,
      updateSelectedBaffleUnit: this.updateSelectedBaffleUnit,
      updateSelectedCeilingProduct: this.updateSelectedCeilingProduct,
      updateSelectedWallProduct: this.updateSelectedWallProduct,
      updateSelectedReverbTime: this.updateSelectedReverbTime,

      selectedFloorMaterial: this.state.selectedFloorMaterial,
      selectedCeilingMaterial: this.state.selectedCeilingMaterial,

      selectedWall1Material: this.state.selectedWall1Material,
      selectedWall2Material: this.state.selectedWall2Material,
      selectedWall3Material: this.state.selectedWall3Material,
      selectedWall4Material: this.state.selectedWall4Material,

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

      selectedTreatments: this.selectedTreatments,
      updateSelectedTreatments: this.updateSelectedTreatments,
      clearTreatments: this.clearTreatments,
    };

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
