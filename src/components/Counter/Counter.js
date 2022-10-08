import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 className="text-primary">Counter</h1>
      <div className="border my-10 py-10 rounded border-primary">
        <button
          onClick={handleIncrease}
          className="border  rounded border-primary px-6 mx-10 hover:bg-blue-500 hover:rounded hover:border-none hover:font-bold hover:rotate-12"
        >
          +
        </button>
        <span className="  text-red-400  ">Count : {count}</span>
        <button
          onClick={handleDecrease}
          className="border  rounded border-primary px-6 mx-10 hover:bg-blue-500 hover:rounded hover:border-none  hover:font-bold hover:-rotate-12"
          disabled={count === 0 ? true : false}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
