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
});

export default ReverbContext;
