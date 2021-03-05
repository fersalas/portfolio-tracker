import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MainWrapper: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Toolbar />
      Main Content
    </main>
  );
};

export default MainWrapper;
