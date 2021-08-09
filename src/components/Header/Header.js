import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import React, { useEffect } from 'react';
import SortIcon from '@material-ui/icons/Sort';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';
import { Link as Scroll } from 'react-scroll';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarTitle: {
    flexGrow: '1',
    fontWeight: 'bold',
    '& span': {
      color: '#5AFF3D',
    },
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
    fontWeight: 'bold',
    '& span': {
      color: '#5AFF3D',
    },
  },
  container: {
    textAlign: 'center',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h2 className={classes.appbarTitle}>
            Battle.<span className>Ships</span>
          </h2>
          <IconButton>
            <AccountCircleIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedSize={20}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            {' '}
            Welcome to <br />
            <span>the WAR</span>
          </h1>
          <Scroll to={'main'}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
