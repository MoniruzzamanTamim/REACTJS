import React from 'react';
import useApi from './CallApi';

function UseApi() {
  const { isVallue, isError, isLoading } = useApi(
    'https://jsonplaceholder.typicode.com/albums'
  );

  return (
    <>
      {isLoading && <h1>Page Loading for API Calling...</h1>}

      {isVallue &&
        isVallue.map((value) => (
          <div key={value.id}>
            <h1>{value.id}</h1>
            <h1>{value.title}</h1>
          </div>
        ))}

      {isError && <h1>Please Check Configuration</h1>}
    </>
  );
}

export default UseApi;
