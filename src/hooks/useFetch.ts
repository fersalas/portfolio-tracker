import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

export interface UseFetchReturnI {
  response: null | AxiosResponse;
  error: null | Error | AxiosError;
  isLoading: boolean;
}

export function useFetch(fetcher: any, params: any): UseFetchReturnI {
  const [response, setResponse] = useState<null | AxiosResponse>(
    null,
  );
  const [error, setError] = useState<Error | AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetcher(params);
        setResponse(await response);
        setIsLoading(false);
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [fetcher]);

  return { response, error, isLoading };
}
