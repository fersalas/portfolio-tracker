import { AxiosResponse } from 'axios';
import { fetcher } from './twelveData';

export type GetSymbolTimeSeriesParams = {
  symbol: string;
  interval?: string;
  outputsize?: number;
};

export const getSymbolTimeSeries: (
  params: GetSymbolTimeSeriesParams,
) => Promise<AxiosResponse> = ({ symbol }) =>
  fetcher.get('/time_series', {
    params: {
      symbol,
      interval: '1month',
      outputsize: 10,
    },
  });
