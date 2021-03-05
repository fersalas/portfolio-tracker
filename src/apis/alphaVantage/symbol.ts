import { AxiosResponse } from 'axios';
import { fetcher, baseURL } from './alphaVantage';

const TIME_SERIES_DAILY = 'TIME_SERIES_DAILY';
const TIME_SERIES_INTRADAY = 'TIME_SERIES_INTRADAY';

export type getSymbolDailyParams = {
  symbol: string;
};

export const getSymbolDaily: (
  params: getSymbolDailyParams,
) => Promise<AxiosResponse> = ({ symbol }) =>
  fetcher.get(baseURL, {
    params: {
      function: TIME_SERIES_DAILY,
      symbol,
    },
  });

export type getSymbolIntradayParams = {
  symbol: string;
};

export const getSymbolIntraday: (
  params: getSymbolIntradayParams,
) => Promise<AxiosResponse> = ({ symbol }) =>
  fetcher.get(baseURL, {
    params: {
      function: TIME_SERIES_INTRADAY,
      interval: '60min',
      symbol,
    },
  });
