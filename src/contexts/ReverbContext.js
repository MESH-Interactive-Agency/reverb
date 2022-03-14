import React from 'react';

const ReverbContext = React.createContext({
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
});

export default ReverbContext;
