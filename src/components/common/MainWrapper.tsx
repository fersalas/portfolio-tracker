import React, { useMemo } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { useFetch } from '../../hooks';
import {
  getSymbolTimeSeries,
  GetSymbolTimeSeriesParams,
} from '../../apis/twelveData';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MainWrapper: React.FC = () => {
  const { response, error, isLoading } = useFetch(
    getSymbolTimeSeries,
    {
      symbol: 'IEMA',
    } as GetSymbolTimeSeriesParams,
  );

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Toolbar />
      {isLoading ? 'Loading..' : JSON.stringify(response)}
    </main>
  );
};

export default MainWrapper;
