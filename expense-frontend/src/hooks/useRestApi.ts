import { UseQueryResult, useQuery, QueryKey, QueryFunction } from '@tanstack/react-query';

type RestApiOptions = {
  enabled?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
};

type RestApiResult<T> = UseQueryResult<T, Error> & {
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
};

const useRestApi = <T>(endpoint: string, options: RestApiOptions = {}): RestApiResult<T> => {
  const queryKey: QueryKey = ['restApi', endpoint];

  const fetcher = async (): Promise<T> => {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const queryConfig: RestApiOptions & {
    queryKey: QueryKey;
    queryFn: QueryFunction<T>;
  } = {
    ...options,
    queryKey,
    queryFn: fetcher,
  };

  const queryResult = useQuery<T, Error>(queryConfig);

  return {
    ...queryResult,
    onSuccess: options.onSuccess,
    onError: options.onError,
  };
};

export default useRestApi;