import React, { Component } from 'react';

import TokenService from '../services/token-service';
import ApiService from '../services/api-service';

const ApiContext = React.createContext({
  customerName: '',
  projectName: '',
  date: '',
  height: 0,
  length: 0,
  width: 0,
  cLength: 0,
  cWidth: 0,
  wall1: { l: 0, h: 0 },
  wall2: { l: 0, h: 0 },
  wall3: { l: 0, h: 0 },
  wall4: { l: 0, h: 0 },
  openings: [],
  door1: { l: 0, w: 0, qty: 0 },
  door2: { l: 0, w: 0, qty: 0 },
  window1: { l: 0, w: 0, qty: 0 },
  window2: { l: 0, w: 0, qty: 0 },
  opening1: { l: 0, w: 0, qty: 0 },
  opening2: { l: 0, w: 0, qty: 0 },
  other: { l: 0, w: 0, qty: 0 },
  updateDoor1: () => {},
  updateDoor2: () => {},
  updateWindow1: () => {},
  updateWindow2: () => {},
  updateOpening1: () => {},
  updateOpening2: () => {},
  updateOther: () => {},
  updateCustomerName: () => {},
  updateProjectName: () => {},
  updateDate: () => {},
  updateLength: () => {},
  updateWidth: () => {},
  updateHeight: () => {},
  updateCeilingLength: () => {},
  updateCeilingWidth: () => {},
  updateWall1Height: () => {},
  updateWall1Length: () => {},
  updateWall2Height: () => {},
  updateWall2Length: () => {},
  updateWall3Height: () => {},
  updateWall3Length: () => {},
  updateWall4Height: () => {},
  updateWall4Length: () => {},

  floorMaterials: [], ///--- Final values
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
  wall1sqft: 0,
  wall2sqft: 0,
  wall3sqft: 0,
  wall4sqft: 0,

  selectedOtherMaterial: 0,
  selectedOther1Material: 0,
  selectedOther2Material: 0,
  selectedOther3Material: 0,
  selectedOther4Material: 0,
  selectedOther5Material: 0,
  selectedOther6Material: 0,
  selectedOther7Material: 0,
  selectedOther8Material: 0,
  other1sqft: 0,
  other2sqft: 0,
  other3sqft: 0,
  other4sqft: 0,
  other5sqft: 0,
  other6sqft: 0,
  other7sqft: 0,
  other8sqft: 0,

  selectedCeilingProduct: 0,
  selectedCeiling1Product: 0,
  selectedCeiling2Product: 0,
  selectedCeiling3Product: 0,
  ceilingProd1sqft: 0,
  ceilingProd2sqft: 0,
  ceilingProd3sqft: 0,
  ceilingProd4sqft: 0,

  selectedBaffleUnit: 0,
  selectedBaffle1Unit: 0,
  selectedBaffle2Unit: 0,
  selectedBaffle3Unit: 0,
  baffle1sqft: 0,
  baffle2sqft: 0,
  baffle3sqft: 0,
  baffle4sqft: 0,

  selectedWallProduct: 0,
  selectedWall1Product: 0,
  selectedWall2Product: 0,
  selectedWall3Product: 0,
  selectedWall4Product: 0,
  selectedWall5Product: 0,
  selectedWall6Product: 0,
  selectedWall7Product: 0,
  selectedWall8Product: 0,
  wallProd1sqft: 0,
  wallProd2sqft: 0,
  wallProd3sqft: 0,
  wallProd4sqft: 0,
  wallProd5sqft: 0,
  wallProd6sqft: 0,
  wallProd7sqft: 0,
  wallProd8sqft: 0,

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
  updateSelectedWall1Material: () => {},
  updateSelectedWall2Material: () => {},
  updateSelectedWall3Material: () => {},
  updateSelectedWall4Material: () => {},

  updateWall1sqft: () => {},

  updateSelectedOtherMaterial: () => {},
  updateSelectedOther1Material: () => {},
  updateSelectedOther2Material: () => {},
  updateSelectedOther3Material: () => {},
  updateSelectedOther4Material: () => {},
  updateSelectedOther5Material: () => {},
  updateSelectedOther6Material: () => {},
  updateSelectedOther7Material: () => {},

  updateSelectedCeilingProduct: () => {},
  updateSelectedCeiling1Product: () => {},
  updateSelectedCeiling2Product: () => {},
  updateSelectedCeiling3Product: () => {},

  updateSelectedBaffleUnit: () => {},
  updateSelected1BaffleUnit: () => {},
  updateSelected2BaffleUnit: () => {},
  updateSelected3BaffleUnit: () => {},

  updateSelectedReverbTime: () => {},

  updateSelectedWall1Product: () => {},
  updateSelectedWall2Product: () => {},
  updateSelectedWall3Product: () => {},
  updateSelectedWall4Product: () => {},

  updateSelectedTreatments: () => {},
  clearSelectedTreatments: () => {},

  clearAll: () => {},

  getExistingSabines: () => {},
  getTreamentSabines: () => {},
});

export default ApiContext;

export class ApiProvider extends Component {
  state = {
    customerName: '',
    projectName: '',
    date: '',
    length: 0,
    width: 0,
    height: 0,
    cLength: 0,
    cWidth: 0,
    openings: [],
    wall1: { l: 0, h: 0, sqft: 0 },
    wall2: { l: 0, h: 0, sqft: 0 },
    wall3: { l: 0, h: 0, sqft: 0 },
    wall4: { l: 0, h: 0, sqft: 0 },
    door1: { l: 0, w: 0, qty: 0, sqft: 0 },
    door2: { l: 0, w: 0, qty: 0, sqft: 0 },
    window1: { l: 0, w: 0, qty: 0, sqft: 0 },
    window2: { l: 0, w: 0, qty: 0, sqft: 0 },
    opening1: { l: 0, w: 0, qty: 0, sqft: 0 },
    opening2: { l: 0, w: 0, qty: 0, sqft: 0 },
    other: { l: 0, w: 0, qty: 0, sqft: 0 },

    loggedIn: TokenService.hasAuthToken(),
    loggedInUser: TokenService.getUsernameFromToken(),
    error: null,
    selectedFloorMaterial: 0,
    selectedCeilingMaterial: 0,

    selectedWallMaterial: 0,
    selectedWall1Material: 0,
    selectedWall2Material: 0,
    selectedWall3Material: 0,
    selectedWall4Material: 0,
    wall1sqft: 0,
    wall2sqft: 0,
    wall3sqft: 0,
    wall4sqft: 0,

    selectedOtherMaterial: 0,
    selectedOther1Material: 0,
    selectedOther2Material: 0,
    selectedOther3Material: 0,
    selectedOther4Material: 0,
    selectedOther5Material: 0,
    selectedOther6Material: 0,
    selectedOther7Material: 0,
    selectedOther8Material: 0,
    other1sqft: 0,
    other2sqft: 0,
    other3sqft: 0,
    other4sqft: 0,
    other5sqft: 0,
    other6sqft: 0,
    other7sqft: 0,
    other8sqft: 0,

    selectedCeilingProduct: 0,
    selectedCeiling1Product: 0,
    selectedCeiling2Product: 0,
    selectedCeiling3Product: 0,
    ceilingProd1sqft: 0,
    ceilingProd2sqft: 0,
    ceilingProd3sqft: 0,
    ceilingProd4sqft: 0,

    selectedBaffleUnit: 0,
    selectedBaffle1Unit: 0,
    selectedBaffle2Unit: 0,
    selectedBaffle3Unit: 0,
    baffle1sqft: 0,
    baffle2sqft: 0,
    baffle3sqft: 0,
    baffle4sqft: 0,

    selectedWall1Product: 0,
    selectedWall2Product: 0,
    selectedWall3Product: 0,
    selectedWall4Product: 0,
    selectedWall5Product: 0,
    selectedWall6Product: 0,
    selectedWall7Product: 0,
    selectedWall8Product: 0,
    wallProd1sqft: 0,
    wallProd2sqft: 0,
    wallProd3sqft: 0,
    wallProd4sqft: 0,
    wallProd5sqft: 0,
    wallProd6sqft: 0,
    wallProd7sqft: 0,
    wallProd8sqft: 0,

    selectedReverbTime: 0,

    selectedTreatments: [],
  };

  updateOpenings = (o) => {
    this.setState({ openings: o });
  };

  updateDoor1 = (o) => {
    this.setState({ door1: o });
  };
  updateDoor2 = (o) => {
    this.setState({ door2: o });
  };

  updateWindow1 = (o) => {
    this.setState({ window1: o });
  };
  updateWindow2 = (o) => {
    this.setState({ window2: o });
  };

  updateOpening1 = (o) => {
    this.setState({ opening1: o });
  };
  updateOpening2 = (o) => {
    this.setState({ opening2: o });
  };

  updateOther = (o) => {
    this.setState({ other: o });
  };

  updateWall1Height = (h) => {
    this.setState({ wall1: { l: this.state.wall1.l, h: h } });
    this.updateWall1sqft(this.state.wall1.l * this.state.wall1.h);
  };
  updateWall1Length = (l) => {
    this.setState({ wall1: { l: l, h: this.state.wall1.h } });
    this.updateWall1sqft(this.state.wall1.l * this.state.wall1.h);
  };

  updateWall2Height = (h) => {
    this.setState({ wall2: { l: this.state.wall2.l, h: h } });
  };
  updateWall2Length = (l) => {
    this.setState({ wall2: { l: l, h: this.state.wall2.h } });
  };

  updateWall3Height = (h) => {
    this.setState({ wall3: { l: this.state.wall3.l, h: h } });
  };
  updateWall3Length = (l) => {
    this.setState({ wall3: { l: l, h: this.state.wall3.h } });
  };

  updateWall4Height = (h) => {
    this.setState({ wall4: { l: this.state.wall4.l, h: h } });
  };
  updateWall4Length = (l) => {
    this.setState({ wall4: { l: l, h: this.state.wall4.h } });
  };

  updateCeilingWidth = (cWidth) => {
    this.setState({ cWidth: cWidth });
  };

  updateCeilingLength = (cLength) => {
    this.setState({ cLength: cLength });
  };

  updateCustomerName = (name) => {
    this.setState({ customerName: name });
  };

  updateProjectName = (name) => {
    this.setState({ projectName: name });
  };

  updateDate = (date) => {
    this.setState({ date: date });
  };

  updateHeight = (height) => {
    this.setState({ height: height });
  };

  updateWidth = (width) => {
    this.setState({ width: width });
  };

  updateLength = (length) => {
    this.setState({ length: length });
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

  updateSelectedCeiling1Material = (mat, sqft) => {
    this.setState({ selectedCeiling1Material: { prod: mat, sq: sqft } });
  };
  updateSelectedCeiling2Material = (mat, sqft) => {
    this.setState({ selectedCeiling2Material: { prod: mat, sq: sqft } });
  };
  updateSelectedCeiling3Material = (mat, sqft) => {
    this.setState({ selectedCeiling3Material: { prod: mat, sq: sqft } });
  };

  updateSelectedWall1Material = (mat) => {
    this.setState({ selectedWall1Material: mat });
  };
  updateSelectedWall2Material = (mat, sqft) => {
    this.setState({ selectedWall2Material: mat });
  };
  updateSelectedWall3Material = (mat, sqft) => {
    this.setState({ selectedWall3Material: mat });
  };
  updateSelectedWall4Material = (mat, sqft) => {
    this.setState({ selectedWall4Material: mat });
  };

  updateWall1sqft = (sqft) => {
    this.setState({ wall1sqft: sqft });
  };
  updateWall2sqft = (sqft) => {
    this.setState({ wall2sqft: sqft });
  };
  updateWall3sqft = (sqft) => {
    this.setState({ wall3sqft: sqft });
  };
  updateWall4sqft = (sqft) => {
    this.setState({ wall4sqft: sqft });
  };

  updateSelectedOtherMaterial = (mat, sqft) => {
    this.setState({ selectedOtherMaterial: { prod: mat, sq: sqft } });
  };
  updateSelectedOther1Material = (mat, sqft) => {
    this.setState({ selectedOtherMaterial: { prod: mat, sq: sqft } });
  };
  updateSelectedOther2Material = (mat, sqft) => {
    this.setState({ selectedOtherMaterial: { prod: mat, sq: sqft } });
  };
  updateSelectedOther3Material = (mat, sqft) => {
    this.setState({ selectedOtherMaterial: { prod: mat, sq: sqft } });
  };
  updateSelectedOther4Material = (mat, sqft) => {
    this.setState({ selectedOtherMaterial: { prod: mat, sq: sqft } });
  };
  updateSelectedOther5Material = (mat, sqft) => {
    this.setState({ selectedOtherMaterial: { prod: mat, sq: sqft } });
  };
  updateSelectedOther6Material = (mat, sqft) => {
    this.setState({ selectedOtherMaterial: { prod: mat, sq: sqft } });
  };
  updateSelectedOther7Material = (mat, sqft) => {
    this.setState({ selectedOtherMaterial: { prod: mat, sq: sqft } });
  };
  updateSelectedOther8Material = (mat, sqft) => {
    this.setState({ selectedOtherMaterial: { prod: mat, sq: sqft } });
  };

  updateSelectedCeilingProduct = (mat) => {
    this.setState({ selectedCeilingProduct: mat });
  };
  updateSelectedCeiling1Product = (mat, sqft) => {
    this.setState({ selectedCeiling1Product: { prod: mat, sq: sqft } });
  };
  updateSelectedCeiling2Product = (mat, sqft) => {
    this.setState({ selectedCeiling2Product: { prod: mat, sq: sqft } });
  };
  updateSelectedCeiling3Product = (mat, sqft) => {
    this.setState({ selectedCeiling3Product: { prod: mat, sq: sqft } });
  };

  updateSelectedBaffleUnit = (mat) => {
    this.setState({ selectedBaffleUnit: mat });
  };
  updateSelectedBaffleUnit1 = (mat, sqft) => {
    this.setState({ selectedBaffleUnit: { prod: mat, sq: sqft } });
  };
  updateSelectedBaffleUnit2 = (mat, sqft) => {
    this.setState({ selectedBaffleUnit: { prod: mat, sq: sqft } });
  };
  updateSelectedBaffleUnit3 = (mat, sqft) => {
    this.setState({ selectedBaffleUnit: { prod: mat, sq: sqft } });
  };

  updateSelectedWallProduct = (mat) => {
    this.setState({ selectedWallProduct: mat });
  };

  updateSelectedWall1Product = (mat) => {
    this.setState({ selectedWallProduct: mat });
  };

  updateSelectedWall2Product = (mat, sqft) => {
    this.setState({ selectedWallProduct: { prod: mat, sq: sqft } });
  };

  updateSelectedWall3Product = (mat, sqft) => {
    this.setState({ selectedWallProduct: { prod: mat, sq: sqft } });
  };

  updateSelectedWall4Product = (mat, sqft) => {
    this.setState({ selectedWallProduct: { prod: mat, sq: sqft } });
  };

  updateSelectedWall5Product = (mat, sqft) => {
    this.setState({ selectedWallProduct: { prod: mat, sq: sqft } });
  };

  updateSelectedWall6Product = (mat, sqft) => {
    this.setState({ selectedWallProduct: { prod: mat, sq: sqft } });
  };

  updateSelectedWall7Product = (mat, sqft) => {
    this.setState({ selectedWallProduct: { prod: mat, sq: sqft } });
  };

  updateSelectedWall8Product = (mat, sqft) => {
    this.setState({ selectedWallProduct: { prod: mat, sq: sqft } });
  };

  render() {
    const value = {
      customerName: this.state.customerName,
      projectName: this.state.projectName,
      date: this.state.date,
      height: this.state.height,
      width: this.state.width,
      length: this.state.length,
      cWidth: this.state.cWidth,
      cLength: this.state.cLength,
      wall1: this.state.wall1,
      wall2: this.state.wall2,
      wall3: this.state.wall3,
      wall4: this.state.wall4,
      door1: this.state.door1,
      door2: this.state.door2,
      window1: this.state.window1,
      window2: this.state.window2,
      opening1: this.state.opening1,
      opening2: this.state.opening2,
      other: this.state.other,
      updateDoor1: this.updateDoor1,
      updateDoor2: this.updateDoor2,
      updateWindow1: this.updateWindow1,
      updateWindow2: this.updateWindow2,
      updateOpening1: this.updateOpening1,
      updateOpening2: this.updateOpening2,
      updateOther: this.updateOther,
      updateCustomerName: this.updateCustomerName,
      updateProjectName: this.updateProjectName,
      updateDate: this.updateDate,
      updateHeight: this.updateHeight,
      updateWidth: this.updateWidth,
      updateLength: this.updateLength,
      updateCeilingLength: this.updateCeilingLength,
      updateCeilingWidth: this.updateCeilingWidth,
      updateWall1Height: this.updateWall1Height,
      updateWall1Length: this.updateWall1Length,
      updateWall2Height: this.updateWall2Height,
      updateWall2Length: this.updateWall2Length,
      updateWall3Height: this.updateWall3Height,
      updateWall3Length: this.updateWall3Length,
      updateWall4Height: this.updateWall4Height,
      updateWall4Length: this.updateWall4Length,

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
      updateSelectedOther1Material: this.updateSelectedOther1Material,
      updateSelectedOther2Material: this.updateSelectedOther2Material,
      updateSelectedOther3Material: this.updateSelectedOther3Material,
      updateSelectedOther4Material: this.updateSelectedOther4Material,
      updateSelectedOther5Material: this.updateSelectedOther5Material,
      updateSelectedOther6Material: this.updateSelectedOther6Material,
      updateSelectedOther7Material: this.updateSelectedOther7Material,
      updateSelectedOther8Material: this.updateSelectedOther8Material,

      updateSelectedBaffleUnit: this.updateSelectedBaffleUnit,
      updateSelectedBaffleUnit1: this.updateSelectedBaffleUnit1,
      updateSelectedBaffleUnit2: this.updateSelectedBaffleUnit2,
      updateSelectedBaffleUnit3: this.updateSelectedBaffleUnit3,

      updateSelectedCeilingProduct: this.updateSelectedCeilingProduct,
      updateSelectedCeiling1Product: this.updateSelectedCeiling1Product,
      updateSelectedCeiling2Product: this.updateSelectedCeiling2Product,
      updateSelectedCeiling3Product: this.updateSelectedCeiling3Product,

      updateSelectedWall1Product: this.updateSelectedWall1Product,
      updateSelectedWall2Product: this.updateSelectedWall2Product,
      updateSelectedWall3Product: this.updateSelectedWall3Product,
      updateSelectedWall4Product: this.updateSelectedWall4Product,
      updateSelectedWall5Product: this.updateSelectedWall5Product,
      updateSelectedWall6Product: this.updateSelectedWall6Product,
      updateSelectedWall7Product: this.updateSelectedWall7Product,
      updateSelectedWall8Product: this.updateSelectedWall8Product,

      updateSelectedReverbTime: this.updateSelectedReverbTime,

      selectedFloorMaterial: this.state.selectedFloorMaterial,
      selectedCeilingMaterial: this.state.selectedCeilingMaterial,

      selectedWall1Material: this.state.selectedWall1Material,
      selectedWall2Material: this.state.selectedWall2Material,
      selectedWall3Material: this.state.selectedWall3Material,
      selectedWall4Material: this.state.selectedWall4Material,
      wall1sqft: this.state.wall1sqft,
      wall2sqft: this.state.wall2sqft,
      wall3sqft: this.state.wall3sqft,
      wall4sqft: this.state.wall4sqft,

      selectedOther1Material: this.state.selectedOther1Material,
      selectedOther2Material: this.state.selectedOther2Material,
      selectedOther3Material: this.state.selectedOther3Material,
      selectedOther4Material: this.state.selectedOther4Material,
      selectedOther5Material: this.state.selectedOther5Material,
      selectedOther6Material: this.state.selectedOther6Material,
      selectedOther7Material: this.state.selectedOther7Material,
      selectedOther8Material: this.state.selectedOtherM8aterial,
      other1sqft: this.state.other1sqft,
      other2sqft: this.state.other2sqft,
      other3sqft: this.state.other3sqft,
      other4sqft: this.state.other4sqft,
      other5sqft: this.state.other5sqft,
      other6sqft: this.state.other6sqft,
      other7sqft: this.state.other7sqft,
      other8sqft: this.state.other8sqft,

      selectedCeiling1Product: this.state.selectedCeiling1Product,
      selectedCeiling2Product: this.state.selectedCeiling2Product,
      selectedCeiling3Product: this.state.selectedCeiling3Product,
      ceilingProd1sqft: this.state.ceilingProd1sqft,
      ceilingProd2sqft: this.state.ceilingProd1sqft,
      ceilingProd3sqft: this.state.ceilingProd1sqft,

      selectedBaffleUnit1: this.state.selectedBaffleUnit1,
      selectedBaffleUnit2: this.state.selectedBaffleUnit2,
      selectedBaffleUnit3: this.state.selectedBaffleUnit3,
      baffle1sqft: this.state.baffle1sqft,
      baffle2sqft: this.state.baffle2sqft,
      baffle3sqft: this.state.baffle3sqft,

      selectedWall1Product: this.state.selectedWall1Product,
      selectedWall2Product: this.state.selectedWall2Product,
      selectedWall3Product: this.state.selectedWall3Product,
      wallProd1sqft: this.state.wallProd1sqft,
      wallProd2sqft: this.state.wallProd2sqft,
      wallProd3sqft: this.state.wallProd3sqft,

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

      updateWall1sqft: this.updateWall1sqft,
      updateWall2sqft: this.updateWall2sqft,
      updateWall3sqft: this.updateWall3sqft,
      updateWall4sqft: this.updateWall4sqft,
    };

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
