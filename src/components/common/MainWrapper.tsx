import React, { useMemo } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { useFetch } from '../../hooks';
import {
  getSymbolIntraday,
  getSymbolIntradayParams,
} from '../../apis/alphaVantage';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MainWrapper: React.FC = () => {
  const { response, error, isLoading } = useFetch(getSymbolIntraday, {
    symbol: 'IBM',
  } as getSymbolIntradayParams);

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Toolbar />
      {isLoading ? 'Loading..' : JSON.stringify(response)}
    </main>
  );
};

export default MainWrapper;
