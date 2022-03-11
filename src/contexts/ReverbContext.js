import React from 'react';

const ReverbContext = React.createContext({
  customerName: '',
  projectName: '',
  date: '',
  height: 0,
  length: 0,
  width: 0,
  updateCustomerName: () => {},
  updateProjectName: () => {},
  updateDate: () => {},
  updateLength: () => {},
  updateWidth: () => {},
  updateHeight: () => {},
});

export default ReverbContext;
