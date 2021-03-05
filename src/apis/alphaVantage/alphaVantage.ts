import axios from 'axios';

export const fetcher = axios.create({
  timeout: 4000,
  params: {
    apikey: process.env.ALPHAVANTAGE_API_KEY,
  },
});

export const baseURL: string =
  'https://www.alphavantage.co/query' || '';
