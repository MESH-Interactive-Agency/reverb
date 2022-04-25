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
  wall1sqft: 0,
  wall2sqft: 0,
  wall3sqft: 0,
  wall4sqft: 0,

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

  selectedCeiling1Product: 0,
  selectedCeiling2Product: 0,
  selectedCeiling3Product: 0,
  selectedCeiling4Product: 0,
  ceilingProd1sqft: 0,
  ceilingProd2sqft: 0,
  ceilingProd3sqft: 0,
  ceilingProd4sqft: 0,

  selectedBaffle1Unit: 0,
  selectedBaffle2Unit: 0,
  selectedBaffle3Unit: 0,
  baffle1sqft: 0,
  baffle2sqft: 0,
  baffle3sqft: 0,

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

  loggedIn: TokenService.hasAuthToken(),
  loggedInUser: () => {},
  setLogin: () => {},
  setLogout: () => {},
  setError: () => {},
  clearError: () => {},

  updateSelectedReverbTime: () => {},
  updateSelectedFloorMaterial: () => {},
  updateSelectedCeilingMaterial: () => {},

  updateSelectedWall1Material: () => {},
  updateSelectedWall2Material: () => {},
  updateSelectedWall3Material: () => {},
  updateSelectedWall4Material: () => {},
  updateWall1sqft: () => {},
  updateWall2sqft: () => {},
  updateWall3sqft: () => {},
  updateWall4sqft: () => {},

  updateSelectedOther1Material: () => {},
  updateSelectedOther2Material: () => {},
  updateSelectedOther3Material: () => {},
  updateSelectedOther4Material: () => {},
  updateSelectedOther5Material: () => {},
  updateSelectedOther6Material: () => {},
  updateSelectedOther7Material: () => {},
  updateSelectedOther8Material: () => {},
  updateOther1sqft: () => {},
  updateOther2sqft: () => {},
  updateOther3sqft: () => {},
  updateOther4sqft: () => {},
  updateOther5sqft: () => {},
  updateOther6sqft: () => {},
  updateOther7sqft: () => {},
  updateOther8sqft: () => {},

  updateSelectedCeiling1Product: () => {},
  updateSelectedCeiling2Product: () => {},
  updateSelectedCeiling3Product: () => {},
  updateSelectedCeiling4Product: () => {},
  updateCeilingProd1sqft: () => {},
  updateCeilingProd2sqft: () => {},
  updateCeilingProd3sqft: () => {},
  updateCeilingProd4sqft: () => {},

  updateSelectedBaffleUnit1: () => {},
  updateSelectedBaffleUnit2: () => {},
  updateSelectedBaffleUnit3: () => {},
  updateBaffle1sqft: () => {},
  updateBaffle2sqft: () => {},
  updateBaffle3sqft: () => {},

  updateSelectedWall1Product: () => {},
  updateSelectedWall2Product: () => {},
  updateSelectedWall3Product: () => {},
  updateSelectedWall4Product: () => {},
  updateSelectedWall5Product: () => {},
  updateSelectedWall6Product: () => {},
  updateSelectedWall7Product: () => {},
  updateSelectedWall8Product: () => {},
  updateWallProd1sqft: () => {},
  updateWallProd2sqft: () => {},
  updateWallProd3sqft: () => {},
  updateWallProd4sqft: () => {},
  updateWallProd5sqft: () => {},
  updateWallProd6sqft: () => {},
  updateWallProd7sqft: () => {},
  updateWallProd8sqft: () => {},

  clearAll: () => {}, //<----- NYI

  getExistingSabines: () => {},
  getTreamentSabines: () => {},

  floorMatTotal: {},
  ceilingMatTotal: {},
  wallMatTotal: {},
  otherMatTotal: {},
  ceilingProdTotal: {},
  wallProdTotal: {},
  baffleTotal: {},

  updateFloorMatTotal: () => {},
  updateCeilingMatTotal: () => {},
  updateWallMatTotal: () => {},
  updateOtherMatTotal: () => {},
  updateCeilingProdTotal: () => {},
  updateWallProdTotal: () => {},
  updateBaffleTotal: () => {},
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
    wall1: { l: 0, h: 0 },
    wall2: { l: 0, h: 0 },
    wall3: { l: 0, h: 0 },
    wall4: { l: 0, h: 0 },

    loggedIn: TokenService.hasAuthToken(),
    loggedInUser: TokenService.getUsernameFromToken(),
    error: null,
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

    selectedCeiling1Product: 0,
    selectedCeiling2Product: 0,
    selectedCeiling3Product: 0,
    selectedCeiling4Product: 0,
    ceilingProd1sqft: 0,
    ceilingProd2sqft: 0,
    ceilingProd3sqft: 0,
    ceilingProd4sqft: 0,

    selectedBaffle1Unit: 0,
    selectedBaffle2Unit: 0,
    selectedBaffle3Unit: 0,
    baffle1sqft: 0,
    baffle2sqft: 0,
    baffle3sqft: 0,

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

    floorMatTotal: {
      hz125: 0,
      hz250: 0,
      hz500: 0,
      hz1000: 0,
      hz2000: 0,
      hz4000: 0,
      nrc: 0,
    },
    ceilingMatTotal: {
      hz125: 0,
      hz250: 0,
      hz500: 0,
      hz1000: 0,
      hz2000: 0,
      hz4000: 0,
      nrc: 0,
    },
    wallMatTotal: {
      hz125: 0,
      hz250: 0,
      hz500: 0,
      hz1000: 0,
      hz2000: 0,
      hz4000: 0,
      nrc: 0,
    },
    otherMatTotal: {
      hz125: 0,
      hz250: 0,
      hz500: 0,
      hz1000: 0,
      hz2000: 0,
      hz4000: 0,
      nrc: 0,
    },
    ceilingProdTotal: {
      hz125: 0,
      hz250: 0,
      hz500: 0,
      hz1000: 0,
      hz2000: 0,
      hz4000: 0,
      nrc: 0,
    },
    wallProdTotal: {
      hz125: 0,
      hz250: 0,
      hz500: 0,
      hz1000: 0,
      hz2000: 0,
      hz4000: 0,
      nrc: 0,
    },
    baffleTotal: {
      hz125: 0,
      hz250: 0,
      hz500: 0,
      hz1000: 0,
      hz2000: 0,
      hz4000: 0,
      nrc: 0,
    },
  };

  updateFloorMatTotal = (t) => {
    this.setState({
      floorMatTotal: {
        hz125: t.hz125,
        hz250: t.hz250,
        hz500: t.hz500,
        hz1000: t.hz1000,
        hz2000: t.hz2000,
        hz4000: t.hz4000,
        nrc: t.nrc,
      },
    });
  };
  updateCeilingMatTotal = (t) => {
    this.setState({
      ceilingMatTotal: {
        hz125: t.hz125,
        hz250: t.hz250,
        hz500: t.hz500,
        hz1000: t.hz1000,
        hz2000: t.hz2000,
        hz4000: t.hz4000,
        nrc: t.nrc,
      },
    });
  };
  updateWallMatTotal = (t) => {
    this.setState({
      wallMatTotal: {
        hz125: t.hz125,
        hz250: t.hz250,
        hz500: t.hz500,
        hz1000: t.hz1000,
        hz2000: t.hz2000,
        hz4000: t.hz4000,
        nrc: t.nrc,
      },
    });
  };
  updateOtherMatTotal = (t) => {
    this.setState({
      otherMatTotal: {
        hz125: t.hz125,
        hz250: t.hz250,
        hz500: t.hz500,
        hz1000: t.hz1000,
        hz2000: t.hz2000,
        hz4000: t.hz4000,
        nrc: t.nrc,
      },
    });
  };
  updateCeilingProdTotal = (t) => {
    this.setState({
      ceilingProdTotal: {
        hz125: t.hz125,
        hz250: t.hz250,
        hz500: t.hz500,
        hz1000: t.hz1000,
        hz2000: t.hz2000,
        hz4000: t.hz4000,
        nrc: t.nrc,
      },
    });
  };
  updateWallProdTotal = (t) => {
    this.setState({
      wallProdTotal: {
        hz125: t.hz125,
        hz250: t.hz250,
        hz500: t.hz500,
        hz1000: t.hz1000,
        hz2000: t.hz2000,
        hz4000: t.hz4000,
        nrc: t.nrc,
      },
    });
  };
  updateBaffleTotal = (t) => {
    this.setState({
      baffleTotal: {
        hz125: t.hz125,
        hz250: t.hz250,
        hz500: t.hz500,
        hz1000: t.hz1000,
        hz2000: t.hz2000,
        hz4000: t.hz4000,
        nrc: t.nrc,
      },
    });
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
    // this.getFloorMaterials();
    // this.getCeilingMaterials();
    // this.getWallMaterials();
    // this.getOtherMaterials();

    return 0;
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

  updateSelectedReverbTime = (num) => {
    this.setState({ selectedReverbTime: num });
  };

  updateSelectedFloorMaterial = (mat) => {
    this.setState({ selectedFloorMaterial: mat });
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

  updateSelectedOther1Material = (mat) => {
    this.setState({ selectedOther1Material: mat });
  };
  updateSelectedOther2Material = (mat) => {
    this.setState({ selectedOther2Material: mat });
  };
  updateSelectedOther3Material = (mat) => {
    this.setState({ selectedOther3Material: mat });
  };
  updateSelectedOther4Material = (mat) => {
    this.setState({ selectedOther4Material: mat });
  };
  updateSelectedOther5Material = (mat) => {
    this.setState({ selectedOther5Material: mat });
  };
  updateSelectedOther6Material = (mat) => {
    this.setState({ selectedOther6Material: mat });
  };
  updateSelectedOther7Material = (mat) => {
    this.setState({ selectedOther7Material: mat });
  };
  updateSelectedOther8Material = (mat) => {
    this.setState({ selectedOther8Material: mat });
  };

  updateOther1sqft = (sqft) => {
    this.setState({ other1sqft: sqft });
  };
  updateOther2sqft = (sqft) => {
    this.setState({ other2sqft: sqft });
  };
  updateOther3sqft = (sqft) => {
    this.setState({ other3sqft: sqft });
  };
  updateOther4sqft = (sqft) => {
    this.setState({ other4sqft: sqft });
  };
  updateOther5sqft = (sqft) => {
    this.setState({ other5sqft: sqft });
  };
  updateOther6sqft = (sqft) => {
    this.setState({ other6sqft: sqft });
  };
  updateOther7sqft = (sqft) => {
    this.setState({ other7sqft: sqft });
  };
  updateOther8sqft = (sqft) => {
    this.setState({ other8sqft: sqft });
  };

  updateSelectedCeiling1Product = (mat) => {
    this.setState({ selectedCeiling1Product: mat });
  };
  updateSelectedCeiling2Product = (mat) => {
    this.setState({ selectedCeiling2Product: mat });
  };
  updateSelectedCeiling3Product = (mat) => {
    this.setState({ selectedCeiling3Product: mat });
  };
  updateSelectedCeiling4Product = (mat) => {
    this.setState({ selectedCeiling4Product: mat });
  };
  updateCeilingProd1sqft = (sqft) => {
    this.setState({ ceilingProd1sqft: sqft });
  };
  updateCeilingProd2sqft = (sqft) => {
    this.setState({ ceilingProd2sqft: sqft });
  };
  updateCeilingProd3sqft = (sqft) => {
    this.setState({ ceilingProd3sqft: sqft });
  };
  updateCeilingProd4sqft = (sqft) => {
    this.setState({ ceilingProd4sqft: sqft });
  };

  updateSelectedBaffleUnit1 = (mat) => {
    this.setState({ selectedBaffle1Unit: mat });
  };
  updateSelectedBaffleUnit2 = (mat) => {
    this.setState({ selectedBaffle2Unit: mat });
  };
  updateSelectedBaffleUnit3 = (mat) => {
    this.setState({ selectedBaffle3Unit: mat });
  };
  updateBaffle1sqft = (sqft) => {
    this.setState({ baffle1sqft: sqft });
  };
  updateBaffle2sqft = (sqft) => {
    this.setState({ baffle2sqft: sqft });
  };
  updateBaffle3sqft = (sqft) => {
    this.setState({ baffle3sqft: sqft });
  };

  updateSelectedWall1Product = (mat) => {
    this.setState({ selectedWall1Product: mat });
  };
  updateSelectedWall2Product = (mat) => {
    this.setState({ selectedWall2Product: mat });
  };
  updateSelectedWall3Product = (mat) => {
    this.setState({ selectedWall3Product: mat });
  };
  updateSelectedWall4Product = (mat) => {
    this.setState({ selectedWall4Product: mat });
  };
  updateSelectedWall5Product = (mat) => {
    this.setState({ selectedWall5Product: mat });
  };
  updateSelectedWall6Product = (mat) => {
    this.setState({ selectedWall6Product: mat });
  };
  updateSelectedWall7Product = (mat) => {
    this.setState({ selectedWall7Product: mat });
  };
  updateSelectedWall8Product = (mat) => {
    this.setState({ selectedWall8Product: mat });
  };
  updateWallProd1sqft = (sqft) => {
    this.setState({ wallProd1sqft: sqft });
  };
  updateWallProd2sqft = (sqft) => {
    this.setState({ wallProd2sqft: sqft });
  };
  updateWallProd3sqft = (sqft) => {
    this.setState({ wallProd3sqft: sqft });
  };
  updateWallProd4sqft = (sqft) => {
    this.setState({ wallProd4sqft: sqft });
  };
  updateWallProd5sqft = (sqft) => {
    this.setState({ wallProd5sqft: sqft });
  };
  updateWallProd6sqft = (sqft) => {
    this.setState({ wallProd6sqft: sqft });
  };
  updateWallProd7sqft = (sqft) => {
    this.setState({ wallProd7sqft: sqft });
  };
  updateWallProd8sqft = (sqft) => {
    this.setState({ wallProd8sqft: sqft });
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
      updateWall1sqft: this.updateWall1sqft,
      updateWall2sqft: this.updateWall2sqft,
      updateWall3sqft: this.updateWall3sqft,
      updateWall4sqft: this.updateWall4sqft,

      updateSelectedOther1Material: this.updateSelectedOther1Material,
      updateSelectedOther2Material: this.updateSelectedOther2Material,
      updateSelectedOther3Material: this.updateSelectedOther3Material,
      updateSelectedOther4Material: this.updateSelectedOther4Material,
      updateSelectedOther5Material: this.updateSelectedOther5Material,
      updateSelectedOther6Material: this.updateSelectedOther6Material,
      updateSelectedOther7Material: this.updateSelectedOther7Material,
      updateSelectedOther8Material: this.updateSelectedOther8Material,
      updateOther1sqft: this.updateOther1sqft,
      updateOther2sqft: this.updateOther2sqft,
      updateOther3sqft: this.updateOther3sqft,
      updateOther4sqft: this.updateOther4sqft,
      updateOther5sqft: this.updateOther5sqft,
      updateOther6sqft: this.updateOther6sqft,
      updateOther7sqft: this.updateOther7sqft,
      updateOther8sqft: this.updateOther8sqft,

      updateSelectedBaffleUnit1: this.updateSelectedBaffleUnit1,
      updateSelectedBaffleUnit2: this.updateSelectedBaffleUnit2,
      updateSelectedBaffleUnit3: this.updateSelectedBaffleUnit3,
      updateBaffle1sqft: this.updateBaffle1sqft,
      updateBaffle2sqft: this.updateBaffle2sqft,
      updateBaffle3sqft: this.updateBaffle3sqft,

      updateSelectedCeiling1Product: this.updateSelectedCeiling1Product,
      updateSelectedCeiling2Product: this.updateSelectedCeiling2Product,
      updateSelectedCeiling3Product: this.updateSelectedCeiling3Product,
      updateSelectedCeiling4Product: this.updateSelectedCeiling4Product,
      updateCeilingProd1sqft: this.updateCeilingProd1sqft,
      updateCeilingProd2sqft: this.updateCeilingProd2sqft,
      updateCeilingProd3sqft: this.updateCeilingProd3sqft,
      updateCeilingProd4sqft: this.updateCeilingProd4sqft,

      updateSelectedWall1Product: this.updateSelectedWall1Product,
      updateSelectedWall2Product: this.updateSelectedWall2Product,
      updateSelectedWall3Product: this.updateSelectedWall3Product,
      updateSelectedWall4Product: this.updateSelectedWall4Product,
      updateSelectedWall5Product: this.updateSelectedWall5Product,
      updateSelectedWall6Product: this.updateSelectedWall6Product,
      updateSelectedWall7Product: this.updateSelectedWall7Product,
      updateSelectedWall8Product: this.updateSelectedWall8Product,
      updateWallProd1sqft: this.updateWallProd1sqft,
      updateWallProd2sqft: this.updateWallProd2sqft,
      updateWallProd3sqft: this.updateWallProd3sqft,
      updateWallProd4sqft: this.updateWallProd4sqft,
      updateWallProd5sqft: this.updateWallProd5sqft,
      updateWallProd6sqft: this.updateWallProd6sqft,
      updateWallProd7sqft: this.updateWallProd7sqft,
      updateWallProd8sqft: this.updateWallProd8sqft,

      updateSelectedReverbTime: this.updateSelectedReverbTime,

      updateFloorMatTotal: this.updateFloorMatTotal,
      updateCeilingMatTotal: this.updateCeilingMatTotal,
      updateWallMatTotal: this.updateWallMatTotal,
      updateOtherMatTotal: this.updateOtherMatTotal,
      updateCeilingProdTotal: this.updateCeilingProdTotal,
      updateWallProdTotal: this.updateWallProdTotal,
      updateBaffleTotal: this.updateBaffleTotal,

      floorMatTotal: this.state.floorMatTotal,
      ceilingMatTotal: this.state.ceilingMatTotal,
      wallMatTotal: this.state.wallMatTotal,
      otherMatTotal: this.state.otherMatTotal,
      ceilingProdTotal: this.state.ceilingProdTotal,
      wallProdTotal: this.state.wallProdTotal,
      baffleTotal: this.state.baffleTotal,

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
      selectedOther8Material: this.state.selectedOther8Material,
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
      selectedCeiling4Product: this.state.selectedCeiling4Product,
      ceilingProd1sqft: this.state.ceilingProd1sqft,
      ceilingProd2sqft: this.state.ceilingProd2sqft,
      ceilingProd3sqft: this.state.ceilingProd3sqft,
      ceilingProd4sqft: this.state.ceilingProd4sqft,

      selectedBaffle1Unit: this.state.selectedBaffle1Unit,
      selectedBaffle2Unit: this.state.selectedBaffle2Unit,
      selectedBaffle3Unit: this.state.selectedBaffle3Unit,
      baffle1sqft: this.state.baffle1sqft,
      baffle2sqft: this.state.baffle2sqft,
      baffle3sqft: this.state.baffle3sqft,

      selectedWall1Product: this.state.selectedWall1Product,
      selectedWall2Product: this.state.selectedWall2Product,
      selectedWall3Product: this.state.selectedWall3Product,
      selectedWall4Product: this.state.selectedWall4Product,
      selectedWall5Product: this.state.selectedWall5Product,
      selectedWall6Product: this.state.selectedWall6Product,
      selectedWall7Product: this.state.selectedWall7Product,
      selectedWall8Product: this.state.selectedWall8Product,
      wallProd1sqft: this.state.wallProd1sqft,
      wallProd2sqft: this.state.wallProd2sqft,
      wallProd3sqft: this.state.wallProd3sqft,
      wallProd4sqft: this.state.wallProd4sqft,
      wallProd5sqft: this.state.wallProd5sqft,
      wallProd6sqft: this.state.wallProd6sqft,
      wallProd7sqft: this.state.wallProd7sqft,
      wallProd8sqft: this.state.wallProd8sqft,

      selectedReverbTime: this.state.selectedReverbTime,

      floorMaterials: this.state.floorMaterials,
      ceilingMaterials: this.state.ceilingMaterials,
      wallMaterials: this.state.wallMaterials,
      otherMaterials: this.state.otherMaterials,
      ceilingProducts: this.state.ceilingProducts,
      baffleUnits: this.state.baffleUnits,
      wallProducts: this.state.wallProducts,
      recommendedReverbTimes: this.state.recommendedReverbTimes,

      clearTreatments: this.clearTreatments,
    };

    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
