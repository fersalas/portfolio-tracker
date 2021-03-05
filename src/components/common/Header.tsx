import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const HeaderZIndex = 1400;

const Header: React.FC = () => {
  return (
    <AppBar style={{ zIndex: HeaderZIndex }} position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Portfolio Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
