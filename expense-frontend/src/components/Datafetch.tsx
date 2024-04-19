import React from 'react';
import useRestApi from '../hooks/useRestApi';

type Data = {
  message: string
  name: string;
  value: number;
  id: number;
    url: string;
    height: number;
    width: number;
    code: number;
    type: string;
};

type RestApiResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: Error | null;
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
};

const Datafetch = () => {
  const { data, isLoading, error }: RestApiResult<Data> = useRestApi<Data>('http://localhost:3000/info',);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) { 
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
  {(JSON.stringify(data))}

    </div>
  );
  
};

export default Datafetch;
