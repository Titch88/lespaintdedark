import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">Les paints de dark</Typography>
        <Typography style={{ marginLeft: 'auto' }}>
          Du pur skill sur paint...
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
