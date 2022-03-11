import React from 'react';

const ReverbContext = React.createContext({
  customerName: '',
  projectName: '',
  date: '',
  updateCustomerName: () => {},
  updateProjectName: () => {},
  updateDate: () => {},
});

export default ReverbContext;
