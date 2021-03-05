import React from 'react';
import ReactDOM from 'react-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {
  createMuiTheme,
  Theme,
  ThemeProvider,
} from '@material-ui/core/styles';

const theme: Theme = createMuiTheme();

import { App } from './components/common';

const Root = () => (
  <ScopedCssBaseline>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ScopedCssBaseline>
);

ReactDOM.render(<Root />, document.getElementById('root'));
