import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from './contexts/ApiContext';
import { ReverbContextProvider } from './contexts/ReverbContext';
import App from './routes/App';

ReactDOM.render(
  <BrowserRouter>
    <ApiProvider>
      {/* <ReverbContextProvider> */}
        <App />
      {/* </ReverbContextProvider> */}
    </ApiProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
