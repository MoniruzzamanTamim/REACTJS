import React, { useState } from 'react';

function Function() {
  const [count, setCount] = useState(0); // initial value

  const updateValue = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <div>Function</div>
      <button onClick={updateValue}>
        Count {count}
      </button>
    </>
  );
}

export default Function;
