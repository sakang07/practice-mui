import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function Header() {
  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <ElevationScroll>
      <AppBar position="fixed" color="secondary">
        <Toolbar>Arc Development</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
