import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import loader from '../../assets/logo.png';

const useStyles = makeStyles(() => ({
  loading: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 'calc(50% - 20px)',
    margin: 'auto',
    height: '100px',
    width: '40px',
    '& img': {
      position: 'absolute',
      height: '100px',
      width: 'auto',
      top: 40,
      bottom: 0,
      left: 24,
      right: 0,
      margin: 'auto',
    },
  },
}));

const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <img src={loader} alt="loader" />
      <CircularProgress color="primary" size={150} />
    </div>
  );
};

export default Spinner;
