import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <StyledEngineProvider injjectFirst>
      <App />
    </StyledEngineProvider>,
  </Router>,
  document.getElementById('root')
);


reportWebVitals();



