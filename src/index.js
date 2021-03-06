import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from './contexts/ApiContext';
import App from './routes/App';

ReactDOM.render(
  <BrowserRouter>
    <ApiProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApiProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
