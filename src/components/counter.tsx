import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="mb-4 font-light md:mb-0 md:ml-8">
      <button onClick={() => setCount(count + 1)} type="button">
        +
      </button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)} type="button">
        -
      </button>
    </div>
  );
}

export default Counter;
