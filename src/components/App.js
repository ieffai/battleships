import { CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, AppRouter, Footer, Spinner } from '.';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function App() {
  const [loading, setLoading] = React.useState(false);

  const classes = useStyles();

  if (loading) {
    return <Spinner />;
  }
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
