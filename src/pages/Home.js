import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ShipItem } from '../components';
import { shipsItems } from '../utils/shipsItemsData';
import useWindowPosition from '../hooks/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="main">
      {shipsItems.map((item, index) => (
        <ShipItem key={index} item={item} checked={checked} />
      ))}
    </div>
  );
};

export default Home;
