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
  updateCustomerName: () => {},
  updateProjectName: () => {},
  updateDate: () => {},
  updateLength: () => {},
  updateWidth: () => {},
  updateHeight: () => {},
  updateCeilingLength: () => {},
  updateCeilingWidth: () => {},
});

export default ReverbContext;
