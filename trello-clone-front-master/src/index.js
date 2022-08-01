import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MaterailThemeProvider } from '@material-ui/styles';

import App from './App';
import store from './redux/store';

import styledTheme from './ui/themes/StyledComponentThemeProvider';
import materialTheme from './ui/themes/MaterialThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledThemeProvider theme={styledTheme}>
          <MaterailThemeProvider theme={materialTheme}>
            <App />
          </MaterailThemeProvider>
        </StyledThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
