import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Header from './Header';
import MainWrapper from './MainWrapper';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
      <Header />
      <MainWrapper />
    </div>
  );
};

export default App;
