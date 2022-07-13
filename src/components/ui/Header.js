import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import makeStyles from '@mui/styles/makeStyles';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Theme';
import logo from '../../assets/logo.svg';

function Header(props) {
  const ElevationScroll = props => {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  };

  // 작동 안함
  const theme = Theme;
  const useStyles = makeStyles(theme => ({
    root: {
      toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
      },
      logo: {
        height: '7em',
      },
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ElevationScroll>
          <AppBar position="fixed">
            <Toolbar disableGutters>
              <img alt="company logo" className={classes.logo} src={logo} />
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.root} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Header;
