import React from "react";
import useCounter from "../hooks/useCounter";

const CounterTwo = () => {
  const [count, increment, decrement, reset] = useCounter(20, 30);
  return (
    <div>
      <h3>Counter Two:{count}</h3>
      <button
        onClick={() => {
          increment(); //if we give increment() it will give Nan we correct that by if else or increment(20)
        }}
      >
        increment
      </button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterTwo;
