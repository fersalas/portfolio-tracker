import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

export interface UseFetchReturnI {
  response: null | AxiosResponse;
  error: null | Error | AxiosError;
  isLoading: boolean;
}

export function useFetch(
  // eslint-disable-next-line @typescript-eslint/ban-types
  fetcher: Function,
  // eslint-disable-next-line @typescript-eslint/ban-types
  params: Object,
): UseFetchReturnI {
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
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [fetcher]);

  return { response, error, isLoading };
}
