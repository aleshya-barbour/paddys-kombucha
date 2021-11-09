import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StyledEngineProvider injjectFirst>
    <App />
  </StyledEngineProvider>,
 
  document.getElementById('root')
);


reportWebVitals();



