import axios from 'axios';

export const baseURL: string = 'https://api.twelvedata.com/' || '';

export const fetcher = axios.create({
  baseURL,
  timeout: 4000,
  params: {
    apikey: process.env.TWELVE_DATA_API_KEY,
  },
});
